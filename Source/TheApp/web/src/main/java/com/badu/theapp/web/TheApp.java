package com.badu.theapp.web;

import com.badu.theapp.TheAppMain;
import com.badu.ui.platforms.web.WebUIPlatform;
import jsinterop.annotations.JsType;

@JsType
public class TheApp extends TheAppMain {

   public TheApp() {
      super(new WebUIPlatform());
      log().debug("BADU UI Started!!!");
   }

   public static void startApp() {
      final TheApp app = new TheApp();
      app.start();
   }
}
