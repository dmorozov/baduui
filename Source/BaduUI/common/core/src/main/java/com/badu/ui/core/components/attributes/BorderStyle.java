package com.badu.ui.core.components.attributes;

public enum BorderStyle {
   solid;

   public static BorderStyle fromString(final String style) {
      for (BorderStyle s : values()) {
         if (s.name().equalsIgnoreCase(style))
            return s;
      }

      return BorderStyle.solid;
   }
}
