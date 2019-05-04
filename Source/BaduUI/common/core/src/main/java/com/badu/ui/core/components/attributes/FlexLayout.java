package com.badu.ui.core.components.attributes;

public enum FlexLayout {
   horizontal, vertical, horizontalReverse, verticalReverse;

   public static FlexLayout safeEnum(String value, FlexLayout defaultValue) {
      if (null != value) {
         for (FlexLayout e : values()) {
            if (e.name().equalsIgnoreCase(value)) {
               return e;
            }
         }
      }
      return null;
   }
}
