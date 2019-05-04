package elemental2.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ClientRectList implements JsArrayLike<DOMRect> {
   public int length;

   public native DOMRect item(int index);
}
