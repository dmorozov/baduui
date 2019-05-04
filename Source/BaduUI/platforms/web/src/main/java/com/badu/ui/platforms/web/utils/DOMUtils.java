package com.badu.ui.platforms.web.utils;

import elemental2.dom.DomGlobal;

public class DOMUtils {

   private static final String DOCUMENT_LOADING_STATE = "loading";

   public interface DomIsReadyCallback {
      void onReady();
   }

   public static void whenReady(DomIsReadyCallback callback) {
      if (DOCUMENT_LOADING_STATE.equalsIgnoreCase(DomGlobal.document.readyState)) {
         DomGlobal.document.addEventListener("DOMContentLoaded", (event) -> {
            callback.onReady();
         });
      }
   }
}
