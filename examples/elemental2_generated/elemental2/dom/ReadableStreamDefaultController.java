package elemental2.dom;

import jsinterop.annotations.JsProperty;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ReadableStreamDefaultController {
    void close();

    void enqueue(Object chunk);

    void error(Object err);

    @JsProperty
    int getDesiredSize();

    @JsProperty
    void setDesiredSize(int desiredSize);
}
