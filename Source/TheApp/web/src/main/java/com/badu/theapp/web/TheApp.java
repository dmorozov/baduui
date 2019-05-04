package com.badu.theapp.web;

import com.badu.theapp.TheAppMain;
import com.badu.ui.platforms.web.WebUIPlatform;
import com.badu.ui.platforms.web.utils.DOMUtils;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLBodyElement;
import elemental2.dom.HTMLDocument;
import jsinterop.annotations.JsType;

@JsType
public class TheApp extends TheAppMain {

   public TheApp() {
      super(new WebUIPlatform());
   }

   public static void startApp() {
      final TheApp app = new TheApp();
      DOMUtils.whenReady(() -> {
         DomGlobal.console.log("BADU UI Started");
         app.start();
      });
   }
}
