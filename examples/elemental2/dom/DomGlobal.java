package elemental2.dom;

import elemental2.core.JsArray;
import elemental2.core.Transferable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "window", namespace = JsPackage.GLOBAL)
public class DomGlobal {

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface FetchInputUnionType {
      @JsOverlay
      static DomGlobal.FetchInputUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default Request asRequest() {
         return Js.cast(this);
      }

      @JsOverlay
      default String asString() {
         return Js.asString(this);
      }

      @JsOverlay
      default boolean isRequest() {
         return (Object) this instanceof Request;
      }

      @JsOverlay
      default boolean isString() {
         return (Object) this instanceof String;
      }
   }

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface ImportScriptsVar_argsUnionType {
      @JsOverlay
      static DomGlobal.ImportScriptsVar_argsUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default String asString() {
         return Js.asString(this);
      }

      @JsOverlay
      default boolean isString() {
         return (Object) this instanceof String;
      }
   }

   @JsFunction
   public interface MozRequestAnimationFrameCallbackFn {
      Object onInvoke(double p0);
   }

   @JsFunction
   public interface MsRequestAnimationFrameCallbackFn {
      Object onInvoke(double p0);
   }

   @JsFunction
   public interface ORequestAnimationFrameCallbackFn {
      Object onInvoke(double p0);
   }

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface PostMessageTargetOriginOrPortsOrTransferUnionType {
      @JsOverlay
      static DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default JsArray asJsArray() {
         return Js.cast(this);
      }

      @JsOverlay
      default String asString() {
         return Js.asString(this);
      }

      @JsOverlay
      default boolean isJsArray() {
         return (Object) this instanceof JsArray;
      }

      @JsOverlay
      default boolean isString() {
         return (Object) this instanceof String;
      }
   }

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface PostMessageTargetOriginOrTransferUnionType {
      @JsOverlay
      static DomGlobal.PostMessageTargetOriginOrTransferUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default String asString() {
         return Js.asString(this);
      }

      @JsOverlay
      default Transferable[] asTransferableArray() {
         return Js.cast(this);
      }

      @JsOverlay
      default boolean isString() {
         return (Object) this instanceof String;
      }

      @JsOverlay
      default boolean isTransferableArray() {
         return (Object) this instanceof Object[];
      }
   }

   @JsFunction
   public interface RequestAnimationFrameCallbackFn {
      void onInvoke(double p0);
   }

   @JsFunction
   public interface RequestIdleCallbackCallbackFn {
      void onInvoke(IdleDeadline deadline);
   }

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface RequestIdleCallbackOptionsUnionType {
      @JsOverlay
      static DomGlobal.RequestIdleCallbackOptionsUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default IdleCallbackOptions asIdleCallbackOptions() {
         return Js.cast(this);
      }

      @JsOverlay
      default int asInt() {
         return Js.asInt(this);
      }

      @JsOverlay
      default boolean isInt() {
         return (Object) this instanceof Double;
      }
   }

   @JsFunction
   public interface SetImmediateCallbackFn {
      Object onInvoke();
   }

   @JsFunction
   public interface SetIntervalCallbackFn {
      void onInvoke(Object... p0);
   }

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface SetIntervalCallbackUnionType {
      @JsOverlay
      static DomGlobal.SetIntervalCallbackUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default DomGlobal.SetIntervalCallbackFn asSetIntervalCallbackFn() {
         return Js.cast(this);
      }

      @JsOverlay
      default String asString() {
         return Js.asString(this);
      }

      @JsOverlay
      default boolean isSetIntervalCallbackFn() {
         return (Object) this instanceof DomGlobal.SetIntervalCallbackFn;
      }

      @JsOverlay
      default boolean isString() {
         return (Object) this instanceof String;
      }
   }

   @JsFunction
   public interface SetTimeoutCallbackFn {
      void onInvoke(Object... p0);
   }

   @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
   public interface SetTimeoutCallbackUnionType {
      @JsOverlay
      static DomGlobal.SetTimeoutCallbackUnionType of(Object o) {
         return Js.cast(o);
      }

      @JsOverlay
      default DomGlobal.SetTimeoutCallbackFn asSetTimeoutCallbackFn() {
         return Js.cast(this);
      }

