package elemental2.dom;
import elemental2.dom.ClipboardEventInit;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ClipboardEvent extends Event{
public ClipboardEvent(String type,ClipboardEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public ClipboardEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
