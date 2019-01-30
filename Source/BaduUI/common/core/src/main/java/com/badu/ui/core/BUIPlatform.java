package com.badu.ui.core;

import com.badu.ui.core.utils.PlatformLogger;

public abstract class BUIPlatform {

   public static BUIPlatform PLATFORM;

   protected abstract PlatformComponentFactory componentFactory();

   public abstract PlatformLogger log();
}
