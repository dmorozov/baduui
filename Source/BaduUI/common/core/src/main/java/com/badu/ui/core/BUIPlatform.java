package com.badu.ui.core;

public abstract class BUIPlatform {

   public static BUIPlatform PLATFORM;

   protected abstract PlatformComponentFactory componentFactory();

}
