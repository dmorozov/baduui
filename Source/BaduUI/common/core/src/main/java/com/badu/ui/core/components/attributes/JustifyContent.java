package com.badu.ui.core.components.attributes;

public enum JustifyContent {
   flexStart, flexEnd, center, spaceBetween, spaceAround, spaceEvenly, stretch;

   public static JustifyContent safeEnum(String value, JustifyContent defaultValue) {
      if (null != value) {
         for (JustifyContent e : values()) {
            if (e.name().equalsIgnoreCase(value)) {
               return e;
            }
         }
      }
      return null;
   }
}
