package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.dom.MediaStreamTrack;
import elemental2.dom.RTCRtpContributingSource;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpReceiver{
RTCRtpContributingSource[] getContributingSources();
RTCRtpContributingSource[] getSynchronizationSources();
@JsProperty
MediaStreamTrack getTrack();
}
