package com.badu.ui.core.exceptions;

public class ResourceException extends Exception {

   public ResourceException(String msg) {
      super(msg);
   }

   public ResourceException(String msg, Throwable e) {
      super(msg, e);
   }
}
