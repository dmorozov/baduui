package com.badu.ui.core;

import com.badu.ui.core.components.platform.FlexboxWidget;
import com.badu.ui.core.components.platform.ImageWidget;
import com.badu.ui.core.components.platform.TextWidget;

public interface PlatformComponentFactory {

   PlatformComponent rootComponent();

   TextWidget createText(String text);

   FlexboxWidget createFlexbox();

   ImageWidget createImage(Resource src, int width, int height);
}
