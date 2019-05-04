package com.badu.ui.core;

public interface ViewportManager {

   String UNIT_PIXEL = "px";  // pixel
   String UNIT_DP = "dp";     // density independent pixel

   int calculatePixelSize(int dpSize);
   int calculateDPSize(int pixelSize);

   default int parseUnitsToDPUnits(String width) {
      if (null != width && width.length() > 2) {
         if (width.endsWith(UNIT_PIXEL)) {
            return calculateDPSize(Integer.parseInt(width.substring(0, width.length() - UNIT_PIXEL.length())));
         }
         else if (width.endsWith(UNIT_DP)) {
            return Integer.parseInt(width.substring(0, width.length() - UNIT_DP.length()));
         }
         else { // no units specified so takes it as DP units already
            return Integer.parseInt(width);
         }
      }

      return 0;
   }
}
