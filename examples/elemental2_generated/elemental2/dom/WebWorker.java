package elemental2.dom;
import elemental2.dom.EventListener;
import elemental2.dom.ErrorEvent;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Event;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.MessageEvent;
import elemental2.dom.EventTarget;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WebWorker implements EventTarget{
@JsFunction
public interface OnerrorFn{
void onInvoke(ErrorEvent p0);
}
@JsFunction
public interface OnmessageFn{
void onInvoke(MessageEvent<Object> p0);
}
public WebWorker.OnerrorFn onerror;
public WebWorker.OnmessageFn onmessage;
public native void addEventListener(String type,EventListener listener,EventTarget.AddEventListenerOptionsUnionType options);
public native void addEventListener(String type,EventListener listener);
public native boolean dispatchEvent(Event evt);
public native void postMessage(String message);
public native void removeEventListener(String type,EventListener listener,EventTarget.RemoveEventListenerOptionsUnionType options);
public native void removeEventListener(String type,EventListener listener);
public native void terminate();
}
