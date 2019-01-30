package com.badu.ui.platforms.web;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponentFactory;
import com.badu.ui.core.utils.PlatformLogger;
import com.badu.ui.platforms.web.utils.WebLogger;

public class WebUIPlatform extends BUIPlatform {

   private final WebPlatformComponentFactory componentFactory;
   private final WebLogger LOG = new WebLogger();

   public WebUIPlatform() {
      componentFactory = new WebPlatformComponentFactory();
   }

   @Override protected PlatformComponentFactory componentFactory() {
      return componentFactory;
   }

   @Override public PlatformLogger log() {
      return LOG;
   }
}
