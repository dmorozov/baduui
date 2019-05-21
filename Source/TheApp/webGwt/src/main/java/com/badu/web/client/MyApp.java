package com.badu.web.client;

import com.badu.theapp.TheAppMain;
import com.badu.ui.platforms.web.WebUIPlatform;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(namespace = JsPackage.GLOBAL, name = "MyApp")
public class MyApp extends TheAppMain {

    public MyApp() {
        super(new WebUIPlatform());
    }

    public static void startApp() {
        final MyApp app = new MyApp();
        app.start();
    }
}
