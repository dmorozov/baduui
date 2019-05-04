package elemental2.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface NavigatorStorage {
   @JsProperty
   StorageManager getStorage();

   @JsProperty
   void setStorage(StorageManager storage);
}
