package com.badu.ui.platforms.web.components;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.ViewportManager;
import com.badu.ui.core.components.attributes.VerticalAlign;
import com.badu.ui.core.components.attributes.ZOrder;
import com.badu.ui.core.components.events.OnClickEvent;
import com.badu.ui.core.components.events.OnMouseMoveEvent;
import com.badu.ui.core.components.events.OnMouseOutEvent;
import com.badu.ui.core.components.events.OnMouseOverEvent;
import com.badu.ui.platforms.web.utils.StringUtils;
import jsinterop.base.Js;
import com.badu.ui.jsinterop.core.dom.HTMLElement;
import com.badu.ui.jsinterop.core.dom.MouseEvent;

import java.util.HashMap;
import java.util.Map;

public abstract class AbstractComponent<T extends HTMLElement> implements PlatformComponent {

   private final T platformComponent;

   private final ViewportManager view;

   private static final Map<ZOrder, String> ZORDERS = new HashMap<ZOrder, String>(){{
      put(ZOrder.High, "bui-zorder-high");
      put(ZOrder.Medium, "bui-zorder-medium");
      put(ZOrder.Low, "bui-zorder-low");
   }};

   protected AbstractComponent(final T platformComponent) {
      this.platformComponent = platformComponent;
      this.view = BUIPlatform.PLATFORM.getViewportManager();
   }

   @Override public void addChild(PlatformComponent child) {
      final HTMLElement childElement = ((AbstractComponent<T>) child).getPlatformComponent();
      final HTMLElement self = getPlatformComponent();
      if (null != self) {
         self.appendChild(childElement);
      }
   }

   @Override public void destroyComponent() {
      final HTMLElement childElement = getPlatformComponent();
      childElement.remove();
   }

   @Override public void setId(String id) {
      getPlatformComponent().setAttribute("id", id);
   }

   public void setProperty(String name, String value) {
      final HTMLElement element = getPlatformComponent();
      element.getStyle().setProperty(name, value);
   }

   public void setProperty(String name, String value, boolean important) {
      final HTMLElement element = getPlatformComponent();
      if (important) {
         element.getStyle().setProperty(name, value, "important");
      } else {
         element.getStyle().setProperty(name, value);
      }
   }

   public void removeProperty(String name) {
      final HTMLElement element = getPlatformComponent();
      element.getStyle().removeProperty(name);
   }

   public void addClass(String cssClass) {
      final HTMLElement element = getPlatformComponent();
      if (!StringUtils.isEmpty(cssClass))
         element.getClassList().add(cssClass);
   }

   public void addClass(String... cssClasses) {
      if (null != cssClasses && cssClasses.length > 0) {
         // add(String... arr) is not supported in IE11, so looping over the array solving the problem
         for (String cssClass : cssClasses) {
            addClass(cssClass);
         }
      }
   }

   public void removeClass(String cssClass) {
      final HTMLElement element = getPlatformComponent();
      if (!StringUtils.isEmpty(cssClass))
         element.getClassList().remove(cssClass);
   }

   public void remove(String... cssClasses) {
      if (null != cssClasses && cssClasses.length > 0) {
         // remove(String... arr) is not supported in IE11, so looping over the array solving the problem
         for (String cssClass : cssClasses) {
            remove(cssClass);
         }
      }
   }

   public void replaceClass(String cssClass, String replacementClass) {
      if (hasClass(cssClass)) {
         remove(cssClass);
         addClass(replacementClass);
      }
   }

   public boolean hasClass(String cssClass) {
      final HTMLElement element = getPlatformComponent();
      if (!StringUtils.isEmpty(cssClass)) {
         return element.getClassList().contains(cssClass);
      }
      return false;
   }

   @Override public void setBackgroundColor(String color) {
      setProperty("background-color", color, false);
   }

   @Override public void setZOrder(ZOrder zorder) {
      final HTMLElement element = getPlatformComponent();
      final String className = ZORDERS.get(zorder);
      if (null != className) {
         element.getClassList().add(className);
      }
      else {
         BUIPlatform.PLATFORM.log().error("Unknown zorder: " + zorder);
      }
   }

   @Override public void setWidth(int width) {
      String value = view.calculatePixelSize(width) + "px";
      setProperty("width", value, false);
   }

   @Override public void setHeight(int height) {
      String value = view.calculatePixelSize(height) + "px";
      setProperty("height", value, false);
   }

   @Override public void setPaddingLeft(int padding) {
      String value = view.calculatePixelSize(padding) + "px";
      setProperty("padding-left", value, false);
   }

   @Override public void setPaddingRight(int padding) {
      String value = view.calculatePixelSize(padding) + "px";
      setProperty("padding-right", value, false);
   }

   @Override public void setPaddingTop(int padding) {
      String value = view.calculatePixelSize(padding) + "px";
      setProperty("padding-top", value, false);
   }

   @Override public void setPaddingBottom(int padding) {
      String value = view.calculatePixelSize(padding) + "px";
      setProperty("padding-bottom", value, false);
   }

   @Override public void setBorderTop(String border) {
      setProperty("border-top", border);
   }

   @Override public void setBorderLeft(String border) {
      setProperty("border-left", border);
   }

   @Override public void setBorderBottom(String border) {
      setProperty("border-bottom", border);
   }

   @Override public void setBorderRight(String border) {
      setProperty("border-right", border);
   }

   @Override public void setBorder(String border) {
      setProperty("border", border);
   }

   @Override public void setVerticalAlign(VerticalAlign verticalAlign) {
      if (null != verticalAlign) {
         switch (verticalAlign) {
         case top: setProperty("margin-bottom", "auto"); break;
         case bottom: setProperty("margin-top", "auto"); break;
         case center: setProperty("margin-bottom", "auto"); setProperty("margin-top", "auto"); break;
         }
      }
   }

   @Override public void registerClickHandler(OnClickEvent onclick) {
      final HTMLElement element = getPlatformComponent();
      element.setOnclick(event -> { onclick.onClick(); return Boolean.FALSE; });
   }

   @Override public void registerMouseOverHandler(OnMouseOverEvent onmouseover) {
      final HTMLElement element = getPlatformComponent();
      element.setOnmouseover(event -> { onmouseover.onMouseOver(); return Boolean.TRUE; });
   }

   @Override public void registerMouseMoveHandler(OnMouseMoveEvent onmousemove) {
      final HTMLElement element = getPlatformComponent();
      element.setOnmousemove(event -> {
         MouseEvent e = Js.cast(event);
         onmousemove.onMouseMove(e.getClientX(), e.getClientY()); return Boolean.TRUE;
      });
   }

   @Override public void registerMouseOutHandler(OnMouseOutEvent onmouseout) {
      final HTMLElement element = getPlatformComponent();
      element.setOnmouseout(event -> { onmouseout.onMouseOut(); return Boolean.TRUE; });
   }

   public T getPlatformComponent() {
      return platformComponent;
   }
}
