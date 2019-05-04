package elemental2.dom;
import java.lang.Void;
import elemental2.core.Transferable;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ServiceWorkerClient{
public boolean focused;
public String frameType;
public boolean hidden;
public String id;
public Promise<Void> ready;
public String url;
public String visibilityState;
public native Promise focus();
public native Promise<ServiceWorkerClient> navigate(String url);
public native void postMessage(Object message,Transferable[] transfer);
public native void postMessage(Object message);
}
