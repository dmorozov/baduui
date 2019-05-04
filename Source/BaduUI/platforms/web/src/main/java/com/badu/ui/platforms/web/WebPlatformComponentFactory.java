package com.badu.ui.platforms.web;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.PlatformComponentFactory;
import com.badu.ui.core.Resource;
import com.badu.ui.core.components.platform.FlexboxWidget;
import com.badu.ui.core.components.platform.ImageWidget;
import com.badu.ui.core.components.platform.TextWidget;
import com.badu.ui.platforms.web.components.FlexboxComponent;
import com.badu.ui.platforms.web.components.ImageComponent;
import com.badu.ui.platforms.web.components.RootComponent;
import com.badu.ui.platforms.web.components.TextComponent;

public class WebPlatformComponentFactory implements PlatformComponentFactory {

   @Override public PlatformComponent rootComponent() {
      return new RootComponent();
   }

   @Override public TextWidget createText(String text) {
      return new TextComponent(text);
   }

   @Override public FlexboxWidget createFlexbox() {
      return new FlexboxComponent();
   }

   @Override public ImageWidget createImage(Resource src, int width, int height) {
      return new ImageComponent(src, width, height);
   }
}
