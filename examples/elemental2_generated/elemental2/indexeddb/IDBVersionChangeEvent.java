package elemental2.indexeddb;
import elemental2.indexeddb.IDBVersionChangeEventInit;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class IDBVersionChangeEvent extends Event{
public double newVersion;
public double oldVersion;
public IDBVersionChangeEvent(String type,IDBVersionChangeEventInit eventInit){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public IDBVersionChangeEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
}
