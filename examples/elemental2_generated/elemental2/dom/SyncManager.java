package elemental2.dom;

import java.lang.Void;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SyncManager {
    public native Promise<String[]> getTags();

    public native Promise<Void> register(String tag);
}
