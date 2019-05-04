package elemental2.dom;

import elemental2.dom.ErrorEvent;
import elemental2.dom.WorkerOptions;
import elemental2.core.Transferable;
import elemental2.dom.Event;
import elemental2.dom.EventTarget;
import elemental2.dom.EventListener;
import jsinterop.annotations.JsFunction;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import elemental2.dom.MessageEvent;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Worker implements EventTarget {
    @JsFunction
    public interface OnerrorFn {
        void onInvoke(ErrorEvent p0);
    }

    @JsFunction
    public interface OnmessageFn {
        void onInvoke(MessageEvent<Object> p0);
    }

    public Worker.OnerrorFn onerror;
    public Worker.OnmessageFn onmessage;

    public Worker(String scriptURL, WorkerOptions options) {
    }

    public Worker(String scriptURL) {
    }

    public native void addEventListener(String type, EventListener listener,
            EventTarget.AddEventListenerOptionsUnionType options);

    public native void addEventListener(String type, EventListener listener);

    public native boolean dispatchEvent(Event evt);

    public native void postMessage(Object message, Transferable[] transfer);

    public native void postMessage(Object message);

    public native void removeEventListener(String type, EventListener listener,
            EventTarget.RemoveEventListenerOptionsUnionType options);

    public native void removeEventListener(String type, EventListener listener);

    public native void terminate();

    public native void webkitPostMessage(Object message, Transferable[] transfer);

    public native void webkitPostMessage(Object message);
}
