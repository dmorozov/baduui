package com.badu.ui.platforms.web;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponentFactory;

public class WenBUIPlatform extends BUIPlatform {

   private final WebPlatformComponentFactory componentFactory;

   public WenBUIPlatform() {
      componentFactory = new WebPlatformComponentFactory();
   }

   @Override protected PlatformComponentFactory componentFactory() {
      return componentFactory;
   }
}
