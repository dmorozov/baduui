package elemental2.dom;

import jsinterop.annotations.JsFunction;
import elemental2.dom.HTMLElement;
import elemental2.dom.Event;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLScriptElement extends HTMLElement {
    @JsFunction
    public interface OnreadystatechangeFn {
        Object onInvoke(Event p0);
    }

    public boolean async;
    public String charset;
    public boolean defer;
    public String event;
    public String htmlFor;
    public HTMLScriptElement.OnreadystatechangeFn onreadystatechange;
    public String src;
    public String text;
    public String type;
}
