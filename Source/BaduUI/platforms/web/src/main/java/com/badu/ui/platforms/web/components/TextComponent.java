package com.badu.ui.platforms.web.components;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.platform.TextWidget;
import jsinterop.base.Js;
import com.badu.ui.jsinterop.core.dom.HTMLElement;
import com.badu.ui.jsinterop.core.dom.Text;
import com.badu.ui.jsinterop.core.html.Window;

public class TextComponent extends AbstractComponent<HTMLElement> implements TextWidget {

   private final Text textNode;

   public TextComponent(String text) {
      super(TextComponent.createComponent(text));
      textNode = Js.cast(getPlatformComponent().getChildNodes().item(0));
   }

   @Override public void addChild(PlatformComponent child) {
      // not supported
   }

   private static HTMLElement createComponent(String text) {
      final HTMLElement wrapElement = Js.cast(Window.getDocument().createElement("span"));
      wrapElement.appendChild(Window.getDocument().createTextNode(text));
      return wrapElement;
   }

   @Override public void setText(String text) {
      textNode.setTextContent(text);
   }

   @Override public void setColor(String color) {
      setProperty("color", color);
   }
}
