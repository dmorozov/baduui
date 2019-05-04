package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Event;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
import elemental2.dom.EventTarget;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface AbortSignal extends EventTarget{
@JsFunction
public interface OnabortFn{
Object onInvoke(Event p0);
}
@JsOverlay
static AbortSignal create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
AbortSignal.OnabortFn getOnabort();
@JsProperty
boolean isAborted();
@JsProperty
void setAborted(boolean aborted);
@JsProperty
void setOnabort(AbortSignal.OnabortFn onabort);
}
