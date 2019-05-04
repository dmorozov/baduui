package com.badu.ui.platforms.web.components;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.platform.TextWidget;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Text;
import jsinterop.base.Js;

public class TextComponent extends AbstractComponent<HTMLElement> implements TextWidget {

   private final Text textNode;

   public TextComponent(String text) {
      super(TextComponent.createComponent(text));
      textNode = Js.cast(getPlatformComponent().childNodes.item(0));
   }

   @Override public void addChild(PlatformComponent child) {
      // not supported
   }

   private static HTMLElement createComponent(String text) {
      final HTMLElement wrapElement = Js.cast(DomGlobal.document.createElement("span"));
      wrapElement.appendChild(DomGlobal.document.createTextNode(text));
      return wrapElement;
   }

   @Override public void setText(String text) {
      textNode.textContent = text;
   }

   @Override public void setColor(String color) {
      setProperty("color", color);
   }
}
