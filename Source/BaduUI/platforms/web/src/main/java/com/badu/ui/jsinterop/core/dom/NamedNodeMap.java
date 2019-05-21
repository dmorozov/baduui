package com.badu.ui.jsinterop.core.dom;

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface NamedNodeMap<T extends Node> {

   @JsProperty
   int getLength();

   @JsMethod
   T item(int index);
}
