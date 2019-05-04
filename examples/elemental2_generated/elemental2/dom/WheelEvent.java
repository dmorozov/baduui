package elemental2.dom;
import elemental2.dom.MouseEventInit;
import elemental2.dom.WheelEventInit;
import elemental2.dom.MouseEvent;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WheelEvent extends MouseEvent{
public static double DOM_DELTA_LINE;
public static double DOM_DELTA_PAGE;
public static double DOM_DELTA_PIXEL;
public int deltaMode;
public double deltaX;
public double deltaY;
public double deltaZ;
public WheelEvent(String type,WheelEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(MouseEventInit)null);
}
public WheelEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(MouseEventInit)null);
}
}
