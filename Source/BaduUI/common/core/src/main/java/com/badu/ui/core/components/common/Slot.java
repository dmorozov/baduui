package com.badu.ui.core.components.common;

import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.components.BUIWidget;

import java.util.Map;

public class Slot extends Box {

   public static final String TAG = "slot";
   private static final String ATTR_NAME = "name";

   static {
      Slot.registerComponent();
   }

   public static void registerComponent() {
      ComponentRegistry.registerFactory(Slot.TAG, new ComponentFactoryImpl());
   }

   private final String name;

   public Slot(final String name) {
      super(null);
      this.name = name;
   }

   public Slot(Map<String, String> attributes) {
      super(attributes);
      this.name = attributes.get(ATTR_NAME);
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?, ?> createComponent(String tagName, Map<String, String> attributes) {
         return new Slot(attributes);
      }
   }

   public String getName() {
      return name;
   }
}
