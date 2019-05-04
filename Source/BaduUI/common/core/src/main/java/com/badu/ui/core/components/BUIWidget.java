package com.badu.ui.core.components;

import com.badu.ui.core.RenderContext;
import com.badu.ui.core.components.attributes.BUIBorder;
import com.badu.ui.core.components.attributes.BUIColor;
import com.badu.ui.core.components.attributes.VerticalAlign;
import com.badu.ui.core.components.attributes.ZOrder;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.events.OnClickEvent;
import com.badu.ui.core.components.events.OnMouseMoveEvent;
import com.badu.ui.core.components.events.OnMouseOutEvent;
import com.badu.ui.core.components.events.OnMouseOverEvent;
import com.badu.ui.core.utils.AttributeUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class BUIWidget<T extends BUIWidget, N extends PlatformComponent> {

   private static final String ATTR_ID = "id";
   private static final String ATTR_WIDTH = "width";
   private static final String ATTR_HEIGHT = "height";
   private static final String ATTR_PADDING_LEFT = "paddingLeft";
   private static final String ATTR_PADDING_RIGHT = "paddingRight";
   private static final String ATTR_PADDING_TOP = "paddingTop";
   private static final String ATTR_PADDING_BOTTOM = "paddingBottom";
   private static final String ATTR_BG_COLOR = "backgroundColor";
   private static final String ATTR_Z_ORDER = "zorder";

   private static final String ATTR_BORDER_TOP = "borderTop";
   private static final String ATTR_BORDER_LEFT = "borderLeft";
   private static final String ATTR_BORDER_BOTTOM = "borderBottom";
   private static final String ATTR_BORDER_RIGHT = "borderRight";
   private static final String ATTR_BORDER = "border";
   private static final String ATTR_PADDING = "padding";
   private static final String ATTR_VERTICAL_ALIGN = "verticalAlign";

   private static final String ATTR_EVENT_TRIGGER = "triggerEvent";
   private static final String ATTR_EVENT_ARGS = "eventArgs";
   private static final String ATTR_EVENT_LISTEN = "listenToEvent";

   private String id;
   private BUIColor backgroundColor;
   private ZOrder zorder;
   private int width;
   private int height;
   private int paddingLeft;
   private int paddingRight;
   private int paddingTop;
   private int paddingBottom;

   private BUIBorder borderTop;
   private BUIBorder borderLeft;
   private BUIBorder borderBottom;
   private BUIBorder borderRight;
   private BUIBorder border;
   private VerticalAlign verticalAlign;

   private String triggerEvent;
   private String eventArgs;
   private String listenToEvent;

   private PlatformComponent parent;
   private N self;

   protected OnClickEvent onclick;
   protected OnMouseOverEvent onmouseover;
   protected OnMouseMoveEvent onmousemove;
   protected OnMouseOutEvent onmouseout;

   protected BUIWidget(Map<String, String> attributes) {
      if (null != attributes) {
         this.id = attributes.get(ATTR_ID);
         this.zorder = ZOrder.safeEnum(attributes.get(ATTR_Z_ORDER), null);
         this.width = AttributeUtils.safeInt(attributes.get(ATTR_WIDTH), -1);
         this.height = AttributeUtils.safeInt(attributes.get(ATTR_HEIGHT), -1);
         this.paddingLeft = AttributeUtils.safeInt(attributes.get(ATTR_PADDING_LEFT), -1);
         this.paddingRight = AttributeUtils.safeInt(attributes.get(ATTR_PADDING_RIGHT), -1);
         this.paddingTop = AttributeUtils.safeInt(attributes.get(ATTR_PADDING_TOP), -1);
         this.paddingBottom = AttributeUtils.safeInt(attributes.get(ATTR_PADDING_BOTTOM), -1);

         String color = attributes.get(ATTR_BG_COLOR);
         this.backgroundColor = null != color ? BUIColor.fromString(color) : null;

         String border = attributes.get(ATTR_BORDER_TOP);
         this.borderTop = null != border ? BUIBorder.fromString(border) : null;
         border = attributes.get(ATTR_BORDER_LEFT);
         this.borderLeft = null != border ? BUIBorder.fromString(border) : null;
         border = attributes.get(ATTR_BORDER_BOTTOM);
         this.borderBottom = null != border ? BUIBorder.fromString(border) : null;
         border = attributes.get(ATTR_BORDER_RIGHT);
         this.borderRight = null != border ? BUIBorder.fromString(border) : null;
         border = attributes.get(ATTR_BORDER);
         this.border = null != border ? BUIBorder.fromString(border) : null;

         this.verticalAlign = VerticalAlign.safeEnum(attributes.get(ATTR_VERTICAL_ALIGN), null);

         String padding = attributes.get(ATTR_PADDING);
         if (null != padding) {
            setPadding(padding);
         }

         this.triggerEvent = attributes.get(ATTR_EVENT_TRIGGER);
         this.eventArgs = attributes.get(ATTR_EVENT_ARGS);
         this.listenToEvent = attributes.get(ATTR_EVENT_LISTEN);

         if ("test".equals(this.id)) {
            BUIPlatform.PLATFORM.log().debug("CREATE: apply attributes");
            printAttributes();
         }
      }
   }

   private final List<BUIWidget> children = new ArrayList<>();

   public T children(BUIWidget ... children) {
      for (BUIWidget child : children) {
         this.children.add(child);
      }
      return (T) this;
   }

   public T addChild(BUIWidget child) {
      this.children.add(child);
      return (T) this;
   }

   public PlatformComponent render(final RenderContext context) {
      if (null != this.parent)
         return render(context, this.parent);

      return null;
   }

   protected void OnBeforeRender(final RenderContext context) {}
   protected void OnBeforeRenderChildren(final RenderContext context, final N self) {}
   protected void OnAfterRender(final RenderContext context) {}

   public PlatformComponent render(final RenderContext context, final PlatformComponent parent) {

      OnBeforeRender(context);

      if (null != this.self) {
         this.destroyComponent();
      }

      this.parent = parent;
      BUIPlatform.PLATFORM.log().debug("RENDER: create native component");
      this.self = createNative();
      BUIPlatform.PLATFORM.log().debug("RENDER: apply attributes");
      if ("test".equals(this.id)) printAttributes();

      applyAttributes();

      if (null != this.self) {
         OnBeforeRenderChildren(context, this.self);

         for (BUIWidget child : children) {
            final PlatformComponent childNative = child.render(context.clone(), self);
            self.addChild(childNative);
         }
         if (null != parent) {
            parent.addChild(self);
         }
      }

      OnAfterRender(context);
      return self;
   }

   protected N nativeComponent() {
      return self;
   }

   protected void applyAttributes() {
      if (null != self) {
         if (null != id)
            self.setId(id);
         if (null != backgroundColor)
            self.setBackgroundColor(backgroundColor.asString());
         if (null != zorder)
            self.setZOrder(zorder);
         if (width >= 0)
            self.setWidth(width);
         if (height >= 0)
            self.setHeight(height);
         if (paddingLeft >= 0)
            self.setPaddingLeft(paddingLeft);
         if (paddingRight >= 0)
            self.setPaddingRight(paddingRight);
         if (paddingTop >= 0)
            self.setPaddingTop(paddingTop);
         if (paddingBottom >= 0)
            self.setPaddingBottom(paddingBottom);

         if (null != borderTop)
            self.setBorderTop(borderTop.asString());
         if (null != borderLeft)
            self.setBorderLeft(borderLeft.asString());
         if (null != borderBottom)
            self.setBorderBottom(borderBottom.asString());
         if (null != borderRight)
            self.setBorderRight(borderRight.asString());
         if (null != border)
            self.setBorder(border.asString());

         if (null != verticalAlign)
            self.setVerticalAlign(verticalAlign);

         // event handlers;
         if (null != onclick) {
            self.registerClickHandler(onclick); // OnClickEvent
         }
         if (null != onmouseover) {
            self.registerMouseOverHandler(onmouseover); // OnMouseOverEvent
         }
         if (null != onmousemove) {
            self.registerMouseMoveHandler(onmousemove); // OnMouseMoveEvent
         }
         if (null != onmouseout) {
            self.registerMouseOutHandler(onmouseout); // OnMouseOutEvent
         }
      }
   }

   protected void destroyComponent() {
      BUIPlatform.PLATFORM.log().debug("=== on destroy ===");
      for (BUIWidget child : children) {
         child.destroyComponent();
      }

      if (null != self) {
         self.destroyComponent();
      }
   }

   protected abstract N createNative();
   protected void build(final RenderContext context) {}

   public List<BUIWidget> getChildren() {
      return children;
   }

   public BUIColor getBackgroundColor() {
      return backgroundColor;
   }

   public T setBackgroundColor(BUIColor backgroundColor) {
      this.backgroundColor = backgroundColor;
      applyAttributes();
      return (T) this;
   }

   public String getId() {
      return id;
   }

   public T setId(String id) {
      this.id = id;
      return (T) this;
   }

   public ZOrder getZorder() {
      return zorder;
   }

   public T setZorder(ZOrder zorder) {
      this.zorder = zorder;
      applyAttributes();
      return (T) this;
   }

   public int getWidth() {
      return width;
   }

   public T setWidth(int width) {
      this.width = width;
      applyAttributes();
      return (T) this;
   }

   public int getHeight() {
      return height;
   }

   public T setHeight(int height) {
      this.height = height;
      applyAttributes();
      return (T) this;
   }

   public int getPaddingLeft() {
      return paddingLeft;
   }

   public T setPaddingLeft(int paddingLeft) {
      this.paddingLeft = paddingLeft;
      applyAttributes();
      return (T) this;
   }

   public int getPaddingRight() {
      return paddingRight;
   }

   public T setPaddingRight(int paddingRight) {
      this.paddingRight = paddingRight;
      applyAttributes();
      return (T) this;
   }

   public int getPaddingTop() {
      return paddingTop;
   }

   public T setPaddingTop(int paddingTop) {
      this.paddingTop = paddingTop;
      applyAttributes();
      return (T) this;
   }

   public int getPaddingBottom() {
      return paddingBottom;
   }

   public T setPaddingBottom(int paddingBottom) {
      this.paddingBottom = paddingBottom;
      applyAttributes();
      return (T) this;
   }

   public String getPadding() {
      return paddingTop + " " + getPaddingRight() + " " + getPaddingBottom() + " " + getPaddingLeft();
   }

   public T setPadding(String padding) {
      // padding: top right bottom left;
      String values[] = null == padding ? new String[]{} : padding.split(" ");
      boolean invalid = false;
      try {
         if (values.length == 1) {
            int padValue = Integer.valueOf(values[0]);
            setPaddingLeft(padValue);
            setPaddingRight(padValue);
            setPaddingTop(padValue);
            setPaddingBottom(padValue);
            applyAttributes();
         }
         else if (values.length == 4) {
            setPaddingLeft(Integer.valueOf(values[3]));
            setPaddingRight(Integer.valueOf(values[1]));
            setPaddingTop(Integer.valueOf(values[0]));
            setPaddingBottom(Integer.valueOf(values[2]));
            applyAttributes();
         }
         else {
            invalid = true;
         }
      } catch (Exception e) {
         invalid = true;
      }

      if (invalid) {
         BUIPlatform.PLATFORM.log().error("Invalid padding value: " + padding);
      }

      return (T) this;
   }

   public BUIBorder getBorderTop() {
      return borderTop;
   }

   public T setBorderTop(BUIBorder borderTop) {
      this.borderTop = borderTop;
      applyAttributes();
      return (T) this;
   }

   public BUIBorder getBorderLeft() {
      return borderLeft;
   }

   public T setBorderLeft(BUIBorder borderLeft) {
      this.borderLeft = borderLeft;
      applyAttributes();
      return (T) this;
   }

   public BUIBorder getBorderBottom() {
      return borderBottom;
   }

   public T setBorderBottom(BUIBorder borderBottom) {
      this.borderBottom = borderBottom;
      applyAttributes();
      return (T) this;
   }

   public BUIBorder getBorderRight() {
      return borderRight;
   }

   public T setBorderRight(BUIBorder borderRight) {
      this.borderRight = borderRight;
      applyAttributes();
      return (T) this;
   }

   public BUIBorder getBorder() {
      return border;
   }

   public T setBorder(BUIBorder border) {
      this.border = border;
      applyAttributes();
      return (T) this;
   }

   public VerticalAlign getVerticalAlign() {
      return verticalAlign;
   }

   public T setVerticalAlign(VerticalAlign verticalAlign) {
      this.verticalAlign = verticalAlign;
      applyAttributes();
      return (T) this;
   }

   public String getTriggerEvent() {
      return triggerEvent;
   }

   public T setTriggerEvent(String triggerEvent) {
      this.triggerEvent = triggerEvent;
      return (T) this;
   }

   public String getEventArgs() {
      return eventArgs;
   }

   public T setEventArgs(String eventArgs) {
      this.eventArgs = eventArgs;
      return (T) this;
   }

   private void printAttributes() {
      BUIPlatform.PLATFORM.log().debug("Attributes:");
      BUIPlatform.PLATFORM.log().debug("    id: " + id);
      BUIPlatform.PLATFORM.log().debug("    backgroundColor: " + backgroundColor);
      BUIPlatform.PLATFORM.log().debug("    zorder: " + zorder);
      BUIPlatform.PLATFORM.log().debug("    width: " + width);
      BUIPlatform.PLATFORM.log().debug("    height: " + height);
      BUIPlatform.PLATFORM.log().debug("    paddingLeft: " + paddingLeft);
      BUIPlatform.PLATFORM.log().debug("    paddingRight: " + paddingRight);
      BUIPlatform.PLATFORM.log().debug("    paddingTop: " + paddingTop);
      BUIPlatform.PLATFORM.log().debug("    paddingBottom: " + paddingBottom);

      BUIPlatform.PLATFORM.log().debug("    borderTop: " + borderTop);
      BUIPlatform.PLATFORM.log().debug("    borderLeft: " + borderLeft);
      BUIPlatform.PLATFORM.log().debug("    borderBottom: " + borderBottom);
      BUIPlatform.PLATFORM.log().debug("    borderRight: " + borderRight);
      BUIPlatform.PLATFORM.log().debug("    border: " + border);
   }

   public void triggerUIEvent(String triggerEvent, String eventArgs) {
      BUIPlatform.PLATFORM.log().debug("Trigger new event: '" + triggerEvent + "' with arguments: '" + eventArgs + "'");
   }
}
