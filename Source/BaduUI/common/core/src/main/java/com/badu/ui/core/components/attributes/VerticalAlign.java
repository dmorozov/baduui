package com.badu.ui.core.components.attributes;

public enum VerticalAlign {
   top, center, bottom;

   public static VerticalAlign safeEnum(String value, VerticalAlign defaultValue) {
      if (null != value) {
         for (VerticalAlign e : values()) {
            if (e.name().equalsIgnoreCase(value)) {
               return e;
            }
         }
      }
      return null;
   }
}
