package com.badu.ui.core;

import java.util.HashMap;
import java.util.Map;

public class RenderContext {

   private final Map<String, Object> properties = new HashMap<>();

   public RenderContext(){}

   private RenderContext(final Map<String, Object> props){
      if (null != props && props.size() > 0) {
         this.properties.putAll(props);
      }
   }

   public RenderContext clone() {
      return new RenderContext(this.properties);
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
