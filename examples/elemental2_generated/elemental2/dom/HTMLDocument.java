package elemental2.dom;

import elemental2.dom.Element;
import elemental2.dom.HTMLAppletElement;
import elemental2.dom.HTMLFormElement;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLCollection;
import elemental2.dom.HTMLAreaElement;
import elemental2.dom.TrustedHTML;
import elemental2.dom.Document;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.NodeList;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.HTMLBodyElement;
import elemental2.dom.HTMLImageElement;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLDocument extends Document {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface LinksHTMLCollectionTypeParameterUnionType {
        @JsOverlay
        static HTMLDocument.LinksHTMLCollectionTypeParameterUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default HTMLAnchorElement asHTMLAnchorElement() {
            return Js.cast(this);
        }

        @JsOverlay
        default HTMLAreaElement asHTMLAreaElement() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isHTMLAnchorElement() {
            return (Object) this instanceof HTMLAnchorElement;
        }

        @JsOverlay
        default boolean isHTMLAreaElement() {
            return (Object) this instanceof HTMLAreaElement;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface WriteTextUnionType {
        @JsOverlay
        static HTMLDocument.WriteTextUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default TrustedHTML asTrustedHTML() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }

        @JsOverlay
        default boolean isTrustedHTML() {
            return (Object) this instanceof TrustedHTML;
        }
    }

    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface WritelnTextUnionType {
        @JsOverlay
        static HTMLDocument.WritelnTextUnionType of(Object o) {
            return Js.cast(o);
        }

        @JsOverlay
        default String asString() {
            return Js.asString(this);
        }

        @JsOverlay
        default TrustedHTML asTrustedHTML() {
            return Js.cast(this);
        }

        @JsOverlay
        default boolean isString() {
            return (Object) this instanceof String;
        }

        @JsOverlay
        default boolean isTrustedHTML() {
            return (Object) this instanceof TrustedHTML;
        }
    }

    public String URL;
    public HTMLCollection<HTMLAnchorElement> anchors;
    public HTMLCollection<HTMLAppletElement> applets;
    public HTMLBodyElement body;
    public String cookie;
    public String domain;
    public HTMLCollection<HTMLFormElement> forms;
    public HTMLCollection<HTMLImageElement> images;
    public HTMLCollection<HTMLDocument.LinksHTMLCollectionTypeParameterUnionType> links;
    public String referrer;
    public String title;

    public native void close();

    public native NodeList<Element> getElementsByName(String elementName);

    public native void open();

    public native void open(String mimeType, String replace);

    public native void open(String mimeType);

    @JsOverlay
    public final void write(String text) {
        write(Js.<HTMLDocument.WriteTextUnionType>uncheckedCast(text));
    }

    @JsOverlay
    public final void write(TrustedHTML text) {
        write(Js.<HTMLDocument.WriteTextUnionType>uncheckedCast(text));
    }

    public native void write(HTMLDocument.WriteTextUnionType text);

    @JsOverlay
    public final void writeln(String text) {
        writeln(Js.<HTMLDocument.WritelnTextUnionType>uncheckedCast(text));
    }

    @JsOverlay
    public final void writeln(TrustedHTML text) {
        writeln(Js.<HTMLDocument.WritelnTextUnionType>uncheckedCast(text));
    }

    public native void writeln(HTMLDocument.WritelnTextUnionType text);
}
