package elemental2.core;
import elemental2.core.JsError;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TypeError extends JsError{
public TypeError(){}
public TypeError(Object message,Object file,Object line){}
public TypeError(Object message,Object file){}
public TypeError(Object message){}
}
