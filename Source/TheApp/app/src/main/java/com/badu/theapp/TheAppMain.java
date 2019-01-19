package com.badu.theapp;

import com.badu.ui.components.Column;
import com.badu.ui.components.Row;
import com.badu.ui.components.Text;
import com.badu.ui.core.BUIApp;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.components.BUIWidget;

public abstract class TheAppMain extends BUIApp {

   public TheAppMain(final BUIPlatform platform) {
      super(platform);
   }

   @Override
   protected BUIWidget createRoot() {
      return new Row()
              .columns(
                      new Column()
                              .children(
                                      new Text("Left")
                              ),
                      new Column()
                              .children(
                                      new Text("Center")
                              ),
                      new Column()
                              .children(
                                      new Text("Right")
                              )
              );
   }

}
