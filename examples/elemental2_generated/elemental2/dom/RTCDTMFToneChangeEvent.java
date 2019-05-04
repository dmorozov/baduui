package elemental2.dom;
import elemental2.dom.RTCDTMFToneChangeEventInit;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RTCDTMFToneChangeEvent extends Event{
public String tone;
public RTCDTMFToneChangeEvent(String type,RTCDTMFToneChangeEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
