package elemental2.xml;

import elemental2.dom.Document;
import jsinterop.annotations.JsConstructor;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(namespace = JsPackage.GLOBAL, name="DOMParser", isNative = true)
public class DOMParser {
   @JsConstructor
   public DOMParser(){
   }

   @JsOverlay
   public final Document parseFromString(String str, SupportedType type){
      return parseFromString(str, type.getInternalValue());
   }

   @JsMethod(name = "parseFromString")
   public native Document parseFromString(String str, String type);

}
