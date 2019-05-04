package com.badu.ui.platforms.web;

import com.badu.ui.core.ViewportManager;

/**
 * DPI aware viewport utilities
 */
public class WebViewportManager implements ViewportManager {

   @Override public int calculatePixelSize(int unitSize) {
      return unitSize;
   }

   @Override public int calculateDPSize(int pixelSize) {
      return pixelSize;
   }

}
