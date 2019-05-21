package elemental2.dom;

import elemental2.core.ArrayBuffer;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface PushSubscriptionOptions {
   @JsOverlay
   static PushSubscriptionOptions create() {
      return Js.uncheckedCast(JsPropertyMap.of());
   }

   @JsProperty
   ArrayBuffer getApplicationServerKey();

   @JsProperty
   boolean isUserVisibleOnly();

   @JsProperty
   void setApplicationServerKey(ArrayBuffer applicationServerKey);

   @JsProperty
   void setUserVisibleOnly(boolean userVisibleOnly);
}
