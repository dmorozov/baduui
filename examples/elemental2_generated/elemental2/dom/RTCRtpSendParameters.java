package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import elemental2.dom.RTCRtpEncodingParameters;
import jsinterop.annotations.JsOverlay;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpSendParameters{
@JsOverlay
static RTCRtpSendParameters create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
String getDegradationPreference();
@JsProperty
RTCRtpEncodingParameters[] getEncodings();
@JsProperty
String getTransactionId();
@JsProperty
void setDegradationPreference(String degradationPreference);
@JsProperty
void setEncodings(RTCRtpEncodingParameters[] encodings);
@JsProperty
void setTransactionId(String transactionId);
}
