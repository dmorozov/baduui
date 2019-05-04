package elemental2.dom;

import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface IteratorResult {
    @JsOverlay
    static IteratorResult create() {
        return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    Object getValue();

    @JsProperty
    boolean isDone();

    @JsProperty
    void setDone(boolean done);

    @JsProperty
    void setValue(Object value);
}
