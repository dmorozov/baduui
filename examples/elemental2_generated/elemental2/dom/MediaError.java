package elemental2.dom;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MediaError{
public static double MEDIA_ERR_ABORTED;
public static double MEDIA_ERR_DECODE;
public static double MEDIA_ERR_NETWORK;
public static double MEDIA_ERR_SRC_NOT_SUPPORTED;
public int code;
public String message;
}
