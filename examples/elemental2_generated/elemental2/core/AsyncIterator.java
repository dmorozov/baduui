package elemental2.core;
import elemental2.core.JsIIterableResult;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface AsyncIterator<VALUE>{
Promise<JsIIterableResult<VALUE>> next();
Promise<JsIIterableResult<VALUE>> next(Object p0);
}
