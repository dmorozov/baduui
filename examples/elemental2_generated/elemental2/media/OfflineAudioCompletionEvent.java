package elemental2.media;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
import elemental2.media.AudioBuffer;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class OfflineAudioCompletionEvent extends Event{
public AudioBuffer renderedBuffer;
public OfflineAudioCompletionEvent(){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
