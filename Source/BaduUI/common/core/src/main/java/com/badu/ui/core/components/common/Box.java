package com.badu.ui.core.components.common;

import com.badu.ui.core.components.attributes.AlignItems;
import com.badu.ui.core.components.attributes.FlexLayout;
import com.badu.ui.core.components.attributes.JustifyContent;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.components.StatelessWidget;
import com.badu.ui.core.components.platform.FlexboxWidget;
import com.badu.ui.core.utils.AttributeUtils;

import java.util.Map;

public class Box extends StatelessWidget<Box, FlexboxWidget> {

   public static final String TAG = "box";
   public static final String AUTO = "auto";

   public static final String ATTR_JUSTIFY_CONTENT = "justifyContent";
   public static final String ATTR_ALIGN_ITEMS = "alignItems";
   public static final String ATTR_DIRECTION = "layout";
   public static final String ATTR_GROW = "flexGrow";
   public static final String ATTR_SHRINK = "flexShrink";
   public static final String ATTR_BASIS = "flexBasis";

   static {
      Box.registerComponent();
   }

   public static void registerComponent() {
      ComponentRegistry.registerFactory(Box.TAG, new ComponentFactoryImpl());
   }

   private JustifyContent justifyContent;
   private AlignItems alignItems;
   private FlexLayout flexLayout;
   private int flexGrow = 0;
   private int flexShrink = 1;
   private String flexBasis = AUTO;

   public Box() {
      super(null);
   }

   public Box(Map<String, String> attributes) {
      super(attributes);

      this.justifyContent = JustifyContent.safeEnum(attributes.get(ATTR_JUSTIFY_CONTENT), null);
      this.alignItems = AlignItems.safeEnum(attributes.get(ATTR_ALIGN_ITEMS), null);
      this.flexLayout = FlexLayout.safeEnum(attributes.get(ATTR_DIRECTION), null);
      this.flexGrow = AttributeUtils.safeInt(attributes.get(ATTR_GROW), -1);
      this.flexShrink = AttributeUtils.safeInt(attributes.get(ATTR_SHRINK), -1);
      this.flexBasis = attributes.get(ATTR_BASIS);
   }

   @Override protected FlexboxWidget createNative() {
      return BUIPlatform.PLATFORM.componentFactory().createFlexbox();
   }

   protected void applyAttributes() {
      super.applyAttributes();

      final FlexboxWidget box = nativeComponent();
      if (null != box) {
         if (null != justifyContent)
            box.setJustifyContent(justifyContent);
         if (null != alignItems)
            box.setAlignItems(alignItems);
         if (null != flexLayout)
            box.setLayout(flexLayout);
         if (flexGrow >= 0)
            box.setFlexGrow(flexGrow);
         if (flexShrink >= 0)
            box.setFlexShrink(flexShrink);
         if (null != flexBasis)
            box.setFlexBasis(flexBasis);
      }
   }

   public JustifyContent getJustifyContent() {
      return justifyContent;
   }

   public Box setJustifyContent(JustifyContent justifyContent) {
      this.justifyContent = justifyContent;
      applyAttributes();
      return this;
   }

   public AlignItems getAlignItems() {
      return alignItems;
   }

   public Box setAlignItems(AlignItems alignItems) {
      this.alignItems = alignItems;
      applyAttributes();
      return this;
   }

   public FlexLayout getFlexLayout() {
      return flexLayout;
   }

   public Box setFlexLayout(FlexLayout flexLayout) {
      this.flexLayout = flexLayout;
      applyAttributes();
      return this;
   }

   public int getFlexGrow() {
      return flexGrow;
   }

   public Box setFlexGrow(int flexGrow) {
      this.flexGrow = flexGrow;
      applyAttributes();
      return this;
   }

   public int getFlexShrink() {
      return flexShrink;
   }

   public Box setFlexShrink(int flexShrink) {
      this.flexShrink = flexShrink;
      applyAttributes();
      return this;
   }

   public String getFlexBasis() {
      return flexBasis;
   }

   public Box setFlexBasis(String flexBasis) {
      this.flexBasis = flexBasis;
      applyAttributes();
      return this;
   }

   private static class ComponentFactoryImpl implements ComponentFactory {
      @Override public BUIWidget<?, ?> createComponent(String tagName, Map<String, String> attributes) {
         return new Box(attributes);
      }
   }
}
