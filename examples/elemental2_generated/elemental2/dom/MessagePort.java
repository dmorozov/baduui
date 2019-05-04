package elemental2.dom;

import elemental2.dom.EventListener;
import jsinterop.annotations.JsFunction;
import elemental2.core.Transferable;
import elemental2.dom.Event;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.MessageEvent;
import elemental2.dom.EventTarget;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MessagePort implements Transferable, EventTarget {
    @JsFunction
    public interface OnmessageFn {
        void onInvoke(MessageEvent<Object> p0);
    }

    public MessagePort.OnmessageFn onmessage;

    public native void addEventListener(String type, EventListener listener,
            EventTarget.AddEventListenerOptionsUnionType options);

    public native void addEventListener(String type, EventListener listener);

    public native void close();

    public native boolean dispatchEvent(Event evt);

    public native void postMessage(Object message, Transferable[] transfer);

    public native void postMessage(Object message);

    public native void removeEventListener(String type, EventListener listener,
            EventTarget.RemoveEventListenerOptionsUnionType options);

    public native void removeEventListener(String type, EventListener listener);

    public native void start();
}
