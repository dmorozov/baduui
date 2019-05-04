package elemental2.promise;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Base contract of IThenable promise provided for compatibility with non-official Promise
 * implementations.
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface IThenable<T> {
   @JsFunction
   interface ThenOnFulfilledCallbackFn<T, V> {
      IThenable<V> onInvoke(T p0);
   }

   @JsFunction
   interface ThenOnRejectedCallbackFn<V> {
      IThenable<V> onInvoke(Object p0);
   }

   <V> IThenable<V> then(ThenOnFulfilledCallbackFn<? super T, ? extends V> onFulfilled);

   <V> IThenable<V> then(
           ThenOnFulfilledCallbackFn<? super T, ? extends V> onFulfilled,
           ThenOnRejectedCallbackFn<? extends V> onRejected);
}
