package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsFunction;
import elemental2.core.Transferable;
import elemental2.dom.WorkerGlobalScope;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.MessageEvent;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface DedicatedWorkerGlobalScope extends WorkerGlobalScope{
@JsFunction
public interface OnmessageFn{
void onInvoke(MessageEvent<Object> p0);
}
@JsProperty
DedicatedWorkerGlobalScope.OnmessageFn getOnmessage();
void postMessage(Object message,Transferable[] transfer);
void postMessage(Object message);
@JsProperty
void setOnmessage(DedicatedWorkerGlobalScope.OnmessageFn onmessage);
void webkitPostMessage(Object message,Transferable[] transfer);
void webkitPostMessage(Object message);
}
