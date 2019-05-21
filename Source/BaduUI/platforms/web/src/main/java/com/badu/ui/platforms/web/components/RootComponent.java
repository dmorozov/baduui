package com.badu.ui.platforms.web.components;

import com.badu.ui.jsinterop.core.dom.HTMLElement;
import com.badu.ui.jsinterop.core.html.Window;

public class RootComponent extends AbstractComponent<HTMLElement> {

   public RootComponent() {
      super(Window.getDocument().getBody());
   }

   @Override public void destroyComponent() {
      // do nothing
   }
}
