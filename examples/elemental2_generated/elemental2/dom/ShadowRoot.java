package elemental2.dom;
import elemental2.dom.Element;
import jsinterop.base.JsArrayLike;
import elemental2.dom.HTMLElement;
import elemental2.dom.Selection;
import elemental2.dom.NodeList;
import elemental2.dom.DocumentFragment;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.StyleSheetList;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ShadowRoot extends DocumentFragment{
public Element activeElement;
public boolean applyAuthorStyles;
public Element host;
public String innerHTML;
public ShadowRoot olderShadowRoot;
public boolean resetStyleInheritance;
public StyleSheetList styleSheets;
public native Element elementFromPoint(double x,double y);
public native JsArrayLike<Element> elementsFromPoint(double x,double y);
public native HTMLElement getElementById(String id);
public native NodeList<Element> getElementsByClassName(String className);
public native NodeList<Element> getElementsByTagName(String tagName);
public native NodeList<Element> getElementsByTagNameNS(String namespace,String localName);
public native Selection getSelection();
}
