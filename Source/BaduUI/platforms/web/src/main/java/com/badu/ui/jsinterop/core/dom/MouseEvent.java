package com.badu.ui.jsinterop.core.dom;

import com.badu.ui.jsinterop.core.events.Event;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MouseEvent extends Event {

   @JsProperty
   double getClientX();

   @JsProperty
   double getClientY();

}
