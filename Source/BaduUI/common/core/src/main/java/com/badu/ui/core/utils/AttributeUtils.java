package com.badu.ui.core.utils;

public class AttributeUtils {

   public static int safeInt(String value, int defaultValue) {
      if (null != value && value.length() > 0) {
         try {
            return Integer.valueOf(value);
         }
         catch (Exception e) {
            // ?
         }
      }
      return defaultValue;
   }

   public static boolean isNumeric(String str) {
      return str.matches("-?\\d+(\\.\\d+)?");  //match a number with optional '-' and decimal.
   }

   public static boolean isEmpty(String text) {
      if (null == text) {
         return true;
      }

      return text.replaceAll("\\s+","").length() == 0 ? true : false;
   }
}
