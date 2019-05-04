package elemental2.media;
import elemental2.media.OfflineAudioContext;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, name = "webkitOfflineAudioContext", namespace = JsPackage.GLOBAL)
public class WebkitOfflineAudioContext extends OfflineAudioContext{
public WebkitOfflineAudioContext(double numberOfChannels,int length,double sampleRate){
// This call is only here for java compilation purpose.
super(0,0,0);
}
}
