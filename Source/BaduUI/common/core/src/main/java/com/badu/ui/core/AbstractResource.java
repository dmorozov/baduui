package com.badu.ui.core;

public abstract class AbstractResource<T> implements Resource<T> {

   protected OnReady<T> successListener;
   protected OnError errorListener;

   @Override public Resource<T> whenReady(OnReady<T> listener) {
      successListener = listener;
      return this;
   }

   @Override public Resource<T> whenError(OnError error) {
      errorListener = error;
      return this;
   }
}
