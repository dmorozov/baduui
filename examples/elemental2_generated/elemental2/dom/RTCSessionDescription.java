package elemental2.dom;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsObject;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RTCSessionDescription{
public String sdp;
public String type;
public RTCSessionDescription(){}
public RTCSessionDescription(JsObject descriptionInitDict){}
public RTCSessionDescription(Object descriptionInitDict){}
}
