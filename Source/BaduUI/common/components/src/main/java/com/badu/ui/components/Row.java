package com.badu.ui.components;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.components.StatelessWidget;

public class Row extends StatelessWidget<Row> {

   public Row columns(BUIWidget ... columns) {
      return super.children(columns);
   }

   @Override protected PlatformComponent build() {
      return new PlatformComponent(){};
   }
}
