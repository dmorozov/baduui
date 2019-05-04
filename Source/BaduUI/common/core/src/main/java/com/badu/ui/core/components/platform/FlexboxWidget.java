package com.badu.ui.core.components.platform;

import com.badu.ui.core.PlatformComponent;
import com.badu.ui.core.components.attributes.AlignItems;
import com.badu.ui.core.components.attributes.FlexLayout;
import com.badu.ui.core.components.attributes.JustifyContent;

public interface FlexboxWidget extends PlatformComponent {
   void setJustifyContent(JustifyContent justifyContent);
   void setAlignItems(AlignItems alignItems);
   void setLayout(FlexLayout flexLayout);
   void setFlexGrow(double flexGrow);
   void setFlexShrink(double flexShrink);
   void setFlexBasis(String flexBasis);
}
