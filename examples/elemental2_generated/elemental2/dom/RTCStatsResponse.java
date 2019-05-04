package elemental2.dom;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.RTCStatsReport;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCStatsResponse{
RTCStatsReport[] result();
}
