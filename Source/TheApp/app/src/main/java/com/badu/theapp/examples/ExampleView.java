package com.badu.theapp.examples;

import com.badu.ui.core.components.common.Box;
import com.badu.ui.components.Text;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.RenderContext;
import com.badu.ui.core.components.attributes.FlexLayout;
import com.badu.ui.core.components.attributes.ZOrder;

public class ExampleView extends Box {

   protected void build(final RenderContext context) {
      this.children(
              new Box()
                      .setId("rootLayout")
                      .setFlexLayout(FlexLayout.horizontal)
                      .children(
                              new Box()
                                      .setId("drawer")
                                      .setZorder(ZOrder.Medium)
                                      .setBackgroundColor(BUIPlatform.THEME.panelBGColor())
                                      .setFlexGrow(0)
                                      .setFlexShrink(1)
                                      .setFlexBasis("260")
                                      .children(
                                              new Text("This is LEFT panel")
                                      ),
                              new Box()
                                      .setFlexGrow(1)
                                      .setFlexShrink(1)
                                      .setFlexBasis(Box.AUTO)
                                      .children(
                                              new Text("This is RIGHT panel")
                                      )
                      )
      );
   }
}
