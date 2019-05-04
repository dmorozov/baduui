package com.badu.ui.platforms.web.utils;

public class StringUtils {

   public static String toCamelCase(String value) {
      return toCamelCase(value, true);
   }

   public static String toCamelCase(String value, boolean startWithLowerCase) {
      String[] strings = value.split(value.toLowerCase(), '-');
      for (int i = startWithLowerCase ? 1 : 0; i < strings.length; i++){
         strings[i] = StringUtils.capitalize(strings[i]);
      }
      return StringUtils.join(strings, null);
   }

   public static String capitalize(String str) {
      return !StringUtils.isEmpty(str) ? (str.substring(0, 1).toUpperCase() + str.substring(1)) : str;
   }

   public static String join(Object[] array, String separator) {
      if (array == null) {
         return null;
      } else {
         if (separator == null) {
            separator = "";
         }

         String result = "";
         for (Object element : array) {
            if (result.length() > 0) result += separator;
            result += element;
         }

         return result;
      }
   }

   public static boolean isEmpty(String text) {
      return null == text || text.length() ==0;
   }
}
