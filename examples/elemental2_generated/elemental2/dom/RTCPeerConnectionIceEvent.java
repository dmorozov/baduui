package elemental2.dom;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.RTCIceCandidate;
import elemental2.core.JsObject;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RTCPeerConnectionIceEvent{
public RTCIceCandidate candidate;
public RTCPeerConnectionIceEvent(String type,JsObject eventInitDict){}
public RTCPeerConnectionIceEvent(String type,Object eventInitDict){}
}
