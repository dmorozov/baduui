package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.dom.RTCRtpReceiver;
import elemental2.dom.RTCRtpSender;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpTransceiver{
@JsProperty
String getCurrentDirection();
@JsProperty
String getDirection();
@JsProperty
String getMid();
@JsProperty
RTCRtpReceiver getReceiver();
@JsProperty
RTCRtpSender getSender();
@JsProperty
boolean isStopped();
Object setDirection(String direction);
Object stop();
}
