package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ErrorEventInit extends EventInit {
   @JsOverlay
   static ErrorEventInit create() {
      return Js.uncheckedCast(JsPropertyMap.of());
   }

   @JsProperty
   int getColno();

   @JsProperty
   Object getError();

   @JsProperty
   String getFilename();

   @JsProperty
   int getLineno();

   @JsProperty
   String getMessage();

   @JsProperty
   void setColno(int colno);

   @JsProperty
   void setError(Object error);

   @JsProperty
   void setFilename(String filename);

   @JsProperty
   void setLineno(int lineno);

   @JsProperty
   void setMessage(String message);
}
