package elemental2.media;
import jsinterop.annotations.JsFunction;
import elemental2.core.Transferable;
import elemental2.dom.Event;
import elemental2.media.AudioNode;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class AudioWorkerNode extends AudioNode{
@JsFunction
public interface OnmessageFn{
Object onInvoke(Event p0);
}
public AudioWorkerNode.OnmessageFn onmessage;
public native Object postMessage(Object message,Transferable[] transfer);
public native Object postMessage(Object message);
}
