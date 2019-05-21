package com.badu.ui.platforms.web.components;

import com.badu.ui.core.Resource;
import com.badu.ui.core.components.platform.ImageWidget;
import com.badu.ui.platforms.web.resources.WebResource;
import jsinterop.base.Js;
import com.badu.ui.jsinterop.core.dom.HTMLImageElement;
import com.badu.ui.jsinterop.core.html.Window;

public class ImageComponent extends AbstractComponent<HTMLImageElement> implements ImageWidget {

   public ImageComponent(Resource src, int width, int height) {
      super(createComponent(src, width, height));
   }

   private static HTMLImageElement createComponent(Resource resource, int width, int height) {
      final HTMLImageElement img = Js.cast(Window.getDocument().createElement("img"));

      WebResource src = Js.cast(resource);
      src.whenReady(path -> img.setSrc(path) ).loadResource();
      if (width > 0) img.setWidth(width);
      if (height > 0) img.setHeight(height);
      return img;
   }

   public void setSrc(Resource resource) {
      WebResource src = Js.cast(resource);
      src.whenReady(path -> getPlatformComponent().setSrc(path) ).loadResource();
   }
}
