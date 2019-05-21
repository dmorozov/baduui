package com.badu.server;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpContent;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpUtil;
import io.netty.handler.codec.http.HttpHeaderValues;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http.LastHttpContent;
import io.netty.handler.codec.http.QueryStringDecoder;
import io.netty.handler.codec.http.cookie.Cookie;
import io.netty.handler.codec.http.cookie.ServerCookieDecoder;
import io.netty.handler.codec.http.cookie.ServerCookieEncoder;
import io.netty.handler.codec.http.multipart.Attribute;
import io.netty.handler.codec.http.multipart.DefaultHttpDataFactory;
import io.netty.handler.codec.http.multipart.DiskAttribute;
import io.netty.handler.codec.http.multipart.DiskFileUpload;
import io.netty.handler.codec.http.multipart.FileUpload;
import io.netty.handler.codec.http.multipart.HttpData;
import io.netty.handler.codec.http.multipart.HttpDataFactory;
import io.netty.handler.codec.http.multipart.HttpPostRequestDecoder;
import io.netty.handler.codec.http.multipart.InterfaceHttpData;
import io.netty.util.CharsetUtil;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import static io.netty.handler.codec.http.HttpHeaderNames.CONTENT_LENGTH;
import static io.netty.handler.codec.http.HttpResponseStatus.METHOD_NOT_ALLOWED;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_1;

public class HttpUploadServerHandler extends BaseHttpHandler {

   private static final Logger logger = Logger.getLogger(HttpUploadServerHandler.class.getName());

   private HttpData partialContent;

   private static final HttpDataFactory factory =
           new DefaultHttpDataFactory(DefaultHttpDataFactory.MINSIZE); // Disk if size exceed

   private HttpPostRequestDecoder decoder;

   private static final File UPLOAD_FOLDER = Paths.get(System.getProperty("user.home"), "Temp").toFile();

   static {
      DiskFileUpload.deleteOnExitTemporaryFile = true; // should delete file
      // on exit (in normal
      // exit)
      DiskFileUpload.baseDirectory = null; // system temp directory
      DiskAttribute.deleteOnExitTemporaryFile = true; // should delete file on
      // exit (in normal exit)
      DiskAttribute.baseDirectory = null; // system temp directory

      UPLOAD_FOLDER.mkdirs();
   }

   @Override
   public void channelInactive(ChannelHandlerContext ctx) throws Exception {
      if (decoder != null) {
         try {
            decoder.cleanFiles();
         }
         catch (Exception e) {
            // do nothing
         }
      }
   }

   @Override
   public void channelRead0(ChannelHandlerContext ctx, HttpRequest request) throws Exception {
      super.channelRead0(ctx, request);

      if (!HttpMethod.POST.equals(request.method())) {
         this.sendError(ctx, METHOD_NOT_ALLOWED);
         return;
      }

      QueryStringDecoder decoderQuery = new QueryStringDecoder(request.uri());
      Map<String, List<String>> uriAttributes = decoderQuery.parameters();
      final List<String> names = uriAttributes.get("fileName");
      final String fileName = null != names && names.size() > 0 ? names.get(0) : "defaultFileName.dat";

      if (request instanceof HttpContent) {
         final HttpContent chunk = (HttpContent) request;
         // directStreamDataFromRequest(ctx, chunk, fileName);
         decodeDataFromRequest(ctx, request, chunk, fileName);
      }
      else {
         writeResponse(ctx.channel());
      }
   }

   protected void decodeDataFromRequest(ChannelHandlerContext ctx, HttpRequest request, final HttpContent chunk, final String fileName) {
      try {
         decoder = new HttpPostRequestDecoder(factory, request);
         decoder.setDiscardThreshold(0);
      } catch (HttpPostRequestDecoder.ErrorDataDecoderException e1) {
         e1.printStackTrace();
         writeResponse(ctx.channel(), true);
         return;
      }

      boolean readingChunks = HttpUtil.isTransferEncodingChunked(request);
      System.err.println("Is Chunked: " + readingChunks + ", IsMultipart: " + decoder.isMultipart());

      try {
         decoder.offer(chunk);
      } catch (HttpPostRequestDecoder.ErrorDataDecoderException e1) {
         e1.printStackTrace();
         writeResponse(ctx.channel(), true);
         return;
      }

      // reading chunk by chunk (minimize memory usage due to Factory)
      try {
         readHttpDataChunkByChunk(fileName);
      }
      catch (HttpPostRequestDecoder.EndOfDataDecoderException e) {
         // do nothing. end of data
      }

      // example of reading only if at the end
      if (chunk instanceof LastHttpContent) {
         writeResponse(ctx.channel());
         reset();
      }
   }

