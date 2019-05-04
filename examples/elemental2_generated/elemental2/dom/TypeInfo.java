package elemental2.dom;

import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TypeInfo {
    public double DERIVATION_EXTENSION;
    public double DERIVATION_LIST;
    public double DERIVATION_RESTRICTION;
    public double DERIVATION_UNION;
    public String typeName;
    public String typeNamespace;

    public native boolean isDerivedFrom(String typeNamespaceArg, String typeNameArg, double derivationMethod);
}
