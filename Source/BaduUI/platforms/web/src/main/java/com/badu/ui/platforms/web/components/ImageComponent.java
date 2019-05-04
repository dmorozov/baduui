package com.badu.ui.platforms.web.components;

import com.badu.ui.core.Resource;
import com.badu.ui.core.components.platform.ImageWidget;
import com.badu.ui.platforms.web.resources.WebResource;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLImageElement;
import jsinterop.base.Js;

public class ImageComponent extends AbstractComponent<HTMLImageElement> implements ImageWidget {

   public ImageComponent(Resource src, int width, int height) {
      super(createComponent(src, width, height));
   }

   private static HTMLImageElement createComponent(Resource resource, int width, int height) {
      final HTMLImageElement img = Js.cast(DomGlobal.document.createElement("img"));

      WebResource src = Js.cast(resource);
      src.whenReady(path -> img.src = path ).loadResource();
      if (width > 0) img.width = width;
      if (height > 0) img.height = height;
      return img;
   }

   public void setSrc(Resource resource) {
      WebResource src = Js.cast(resource);
      src.whenReady(path -> getPlatformComponent().src = path ).loadResource();
   }
}
