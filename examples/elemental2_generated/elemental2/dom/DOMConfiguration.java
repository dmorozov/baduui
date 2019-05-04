package elemental2.dom;

import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.DOMStringList;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMConfiguration {
    public DOMStringList parameterNames;

    public native boolean canSetParameter(String name);

    public native Object getParameter(String name);

    public native Object setParameter(String name, Object value);
}
