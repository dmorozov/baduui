package com.badu.ui.platforms.web.utils;

import com.badu.ui.core.exceptions.ResourceException;
import elemental2.dom.XMLHttpRequest;
import elemental2.promise.Promise;

public class AjaxUtils {

   public static Promise<XMLHttpRequest.ResponseUnionType> get(final String resourcePath) {

      return new Promise<>((resolve, reject) -> {
         // Do the usual XHR stuff
         XMLHttpRequest req = new XMLHttpRequest();
         req.open("GET", resourcePath);

         req.onload = (event) -> {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
               // Resolve the promise with the response text
               resolve.onInvoke(req.response);
            }
            else {
               // Otherwise reject with the status text
               // which will hopefully be a meaningful error
               reject.onInvoke(new ResourceException(req.statusText));
            }
         };

         // Handle network errors
         req.onerror = (event) -> {
            reject.onInvoke(new ResourceException("Network Error"));
            return event;
         };

         // Make the request
         req.send();
      });
   }
}
