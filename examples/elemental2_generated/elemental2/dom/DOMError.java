package elemental2.dom;
import elemental2.dom.DOMLocator;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsObject;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMError{
public static double SEVERITY_ERROR;
public static double SEVERITY_FATAL_ERROR;
public static double SEVERITY_WARNING;
public DOMLocator location;
public String message;
public String name;
public JsObject relatedData;
public JsObject relatedException;
public double severity;
public String type;
}
