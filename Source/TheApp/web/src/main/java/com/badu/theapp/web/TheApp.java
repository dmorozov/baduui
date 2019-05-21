package com.badu.theapp.web;

import com.badu.theapp.TheAppMain;
import com.badu.ui.platforms.web.WebUIPlatform;
import com.badu.ui.platforms.web.utils.DOMUtils;
import jsinterop.annotations.JsType;
import jsinterop.core.html.Window;

@JsType
public class TheApp extends TheAppMain {

   public TheApp() {
      super(new WebUIPlatform());
   }

   public static void startApp() {
      final TheApp app = new TheApp();
      app.start();
      /*
      DOMUtils.whenReady(() -> {
         Window.getConsole().log("BADU UI Started");
         app.start();
      });*/
   }
}
