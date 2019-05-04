package com.badu.ui.platforms.web;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponentFactory;
import com.badu.ui.core.ResourceManager;
import com.badu.ui.core.ViewportManager;
import com.badu.ui.core.utils.PlatformLogger;
import com.badu.ui.core.xml.XmlParser;
import com.badu.ui.platforms.web.utils.WebLogger;

public class WebUIPlatform extends BUIPlatform {

   private final WebPlatformComponentFactory componentFactory;
   private final WebLogger LOG = new WebLogger();
   private final WebResourceManager resourceManager;
   private final ViewportManager viewportManager;
   private final XmlParser xmlParser;

   public WebUIPlatform() {
      componentFactory = new WebPlatformComponentFactory();
      resourceManager = new WebResourceManager();
      viewportManager = new WebViewportManager();
      xmlParser = new WebXmlParser();
   }

   @Override public PlatformComponentFactory componentFactory() {
      return componentFactory;
   }

   @Override public PlatformLogger log() {
      return LOG;
   }

   @Override public ResourceManager getResourceManager() {
      return resourceManager;
   }

   @Override public ViewportManager getViewportManager() {
      return viewportManager;
   }

   @Override public XmlParser getXmlParser() {
      return xmlParser;
   }
}
