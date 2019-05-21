package com.badu.ui.jsinterop.core.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface HTMLImageElement extends HTMLElement {

   @JsProperty
   String getSrc();
   @JsProperty
   void setSrc(String src);

   @JsProperty
   int getWidth();
   @JsProperty
   void setWidth(int width);

   @JsProperty
   int getHeight();
   @JsProperty
   void setHeight(int height);
}
