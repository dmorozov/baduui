package elemental2.dom;
import jsinterop.annotations.JsFunction;
import elemental2.dom.Node;
import elemental2.dom.MutationObserverInit;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.MutationRecord;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MutationObserver{
@JsFunction
public interface MutationObserverCallbackFn{
Object onInvoke(MutationRecord[] p0,MutationObserver p1);
}
public MutationObserver(MutationObserver.MutationObserverCallbackFn callback){}
public native Object disconnect();
public native void observe(Node target,MutationObserverInit options);
public native void observe(Node target);
public native MutationRecord[] takeRecords();
}
