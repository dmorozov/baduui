package com.badu.ui.core.components.attributes;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.ViewportManager;

public class BUIBorder {
   private final BUIColor color;
   private final int width;
   private final BorderStyle style;

   public BUIBorder(final int width, final BorderStyle style, final BUIColor color) {
      this.width = width;
      this.style = style;
      this.color = color;
   }

   public BUIColor getColor() {
      return color;
   }

   public int getWidth() {
      return width;
   }

   public BorderStyle getStyle() {
      return style;
   }

   public String asString() {
      return BUIPlatform.PLATFORM.getViewportManager().calculatePixelSize(width) + ViewportManager.UNIT_PIXEL + " "
              + style.name() + " " + color.asString();
   }

   public static BUIBorder fromString(final String border) {
      String[] parts = border.split(" ");
      if (null != parts && parts.length == 3) {
         return new BUIBorder(
                 BUIPlatform.PLATFORM.getViewportManager().parseUnitsToDPUnits(parts[0]),
                 BorderStyle.fromString(parts[1]),
                 BUIColor.fromString(parts[2])
         );
      }

      throw new IllegalArgumentException("Unexpected border value: " + border
              + ". The border value expected in format: 'WIDTH STYLE COLOR'. Example: 1 solid #000000");
   }


}
