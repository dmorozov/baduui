package com.badu.ui.components.menu;

import com.badu.ui.core.components.common.Box;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.RenderContext;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.components.attributes.FlexLayout;
import com.badu.ui.core.components.platform.FlexboxWidget;

import java.util.HashMap;
import java.util.Map;

public class Menu extends Box {

   public static final String TAG = "menu";

   static {
      Menu.registerComponent();
   }

   public static void registerComponent() {
      ComponentRegistry.registerFactory(Menu.TAG, new ComponentFactoryImpl());
      MenuItem.registerComponent();
   }

   public Menu() {
      super(Menu.combineWithDefaults(null));
   }

   public Menu(Map<String, String> attributes) {
      super(Menu.combineWithDefaults(attributes));
   }

   @Override
   protected void OnBeforeRenderChildren(final RenderContext context, final FlexboxWidget self) {
      context.setProperty(Menu.TAG, this);
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?, ?> createComponent(String tagName, Map<String, String> attributes) {
         return new Menu(attributes);
      }
   }

   private static Map<String, String> combineWithDefaults(Map<String, String> attributes) {
      Map<String, String> all = new HashMap<>();
      if (null != attributes && attributes.size() > 0) {
         all.putAll(attributes);
      }

      all.put(Box.ATTR_DIRECTION, FlexLayout.vertical.name());
      return all;
   }
}
