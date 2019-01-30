package com.badu.ui.core;

import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.utils.PlatformLogger;

public abstract class BUIApp {

   public BUIApp(final BUIPlatform platform) {
      BUIPlatform.PLATFORM = platform;
   }

   protected abstract BUIWidget createRoot();

   public void start() {
//      initResources();
//      createEventBus();
//      createUI();
   }

   private void initResources() {
   }

   protected BUIPlatform platform() {
      return BUIPlatform.PLATFORM;
   }

   protected PlatformLogger log() {
      return BUIPlatform.PLATFORM.log();
   }
}
