package elemental2.indexeddb;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface IDBObjectStoreParameters{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface GetKeyPathUnionType{
@JsOverlay
static IDBObjectStoreParameters.GetKeyPathUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default String asString(){
return Js.asString(this);
}
@JsOverlay
default String[] asStringArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isString(){
return (Object)this instanceof String;
}
@JsOverlay
default boolean isStringArray(){
return (Object)this instanceof Object[];
}
}
@JsOverlay
static IDBObjectStoreParameters create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
IDBObjectStoreParameters.GetKeyPathUnionType getKeyPath();
@JsProperty
boolean isAutoIncrement();
@JsProperty
void setAutoIncrement(boolean autoIncrement);
@JsProperty
void setKeyPath(IDBObjectStoreParameters.GetKeyPathUnionType keyPath);
@JsOverlay
default void setKeyPath(String keyPath){
setKeyPath(Js.<IDBObjectStoreParameters.GetKeyPathUnionType>uncheckedCast(keyPath));
}
@JsOverlay
default void setKeyPath(String[] keyPath){
setKeyPath(Js.<IDBObjectStoreParameters.GetKeyPathUnionType>uncheckedCast(keyPath));
}
}
