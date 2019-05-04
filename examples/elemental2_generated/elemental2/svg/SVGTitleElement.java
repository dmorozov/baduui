package elemental2.svg;
import jsinterop.annotations.JsProperty;
import elemental2.dom.CSSValue;
import elemental2.svg.SVGLangSpace;
import elemental2.svg.SVGStylable;
import elemental2.svg.SVGElement;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.svg.SVGAnimatedString;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SVGTitleElement extends SVGElement implements SVGLangSpace, SVGStylable{
public SVGAnimatedString className;
public SVGStylable.GetStyleUnionType style;
public String xmllang;
public String xmlspace;
@JsProperty
public native SVGAnimatedString getClassName();
public native CSSValue getPresentationAttribute();
public native CSSValue getPresentationAttribute(String name);
@JsProperty
public native SVGStylable.GetStyleUnionType getStyle();
@JsProperty
public native String getXmllang();
@JsProperty
public native String getXmlspace();
@JsProperty
public native void setClassName(SVGAnimatedString className);
@JsProperty
public native void setStyle(SVGStylable.GetStyleUnionType style);
@JsProperty
public native void setXmllang(String xmllang);
@JsProperty
public native void setXmlspace(String xmlspace);
}
