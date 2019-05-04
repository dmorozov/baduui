package elemental2.svg;
import elemental2.dom.Element;
import elemental2.svg.SVGSVGElement;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SVGElement extends Element{
public String id;
public SVGSVGElement ownerSVGElement;
public SVGElement viewportElement;
public String xmlbase;
}
