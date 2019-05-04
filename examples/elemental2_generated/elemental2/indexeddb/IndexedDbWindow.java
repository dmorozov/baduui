package elemental2.indexeddb;
import elemental2.indexeddb.IDBFactory;
import jsinterop.base.Js;
import elemental2.dom.Window;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, name = "Window", namespace = JsPackage.GLOBAL)
public class IndexedDbWindow extends Window{
@JsOverlay
public static IndexedDbWindow of(Window o){
return Js.cast(o);
}
public IDBFactory mozIndexedDB;
public IDBFactory moz_indexedDB;
public IDBFactory msIndexedDB;
public IDBFactory webkitIndexedDB;
}
