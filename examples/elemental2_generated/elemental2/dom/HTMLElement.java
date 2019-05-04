package elemental2.dom;

import elemental2.dom.Element;
import elemental2.dom.ShadowRoot;
import elemental2.dom.Document;
import jsinterop.base.JsPropertyMap;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import elemental2.dom.CSSStyleDeclaration;
import elemental2.dom.Node;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.NodeList;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsObject;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLElement extends Element {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface AttachShadowOptionsType {
        @JsOverlay
        static HTMLElement.AttachShadowOptionsType create() {
            return Js.uncheckedCast(JsPropertyMap.of());
        }

        @JsProperty
        String getMode();

        @JsProperty
        void setMode(String mode);
    }

    @JsFunction
    public interface AttachedCallbackFn {
        Object onInvoke();
    }

    @JsFunction
    public interface ConnectedCallbackFn {
        Object onInvoke();
    }

    @JsFunction
    public interface CreatedCallbackFn {
        Object onInvoke();
    }

    @JsFunction
    public interface DetachedCallbackFn {
        Object onInvoke();
    }

    @JsFunction
    public interface DisconnectedCallbackFn {
        Object onInvoke();
    }

    public static String[] observedAttributes;
    public HTMLElement.AttachedCallbackFn attachedCallback;
    public String className;
    public HTMLElement.ConnectedCallbackFn connectedCallback;
    public Element contextMenu;
    public HTMLElement.CreatedCallbackFn createdCallback;
    public JsPropertyMap<String> dataset;
    public HTMLElement.DetachedCallbackFn detachedCallback;
    public String dir;
    public HTMLElement.DisconnectedCallbackFn disconnectedCallback;
    public boolean draggable;
    public JsObject dropzone;
    public boolean hidden;
    public String id;
    public String lang;
    public String nonce;
    public int offsetHeight;
    public int offsetLeft;
    public Element offsetParent;
    public int offsetTop;
    public int offsetWidth;
    public ShadowRoot shadowRoot;
    public boolean spellcheck;
    public CSSStyleDeclaration style;
    public int tabIndex;
    public String title;

    public native Object adoptedCallback(Document oldDocument, Document newDocument);

    public native ShadowRoot attachShadow(HTMLElement.AttachShadowOptionsType options);

    public native Object attributeChangedCallback(String attributeName, String oldValue, String newValue,
            String namespace);

    public native ShadowRoot createShadowRoot();

    public native NodeList<Node> getDestinationInsertionPoints();

    public native NodeList<Element> getElementsByClassName(String classNames);

    public native ShadowRoot webkitCreateShadowRoot();
}