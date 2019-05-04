package elemental2.core;
import elemental2.core.JsError;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class EvalError extends JsError{
public EvalError(){}
public EvalError(Object message,Object file,Object line){}
public EvalError(Object message,Object file){}
public EvalError(Object message){}
}
