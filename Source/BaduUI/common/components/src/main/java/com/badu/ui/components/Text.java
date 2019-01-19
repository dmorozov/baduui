package com.badu.ui.components;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.StatelessWidget;

public class Text extends StatelessWidget<Text> {

   private final String text;

   public Text(final String text) {
      this.text = text;
   }

   @Override protected PlatformComponent build() {
      return new PlatformComponent(){};
   }
}
