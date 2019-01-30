// Copyright 2018 BADU Networks.
//
// TBD
goog.module('badu.web.theapp');

// This is the entry point of our app.
// Feel free to use any fancy new ES features, Closure compiler will take care
// of it if you need to run the code an older browser.
/*const BaduUIClass = goog.require('badu.ui.BaduUI');
var BaduUI = new BaduUIClass("some parameter");
BaduUI.start();
window["BaduUI"] = BaduUI;
*/

const TheApp = goog.require('com.badu.theapp.web.TheApp');
TheApp.startApp();
