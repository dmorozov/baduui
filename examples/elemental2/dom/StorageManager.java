package elemental2.dom;

import elemental2.promise.Promise;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class StorageManager {
   public native Promise<StorageEstimate> estimate();

   public native Promise<Boolean> persist();

   public native Promise<Boolean> persisted();
}
