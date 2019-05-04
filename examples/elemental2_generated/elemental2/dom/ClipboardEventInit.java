package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ClipboardEventInit{
@JsOverlay
static ClipboardEventInit create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
String getData();
@JsProperty
String getDataType();
@JsProperty
boolean isBubbles();
@JsProperty
boolean isCancelable();
@JsProperty
void setBubbles(boolean bubbles);
@JsProperty
void setCancelable(boolean cancelable);
@JsProperty
void setData(String data);
@JsProperty
void setDataType(String dataType);
}
