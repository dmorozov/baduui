package elemental2.dom;
import elemental2.dom.PerformanceTiming;
import elemental2.dom.PerformanceNavigation;
import elemental2.dom.PerformanceEntry;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Event;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Performance{
@JsFunction
public interface OnresourcetimingbufferfullFn{
Object onInvoke(Event p0);
}
public PerformanceNavigation navigation;
public Performance.OnresourcetimingbufferfullFn onresourcetimingbufferfull;
public double timeOrigin;
public PerformanceTiming timing;
public native void clearMarks();
public native void clearMarks(String markName);
public native void clearMeasures();
public native void clearMeasures(String measureName);
public native void clearResourceTimings();
public native PerformanceEntry[] getEntries();
public native PerformanceEntry[] getEntriesByName(String name,String entryType);
public native PerformanceEntry[] getEntriesByName(String name);
public native PerformanceEntry[] getEntriesByType(String entryType);
public native void mark(String markName);
public native void measure(String measureName,String startMark,String endMark);
public native void measure(String measureName,String startMark);
public native void measure(String measureName);
public native double now();
public native void setResourceTimingBufferSize(int maxSize);
public native void webkitClearResourceTimings();
public native double webkitNow();
}
