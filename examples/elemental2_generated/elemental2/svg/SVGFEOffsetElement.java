package elemental2.svg;
import elemental2.svg.SVGFilterPrimitiveStandardAttributes;
import elemental2.svg.SVGAnimatedNumber;
import elemental2.svg.SVGAnimatedString;
import jsinterop.annotations.JsProperty;
import elemental2.dom.CSSValue;
import elemental2.svg.SVGStylable;
import elemental2.svg.SVGElement;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.svg.SVGAnimatedLength;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SVGFEOffsetElement extends SVGElement implements SVGFilterPrimitiveStandardAttributes{
public SVGAnimatedString className;
public SVGAnimatedNumber dx;
public SVGAnimatedNumber dy;
public SVGAnimatedLength height;
public SVGAnimatedString in1;
public SVGAnimatedString result;
public SVGStylable.GetStyleUnionType style;
public SVGAnimatedLength width;
public SVGAnimatedLength x;
public SVGAnimatedLength y;
@JsProperty
public native SVGAnimatedString getClassName();
@JsProperty
public native SVGAnimatedLength getHeight();
public native CSSValue getPresentationAttribute();
public native CSSValue getPresentationAttribute(String name);
@JsProperty
public native SVGAnimatedString getResult();
@JsProperty
public native SVGStylable.GetStyleUnionType getStyle();
@JsProperty
public native SVGAnimatedLength getWidth();
@JsProperty
public native SVGAnimatedLength getX();
@JsProperty
public native SVGAnimatedLength getY();
@JsProperty
public native void setClassName(SVGAnimatedString className);
@JsProperty
public native void setHeight(SVGAnimatedLength height);
@JsProperty
public native void setResult(SVGAnimatedString result);
@JsProperty
public native void setStyle(SVGStylable.GetStyleUnionType style);
@JsProperty
public native void setWidth(SVGAnimatedLength width);
@JsProperty
public native void setX(SVGAnimatedLength x);
@JsProperty
public native void setY(SVGAnimatedLength y);
}
