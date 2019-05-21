package com.badu.ui.jsinterop.core.promise;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

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
