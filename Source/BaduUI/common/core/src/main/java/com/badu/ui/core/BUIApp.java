package com.badu.ui.core;

import com.badu.ui.core.components.AppRoot;
import com.badu.ui.core.listeners.BUIAppLifecycle;
import com.badu.ui.core.themes.ITheme;
import com.badu.ui.core.utils.PlatformLogger;

public abstract class BUIApp extends AppRoot implements BUIAppLifecycle {

   public BUIApp(final BUIPlatform platform, final ITheme theme) {
      BUIPlatform.PLATFORM = platform;
      BUIPlatform.THEME = theme;
      BUIPlatform.PLATFORM.addAppLifecycleListener(this);
   }

   public void start() {
      createEventBus();
      this.onInitialized();

      final RenderContext context = new RenderContext();
      createUI(context);

      this.render(context, null);

      this.onStarted();
   }

   private void createUI(final RenderContext context) {
      build(context);
   }

   private void createEventBus() {
   }

   protected BUIPlatform platform() {
      return BUIPlatform.PLATFORM;
   }

   protected PlatformLogger log() {
      return BUIPlatform.PLATFORM.log();
   }

   @Override
   public void onInitialized() {}

   @Override
   public void onStarted() {
      log().debug("The app is started!");
   }

   @Override
   public void onStopped() {}
}
