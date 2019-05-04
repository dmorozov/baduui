package elemental2.indexeddb;
import elemental2.indexeddb.IDBFactory;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, name = "window", namespace = JsPackage.GLOBAL)
public class IndexedDbGlobal{
public static IDBFactory indexedDB;
}
