package com.badu.ui.components.menu;

import com.badu.ui.core.components.common.Box;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.RenderContext;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.components.attributes.BUIBorder;

import java.util.Map;

public class MenuItem extends Box {

   public static final String TAG = "menu-item";

   private Menu menu = null;

   static {
      MenuItem.registerComponent();
   }

   public static void registerComponent() {
      ComponentRegistry.registerFactory(MenuItem.TAG, new ComponentFactoryImpl());
   }

   public MenuItem() {
      super(null);

      initialize();
   }

   public MenuItem(Map<String, String> attributes) {
      super(attributes);

      initialize();
   }

   protected void initialize() {
      this.onclick = this::onItemClick;
      this.onmouseover = this::onMouseOver;
      this.onmouseout = this::onMouseOut;

      setBorderBottom(new BUIBorder(
              BUIPlatform.THEME.menuItemBorderWidth(),
              BUIPlatform.THEME.menuItemBorderStyle(),
              BUIPlatform.THEME.menuItemBorderColor()));
      setBackgroundColor(BUIPlatform.THEME.menuItemBgColor());
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?, ?> createComponent(String tagName, Map<String, String> attributes) {
         return new MenuItem(attributes);
      }
   }

   @Override
   protected void OnAfterRender(final RenderContext context) {
      menu = context.getProperty(Menu.TAG);
   }

   protected void onItemClick() {
      triggerUIEvent(getTriggerEvent(), getEventArgs());
   }

   protected void onMouseOver() {
      setBackgroundColor(BUIPlatform.THEME.menuItemActiveBgColor());
   }

   protected void onMouseOut() {
      setBackgroundColor(BUIPlatform.THEME.menuItemBgColor());
   }
}
