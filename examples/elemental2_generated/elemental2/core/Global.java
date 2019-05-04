package elemental2.core;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.Arguments;
import elemental2.core.JSONType;
@JsType(isNative = true, name = "window", namespace = JsPackage.GLOBAL)
public class Global{
@JsOverlay
public static final double Infinity=Global__Constants.Infinity;
public static JSONType JSON;
@JsOverlay
public static final double NaN=Global__Constants.NaN;
public static Arguments arguments;
@JsOverlay
public static final Object undefined=Global__Constants.undefined;
public static native Object Symbol();
public static native Object Symbol(String description);
public static native String decodeURI(String uri);
public static native String decodeURIComponent(String uri);
public static native String encodeURI(String uri);
public static native String encodeURIComponent(String uri);
public static native String escape(String str);
public static native Object eval(String code);
public static native boolean isFinite(Object num);
public static native boolean isNaN(Object num);
public static native double parseFloat(Object num);
public static native int parseInt(Object num,int base);
public static native String unescape(String str);
}
