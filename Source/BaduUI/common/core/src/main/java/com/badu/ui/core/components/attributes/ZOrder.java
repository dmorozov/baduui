package com.badu.ui.core.components.attributes;

public enum ZOrder {
   Low, Medium, High;

   public static ZOrder safeEnum(String value, ZOrder defaultValue) {
      if (null != value) {
         for (ZOrder e : values()) {
            if (e.name().equalsIgnoreCase(value)) {
               return e;
            }
         }
      }
      return null;
   }
}
