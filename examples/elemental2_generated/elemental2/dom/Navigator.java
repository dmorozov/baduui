package elemental2.dom;

import java.lang.Void;
import elemental2.dom.ShareData;
import elemental2.dom.PluginArray;
import elemental2.dom.MimeTypeArray;
import elemental2.promise.Promise;
import elemental2.dom.NavigatorStorage;
import jsinterop.annotations.JsProperty;
import elemental2.dom.MediaStreamConstraints;
import elemental2.dom.BatteryManager;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Geolocation;
import elemental2.dom.MediaStream;
import elemental2.dom.ServiceWorkerContainer;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.StorageManager;
import elemental2.dom.MediaDevices;
import elemental2.dom.NavigatorUserMediaError;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Navigator implements NavigatorStorage {
    @JsFunction
    public interface WebkitGetUserMediaErrorCallbackFn {
        Object onInvoke(NavigatorUserMediaError p0);
    }

    @JsFunction
    public interface WebkitGetUserMediaSuccessCallbackFn {
        Object onInvoke(MediaStream p0);
    }

    public String appCodeName;
    public String appName;
    public String appVersion;
    public boolean cookieEnabled;
    public double deviceMemory;
    public Geolocation geolocation;
    public int hardwareConcurrency;
    public String language;
    public MediaDevices mediaDevices;
    public MimeTypeArray mimeTypes;
    public boolean onLine;
    public String platform;
    public PluginArray plugins;
    public String product;
    public ServiceWorkerContainer serviceWorker;
    public StorageManager storage;
    public String userAgent;

    public native Promise<BatteryManager> getBattery();

    @JsProperty
    public native StorageManager getStorage();

    public native boolean javaEnabled();

    public native void registerContentHandler(String mimeType, String url, String title);

    public native void registerProtocolHandler(String scheme, String url, String title);

    @JsProperty
    public native void setStorage(StorageManager storage);

    public native Promise<Void> share();

    public native Promise<Void> share(ShareData data);

    public native boolean taintEnabled();

    public native void unregisterContentHandler(String mimeType, String url);

    public native void unregisterProtocolHandler(String scheme, String url);

    public native void webkitGetUserMedia(MediaStreamConstraints constraints,
            Navigator.WebkitGetUserMediaSuccessCallbackFn successCallback,
            Navigator.WebkitGetUserMediaErrorCallbackFn errorCallback);

    public native void webkitGetUserMedia(MediaStreamConstraints constraints,
            Navigator.WebkitGetUserMediaSuccessCallbackFn successCallback);
}
