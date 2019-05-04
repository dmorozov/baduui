package com.badu.ui.core;

import java.util.HashMap;
import java.util.Map;
import com.badu.ui.core.ComponentFactory;

public class ComponentRegistry {

   private static final Object MUTEX = new Object();
   private static final Map<String, ComponentFactory> factories = new HashMap<>();

   public static void registerFactory(String componentName, ComponentFactory factory) {
      synchronized (MUTEX) {
         factories.put(componentName, factory);
      }
   }

   public static ComponentFactory resolveFactory(String componentName) {
      synchronized (MUTEX) {
         return factories.get(componentName);
      }
   }
}
