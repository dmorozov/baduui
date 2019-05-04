package elemental2.svg;
import jsinterop.annotations.JsProperty;
import elemental2.dom.CSSValue;
import elemental2.svg.SVGStylable;
import elemental2.svg.SVGAnimatedNumber;
import elemental2.svg.SVGElement;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.svg.SVGAnimatedString;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SVGStopElement extends SVGElement implements SVGStylable{
public SVGAnimatedString className;
public SVGAnimatedNumber offset;
public SVGStylable.GetStyleUnionType style;
@JsProperty
public native SVGAnimatedString getClassName();
public native CSSValue getPresentationAttribute();
public native CSSValue getPresentationAttribute(String name);
@JsProperty
public native SVGStylable.GetStyleUnionType getStyle();
@JsProperty
public native void setClassName(SVGAnimatedString className);
@JsProperty
public native void setStyle(SVGStylable.GetStyleUnionType style);
}
