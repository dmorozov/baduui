package elemental2.dom;
import elemental2.dom.PerformanceEntry;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.TaskAttributionTiming;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class PerformanceLongTaskTiming extends PerformanceEntry{
public TaskAttributionTiming[] attribution;
}
