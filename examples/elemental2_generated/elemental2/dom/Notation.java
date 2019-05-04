package elemental2.dom;

import elemental2.dom.Node;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Notation extends Node {
    public String publicId;
    public String systemId;
}
