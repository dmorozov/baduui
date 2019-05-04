package com.badu.ui.core;

import com.badu.ui.core.listeners.BUIAppLifecycle;
import com.badu.ui.core.themes.ITheme;
import com.badu.ui.core.utils.PlatformLogger;
import com.badu.ui.core.xml.XmlParser;

public abstract class BUIPlatform {

   private static BUIAppLifecycle appLifecycleListener;

   public static BUIPlatform PLATFORM;
   public static ITheme THEME;

   public abstract PlatformComponentFactory componentFactory();

   public abstract PlatformLogger log();

   public void addAppLifecycleListener(BUIAppLifecycle listener) {
      BUIPlatform.appLifecycleListener = listener;
   }

   public abstract ResourceManager getResourceManager();

   public abstract ViewportManager getViewportManager();

   public abstract XmlParser getXmlParser();
}
