package elemental2.dom;

import elemental2.core.JsIterable;
import jsinterop.base.JsArrayLike;
import jsinterop.annotations.JsFunction;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class NodeList<T> implements JsIterable<T>, JsArrayLike<T> {
    @JsFunction
    public interface ForEachCallbackFn<T> {
        Object onInvoke(T currentValue, int currentIndex, NodeList<T> listObj);
    }

    public int length;

    public native <T, S> void forEach(NodeList.ForEachCallbackFn<T> callback, S thisobj);

    public native <T> void forEach(NodeList.ForEachCallbackFn<T> callback);

    public native T item(int index);
}
