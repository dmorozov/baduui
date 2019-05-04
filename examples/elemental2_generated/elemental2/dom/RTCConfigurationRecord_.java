package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.dom.RTCConfigurationInterface_;
import elemental2.dom.RTCIceServerInterface_;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCConfigurationRecord_{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface GetIceServersArrayUnionType{
@JsOverlay
static RTCConfigurationRecord_.GetIceServersArrayUnionType of(Object o){
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
@JsOverlay
static RTCConfigurationRecord_ create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
RTCConfigurationRecord_.GetIceServersArrayUnionType[] getIceServers();
@JsProperty
String getSdpSemantics();
@JsProperty
void setIceServers(RTCConfigurationRecord_.GetIceServersArrayUnionType[] iceServers);
@JsProperty
void setSdpSemantics(String sdpSemantics);
}
