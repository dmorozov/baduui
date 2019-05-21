package com.badu.server;

import com.badu.utils.MimeUtils;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaderValues;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpResponse;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpUtil;
import io.netty.util.CharsetUtil;

import java.io.File;
import java.io.IOException;
import java.io.Serializable;
import java.net.JarURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.TimeZone;
import java.util.jar.JarEntry;

import static io.netty.handler.codec.http.HttpResponseStatus.FOUND;
import static io.netty.handler.codec.http.HttpResponseStatus.NOT_MODIFIED;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_0;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_1;

public abstract class BaseHttpHandler extends SimpleChannelInboundHandler<HttpRequest> {

   public static final String HTTP_DATE_FORMAT = "EEE, dd MMM yyyy HH:mm:ss zzz";
   public static final String HTTP_DATE_GMT_TIMEZONE = "GMT";
   public static final int HTTP_CACHE_SECONDS = 60;
   private static final String URL_JAR_PREFIX = "jar:file:";

   private HttpRequest request;

   @Override
   public void channelRead0(ChannelHandlerContext ctx, HttpRequest request) throws Exception {
      this.request = request;
   }

   protected HttpRequest getRequest() {
      return request;
   }

   protected void reset() {
      request = null;
   }

   protected void sendRedirect(ChannelHandlerContext ctx, String newUri) {
      FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1, FOUND);
      response.headers().set(HttpHeaderNames.LOCATION, newUri);

      this.sendAndCleanupConnection(ctx, response);
   }

   protected void sendError(ChannelHandlerContext ctx, HttpResponseStatus status) {
      FullHttpResponse response = new DefaultFullHttpResponse(
              HTTP_1_1, status, Unpooled.copiedBuffer("Failure: " + status + "\r\n", CharsetUtil.UTF_8));
      response.headers().set(HttpHeaderNames.CONTENT_TYPE, "text/plain; charset=UTF-8");

      this.sendAndCleanupConnection(ctx, response);
   }

   /**
    * When file timestamp is the same as what the browser is sending up, send a "304 Not Modified"
    *
    * @param ctx
    *            Context
    */
   protected void sendNotModified(ChannelHandlerContext ctx) {
      FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1, NOT_MODIFIED);
      setDateHeader(response);

      this.sendAndCleanupConnection(ctx, response);
   }

   /**
    * If Keep-Alive is disabled, attaches "Connection: close" header to the response
    * and closes the connection after the response being sent.
    */
   protected void sendAndCleanupConnection(ChannelHandlerContext ctx, FullHttpResponse response) {
      final HttpRequest request = this.request;
      final boolean keepAlive = HttpUtil.isKeepAlive(request);
      HttpUtil.setContentLength(response, response.content().readableBytes());
      if (!keepAlive) {
         // We're going to close the connection as soon as the response is sent,
         // so we should also make it clear for the client.
         response.headers().set(HttpHeaderNames.CONNECTION, HttpHeaderValues.CLOSE);
      } else if (request.protocolVersion().equals(HTTP_1_0)) {
         response.headers().set(HttpHeaderNames.CONNECTION, HttpHeaderValues.KEEP_ALIVE);
      }

      ChannelFuture flushPromise = ctx.writeAndFlush(response);

      if (!keepAlive) {
         // Close the connection as soon as the response is sent.
         flushPromise.addListener(ChannelFutureListener.CLOSE);
      }
   }

   /**
    * Sets the Date header for the HTTP response
    *
    * @param response
    *            HTTP response
    */
   protected static void setDateHeader(FullHttpResponse response) {
      SimpleDateFormat dateFormatter = new SimpleDateFormat(HTTP_DATE_FORMAT, Locale.US);
      dateFormatter.setTimeZone(TimeZone.getTimeZone(HTTP_DATE_GMT_TIMEZONE));

      Calendar time = new GregorianCalendar();
      response.headers().set(HttpHeaderNames.DATE, dateFormatter.format(time.getTime()));
   }

   /**
    * Sets the Date and Cache headers for the HTTP Response
    *
    * @param response
    *            HTTP response
    * @param fileMetadata
    *            file to extract content type
    */
   protected static void setDateAndCacheHeaders(HttpResponse response, final FileMetadata fileMetadata) {
      SimpleDateFormat dateFormatter = new SimpleDateFormat(HTTP_DATE_FORMAT, Locale.US);
      dateFormatter.setTimeZone(TimeZone.getTimeZone(HTTP_DATE_GMT_TIMEZONE));

      // Date header
      Calendar time = new GregorianCalendar();
      response.headers().set(HttpHeaderNames.DATE, dateFormatter.format(time.getTime()));

      // Add cache headers
      time.add(Calendar.SECOND, HTTP_CACHE_SECONDS);
      response.headers().set(HttpHeaderNames.EXPIRES, dateFormatter.format(time.getTime()));
      response.headers().set(HttpHeaderNames.CACHE_CONTROL, "private, max-age=" + HTTP_CACHE_SECONDS);
      response.headers().set(
              HttpHeaderNames.LAST_MODIFIED, dateFormatter.format(new Date(fileMetadata.getLastModified())));
   }

   /**
    * Sets the content type header for the HTTP Response
    *
    * @param response
    *            HTTP response
    * @param fileMetadata
    *            file to extract content type
    */
   protected static void setContentTypeHeader(HttpResponse response, final FileMetadata fileMetadata) {
      response.headers().set(HttpHeaderNames.CONTENT_TYPE, MimeUtils.resolveMimeType(fileMetadata.getFileName()));
   }

   protected FileMetadata getFileMetadata(URL url) throws URISyntaxException, IOException {
      if (url.toString().startsWith(URL_JAR_PREFIX)) {
         URLConnection urlConnection = url.openConnection();
         if (urlConnection instanceof JarURLConnection) {
            JarURLConnection conn = (JarURLConnection) urlConnection;
            JarEntry jarEntry = conn.getJarEntry();
            if (jarEntry != null) {
               return new FileMetadata(jarEntry.getName(), jarEntry.getSize(), jarEntry.getTime());
            }
         }

      }
      else {
         File resourceAsFile = new File(url.toURI());
         if (resourceAsFile.exists()) {
            return new FileMetadata(resourceAsFile.getName(), resourceAsFile.length(), resourceAsFile.lastModified());
         }
      }

      return null;
   }

   protected static class FileMetadata implements Serializable {

      private static final long serialVersionUID = 3951785483352012705L;

      private long fileSize;
      private long lastModified;
      private String fileName;

      public FileMetadata(String fileName, long fileSize, long lastModified) {
         this.fileName = fileName;
         this.fileSize = fileSize;
         this.lastModified = lastModified;
      }

      /**
       * ---@produce Get the current value of fileSize.
       *
       * @return file size
       */
      public long getFileSize() {
         return fileSize;
      }

      /**
       * ---@produce Set the current value of fileSize.
       *
       * @param fileSize
       */
      public void setFileSize(long fileSize) {
         this.fileSize = fileSize;
      }

      /**
       * ---@produce Get the current value of lastModified.
       *
       * @return lastModified
       */
      public long getLastModified() {
         return lastModified;
      }

      /**
       * ---@produce Set the current value of lastModified.
       *
       * @param lastModified
       */
      public void setLastModified(long lastModified) {
         this.lastModified = lastModified;
      }

      /**
       * ---@produce Get the current value of fileName.
       *
       * @return
       */
      public String getFileName() {
         return fileName;
      }

      /**
       * ---@produce Set the current value of fileName.
       *
       * @param fileName
       */
      public void setFileName(String fileName) {
         this.fileName = fileName;
      }
   }
}
