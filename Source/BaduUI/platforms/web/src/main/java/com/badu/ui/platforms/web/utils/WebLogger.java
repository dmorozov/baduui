package com.badu.ui.platforms.web.utils;

import com.badu.ui.core.utils.PlatformLogger;
import com.badu.ui.jsinterop.core.html.Window;

public class WebLogger implements PlatformLogger {

   @Override public void debug(Object... msg) {
      Window.getConsole().log(msg);
   }

   @Override public void error(Object... msg) {
      Window.getConsole().error(msg);
   }
}
