package elemental2.dom;
import elemental2.dom.Range;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DocumentRange{
public native Range createRange();
}
