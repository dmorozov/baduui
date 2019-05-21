package com.badu.server;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.BadClientSilencer;
import io.netty.handler.codec.http.HttpContentCompressor;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.router.Router;
import io.netty.handler.stream.ChunkedWriteHandler;

public class HttpStaticFileServerInitializer extends ChannelInitializer<SocketChannel> {

   private static final int DEFAULT_REQUEST_MAX_SIZE = 10 * 1024 * 1024; // 10M max size

   private final HttpRouterServerHandler handler;
   private final BadClientSilencer       badClientSilencer = new BadClientSilencer();

   public HttpStaticFileServerInitializer(Router<SimpleChannelInboundHandler<HttpRequest>> router) {
      handler = new HttpRouterServerHandler(router);
   }

   @Override
   public void initChannel(SocketChannel ch) {
      ChannelPipeline pipeline = ch.pipeline();
      pipeline.addLast(new HttpServerCodec());
      pipeline.addLast(new HttpObjectAggregator(DEFAULT_REQUEST_MAX_SIZE));
      pipeline.addLast(new ChunkedWriteHandler());

      pipeline.addLast(handler);

      // Remove the following line if you don't want automatic content compression.
      //pipeline.addLast(new HttpContentCompressor());

      pipeline.addLast(badClientSilencer);
   }
}
