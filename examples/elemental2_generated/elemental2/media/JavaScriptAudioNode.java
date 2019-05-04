package elemental2.media;
import elemental2.dom.EventListener;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import java.lang.Deprecated;
import jsinterop.annotations.JsOverlay;
import elemental2.media.AudioNode;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.media.AudioProcessingEvent;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
@Deprecated
public class JavaScriptAudioNode extends AudioNode{
@JsFunction
public interface OnaudioprocessFn{
boolean onInvoke(AudioProcessingEvent p0);
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface OnaudioprocessUnionType{
@JsOverlay
static JavaScriptAudioNode.OnaudioprocessUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default EventListener asEventListener(){
return Js.cast(this);
}
@JsOverlay
default JavaScriptAudioNode.OnaudioprocessFn asOnaudioprocessFn(){
return Js.cast(this);
}
@JsOverlay
default boolean isOnaudioprocessFn(){
return (Object)this instanceof JavaScriptAudioNode.OnaudioprocessFn;
}
}
@Deprecated
public int bufferSize;
@Deprecated
public JavaScriptAudioNode.OnaudioprocessUnionType onaudioprocess;
}
