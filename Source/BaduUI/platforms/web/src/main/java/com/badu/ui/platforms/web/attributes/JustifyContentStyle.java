package com.badu.ui.platforms.web.attributes;

import com.badu.ui.core.components.attributes.JustifyContent;

public class JustifyContentStyle {

   private static final String CSS_FLEX_START = "flex-start";
   private static final String CSS_FLEX_END = "flex-end";
   private static final String CSS_CENTER = "center";
   private static final String CSS_STRETCH = "stretch";
   private static final String CSS_SPACE_BETWEEN = "space-between";
   private static final String CSS_SPACE_AROUND= "space-around";
   private static final String CSS_SPACE_EVENTLY= "space-evenly";

   public static String css(JustifyContent style) {
      switch (style) {
      case flexStart: return CSS_FLEX_START;
      case flexEnd: return CSS_FLEX_END;
      case center: return CSS_CENTER;
      case stretch: return CSS_STRETCH;
      case spaceBetween: return CSS_SPACE_BETWEEN;
      case spaceAround: return CSS_SPACE_AROUND;
      case spaceEvenly: return CSS_SPACE_EVENTLY;
      }

      return CSS_FLEX_START;
   }
}
