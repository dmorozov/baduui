package com.badu.ui.platforms.web;

import jsinterop.annotations.JsType;

/**
 * A simple hello world example.
 *
 * <p>Note that it is marked as @JsType as we would like to call have whole class available to use
 * from JavaScript.
 */
@JsType
public class BaduUI {

  public static String getHelloWorld() {
    return "Yet another Hello from Java!";
  }

}
