package elemental2.media;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import elemental2.media.MediaKeySystemMediaCapability;
import jsinterop.annotations.JsOverlay;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaKeySystemConfiguration{
@JsOverlay
static MediaKeySystemConfiguration create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
MediaKeySystemMediaCapability[] getAudioCapabilities();
@JsProperty
String getDistinctiveIdentifier();
@JsProperty
String[] getInitDataTypes();
@JsProperty
String getPersistentState();
@JsProperty
MediaKeySystemMediaCapability[] getVideoCapabilities();
@JsProperty
void setAudioCapabilities(MediaKeySystemMediaCapability[] audioCapabilities);
@JsProperty
void setDistinctiveIdentifier(String distinctiveIdentifier);
@JsProperty
void setInitDataTypes(String[] initDataTypes);
@JsProperty
void setPersistentState(String persistentState);
@JsProperty
void setVideoCapabilities(MediaKeySystemMediaCapability[] videoCapabilities);
}
