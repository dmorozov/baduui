package elemental2.dom;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
import elemental2.dom.CustomEventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class CustomEvent<T> extends Event{
public T detail;
public CustomEvent(String type,CustomEventInit<T> eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public CustomEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public native void initCustomEvent(String eventType,boolean bubbles,boolean cancelable,T detail);
}
