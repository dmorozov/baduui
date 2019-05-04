package elemental2.media;
import java.lang.Deprecated;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
import elemental2.media.ScriptProcessorNode;
import elemental2.media.AudioBuffer;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
@Deprecated
public class AudioProcessingEvent extends Event{
@Deprecated
public AudioBuffer inputBuffer;
@Deprecated
public ScriptProcessorNode node;
@Deprecated
public AudioBuffer outputBuffer;
@Deprecated
public double playbackTime;
public AudioProcessingEvent(){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
