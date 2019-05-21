package com.badu.ui.jsinterop.core.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface Text {

   @JsProperty
   String getTextContent();

   @JsProperty
   void setTextContent(String textContent);

}
