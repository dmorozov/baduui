package elemental2.dom;
import elemental2.dom.ExtendableEventInit;
import elemental2.dom.PushMessageData;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.ExtendableEvent;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class PushEvent extends ExtendableEvent{
public PushMessageData data;
public PushEvent(String type,ExtendableEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(ExtendableEventInit)null);
}
public PushEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(ExtendableEventInit)null);
}
}
