package elemental2.media;
import elemental2.media.MediaKeySystemConfiguration;
import elemental2.dom.Navigator;
import jsinterop.base.Js;
import elemental2.media.MediaKeySystemAccess;
import jsinterop.annotations.JsOverlay;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;
@JsType(isNative = true, name = "Navigator", namespace = JsPackage.GLOBAL)
public class MediaNavigator extends Navigator{
@JsOverlay
public static MediaNavigator of(Navigator o){
return Js.cast(o);
}
public native Promise<MediaKeySystemAccess> requestMediaKeySystemAccess(String keySystem,MediaKeySystemConfiguration[] supportedConfigurations);
}
