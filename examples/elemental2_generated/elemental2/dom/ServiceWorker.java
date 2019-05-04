package elemental2.dom;

import elemental2.dom.WorkerOptions;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Event;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.Worker;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ServiceWorker extends Worker {
    @JsFunction
    public interface OnstatechangeFn {
        Object onInvoke(Event p0);
    }

    public ServiceWorker.OnstatechangeFn onstatechange;
    public String scriptURL;
    public String state;

    public ServiceWorker() {
        // This call is only here for java compilation purpose.
        super((String) null, (WorkerOptions) null);
    }
}
