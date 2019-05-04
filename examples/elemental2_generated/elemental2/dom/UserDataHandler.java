package elemental2.dom;

import elemental2.dom.Node;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class UserDataHandler {
    public double NODE_ADOPTED;
    public double NODE_CLONED;
    public double NODE_DELETED;
    public double NODE_IMPORTED;
    public double NODE_RENAMED;

    public native void handle(double operation, String key, Object data, Node src, Node dst);

    public native void handle(double operation, String key, Object data, Node src);

    public native void handle(double operation, String key, Object data);

    public native void handle(double operation, String key);
}
