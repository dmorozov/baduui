package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RegistrationOptions {
   @JsOverlay
   static RegistrationOptions create() {
      return Js.uncheckedCast(JsPropertyMap.of());
   }

   @JsProperty
   String getScope();

   @JsProperty
   String getUpdateViaCache();

   @JsProperty
   boolean isUseCache();

   @JsProperty
   void setScope(String scope);

   @JsProperty
   void setUpdateViaCache(String updateViaCache);

   @JsProperty
   void setUseCache(boolean useCache);
}
