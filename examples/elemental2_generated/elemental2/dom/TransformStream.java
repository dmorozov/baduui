package elemental2.dom;

import elemental2.dom.WritableStream;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import elemental2.dom.ReadableStream;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface TransformStream {
    @JsOverlay
    static TransformStream create() {
        return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    ReadableStream getReadable();

    @JsProperty
    WritableStream getWritable();

    @JsProperty
    void setReadable(ReadableStream readable);

    @JsProperty
    void setWritable(WritableStream writable);
}
