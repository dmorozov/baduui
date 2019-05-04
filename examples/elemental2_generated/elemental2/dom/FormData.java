package elemental2.dom;

import elemental2.dom.Element;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.Blob;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class FormData {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface AppendValueUnionType {
        @JsOverlay
        static FormData.AppendValueUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Blob asBlob() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isBlob() {
            return (Object) this instanceof Blob;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    public FormData() {
    }

    public FormData(Element form) {
    }

    public native void append(String name, FormData.AppendValueUnionType value, String filename);

    public native void append(String name, FormData.AppendValueUnionType value);

    @JsOverlay
    public final void append(String name, Blob value, String filename) {
        append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value), filename);
    }

    @JsOverlay
    public final void append(String name, Blob value) {
        append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value));
    }

    @JsOverlay
    public final void append(String name, String value, String filename) {
        append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value), filename);
    }

    @JsOverlay
    public final void append(String name, String value) {
        append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value));
    }
}
