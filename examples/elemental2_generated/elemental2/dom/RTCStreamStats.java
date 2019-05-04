package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.dom.RTCStats;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCStreamStats extends RTCStats{
@JsProperty
String getCodecId();
@JsProperty
double getFirCount();
@JsProperty
String getKind();
@JsProperty
double getNackCount();
@JsProperty
double getPliCount();
@JsProperty
double getQpSum();
@JsProperty
double getSliCount();
@JsProperty
double getSsrc();
@JsProperty
String getTransportId();
}
