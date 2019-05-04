package com.badu.ui.platforms.web.resources;

import com.badu.ui.core.AbstractResource;

public class WebResource extends AbstractResource<String> {

   private final String resourcePath;

   public WebResource(String resourcePath) {
      this.resourcePath = resourcePath;
   }

   @Override public void loadResource() {
      successListener.OnReady(resourcePath);
   }
}
