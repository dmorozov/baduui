package com.badu.ui.components;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.Resource;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.components.StatelessWidget;
import com.badu.ui.core.components.platform.ImageWidget;

import java.util.Map;

public class Image extends StatelessWidget<Image, ImageWidget> {

   public static final String TAG = "image";
   private static final String ATTR_SRC = "src";

   static {
      Image.registerComponent();
   }
   public static void registerComponent() {
      ComponentRegistry.registerFactory(Image.TAG, new ComponentFactoryImpl());
   }

   private Resource src;

   public Image(final Resource src) {
      super(null);
      this.src = src;
   }

   protected Image(Map<String, String> attributes) {
      super(attributes);

      final String srcAttr =  attributes.get(ATTR_SRC);
      if (null != srcAttr && srcAttr.length() > 0) {
         this.src = BUIPlatform.PLATFORM.getResourceManager().findById(srcAttr);
      }
      else {
         this.src = null;
      }
   }

   @Override protected ImageWidget createNative() {
      return BUIPlatform.PLATFORM.componentFactory().createImage(src, getWidth(), getHeight());
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?,?> createComponent(String tagName, Map<String, String> attributes) {
         return new Image(attributes);
      }
   }

   public Resource getSrc() {
      return src;
   }

   public Image setSrc(Resource src) {
      this.src = src;
      applyAttributes();
      return this;
   }
}
