package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.dom.RTCIceServerInterface_;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCConfigurationInterface_{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface GetIceServersArrayUnionType{
@JsOverlay
static RTCConfigurationInterface_.GetIceServersArrayUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default RTCConfigurationInterface_.IceServersFieldType asIceServersFieldType(){
return Js.cast(this);
}
@JsOverlay
default RTCIceServerInterface_ asRTCIceServerInterface_(){
return Js.cast(this);
}
@JsOverlay
default RTCConfigurationInterface_.UrlsFieldType asUrlsFieldType(){
return Js.cast(this);
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface IceServersFieldType{
@JsOverlay
static RTCConfigurationInterface_.IceServersFieldType create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
String getUrls();
@JsProperty
void setUrls(String urls);
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface UrlsFieldType{
@JsOverlay
static RTCConfigurationInterface_.UrlsFieldType create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
String[] getUrls();
@JsProperty
void setUrls(String[] urls);
}
@JsProperty
RTCConfigurationInterface_.GetIceServersArrayUnionType[] getIceServers();
@JsProperty
String getSdpSemantics();
@JsProperty
void setIceServers(RTCConfigurationInterface_.GetIceServersArrayUnionType[] iceServers);
@JsProperty
void setSdpSemantics(String sdpSemantics);
}
