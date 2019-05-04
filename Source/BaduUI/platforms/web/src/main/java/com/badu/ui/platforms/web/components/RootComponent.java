package com.badu.ui.platforms.web.components;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLBodyElement;

public class RootComponent extends AbstractComponent<HTMLBodyElement> {

   public RootComponent() {
      super(DomGlobal.document.body);
   }

   @Override public void destroyComponent() {
      // do nothing
   }
}
