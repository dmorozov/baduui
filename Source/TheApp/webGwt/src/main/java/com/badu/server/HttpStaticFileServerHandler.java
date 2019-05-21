package com.badu.server;

import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelProgressiveFuture;
import io.netty.channel.ChannelProgressiveFutureListener;
import io.netty.handler.codec.http.DefaultHttpResponse;
import io.netty.handler.codec.http.HttpChunkedInput;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpUtil;
import io.netty.handler.codec.http.HttpHeaderValues;
import io.netty.handler.codec.http.HttpResponse;
import io.netty.handler.stream.ChunkedStream;

import java.io.File;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.regex.Pattern;

import static io.netty.handler.codec.http.HttpMethod.*;
import static io.netty.handler.codec.http.HttpResponseStatus.*;
import static io.netty.handler.codec.http.HttpVersion.*;

/**
 * A simple handler that serves incoming HTTP requests to send their respective
 * HTTP responses.  It also implements {@code 'If-Modified-Since'} header to
 * take advantage of browser cache, as described in
 * <a href="http://tools.ietf.org/html/rfc2616#section-14.25">RFC 2616</a>.
 *
 * <h3>How Browser Caching Works</h3>
 *
 * Web browser caching works with HTTP headers as illustrated by the following
 * sample:
 * <ol>
 * <li>Request #1 returns the content of {@code /file1.txt}.</li>
 * <li>Contents of {@code /file1.txt} is cached by the browser.</li>
 * <li>Request #2 for {@code /file1.txt} does not return the contents of the
 *     file again. Rather, a 304 Not Modified is returned. This tells the
 *     browser to use the contents stored in its cache.</li>
 * <li>The server knows the file has not been modified because the
 *     {@code If-Modified-Since} date is the same as the file's last
 *     modified date.</li>
 * </ol>
 *
 * <pre>
 * Request #1 Headers
 * ===================
 * GET /file1.txt HTTP/1.1
 *
 * Response #1 Headers
 * ===================
 * HTTP/1.1 200 OK
 * Date:               Tue, 01 Mar 2011 22:44:26 GMT
 * Last-Modified:      Wed, 30 Jun 2010 21:36:48 GMT
 * Expires:            Tue, 01 Mar 2012 22:44:26 GMT
 * Cache-Control:      private, max-age=31536000
 *
 * Request #2 Headers
 * ===================
 * GET /file1.txt HTTP/1.1
 * If-Modified-Since:  Wed, 30 Jun 2010 21:36:48 GMT
 *
 * Response #2 Headers
 * ===================
 * HTTP/1.1 304 Not Modified
 * Date:               Tue, 01 Mar 2011 22:44:28 GMT
 *
 * </pre>
 */
public class HttpStaticFileServerHandler extends BaseHttpHandler {

   private static final String INDEX_PAGE = "index_j2cl.html";
   private static final String BASE_FOLDER = "public";

