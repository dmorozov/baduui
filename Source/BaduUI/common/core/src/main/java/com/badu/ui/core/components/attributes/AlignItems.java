package com.badu.ui.core.components.attributes;

public enum AlignItems {
   flexStart, flexEnd, center, stretch, baseline;

   public static AlignItems safeEnum(String value, AlignItems defaultValue) {
      if (null != value) {
         for (AlignItems e : values()) {
            if (e.name().equalsIgnoreCase(value)) {
               return e;
            }
         }
      }
      return null;
   }
}
