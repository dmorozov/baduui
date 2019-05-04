package elemental2.core;
import elemental2.core.JsError;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ReferenceError extends JsError{
public ReferenceError(){}
public ReferenceError(Object message,Object file,Object line){}
public ReferenceError(Object message,Object file){}
public ReferenceError(Object message){}
}
