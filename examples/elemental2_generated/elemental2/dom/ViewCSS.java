package elemental2.dom;
import elemental2.dom.Element;
import elemental2.dom.CSSStyleDeclaration;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ViewCSS{
public native CSSStyleDeclaration getComputedStyle(Element elt,String pseudoElt);
public native CSSStyleDeclaration getComputedStyle(Element elt);
}
