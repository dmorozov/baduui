package elemental2.dom;

import java.lang.Void;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface WritableStreamDefaultController {
    Promise<Void> error(Object err);
}
