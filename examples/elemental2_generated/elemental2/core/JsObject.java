package elemental2.core;

import java.lang.Deprecated;
import elemental2.core.Function;
import jsinterop.annotations.JsMethod;
import jsinterop.base.JsPropertyMap;
import jsinterop.base.Js;
import elemental2.core.ObjectPropertyDescriptor;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class JsObject {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface DefinePropertyPropUnionType {
        @JsOverlay
        static JsObject.DefinePropertyPropUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Object asObject() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isObject() {
            return (Object) this instanceof Object;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface EntriesArrayArrayUnionType<T> {
        @JsOverlay
        static JsObject.EntriesArrayArrayUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default T asT() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface GetOwnPropertyDescriptorPropUnionType {
        @JsOverlay
        static JsObject.GetOwnPropertyDescriptorPropUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Object asObject() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isObject() {
            return (Object) this instanceof Object;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    public static native JsObject assign(JsObject target, JsObject... var_args);

    @JsOverlay
    public static final JsObject assign(Object target, Object... var_args) {
        return assign(Js.<JsObject>uncheckedCast(target), Js.<JsObject>uncheckedCast(var_args));
    }

    public static native JsObject create(JsObject proto, JsObject properties);

    public static native JsObject create(JsObject proto);

    @JsOverlay
    public static final JsObject create(Object proto, Object properties) {
        return create(Js.<JsObject>uncheckedCast(proto), Js.<JsObject>uncheckedCast(properties));
    }

    @JsOverlay
    public static final JsObject create(Object proto) {
        return create(Js.<JsObject>uncheckedCast(proto));
    }

    public static native JsObject defineProperties(JsObject obj, JsObject props);

    @JsOverlay
    public static final JsObject defineProperties(Object obj, Object props) {
        return defineProperties(Js.<JsObject>uncheckedCast(obj), Js.<JsObject>uncheckedCast(props));
    }

    public static native JsObject defineProperty(JsObject obj, JsObject.DefinePropertyPropUnionType prop,
            JsObject descriptor);

    @JsOverlay
    public static final JsObject defineProperty(JsObject obj, Object prop, JsObject descriptor) {
        return defineProperty(obj, Js.<JsObject.DefinePropertyPropUnionType>uncheckedCast(prop), descriptor);
    }

    @JsOverlay
    public static final JsObject defineProperty(JsObject obj, String prop, JsObject descriptor) {
        return defineProperty(obj, Js.<JsObject.DefinePropertyPropUnionType>uncheckedCast(prop), descriptor);
    }

    @JsOverlay
    public static final JsObject defineProperty(Object obj, JsObject.DefinePropertyPropUnionType prop,
            Object descriptor) {
        return defineProperty(Js.<JsObject>uncheckedCast(obj), prop, Js.<JsObject>uncheckedCast(descriptor));
    }

    @JsOverlay
    public static final JsObject defineProperty(Object obj, Object prop, Object descriptor) {
        return defineProperty(Js.<JsObject>uncheckedCast(obj), prop, Js.<JsObject>uncheckedCast(descriptor));
    }

    @JsOverlay
    public static final JsObject defineProperty(Object obj, String prop, Object descriptor) {
        return defineProperty(Js.<JsObject>uncheckedCast(obj), prop, Js.<JsObject>uncheckedCast(descriptor));
    }

    public static native <T> JsObject.EntriesArrayArrayUnionType<T>[][] entries(JsPropertyMap<T> obj);

    public static native <T> T freeze(T obj);

    public static native <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(T obj,
            JsObject.GetOwnPropertyDescriptorPropUnionType prop);

    @JsOverlay
    public static final <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(T obj, Object prop) {
        return getOwnPropertyDescriptor(obj, Js.<JsObject.GetOwnPropertyDescriptorPropUnionType>uncheckedCast(prop));
    }

    @JsOverlay
    public static final <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(T obj, String prop) {
        return getOwnPropertyDescriptor(obj, Js.<JsObject.GetOwnPropertyDescriptorPropUnionType>uncheckedCast(prop));
    }

    public static native JsPropertyMap<ObjectPropertyDescriptor> getOwnPropertyDescriptors(JsObject obj);

    @JsOverlay
    public static final JsPropertyMap<ObjectPropertyDescriptor> getOwnPropertyDescriptors(Object obj) {
        return getOwnPropertyDescriptors(Js.<JsObject>uncheckedCast(obj));
    }

    public static native String[] getOwnPropertyNames(JsObject obj);

    @JsOverlay
    public static final String[] getOwnPropertyNames(Object obj) {
        return getOwnPropertyNames(Js.<JsObject>uncheckedCast(obj));
    }

    public static native Object[] getOwnPropertySymbols(JsObject obj);

    @JsOverlay
    public static final Object[] getOwnPropertySymbols(Object obj) {
        return getOwnPropertySymbols(Js.<JsObject>uncheckedCast(obj));
    }

    public static native JsObject getPrototypeOf(JsObject obj);

    @JsOverlay
    public static final JsObject getPrototypeOf(Object obj) {
        return getPrototypeOf(Js.<JsObject>uncheckedCast(obj));
    }

    public static native boolean is(Object p0, Object p1);

    public static native boolean isExtensible(JsObject obj);

    @JsOverlay
    public static final boolean isExtensible(Object obj) {
        return isExtensible(Js.<JsObject>uncheckedCast(obj));
    }

    public static native boolean isFrozen(JsObject obj);

    @JsOverlay
    public static final boolean isFrozen(Object obj) {
        return isFrozen(Js.<JsObject>uncheckedCast(obj));
    }

    public static native boolean isSealed(JsObject obj);

    @JsOverlay
    public static final boolean isSealed(Object obj) {
        return isSealed(Js.<JsObject>uncheckedCast(obj));
    }

    public static native String[] keys(JsObject obj);

    @JsOverlay
    public static final String[] keys(Object obj) {
        return keys(Js.<JsObject>uncheckedCast(obj));
    }

    public static native <T> T preventExtensions(T obj);

    public static native <T> T seal(T obj);

    public static native JsObject setPrototypeOf(JsObject obj, Object proto);

    @JsOverlay
    public static final JsObject setPrototypeOf(Object obj, Object proto) {
        return setPrototypeOf(Js.<JsObject>uncheckedCast(obj), proto);
    }

    public static native <T> T[] values(JsPropertyMap<T> obj);

    @Deprecated
    public JsObject __parent__;
    public JsObject __proto__;
    public Function constructor;

    public JsObject() {
    }

    public JsObject(Object value) {
    }

    public native void __defineGetter__(String sprop, Function fun);

    public native void __defineSetter__(String sprop, Function fun);

    public native Function __lookupGetter__(String sprop);

    public native Function __lookupSetter__(String sprop);

    public native boolean hasOwnProperty(Object propertyName);

    public native boolean isPrototypeOf(JsObject other);

    @JsOverlay
    public final boolean isPrototypeOf(Object other) {
        return isPrototypeOf(Js.<JsObject>uncheckedCast(other));
    }

    public native boolean propertyIsEnumerable(String propertyName);

    public native Object toJSON();

    public native Object toJSON(String key);

    public native String toLocaleString();

    public native String toSource();

    @JsMethod(name = "toString")
    public native String toString_();

    public native Object valueOf();
}