      @JsOverlay
      default String asString() {
         return Js.asString(this);
      }

      @JsOverlay
      default boolean isSetTimeoutCallbackFn() {
         return (Object) this instanceof DomGlobal.SetTimeoutCallbackFn;
      }

      @JsOverlay
      default boolean isString() {
         return (Object) this instanceof String;
      }
   }

   public static CSSInterface CSS;
   public static Console console;

   @JsOverlay
   public static final HTMLDocument document = Js.cast(GrobalDOMUtil.document);

   @JsOverlay
   public static final Location location = DomGlobal__Constants.location;
   @JsOverlay
   public static final Navigator navigator = DomGlobal__Constants.navigator;

   @JsOverlay
   public static final Screen screen = DomGlobal__Constants.screen;
   @JsOverlay
   public static final Window self = DomGlobal__Constants.self;
   @JsOverlay
   public static final Window top = DomGlobal__Constants.top;

   public static Window window;

   public static native void alert(Object message);

   public static native void cancelAnimationFrame(int handle);

   public static native void cancelIdleCallback(int handle);

   public static native void cancelRequestAnimationFrame(double handle);

   public static native void clearImmediate(double immediateID);

   public static native void clearInterval(double intervalID);

   public static native void clearTimeout(double timeoutID);

   public static native boolean confirm(Object message);

   public static native void dump(Object x);

   public static native Promise<Response> fetch(DomGlobal.FetchInputUnionType input, RequestInit init);

   public static native Promise<Response> fetch(DomGlobal.FetchInputUnionType input);

