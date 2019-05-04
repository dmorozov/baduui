package com.badu.ui.core.components.common;

import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.components.BUIWidget;

import java.util.Map;

public class SlotTarget extends Box {

   public static final String TAG = "slotTarget";
   private static final String ATTR_NAME = "name";

   static {
      SlotTarget.registerComponent();
   }

   public static void registerComponent() {
      ComponentRegistry.registerFactory(SlotTarget.TAG, new SlotTarget.ComponentFactoryImpl());
   }

   private final String name;

   public SlotTarget(final String name) {
      super(null);
      this.name = name;
   }

   public SlotTarget(Map<String, String> attributes) {
      super(attributes);
      this.name = attributes.get(ATTR_NAME);
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?, ?> createComponent(String tagName, Map<String, String> attributes) {
         return new SlotTarget(attributes);
      }
   }

   public String getName() {
      return name;
   }
}
