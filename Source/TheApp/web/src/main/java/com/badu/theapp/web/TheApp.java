package com.badu.theapp.web;

import com.badu.theapp.TheAppMain;
import com.badu.ui.platforms.web.WenBUIPlatform;

public class TheApp extends TheAppMain {

   public TheApp() {
      super(new WenBUIPlatform());
   }

}
