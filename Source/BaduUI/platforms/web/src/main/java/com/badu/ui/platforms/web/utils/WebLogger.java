package com.badu.ui.platforms.web.utils;

import com.badu.ui.core.utils.PlatformLogger;
import elemental2.dom.DomGlobal;

public class WebLogger implements PlatformLogger {

   @Override public void debug(Object... msg) {
      DomGlobal.console.log(msg);
   }
}
