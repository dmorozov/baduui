package com.badu.ui.platforms.web.attributes;

import com.badu.ui.core.components.attributes.AlignItems;

public class AlignItemsStyle {

   private static final String CSS_FLEX_START = "flex-start";
   private static final String CSS_FLEX_END = "flex-end";
   private static final String CSS_BASELINE = "baseline";
   private static final String CSS_STRETCH = "stretch";
   private static final String CSS_CENTER = "center";

   public static String css(AlignItems style) {
      switch (style) {
      case flexStart: return CSS_FLEX_START;
      case flexEnd: return CSS_FLEX_END;
      case center: return CSS_CENTER;
      case stretch: return CSS_STRETCH;
      case baseline: return CSS_BASELINE;
      }

      return CSS_FLEX_START;
   }
}
