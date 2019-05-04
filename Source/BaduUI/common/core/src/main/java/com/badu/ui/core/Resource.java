package com.badu.ui.core;

import com.badu.ui.core.exceptions.ResourceException;

public interface Resource<T> {

   Resource<T> whenReady(OnReady<T> listener);
   Resource<T> whenError(OnError error);
   void loadResource();

   interface OnReady<T> {
      void OnReady(T resource);
   }

   interface OnError {
      void OnError(ResourceException error);
   }
}
