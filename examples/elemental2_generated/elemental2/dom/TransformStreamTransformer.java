package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.promise.IThenable;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.TransformStreamDefaultController;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface TransformStreamTransformer{
@JsFunction
public interface FlushFn{
IThenable<Object> onInvoke(TransformStreamDefaultController p0);
}
@JsFunction
public interface StartFn{
IThenable<Object> onInvoke(TransformStreamDefaultController p0);
}
@JsFunction
public interface TransformFn{
IThenable<Object> onInvoke(Object p0,TransformStreamDefaultController p1);
}
@JsOverlay
static TransformStreamTransformer create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
TransformStreamTransformer.FlushFn getFlush();
@JsProperty
TransformStreamTransformer.StartFn getStart();
@JsProperty
TransformStreamTransformer.TransformFn getTransform();
@JsProperty
void setFlush(TransformStreamTransformer.FlushFn flush);
@JsProperty
void setStart(TransformStreamTransformer.StartFn start);
@JsProperty
void setTransform(TransformStreamTransformer.TransformFn transform);
}
