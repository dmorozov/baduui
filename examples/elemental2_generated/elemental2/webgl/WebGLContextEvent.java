package elemental2.webgl;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WebGLContextEvent extends Event{
public String statusMessage;
public WebGLContextEvent(String eventType){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
