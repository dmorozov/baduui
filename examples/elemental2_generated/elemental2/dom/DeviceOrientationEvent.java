package elemental2.dom;
import elemental2.dom.Event;
import elemental2.dom.DeviceOrientationEventInit;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DeviceOrientationEvent extends Event{
public boolean absolute;
public double alpha;
public double beta;
public double gamma;
public double webkitCompassAccuracy;
public double webkitCompassHeading;
public DeviceOrientationEvent(String type,DeviceOrientationEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public DeviceOrientationEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
