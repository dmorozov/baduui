package elemental2.dom;
import elemental2.dom.TrustedURL;
import elemental2.dom.TrustedScriptURL;
import elemental2.dom.TrustedHTML;
import elemental2.dom.TrustedScript;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TrustedTypePolicy{
public native TrustedHTML createHTML(String s);
public native TrustedScript createScript(String s);
public native TrustedScriptURL createScriptURL(String s);
public native TrustedURL createURL(String s);
}
