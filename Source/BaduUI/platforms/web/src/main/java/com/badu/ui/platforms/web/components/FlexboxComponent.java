package com.badu.ui.platforms.web.components;

import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.components.attributes.AlignItems;
import com.badu.ui.core.components.attributes.FlexLayout;
import com.badu.ui.core.components.attributes.JustifyContent;
import com.badu.ui.core.components.platform.FlexboxWidget;
import com.badu.ui.core.utils.AttributeUtils;
import com.badu.ui.platforms.web.attributes.AlignItemsStyle;
import com.badu.ui.platforms.web.attributes.JustifyContentStyle;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import jsinterop.base.Js;

public class FlexboxComponent extends AbstractComponent<HTMLDivElement> implements FlexboxWidget {

   private static final String CLASS_VERTICAL = "bui-layout-vertical";
   private static final String CLASS_VERTICAL_REVERSE = "bui-layout-vertical-reverse";
   private static final String CLASS_HORIZONTAL = "bui-layout-horizontal";
   private static final String CLASS_HORIZONTAL_REVERSE = "bui-layout-horizontal-reverse";

   public FlexboxComponent() {
      super(createComponent());
   }

   private static HTMLDivElement createComponent() {
      return Js.cast(DomGlobal.document.createElement("div"));
   }

   @Override public void setJustifyContent(JustifyContent justifyContent) {
      getPlatformComponent().style.justifyContent = JustifyContentStyle.css(justifyContent);
   }

   @Override public void setAlignItems(AlignItems alignItems) {
      getPlatformComponent().style.alignItems = AlignItemsStyle.css(alignItems);
   }

   @Override public void setLayout(FlexLayout flexLayout) {
      switch (flexLayout) {
      case horizontal:
         addClass(CLASS_HORIZONTAL);
         break;
      case vertical:
         addClass(CLASS_VERTICAL);
         break;
      case horizontalReverse:
         addClass(CLASS_HORIZONTAL_REVERSE);
         break;
      case verticalReverse:
         addClass(CLASS_VERTICAL_REVERSE);
         break;
      }
   }

   @Override public void setFlexGrow(double flexGrow) {
      getPlatformComponent().style.flexGrow = flexGrow;
   }

   @Override public void setFlexShrink(double flexShrink) {
      getPlatformComponent().style.flexShrink = flexShrink;
   }

   @Override public void setFlexBasis(String flexBasis) {
      final String value = !AttributeUtils.isNumeric(flexBasis) ? flexBasis :
              BUIPlatform.PLATFORM.getViewportManager().calculatePixelSize(Integer.parseInt(flexBasis)) + "px";
      getPlatformComponent().style.flexBasis = value;
   }
}
