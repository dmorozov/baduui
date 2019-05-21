package com.badu.server;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.router.Router;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;

/**
 * Server that accept the path of a file an echo back its content.
 */
public final class Server {

    // Use the same default port with the telnet example so that we can use the telnet client example to access it.
    static final int PORT = Integer.parseInt(System.getProperty("port", "9090"));

    private static final Router<SimpleChannelInboundHandler<HttpRequest>> router = new Router<SimpleChannelInboundHandler<HttpRequest>>()
            .GET      ("/api",          new HttpHelloWorldServerHandler())
            .POST     ("/upload",       new HttpUploadServerHandler());

    public static void main(String[] args) throws Exception {
        // Configure the server.
        EventLoopGroup bossGroup = new NioEventLoopGroup(1);
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap b = new ServerBootstrap();
            b.group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new HttpStaticFileServerInitializer(router));

            Channel ch = b.bind(PORT).sync().channel();

            System.err.println("Open your web browser and navigate to http://127.0.0.1:" + PORT + '/');

            ch.closeFuture().sync();
        }
        finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}
