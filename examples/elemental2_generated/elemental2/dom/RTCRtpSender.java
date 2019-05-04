package elemental2.dom;
import elemental2.dom.RTCDTMFSender;
import jsinterop.annotations.JsProperty;
import java.lang.Void;
import elemental2.dom.RTCRtpSendParameters;
import elemental2.dom.MediaStreamTrack;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpSender{
@JsProperty
RTCDTMFSender getDtmf();
RTCRtpSendParameters getParameters();
@JsProperty
MediaStreamTrack getTrack();
Promise<Void> replaceTrack(MediaStreamTrack track);
Promise<Void> setParameters(RTCRtpSendParameters params);
}