   @JsOverlay
   public static final Promise<Response> fetch(Request input, RequestInit init) {
      return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input), init);
   }

   @JsOverlay
   public static final Promise<Response> fetch(Request input) {
      return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input));
   }

   @JsOverlay
   public static final Promise<Response> fetch(String input, RequestInit init) {
      return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input), init);
   }

   @JsOverlay
   public static final Promise<Response> fetch(String input) {
      return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input));
   }

   public static native boolean hasOwnProperty(Object propertyName);

   public static native void importScripts(DomGlobal.ImportScriptsVar_argsUnionType... var_args);

   @JsOverlay
   public static final void importScripts(String... var_args) {
      importScripts(Js.<DomGlobal.ImportScriptsVar_argsUnionType>uncheckedCast(var_args));
   }

   public static native void mozCancelAnimationFrame(int handle);

   public static native void mozCancelRequestAnimationFrame(double handle);

   public static native int mozRequestAnimationFrame(DomGlobal.MozRequestAnimationFrameCallbackFn callback,
           Element element);

   public static native int mozRequestAnimationFrame(DomGlobal.MozRequestAnimationFrameCallbackFn callback);

   public static native void msCancelAnimationFrame(int handle);

   public static native void msCancelRequestAnimationFrame(double handle);

   public static native int msRequestAnimationFrame(DomGlobal.MsRequestAnimationFrameCallbackFn callback,
           Element element);

   public static native int msRequestAnimationFrame(DomGlobal.MsRequestAnimationFrameCallbackFn callback);

   public static native void oCancelAnimationFrame(int handle);

   public static native void oCancelRequestAnimationFrame(double handle);

   public static native int oRequestAnimationFrame(DomGlobal.ORequestAnimationFrameCallbackFn callback,
           Element element);

   public static native int oRequestAnimationFrame(DomGlobal.ORequestAnimationFrameCallbackFn callback);

   @JsOverlay
   public static final void postMessage(Object message,
           DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
           JsArray targetOriginOrPortsOrTransfer) {
      postMessage(message, targetOriginOrTransfer,
              Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
                      targetOriginOrPortsOrTransfer));
   }

   public static native void postMessage(Object message,
           DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
           DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer);

   @JsOverlay
   public static final void postMessage(Object message,
           DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
           String targetOriginOrPortsOrTransfer) {
      postMessage(message, targetOriginOrTransfer,
              Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
                      targetOriginOrPortsOrTransfer));
   }

   public static native void postMessage(Object message,
           DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer);

   @JsOverlay
   public static final void postMessage(Object message, String targetOriginOrTransfer,
           JsArray targetOriginOrPortsOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer),
              Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
                      targetOriginOrPortsOrTransfer));
   }

   @JsOverlay
   public static final void postMessage(Object message, String targetOriginOrTransfer,
           DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer),
              targetOriginOrPortsOrTransfer);
   }

   @JsOverlay
   public static final void postMessage(Object message, String targetOriginOrTransfer,
           String targetOriginOrPortsOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer),
              Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
                      targetOriginOrPortsOrTransfer));
   }

   @JsOverlay
   public static final void postMessage(Object message, String targetOriginOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer));
   }

   @JsOverlay
   public static final void postMessage(Object message, Transferable[] targetOriginOrTransfer,
           JsArray targetOriginOrPortsOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer),
              Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
                      targetOriginOrPortsOrTransfer));
   }

   @JsOverlay
   public static final void postMessage(Object message, Transferable[] targetOriginOrTransfer,
           DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer),
              targetOriginOrPortsOrTransfer);
   }

   @JsOverlay
   public static final void postMessage(Object message, Transferable[] targetOriginOrTransfer,
           String targetOriginOrPortsOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer),
              Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
                      targetOriginOrPortsOrTransfer));
   }

   @JsOverlay
   public static final void postMessage(Object message, Transferable[] targetOriginOrTransfer) {
      postMessage(message,
              Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(targetOriginOrTransfer));
   }

   public static native void postMessage(Object message);

   public static native String prompt(String message, String value);

   public static native String prompt(String message);

   public static native int requestAnimationFrame(DomGlobal.RequestAnimationFrameCallbackFn callback, Element element);

   public static native int requestAnimationFrame(DomGlobal.RequestAnimationFrameCallbackFn callback);

   @JsOverlay
   public static final int requestIdleCallback(DomGlobal.RequestIdleCallbackCallbackFn callback,
           IdleCallbackOptions options) {
      return requestIdleCallback(callback, Js.<DomGlobal.RequestIdleCallbackOptionsUnionType>uncheckedCast(options));
   }

   public static native int requestIdleCallback(DomGlobal.RequestIdleCallbackCallbackFn callback,
           DomGlobal.RequestIdleCallbackOptionsUnionType options);

   @JsOverlay
   public static final int requestIdleCallback(DomGlobal.RequestIdleCallbackCallbackFn callback, int options) {
      return requestIdleCallback(callback, Js.<DomGlobal.RequestIdleCallbackOptionsUnionType>uncheckedCast(options));
   }

   public static native int requestIdleCallback(DomGlobal.RequestIdleCallbackCallbackFn callback);

   public static native double setImmediate(DomGlobal.SetImmediateCallbackFn callback, Object... callbackParams);

   @JsOverlay
   public static final double setInterval(DomGlobal.SetIntervalCallbackFn callback, double delay,
           Object... callbackParams) {
      return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
   }

   @JsOverlay
   public static final double setInterval(DomGlobal.SetIntervalCallbackFn callback) {
      return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback));
   }

   public static native double setInterval(DomGlobal.SetIntervalCallbackUnionType callback, double delay,
           Object... callbackParams);

   public static native double setInterval(DomGlobal.SetIntervalCallbackUnionType callback);

   @JsOverlay
   public static final double setInterval(String callback, double delay, Object... callbackParams) {
      return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
   }

   @JsOverlay
   public static final double setInterval(String callback) {
      return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback));
   }

   @JsOverlay
   public static final double setTimeout(DomGlobal.SetTimeoutCallbackFn callback, double delay,
           Object... callbackParams) {
      return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
   }

   @JsOverlay
   public static final double setTimeout(DomGlobal.SetTimeoutCallbackFn callback) {
      return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback));
   }

   public static native double setTimeout(DomGlobal.SetTimeoutCallbackUnionType callback, double delay,
           Object... callbackParams);

   public static native double setTimeout(DomGlobal.SetTimeoutCallbackUnionType callback);

   @JsOverlay
   public static final double setTimeout(String callback, double delay, Object... callbackParams) {
      return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
   }

   @JsOverlay
   public static final double setTimeout(String callback) {
      return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback));
   }

   @JsType(isNative = true)
   public static class GrobalDOMUtil {

      /**
       * Returns the global scoped Document object.
       */
      @JsProperty(name = "document", namespace = JsPackage.GLOBAL)
      public static Document document;

   }
}
