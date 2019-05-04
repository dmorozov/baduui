package elemental2.dom;
import elemental2.dom.PerformanceEntry;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class PerformanceObserverEntryList{
public native PerformanceEntry[] getEntries();
public native PerformanceEntry[] getEntriesByName(String type);
public native PerformanceEntry[] getEntriesByType(String name,String type);
public native PerformanceEntry[] getEntriesByType(String name);
}