   protected void directStreamDataFromRequest(ChannelHandlerContext ctx, final HttpContent chunk, final String fileName) {
      final File tempFile = new File(UPLOAD_FOLDER, fileName);
      if (tempFile.exists()) tempFile.delete();

      ByteBuffer buffer = chunk.content().nioBuffer();
      try (final FileChannel fileChannel = new FileOutputStream(tempFile).getChannel()) {
         while (buffer.hasRemaining()) {
            // Write the ByteBuffer content to the file
            fileChannel.write(buffer);
         }
      }
      catch (Exception ex) {
         ex.printStackTrace();
      }

      if (tempFile.exists()) {
         handleNewUpload(tempFile);
      }

      writeResponse(ctx.channel());
      reset();
   }

   @Override
   protected void reset() {
      super.reset();

      // destroy the decoder to release all resources
      if (null != decoder) {
         decoder.destroy();
         decoder = null;
      }
   }

   /**
    * Example of reading request by chunk and getting values from chunk to chunk
    */
   private void readHttpDataChunkByChunk(final String fileName) throws HttpPostRequestDecoder.EndOfDataDecoderException {
      while (decoder.hasNext()) {
         InterfaceHttpData data = decoder.next();
         if ( null != data) {
            // check if current HttpData is a FileUpload and previously set as partial
            if (partialContent == data) {
               logger.info(" 100% (FinalSize: " + partialContent.length() + ")");
               partialContent = null;
            }
            try {
               // new value
               processChunk(fileName, data);
            }
            catch (IOException e) {
               e.printStackTrace();
            }
            finally {
               data.release();
            }
         }
      }
   }

   private void processChunk(final String fileName, InterfaceHttpData data) throws IOException {
      switch (data.getHttpDataType()) {
      case Attribute: {
         Attribute attribute = (Attribute) data;
         String name = attribute.getName();
         String value = attribute.getValue();
         System.err.println("Attribute parsed - " + name + " : " + value);
         break;
      }
      case FileUpload: {
         FileUpload fileUpload = (FileUpload) data;
         if (fileUpload.isCompleted()) {
            logger.info("File name: " + fileUpload.getFilename() + ", length - " + fileUpload.length());
            logger.info("File isInMemory - " + fileUpload.isInMemory());
            logger.info("File rename to ...");

            final File tempFile = new File(UPLOAD_FOLDER, fileName);
            fileUpload.renameTo(tempFile);
            handleNewUpload(tempFile);
            decoder.removeHttpDataFromClean(fileUpload);
         }
         else {
            logger.info("File to be continued!");
         }
         break;
      }
      }
   }

   private void handleNewUpload(File filePath) {
      System.err.println("New file uploaded: " + filePath.getAbsolutePath() + ", size: " + filePath.length());
   }

   private void writeResponse(Channel channel) {
      writeResponse(channel, false);
   }

   private void writeResponse(Channel channel, boolean forceClose) {
      final StringBuilder responseContent = new StringBuilder();
      responseContent.setLength(0);
      responseContent
              .append("{")
              .append("\"status\": \"").append("SUCCESS").append("\"")
              .append("}");

      // Convert the response content to a ChannelBuffer.
      ByteBuf buf = Unpooled.copiedBuffer(responseContent.toString(), CharsetUtil.UTF_8);
      responseContent.setLength(0);

      // Decide whether to close the connection or not.
      boolean keepAlive = HttpUtil.isKeepAlive(getRequest()) && !forceClose;

      // Build the response object.
      FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1, OK, buf);
      response.headers().set(HttpHeaderNames.CONTENT_TYPE, "text/plain; charset=UTF-8");
      response.headers().setInt(CONTENT_LENGTH, buf.readableBytes());

      if (!keepAlive) {
         response.headers().set(HttpHeaderNames.CONNECTION, HttpHeaderValues.CLOSE);
      } else if (getRequest().protocolVersion().equals(HttpVersion.HTTP_1_0)) {
         response.headers().set(HttpHeaderNames.CONNECTION, HttpHeaderValues.KEEP_ALIVE);
      }

      Set<Cookie> cookies;
      String value = getRequest().headers().get(HttpHeaderNames.COOKIE);
      if (value == null) {
         cookies = Collections.emptySet();
      } else {
         cookies = ServerCookieDecoder.STRICT.decode(value);
      }
      if (!cookies.isEmpty()) {
         // Reset the cookies if necessary.
         for (Cookie cookie : cookies) {
            response.headers().add(HttpHeaderNames.SET_COOKIE, ServerCookieEncoder.STRICT.encode(cookie));
         }
      }
      // Write the response.
      ChannelFuture future = channel.writeAndFlush(response);
      // Close the connection after the write operation is done if necessary.
      if (!keepAlive) {
         future.addListener(ChannelFutureListener.CLOSE);
      }
   }

   @Override
   public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
      cause.printStackTrace();

      final StringBuilder responseContent = new StringBuilder();
      responseContent.setLength(0);
      responseContent
              .append("{")
              .append("\"status\": \"").append("FAILED").append("\"")
              .append("}");

      ctx.channel().close();
   }
}
