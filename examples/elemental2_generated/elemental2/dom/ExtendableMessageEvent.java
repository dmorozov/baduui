package elemental2.dom;
import elemental2.dom.MessagePort;
import elemental2.dom.ExtendableMessageEventInit;
import jsinterop.base.Js;
import elemental2.dom.ServiceWorkerClient;
import elemental2.dom.ExtendableEventInit;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.ServiceWorker;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.ExtendableEvent;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ExtendableMessageEvent<T> extends ExtendableEvent{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface SourceUnionType{
@JsOverlay
static ExtendableMessageEvent.SourceUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default MessagePort asMessagePort(){
return Js.cast(this);
}
@JsOverlay
default ServiceWorker asServiceWorker(){
return Js.cast(this);
}
@JsOverlay
default ServiceWorkerClient asServiceWorkerClient(){
return Js.cast(this);
}
@JsOverlay
default boolean isMessagePort(){
return (Object)this instanceof MessagePort;
}
@JsOverlay
default boolean isServiceWorker(){
return (Object)this instanceof ServiceWorker;
}
@JsOverlay
default boolean isServiceWorkerClient(){
return (Object)this instanceof ServiceWorkerClient;
}
}
public T data;
public String lastEventId;
public String origin;
public MessagePort[] ports;
public ExtendableMessageEvent.SourceUnionType source;
public ExtendableMessageEvent(String type,ExtendableMessageEventInit<T> eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(ExtendableEventInit)null);
}
public ExtendableMessageEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(ExtendableEventInit)null);
}
}
