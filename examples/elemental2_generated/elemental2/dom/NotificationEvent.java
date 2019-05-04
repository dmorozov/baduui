package elemental2.dom;
import elemental2.dom.Notification;
import elemental2.dom.ExtendableEventInit;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.ExtendableEvent;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class NotificationEvent extends ExtendableEvent{
public String action;
public Notification notification;
public NotificationEvent(String type,ExtendableEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(ExtendableEventInit)null);
}
public NotificationEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(ExtendableEventInit)null);
}
}
