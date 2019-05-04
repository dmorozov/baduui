package elemental2.dom;

import jsinterop.annotations.JsProperty;
import java.lang.Void;
import elemental2.core.ArrayBufferView;
import java.lang.Object;
import elemental2.dom.IteratorResult;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ReadableStreamBYOBReader {
    Promise<Object> cancel(Object reason);

    @JsProperty
    Promise<Void> getClosed();

    Promise<IteratorResult> read(ArrayBufferView view);

    void releaseLock();

    @JsProperty
    void setClosed(Promise<Void> closed);
}
