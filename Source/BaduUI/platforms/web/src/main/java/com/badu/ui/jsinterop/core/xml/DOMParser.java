package com.badu.ui.jsinterop.core.xml;

import jsinterop.annotations.JsConstructor;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import com.badu.ui.jsinterop.core.dom.Document;

@JsType(namespace = JsPackage.GLOBAL, name="DOMParser", isNative = true)
public class DOMParser {
   @JsConstructor
   public DOMParser() {
   }

   @JsOverlay
   public final Document parseFromString(String str, SupportedType type){
      return parseFromString(str, type.getInternalValue());
   }

   @JsMethod(name = "parseFromString")
   public native Document parseFromString(String str, String type);

}

