package elemental2.media;
import elemental2.dom.Event;
import elemental2.media.MediaKeySession;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
import elemental2.core.ArrayBuffer;
import elemental2.core.JsObject;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MediaKeyMessageEvent extends Event{
public ArrayBuffer message;
public String messageType;
public MediaKeySession target;
public MediaKeyMessageEvent(String type,JsObject eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public MediaKeyMessageEvent(String type,Object eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public MediaKeyMessageEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
