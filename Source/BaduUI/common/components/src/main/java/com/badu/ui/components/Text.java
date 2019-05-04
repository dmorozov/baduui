package com.badu.ui.components;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.components.StatelessWidget;
import com.badu.ui.core.components.platform.TextWidget;

import java.util.Map;

public class Text extends StatelessWidget<Text, TextWidget> {

   public static final String TAG = "text";
   private static final String ATTR_TEXT = "text";
   private static final String ATTR_COLOR = "color";

   static {
      Text.registerComponent();
   }
   public static void registerComponent() {
      ComponentRegistry.registerFactory(Text.TAG, new ComponentFactoryImpl());
   }

   private final String text;

   private String color;

   public Text(final String text) {
      super(null);
      this.text = text;
   }

   protected Text(Map<String, String> attributes) {
      super(attributes);
      this.text = attributes.get(ATTR_TEXT);
      this.color = attributes.get(ATTR_COLOR);
   }

   @Override protected TextWidget createNative() {
      return BUIPlatform.PLATFORM.componentFactory().createText(text);
   }

   public String getText() {
      return text;
   }

   public String getColor() {
      return color;
   }

   public Text setColor(String color) {
      this.color = color;
      applyAttributes();
      return this;
   }

   @Override
   protected void applyAttributes() {
      super.applyAttributes();;

      final TextWidget nativeComponent = nativeComponent();
      if (null != nativeComponent) {
         if (null != text)
            nativeComponent.setText(text);
         if (null != color)
            nativeComponent.setColor(color);
      }
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?,?> createComponent(String tagName, Map<String, String> attributes) {
         return new Text(attributes);
      }
   }
}
