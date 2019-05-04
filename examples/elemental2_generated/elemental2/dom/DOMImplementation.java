package elemental2.dom;

import elemental2.dom.DocumentType;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.HTMLDocument;
import elemental2.dom.Document;
import elemental2.core.JsObject;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMImplementation {
    public native Document createDocument(String namespaceURI, String publicId, DocumentType doctype);

    public native DocumentType createDocumentType(String qualifiedName, String publicId, String systemId);

    public native HTMLDocument createHTMLDocument();

    public native HTMLDocument createHTMLDocument(String title);

    public native JsObject getFeature(String feature, String version);

    public native boolean hasFeature(String feature, String version);
}
