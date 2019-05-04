package elemental2.svg;
import jsinterop.annotations.JsProperty;
import elemental2.dom.CSSValue;
import jsinterop.base.Js;
import elemental2.dom.CSSStyleDeclaration;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.svg.SVGAnimatedString;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface SVGStylable{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface GetStyleUnionType{
@JsOverlay
static SVGStylable.GetStyleUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default CSSStyleDeclaration asCSSStyleDeclaration(){
return Js.cast(this);
}
@JsOverlay
default String[] asStringArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isCSSStyleDeclaration(){
return (Object)this instanceof CSSStyleDeclaration;
}
@JsOverlay
default boolean isStringArray(){
return (Object)this instanceof Object[];
}
}
@JsProperty
SVGAnimatedString getClassName();
CSSValue getPresentationAttribute();
CSSValue getPresentationAttribute(String name);
@JsProperty
SVGStylable.GetStyleUnionType getStyle();
@JsProperty
void setClassName(SVGAnimatedString className);
@JsOverlay
default void setStyle(CSSStyleDeclaration style){
setStyle(Js.<SVGStylable.GetStyleUnionType>uncheckedCast(style));
}
@JsProperty
void setStyle(SVGStylable.GetStyleUnionType style);
@JsOverlay
default void setStyle(String[] style){
setStyle(Js.<SVGStylable.GetStyleUnionType>uncheckedCast(style));
}
}
