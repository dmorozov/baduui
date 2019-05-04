package elemental2.webstorage;
import elemental2.webstorage.Storage;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class StorageEvent extends Event{
public String key;
public String newValue;
public String oldValue;
public Storage storageArea;
public String url;
public StorageEvent(){
// This call is only here for java compilation purpose.
super((String)null,(EventInit)null);
}
public native void initStorageEvent(String typeArg,boolean canBubbleArg,boolean cancelableArg,String keyArg,String oldValueArg,String newValueArg,String urlArg,Storage storageAreaArg);
}
