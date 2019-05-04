package elemental2.core;
import elemental2.core.JsError;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RangeError extends JsError{
public RangeError(){}
public RangeError(Object message,Object file,Object line){}
public RangeError(Object message,Object file){}
public RangeError(Object message){}
}
