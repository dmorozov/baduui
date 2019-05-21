package com.badu.ui.core;

import java.util.HashMap;
import java.util.Map;

public class RenderContext {

   private final Map<String, Object> properties = new HashMap<>();

   public RenderContext(){}

   public RenderContext clone() {
      RenderContext copy = new RenderContext();
      copy.properties.putAll(this.properties);
      return copy;
   }

   public RenderContext setProperty(final String name, final Object value) {
      properties.put(name, value);
      return this;
   }

   public <T> T getProperty(final String name) {
      return getProperty(name, null);
   }

   public <T> T getProperty(final String name, T defaultValue) {
      final Object value = properties.get(name);
      if (null != value) {
         return (T) value;
      }

      return defaultValue;
   }
}
