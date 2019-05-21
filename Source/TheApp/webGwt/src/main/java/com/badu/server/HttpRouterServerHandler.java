package com.badu.server;

import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpUtil;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http.router.RouteResult;
import io.netty.handler.codec.http.router.Router;
import io.netty.util.internal.TypeParameterMatcher;

@ChannelHandler.Sharable
public class HttpRouterServerHandler extends ChannelInboundHandlerAdapter /*SimpleChannelInboundHandler<HttpRequest>*/ {
   // For simplicity of this example, route targets are just simple strings.
   // But you can make them classes, and here once you get a target class,
   // you can create an instance of it and dispatch the request to the instance etc.
   private final Router<SimpleChannelInboundHandler<HttpRequest>> router;
   private final TypeParameterMatcher matcher;
   private final SimpleChannelInboundHandler<HttpRequest> defaultHandler;

   HttpRouterServerHandler(Router<SimpleChannelInboundHandler<HttpRequest>> router) {
      this.router = router;
      this.matcher = TypeParameterMatcher.get(HttpRequest.class);
      this.defaultHandler = new HttpStaticFileServerHandler();
   }

   @Override
   public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
      if (!matcher.match(msg)) {
         ctx.fireChannelRead(msg);
      }
      else {
         final HttpRequest req = (HttpRequest) msg;
         if (HttpUtil.is100ContinueExpected(req)) {
            ctx.writeAndFlush(new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.CONTINUE));
            return;
         }

         final SimpleChannelInboundHandler<HttpRequest> route = resolveHandler(req);
         route.channelRead(ctx, msg);
      }
   }

   private SimpleChannelInboundHandler<HttpRequest> resolveHandler(HttpRequest req) {
      final RouteResult<SimpleChannelInboundHandler<HttpRequest>> routeResult = router.route(req.method(), req.uri());
      if (null != routeResult) {
         final String content =
                 "router: \n" + router + "\n" +
                         "req: " + req + "\n\n" +
                         "routeResult: \n" +
                         "target: " + routeResult.target() + "\n" +
                         "pathParams: " + routeResult.pathParams() + "\n" +
                         "queryParams: " + routeResult.queryParams() + "\n\n" +
                         "allowedMethods: " + router.allowedMethods(req.uri());

         System.out.println(content);
         return routeResult.target();
      }

      return defaultHandler;
   }
}
