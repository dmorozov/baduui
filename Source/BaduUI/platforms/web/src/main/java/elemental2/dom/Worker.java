package elemental2.dom;

import elemental2.core.Transferable;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Worker implements EventTarget {
   @JsFunction
   public interface OnerrorFn {
      void onInvoke(ErrorEvent p0);
   }

   @JsFunction
   public interface OnmessageFn {
      void onInvoke(MessageEvent<Object> p0);
   }

   public Worker.OnerrorFn onerror;
   public Worker.OnmessageFn onmessage;

   public Worker(String scriptURL, WorkerOptions options) {
   }

   public Worker(String scriptURL) {
   }

   public native void addEventListener(String type, EventListener listener,
           EventTarget.AddEventListenerOptionsUnionType options);

   public native void addEventListener(String type, EventListener listener);

   public native boolean dispatchEvent(Event evt);

   public native void postMessage(Object message, Transferable[] transfer);

   public native void postMessage(Object message);

   public native void removeEventListener(String type, EventListener listener,
           EventTarget.RemoveEventListenerOptionsUnionType options);

   public native void removeEventListener(String type, EventListener listener);

   public native void terminate();
}
