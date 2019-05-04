package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import elemental2.dom.CSSStyleDeclaration;
import jsinterop.annotations.JsOverlay;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface CSSKeyframeRule{
@JsOverlay
static CSSKeyframeRule create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
String getKeyText();
@JsProperty
CSSStyleDeclaration getStyle();
@JsProperty
void setKeyText(String keyText);
@JsProperty
void setStyle(CSSStyleDeclaration style);
}
