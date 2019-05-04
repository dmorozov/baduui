package com.badu.ui.core.themes;

import com.badu.ui.core.components.attributes.BUIColor;
import com.badu.ui.core.components.attributes.BorderStyle;

public interface ITheme {

   BUIColor DEFAULT_PANEL_BG_COLOR = BUIColor.fromString("#eaeaea");
   BUIColor DEFAULT_MENU_ITEM_BORDER_COLOR = BUIColor.fromString("#DADADA");
   BUIColor DEFAULT_MENU_ITEM_ACTIVE_COLOR = BUIColor.fromString("#DADADA");
   BorderStyle DEFAULT_MENU_ITEM_BORDER_STYLE = BorderStyle.solid;
   int DEFAULT_MENU_ITEM_BORDER_WIDTH = 1;

   default BUIColor panelBGColor() {
      return DEFAULT_PANEL_BG_COLOR;
   }

   /* Menu styles */
   default BUIColor menuItemBorderColor() {
      return DEFAULT_MENU_ITEM_BORDER_COLOR;
   }
   default int menuItemBorderWidth() {
      return DEFAULT_MENU_ITEM_BORDER_WIDTH;
   }
   default BorderStyle menuItemBorderStyle() {
      return DEFAULT_MENU_ITEM_BORDER_STYLE;
   }
   default BUIColor menuItemBgColor() {
      return DEFAULT_PANEL_BG_COLOR;
   }
   default BUIColor menuItemActiveBgColor() {
      return DEFAULT_MENU_ITEM_ACTIVE_COLOR;
   }
}
