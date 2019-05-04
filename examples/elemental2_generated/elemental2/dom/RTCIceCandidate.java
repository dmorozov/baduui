package elemental2.dom;
import elemental2.dom.RTCIceCandidateInit;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RTCIceCandidate{
public String candidate;
public int sdpMLineIndex;
public String sdpMid;
public RTCIceCandidate(){}
public RTCIceCandidate(RTCIceCandidateInit candidateInitDict){}
}
