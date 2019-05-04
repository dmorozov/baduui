package elemental2.indexeddb;
import elemental2.indexeddb.IDBVersionChangeEventInit;
import elemental2.indexeddb.IDBVersionChangeEvent;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, name = "webkitIDBVersionChangeEvent", namespace = JsPackage.GLOBAL)
public class WebkitIDBVersionChangeEvent extends IDBVersionChangeEvent{
public String version;
public WebkitIDBVersionChangeEvent(String type,IDBVersionChangeEventInit eventInit){
// This call is only here for java compilation purpose.
super((String)null,(IDBVersionChangeEventInit)null);
}
public WebkitIDBVersionChangeEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(IDBVersionChangeEventInit)null);
}
}
