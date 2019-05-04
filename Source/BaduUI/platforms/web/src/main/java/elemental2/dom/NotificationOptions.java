package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface NotificationOptions {
   @JsOverlay
   static NotificationOptions create() {
      return Js.uncheckedCast(JsPropertyMap.of());
   }

   @JsProperty
   NotificationAction[] getActions();

   @JsProperty
   String getBadge();

   @JsProperty
   String getBody();

   @JsProperty
   Object getData();

   @JsProperty
   String getDir();

   @JsProperty
   String getIcon();

   @JsProperty
   String getImage();

   @JsProperty
   String getLang();

   @JsProperty
   String getTag();

   @JsProperty
   double getTimestamp();

   @JsProperty
   double[] getVibrate();

   @JsProperty
   boolean isRenotify();

   @JsProperty
   boolean isRequireInteraction();

   @JsProperty
   boolean isSilent();

   @JsProperty
   void setActions(NotificationAction[] actions);

   @JsProperty
   void setBadge(String badge);

   @JsProperty
   void setBody(String body);

   @JsProperty
   void setData(Object data);

   @JsProperty
   void setDir(String dir);

   @JsProperty
   void setIcon(String icon);

   @JsProperty
   void setImage(String image);

   @JsProperty
   void setLang(String lang);

   @JsProperty
   void setRenotify(boolean renotify);

   @JsProperty
   void setRequireInteraction(boolean requireInteraction);

   @JsProperty
   void setSilent(boolean silent);

   @JsProperty
   void setTag(String tag);

   @JsProperty
   void setTimestamp(double timestamp);

   @JsProperty
   void setVibrate(double[] vibrate);
}
