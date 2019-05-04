package elemental2.core;
import jsinterop.base.Js;
import elemental2.core.JsIterable;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, name = "WeakSet", namespace = JsPackage.GLOBAL)
public class JsWeakSet<VALUE>{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface ConstructorIterableUnionType<VALUE>{
@JsOverlay
static JsWeakSet.ConstructorIterableUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default JsIterable<VALUE> asJsIterable(){
return Js.cast(this);
}
@JsOverlay
default VALUE[] asVALUEArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isVALUEArray(){
return (Object)this instanceof Object[];
}
}
public JsWeakSet(){}
public JsWeakSet(JsWeakSet.ConstructorIterableUnionType<VALUE> iterable){}
public JsWeakSet(JsIterable<VALUE> iterable){}
public JsWeakSet(VALUE[] iterable){}
public native JsWeakSet<VALUE> add(VALUE value);
public native void clear();
public native boolean delete(VALUE value);
public native boolean has(VALUE value);
}
