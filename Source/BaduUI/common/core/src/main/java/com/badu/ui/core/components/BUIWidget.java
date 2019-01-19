package com.badu.ui.core.components;


public abstract class BUIWidget<T extends BUIWidget> {

   protected T children(BUIWidget ... children) {
      return (T) this;
   }
}
