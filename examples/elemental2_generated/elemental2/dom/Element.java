package elemental2.dom;

import elemental2.dom.Attr;
import elemental2.dom.TouchEvent;
import elemental2.dom.TypeInfo;
import elemental2.dom.DOMTokenList;
import java.lang.Double;
import elemental2.dom.Event;
import jsinterop.base.JsPropertyMap;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import elemental2.dom.FullscreenOptions;
import elemental2.dom.Node;
import elemental2.dom.ClientRectList;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.NodeList;
import java.lang.Boolean;
import java.lang.Object;
import elemental2.dom.NamedNodeMap;
import java.lang.String;
import elemental2.dom.DOMRect;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Element extends Node {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface AfterNodesUnionType {
        @JsOverlay
        static Element.AfterNodesUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Node asNode() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isNode() {
            return (Object) this instanceof Node;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface AppendNodesUnionType {
        @JsOverlay
        static Element.AppendNodesUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Node asNode() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isNode() {
            return (Object) this instanceof Node;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface BeforeNodesUnionType {
        @JsOverlay
        static Element.BeforeNodesUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Node asNode() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isNode() {
            return (Object) this instanceof Node;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface MatchesSelectorRefNodesUnionType {
        @JsOverlay
        static Element.MatchesSelectorRefNodesUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Node asNode() {
            return Js.cast(this);
        }

        @JsOverlay
        default NodeList<Object> asNodeList() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isNode() {
            return (Object) this instanceof Node;
        }

        @JsOverlay
        default boolean isNodeList() {
            return (Object) this instanceof NodeList;
        }
    }

    @JsFunction
    public interface OnabortFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnbeforeinputFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnbeforeunloadFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnblurFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnchangeFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnclickFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OncompositionendFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OncompositionstartFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OncompositionupdateFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OncontextmenuFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OncopyFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OncutFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OndblclickFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnerrorFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnfocusFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnfocusinFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnfocusoutFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OninputFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnkeydownFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnkeypressFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnkeyupFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnloadFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmousedownFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmousemoveFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmouseoutFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmouseoverFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmouseupFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmousewheelFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnpasteFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnresetFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnresizeFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnscrollFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnselectFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnsubmitFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OntextinputFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OntouchcancelFn {
        Object onInvoke(TouchEvent p0);
    }

    @JsFunction
    public interface OntouchendFn {
        Object onInvoke(TouchEvent p0);
    }

    @JsFunction
    public interface OntouchmoveFn {
        Object onInvoke(TouchEvent p0);
    }

    @JsFunction
    public interface OntouchstartFn {
        Object onInvoke(TouchEvent p0);
    }

    @JsFunction
    public interface OnunloadFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnwheelFn {
        Object onInvoke(Event p0);
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface PrependNodesUnionType {
        @JsOverlay
        static Element.PrependNodesUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Node asNode() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isNode() {
            return (Object) this instanceof Node;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface ReplaceWithNodesUnionType {
        @JsOverlay
        static Element.ReplaceWithNodesUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default Node asNode() {
            return Js.cast(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isNode() {
            return (Object) this instanceof Node;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface ScrollIntoViewTopType {
        @JsOverlay
        static Element.ScrollIntoViewTopType create() {
            return Js.uncheckedCast(JsPropertyMap.of());
        }

        @JsProperty
        String getBehavior();

        @JsProperty
        String getBlock();

        @JsProperty
        void setBehavior(String behavior);

        @JsProperty
        void setBlock(String block);
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface ScrollIntoViewTopUnionType {
        @JsOverlay
        static Element.ScrollIntoViewTopUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default boolean asBoolean() {
            return Js.asBoolean(this);
        }

        @JsOverlay
        default Element.ScrollIntoViewTopType asScrollIntoViewTopType() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isBoolean() {
            return (Object) this instanceof Boolean;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface ScrollToScrollToOptionsOrXType {
        @JsOverlay
        static Element.ScrollToScrollToOptionsOrXType create() {
            return Js.uncheckedCast(JsPropertyMap.of());
        }

        @JsProperty
        String getBehavior();

        @JsProperty
        double getLeft();

        @JsProperty
        double getTop();

        @JsProperty
        void setBehavior(String behavior);

        @JsProperty
        void setLeft(double left);

        @JsProperty
        void setTop(double top);
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface ScrollToScrollToOptionsOrXUnionType {
        @JsOverlay
        static Element.ScrollToScrollToOptionsOrXUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default double asDouble() {
            return Js.asDouble(this);
        }

        @JsOverlay
        default Element.ScrollToScrollToOptionsOrXType asScrollToScrollToOptionsOrXType() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isDouble() {
            return (Object) this instanceof Double;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface SetAttributeNSValueUnionType {
        @JsOverlay
        static Element.SetAttributeNSValueUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default boolean asBoolean() {
            return Js.asBoolean(this);
        }

        @JsOverlay
        default double asDouble() {
            return Js.asDouble(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isBoolean() {
            return (Object) this instanceof Boolean;
        }

        @JsOverlay
        default boolean isDouble() {
            return (Object) this instanceof Double;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface SetAttributeValueUnionType {
        @JsOverlay
        static Element.SetAttributeValueUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default boolean asBoolean() {
            return Js.asBoolean(this);
        }

        @JsOverlay
        default double asDouble() {
            return Js.asDouble(this);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default boolean isBoolean() {
            return (Object) this instanceof Boolean;
        }

        @JsOverlay
        default boolean isDouble() {
            return (Object) this instanceof Double;
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }
    }

    public static double ALLOW_KEYBOARD_INPUT;
    public NamedNodeMap<Attr> attributes;
    public double childElementCount;
    public DOMTokenList classList;
    public Object className;
    public int clientHeight;
    public int clientLeft;
    public int clientTop;
    public int clientWidth;
    public Element firstElementChild;
    public String innerHTML;
    public Element lastElementChild;
    public Element nextElementSibling;
    public Element.OnabortFn onabort;
    public Element.OnbeforeinputFn onbeforeinput;
    public Element.OnbeforeunloadFn onbeforeunload;
    public Element.OnblurFn onblur;
    public Element.OnchangeFn onchange;
    public Element.OnclickFn onclick;
    public Element.OncompositionendFn oncompositionend;
    public Element.OncompositionstartFn oncompositionstart;
    public Element.OncompositionupdateFn oncompositionupdate;
    public Element.OncontextmenuFn oncontextmenu;
    public Element.OncopyFn oncopy;
    public Element.OncutFn oncut;
    public Element.OndblclickFn ondblclick;
    public Element.OnerrorFn onerror;
    public Element.OnfocusFn onfocus;
    public Element.OnfocusinFn onfocusin;
    public Element.OnfocusoutFn onfocusout;
    public Element.OninputFn oninput;
    public Element.OnkeydownFn onkeydown;
    public Element.OnkeypressFn onkeypress;
    public Element.OnkeyupFn onkeyup;
    public Element.OnloadFn onload;
    public Element.OnmousedownFn onmousedown;
    public Element.OnmousemoveFn onmousemove;
    public Element.OnmouseoutFn onmouseout;
    public Element.OnmouseoverFn onmouseover;
    public Element.OnmouseupFn onmouseup;
    public Element.OnmousewheelFn onmousewheel;
    public Element.OnpasteFn onpaste;
    public Element.OnresetFn onreset;
    public Element.OnresizeFn onresize;
    public Element.OnscrollFn onscroll;
    public Element.OnselectFn onselect;
    public Element.OnsubmitFn onsubmit;
    public Element.OntextinputFn ontextinput;
    public Element.OntouchcancelFn ontouchcancel;
    public Element.OntouchendFn ontouchend;
    public Element.OntouchmoveFn ontouchmove;
    public Element.OntouchstartFn ontouchstart;
    public Element.OnunloadFn onunload;
    public Element.OnwheelFn onwheel;
    public Element previousElementSibling;
    public TypeInfo schemaTypeInfo;
    public int scrollHeight;
    public double scrollLeft;
    public double scrollTop;
    public int scrollWidth;
    public String slot;
    public String tagName;

    public native void after(Element.AfterNodesUnionType... nodes);

    @JsOverlay
    public final void after(Node... nodes) {
        after(Js.<Element.AfterNodesUnionType>uncheckedCast(nodes));
    }

    @JsOverlay
    public final void after(String... nodes) {
        after(Js.<Element.AfterNodesUnionType>uncheckedCast(nodes));
    }

    public native void append(Element.AppendNodesUnionType... nodes);

    @JsOverlay
    public final void append(Node... nodes) {
        append(Js.<Element.AppendNodesUnionType>uncheckedCast(nodes));
    }

    @JsOverlay
    public final void append(String... nodes) {
        append(Js.<Element.AppendNodesUnionType>uncheckedCast(nodes));
    }

    public native void before(Element.BeforeNodesUnionType... nodes);

    @JsOverlay
    public final void before(Node... nodes) {
        before(Js.<Element.BeforeNodesUnionType>uncheckedCast(nodes));
    }

    @JsOverlay
    public final void before(String... nodes) {
        before(Js.<Element.BeforeNodesUnionType>uncheckedCast(nodes));
    }

    public native void blur();

    public native void click();

    public native Element closest(String selectors);

    public native void focus();

    public native String getAttribute(String name, double flags);

    public native String getAttribute(String name);

    public native String getAttributeNS(String namespaceURI, String localName);

    public native String[] getAttributeNames();

    public native Attr getAttributeNode(String name);

    public native Attr getAttributeNodeNS(String namespaceURI, String localName);

    public native DOMRect getBoundingClientRect();

    public native ClientRectList getClientRects();

    public native NodeList<Element> getElementsByTagName(String tagname);

    public native NodeList<Element> getElementsByTagNameNS(String namespaceURI, String localName);

    public native boolean hasAttribute(String name);

    public native boolean hasAttributeNS(String namespaceURI, String localName);

    public native boolean matches(String selectors);

    public native boolean matchesSelector(String selectors, Element.MatchesSelectorRefNodesUnionType refNodes);

    @JsOverlay
    public final boolean matchesSelector(String selectors, Node refNodes) {
        return matchesSelector(selectors, Js.<Element.MatchesSelectorRefNodesUnionType>uncheckedCast(refNodes));
    }

    @JsOverlay
    public final boolean matchesSelector(String selectors, NodeList<Object> refNodes) {
        return matchesSelector(selectors, Js.<Element.MatchesSelectorRefNodesUnionType>uncheckedCast(refNodes));
    }

    public native boolean matchesSelector(String selectors);

    public native boolean mozMatchesSelector(String selectors);

    public native Object mozRequestFullScreen();

    public native Object mozRequestFullScreenWithKeys();

    public native boolean msMatchesSelector(String selectors);

    public native void msRequestFullscreen();

    public native boolean oMatchesSelector(String selectors);

    @JsOverlay
    public final void prepend(Node... nodes) {
        prepend(Js.<Element.PrependNodesUnionType>uncheckedCast(nodes));
    }

    public native void prepend(Element.PrependNodesUnionType... nodes);

    @JsOverlay
    public final void prepend(String... nodes) {
        prepend(Js.<Element.PrependNodesUnionType>uncheckedCast(nodes));
    }

    public native Element querySelector(String selectors);

    public native NodeList<Element> querySelectorAll(String selectors);

    public native void remove();

    public native void removeAttribute(String name);

    public native void removeAttributeNS(String namespaceURI, String localName);

    public native Attr removeAttributeNode(Attr oldAttr);

    @JsOverlay
    public final void replaceWith(Node... nodes) {
        replaceWith(Js.<Element.ReplaceWithNodesUnionType>uncheckedCast(nodes));
    }

    public native void replaceWith(Element.ReplaceWithNodesUnionType... nodes);

    @JsOverlay
    public final void replaceWith(String... nodes) {
        replaceWith(Js.<Element.ReplaceWithNodesUnionType>uncheckedCast(nodes));
    }

    public native void requestFullscreen();

    public native void requestFullscreen(FullscreenOptions options);

    public native void scrollIntoView();

    @JsOverlay
    public final void scrollIntoView(Element.ScrollIntoViewTopType top) {
        scrollIntoView(Js.<Element.ScrollIntoViewTopUnionType>uncheckedCast(top));
    }

    public native void scrollIntoView(Element.ScrollIntoViewTopUnionType top);

    @JsOverlay
    public final void scrollIntoView(boolean top) {
        scrollIntoView(Js.<Element.ScrollIntoViewTopUnionType>uncheckedCast(top));
    }

    @JsOverlay
    public final void scrollTo(Element.ScrollToScrollToOptionsOrXType scrollToOptionsOrX, double y) {
        scrollTo(Js.<Element.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
    }

    @JsOverlay
    public final void scrollTo(Element.ScrollToScrollToOptionsOrXType scrollToOptionsOrX) {
        scrollTo(Js.<Element.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
    }

    public native void scrollTo(Element.ScrollToScrollToOptionsOrXUnionType scrollToOptionsOrX, double y);

    public native void scrollTo(Element.ScrollToScrollToOptionsOrXUnionType scrollToOptionsOrX);

    @JsOverlay
    public final void scrollTo(double scrollToOptionsOrX, double y) {
        scrollTo(Js.<Element.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
    }

    @JsOverlay
    public final void scrollTo(double scrollToOptionsOrX) {
        scrollTo(Js.<Element.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
    }

    public native void setAttribute(String name, Element.SetAttributeValueUnionType value);

    @JsOverlay
    public final void setAttribute(String name, String value) {
        setAttribute(name, Js.<Element.SetAttributeValueUnionType>uncheckedCast(value));
    }

    @JsOverlay
    public final void setAttribute(String name, boolean value) {
        setAttribute(name, Js.<Element.SetAttributeValueUnionType>uncheckedCast(value));
    }

    @JsOverlay
    public final void setAttribute(String name, double value) {
        setAttribute(name, Js.<Element.SetAttributeValueUnionType>uncheckedCast(value));
    }

    public native void setAttributeNS(String namespaceURI, String qualifiedName,
            Element.SetAttributeNSValueUnionType value);

    @JsOverlay
    public final void setAttributeNS(String namespaceURI, String qualifiedName, String value) {
        setAttributeNS(namespaceURI, qualifiedName, Js.<Element.SetAttributeNSValueUnionType>uncheckedCast(value));
    }

    @JsOverlay
    public final void setAttributeNS(String namespaceURI, String qualifiedName, boolean value) {
        setAttributeNS(namespaceURI, qualifiedName, Js.<Element.SetAttributeNSValueUnionType>uncheckedCast(value));
    }

    @JsOverlay
    public final void setAttributeNS(String namespaceURI, String qualifiedName, double value) {
        setAttributeNS(namespaceURI, qualifiedName, Js.<Element.SetAttributeNSValueUnionType>uncheckedCast(value));
    }

    public native Attr setAttributeNode(Attr newAttr);

    public native Attr setAttributeNodeNS(Attr newAttr);

    public native void setIdAttribute(String name, boolean isId);

    public native void setIdAttributeNS(String namespaceURI, String localName, boolean isId);

    public native void setIdAttributeNode(Attr idAttr, boolean isId);

    public native boolean toggleAttribute(String name, boolean force);

    public native boolean toggleAttribute(String name);

    public native boolean webkitMatchesSelector(String selectors);

    public native void webkitRequestFullScreen();

    public native void webkitRequestFullScreen(double allowKeyboardInput);

    public native void webkitRequestFullscreen();

    public native void webkitRequestFullscreen(double allowKeyboardInput);
}
