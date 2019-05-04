package elemental2.dom;
import elemental2.dom.EventListener;
import elemental2.dom.MessagePort;
import elemental2.dom.ErrorEvent;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventTarget;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SharedWorker implements EventTarget{
@JsFunction
public interface OnerrorFn{
void onInvoke(ErrorEvent p0);
}
public SharedWorker.OnerrorFn onerror;
public MessagePort port;
public SharedWorker(String scriptURL,String name){}
public SharedWorker(String scriptURL){}
public native void addEventListener(String type,EventListener listener,EventTarget.AddEventListenerOptionsUnionType options);
public native void addEventListener(String type,EventListener listener);
public native boolean dispatchEvent(Event evt);
public native void removeEventListener(String type,EventListener listener,EventTarget.RemoveEventListenerOptionsUnionType options);
public native void removeEventListener(String type,EventListener listener);
}
