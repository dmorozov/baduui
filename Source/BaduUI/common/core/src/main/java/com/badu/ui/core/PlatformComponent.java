package com.badu.ui.core;

import com.badu.ui.core.components.attributes.VerticalAlign;
import com.badu.ui.core.components.attributes.ZOrder;
import com.badu.ui.core.components.events.OnClickEvent;
import com.badu.ui.core.components.events.OnMouseMoveEvent;
import com.badu.ui.core.components.events.OnMouseOutEvent;
import com.badu.ui.core.components.events.OnMouseOverEvent;

public interface PlatformComponent {

   void addChild(PlatformComponent child);

   void destroyComponent();

   /* core component attributes */
   void setId(String id);

   void setBackgroundColor(String backgroundColor);

   void setZOrder(ZOrder zorder);

   void setWidth(int width);

   void setHeight(int height);

   void setPaddingLeft(int paddingLeft);

   void setPaddingRight(int paddingRight);

   void setPaddingTop(int paddingTop);

   void setPaddingBottom(int paddingBottom);

   void setBorderTop(String borderTop);

   void setBorderLeft(String borderLeft);

   void setBorderBottom(String borderBottom);

   void setBorderRight(String borderRight);

   void setBorder(String border);

   void setVerticalAlign(VerticalAlign verticalAlign);

   /* Event handlers */
   void registerClickHandler(OnClickEvent onclick);

   void registerMouseOverHandler(OnMouseOverEvent onmouseover);

   void registerMouseMoveHandler(OnMouseMoveEvent onmousemove);

   void registerMouseOutHandler(OnMouseOutEvent onmouseout);
}
