package elemental2.dom;
import elemental2.dom.PerformanceObserverCallback;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.PerformanceObserverInit;
import elemental2.dom.PerformanceObserverEntryList;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class PerformanceObserver{
public PerformanceObserver(PerformanceObserverCallback callback){}
public native void disconnect();
public native Object observe(PerformanceObserverInit options);
public native PerformanceObserverEntryList takeRecords();
}
