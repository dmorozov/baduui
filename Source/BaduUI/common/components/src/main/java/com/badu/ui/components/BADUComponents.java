package com.badu.ui.components;

import com.badu.ui.core.components.common.SlotTarget;
import com.badu.ui.core.components.common.Box;
import com.badu.ui.core.components.common.Slot;
import com.badu.ui.components.layout.Drawer;
import com.badu.ui.components.menu.Menu;

public class BADUComponents {

   public static void initialize() {
      Box.registerComponent();
      Slot.registerComponent();
      SlotTarget.registerComponent();
      Text.registerComponent();
      Image.registerComponent();
      Drawer.registerComponent();
      Menu.registerComponent();
   }
}