   @Override
   public void channelRead0(ChannelHandlerContext ctx, HttpRequest request) throws Exception {
      super.channelRead0(ctx, request);

      if (!request.decoderResult().isSuccess()) {
         sendError(ctx, BAD_REQUEST);
         return;
      }

      if (!GET.equals(request.method())) {
         this.sendError(ctx, METHOD_NOT_ALLOWED);
         return;
      }

      final boolean keepAlive = HttpUtil.isKeepAlive(request);
      final String uri = request.uri();
      final String path = sanitizeUri(uri);
      if (path == null || path.length() == 0) {
         sendRedirect(ctx, File.separator + INDEX_PAGE);
         return;
      }

      final URL url = HttpStaticFileServerHandler.class.getClassLoader().getResource(path);
      final FileMetadata metadata = null != url ? getFileMetadata(url) : null;
      if (null == metadata) {
         sendError(ctx, FORBIDDEN);
         return;
      }

      // Cache Validation
      String ifModifiedSince = request.headers().get(HttpHeaderNames.IF_MODIFIED_SINCE);
      if (ifModifiedSince != null && !ifModifiedSince.isEmpty()) {
         SimpleDateFormat dateFormatter = new SimpleDateFormat(HTTP_DATE_FORMAT, Locale.US);
         Date ifModifiedSinceDate = dateFormatter.parse(ifModifiedSince);

         // Only compare up to the second because the datetime format we send to the client
         // does not have milliseconds
         long ifModifiedSinceDateSeconds = ifModifiedSinceDate.getTime() / 1000;
         long fileLastModifiedSeconds = metadata.getLastModified() / 1000;
         if (ifModifiedSinceDateSeconds == fileLastModifiedSeconds) {
            this.sendNotModified(ctx);
            return;
         }
      }

      URLConnection conn = url.openConnection();
      final long fileLength = conn.getContentLength();

      HttpResponse response = new DefaultHttpResponse(HTTP_1_1, OK);
      HttpUtil.setContentLength(response, fileLength);
      setContentTypeHeader(response, metadata);
      setDateAndCacheHeaders(response, metadata);

      if (!keepAlive) {
         response.headers().set(HttpHeaderNames.CONNECTION, HttpHeaderValues.CLOSE);
      } else if (request.protocolVersion().equals(HTTP_1_0)) {
         response.headers().set(HttpHeaderNames.CONNECTION, HttpHeaderValues.KEEP_ALIVE);
      }

      // Write the initial line and the header.
      ctx.write(response);

      // Write the content.
      ChannelFuture sendFileFuture;
      ChannelFuture lastContentFuture;

      final InputStream is = conn.getInputStream();
      sendFileFuture = ctx.writeAndFlush(new HttpChunkedInput(new ChunkedStream(is)), ctx.newProgressivePromise());
      // HttpChunkedInput will write the end marker (LastHttpContent) for us.
      lastContentFuture = sendFileFuture;

      sendFileFuture.addListener(new ChannelProgressiveFutureListener() {
         @Override
         public void operationProgressed(ChannelProgressiveFuture future, long progress, long total) {
            if (total < 0) { // total unknown
               System.err.println(future.channel() + " Transfer progress: " + progress + ", path: " + path);
            } else {
               System.err.println(future.channel() + " Transfer progress: " + progress + " / " + total + ", path: " + path);
            }
         }

         @Override
         public void operationComplete(ChannelProgressiveFuture future) {
            System.err.println(future.channel() + " Transfer complete for " + path);
            try {
               is.close();
            }
            catch (Exception e) {
               e.printStackTrace();
            }
         }
      });

      // Decide whether to close the connection or not.
      if (!keepAlive) {
         // Close the connection when the whole content is written out.
         lastContentFuture.addListener(ChannelFutureListener.CLOSE);
      }

      reset();
   }

   @Override
   public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
      cause.printStackTrace();
      if (ctx.channel().isActive()) {
         sendError(ctx, INTERNAL_SERVER_ERROR);
      }
   }

   private static final Pattern INSECURE_URI = Pattern.compile(".*[<>&\"].*");

   private static String sanitizeUri(String uri) {
      // Decode the path.
      try {
         uri = URLDecoder.decode(uri, "UTF-8");
      } catch (UnsupportedEncodingException e) {
         throw new Error(e);
      }

      if (uri.isEmpty() || uri.charAt(0) != '/') {
         return null;
      }

      // Convert file separators.
      uri = uri.replace('/', File.separatorChar);

      // Simplistic dumb security check.
      // You will have to do something serious in the production environment.
      if (uri.contains(File.separator + '.') ||
              uri.contains('.' + File.separator) ||
              uri.charAt(0) == '.' || uri.charAt(uri.length() - 1) == '.' ||
              INSECURE_URI.matcher(uri).matches()) {
         return null;
      }

      if (uri.startsWith("/") || uri.startsWith("\\")) {
         uri = uri.substring(1);
      }

      return uri.length() > 0 ? BASE_FOLDER + File.separator + uri : null;
   }
}
