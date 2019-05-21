package elemental2.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Navigator implements NavigatorStorage {

   public String appCodeName;
   public String appName;
   public String appVersion;
   public boolean cookieEnabled;
   public double deviceMemory;
   public Geolocation geolocation;
   public int hardwareConcurrency;
   public String language;
   public MimeTypeArray mimeTypes;
   public boolean onLine;
   public String platform;
   public String product;
   public ServiceWorkerContainer serviceWorker;
   public StorageManager storage;
   public String userAgent;

   // public native Promise<BatteryManager> getBattery();

   @JsProperty
   public native StorageManager getStorage();

   public native void registerContentHandler(String mimeType, String url, String title);

   public native void registerProtocolHandler(String scheme, String url, String title);

   @JsProperty
   public native void setStorage(StorageManager storage);

   public native void unregisterContentHandler(String mimeType, String url);

   public native void unregisterProtocolHandler(String scheme, String url);
}
