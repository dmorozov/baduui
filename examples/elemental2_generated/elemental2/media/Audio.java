package elemental2.media;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import elemental2.core.Float32Array;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsArray;
import elemental2.dom.HTMLAudioElement;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Audio extends HTMLAudioElement{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface MozWriteAudioBufferUnionType{
@JsOverlay
static Audio.MozWriteAudioBufferUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default JsArray asJsArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
@JsOverlay
default boolean isJsArray(){
return (Object)this instanceof JsArray;
}
}
public Audio(){}
public Audio(String src){}
public native double mozCurrentSampleOffset();
public native Object mozSetup(double channels,double rate);
@JsOverlay
public final Object mozWriteAudio(Float32Array buffer){
return mozWriteAudio(Js.<Audio.MozWriteAudioBufferUnionType>uncheckedCast(buffer));
}
@JsOverlay
public final Object mozWriteAudio(JsArray buffer){
return mozWriteAudio(Js.<Audio.MozWriteAudioBufferUnionType>uncheckedCast(buffer));
}
public native Object mozWriteAudio(Audio.MozWriteAudioBufferUnionType buffer);
}
