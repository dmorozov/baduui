package elemental2.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface IdleDeadline {
   @JsProperty
   boolean isDidTimeout();

   @JsProperty
   void setDidTimeout(boolean didTimeout);

   double timeRemaining();
}
