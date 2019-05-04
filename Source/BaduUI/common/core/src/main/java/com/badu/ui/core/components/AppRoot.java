package com.badu.ui.core.components;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponent;

public abstract class AppRoot extends StatelessWidget<AppRoot, PlatformComponent> {

   public AppRoot() {
      super(null);
   }

   @Override protected PlatformComponent createNative() {
      return BUIPlatform.PLATFORM.componentFactory().rootComponent();
   }

}
