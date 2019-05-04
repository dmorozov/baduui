package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import elemental2.dom.RTCRtpEncodingParameters;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.MediaStream;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpTransceiverInit{
@JsOverlay
static RTCRtpTransceiverInit create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
String getDirection();
@JsProperty
RTCRtpEncodingParameters[] getSendEncodings();
@JsProperty
MediaStream[] getStreams();
@JsProperty
void setDirection(String direction);
@JsProperty
void setSendEncodings(RTCRtpEncodingParameters[] sendEncodings);
@JsProperty
void setStreams(MediaStream[] streams);
}
