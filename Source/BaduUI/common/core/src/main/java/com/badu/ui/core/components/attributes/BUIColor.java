package com.badu.ui.core.components.attributes;

public class BUIColor {

   private final String color;

   protected BUIColor(final String color) {
      this.color = color;
   }

   public String asString() {
      return this.color;
   }

   public static BUIColor fromString(final String color) {
      return new BUIColor(color);
   }
}
