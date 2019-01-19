package com.badu.ui.components;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.components.StatelessWidget;

public class Column extends StatelessWidget<Column> {

   public Column children(BUIWidget... columns) {
      return super.children(columns);
   }

   @Override protected PlatformComponent build() {
      return new PlatformComponent(){};
   }
}
