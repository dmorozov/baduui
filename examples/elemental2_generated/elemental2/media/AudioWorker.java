package elemental2.media;
import elemental2.media.AudioParam;
import elemental2.media.AudioWorkerParamDescriptor;
import jsinterop.annotations.JsFunction;
import elemental2.core.Transferable;
import elemental2.dom.Event;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.media.AudioWorkerNode;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class AudioWorker{
@JsFunction
public interface OnloadedFn{
Object onInvoke(Event p0);
}
@JsFunction
public interface OnmessageFn{
Object onInvoke(Event p0);
}
public AudioWorker.OnloadedFn onloaded;
public AudioWorker.OnmessageFn onmessage;
public AudioWorkerParamDescriptor[] parameters;
public native AudioParam addParameter(String name,double defaultValue);
public native AudioWorkerNode createNode(double numberOfInputs,double numberOfOutputs);
public native Object postMessage(Object message,Transferable[] transfer);
public native Object postMessage(Object message);
public native Object removeParameter(String name);
public native Object terminate();
}
