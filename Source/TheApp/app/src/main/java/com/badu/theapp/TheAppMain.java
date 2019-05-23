package com.badu.theapp;

import com.badu.ui.components.BADUComponents;
import com.badu.ui.core.BUIApp;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.RenderContext;
import com.badu.ui.core.themes.DefaultTheme;
import com.badu.ui.core.utils.TemplateParser;

public abstract class TheAppMain extends BUIApp {

   private static final String HOME_TEMPLATE = "templates/home.bui";

   public TheAppMain(final BUIPlatform platform) {
      super(platform, new DefaultTheme());
   }

   @Override protected void build(final RenderContext context) {
      BADUComponents.initialize();

      TemplateParser.loadFromTemplate(this, HOME_TEMPLATE, context)
              .whenReady(widget -> {
                 BUIPlatform.PLATFORM.log().debug(" Template " + HOME_TEMPLATE + " successfully loaded. Rendering ...");
                 render(context);
              })
              .whenError(error -> {
                 BUIPlatform.PLATFORM.log().error("Unable to load template: " + HOME_TEMPLATE, error);
              })
              .loadResource();
   }
}
