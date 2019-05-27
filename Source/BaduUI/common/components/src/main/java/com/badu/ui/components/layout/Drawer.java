package com.badu.ui.components.layout;

import com.badu.ui.components.BADUComponents;
import com.badu.ui.core.components.common.Box;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.RenderContext;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.utils.TemplateParser;

import java.util.Map;

public class Drawer extends Box {

   public static final String TAG = "drawer";
   private static final String DRAWER_TEMPLATE = "templates/core/components/drawer.bui";

   static {
      Drawer.registerComponent();
   }

   public static void registerComponent() {
      ComponentRegistry.registerFactory(Drawer.TAG, new ComponentFactoryImpl());
   }

   public Drawer() {
      super(null);
   }

   public Drawer(Map<String, String> attributes) {
      super(attributes);
   }

   @Override
   protected void OnBeforeRender(final RenderContext context) {

   }

   @Override
   public void build(final RenderContext context) {
      BADUComponents.initialize();

      TemplateParser.loadFromTemplate(this, DRAWER_TEMPLATE, context)
              .whenReady(widget -> {
                 render(context);
              })
              .whenError(error -> {
                 BUIPlatform.PLATFORM.log().error("Unable to load template: " + DRAWER_TEMPLATE, error);
              })
              .loadResource();
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?, ?> createComponent(String tagName, Map<String, String> attributes) {
         return new Drawer(attributes);
      }
   }
}
