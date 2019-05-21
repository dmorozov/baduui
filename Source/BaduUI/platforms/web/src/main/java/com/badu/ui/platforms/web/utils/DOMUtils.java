package com.badu.ui.platforms.web.utils;

import com.badu.ui.jsinterop.core.dom.Document;
import com.badu.ui.jsinterop.core.html.Window;

public class DOMUtils {

   private static final String DOCUMENT_LOADING_STATE = "loading";

   public interface DomIsReadyCallback {
      void onReady();
   }

   public static void whenReady(DomIsReadyCallback callback) {
      final Document document = Window.getDocument();
      if (DOCUMENT_LOADING_STATE.equalsIgnoreCase(document.getReadyState())) {
         document.addEventListener("DOMContentLoaded", (event) -> {
            callback.onReady();
         });
      }
   }
}
