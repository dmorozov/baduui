package elemental2.dom;
import elemental2.promise.IThenable;
import elemental2.dom.ExtendableEventInit;
import elemental2.dom.Event;
import elemental2.dom.ServiceWorker;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ExtendableEvent extends Event{
public ServiceWorker activeWorker;
public ExtendableEvent(String type,ExtendableEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public ExtendableEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public native void waitUntil(IThenable f);
}
