package elemental2.dom;
import jsinterop.annotations.JsProperty;
import elemental2.dom.TrustedTypePolicy;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TrustedTypePolicyFactory{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface CreatePolicyPolicyType{
@JsFunction
public interface CreateHTMLFn{
String onInvoke(String p0);
}
@JsFunction
public interface CreateScriptFn{
String onInvoke(String p0);
}
@JsFunction
public interface CreateScriptURLFn{
String onInvoke(String p0);
}
@JsFunction
public interface CreateURLFn{
String onInvoke(String p0);
}
@JsOverlay
static TrustedTypePolicyFactory.CreatePolicyPolicyType create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateHTMLFn getCreateHTML();
@JsProperty
TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateScriptFn getCreateScript();
@JsProperty
TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateScriptURLFn getCreateScriptURL();
@JsProperty
TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateURLFn getCreateURL();
@JsProperty
void setCreateHTML(TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateHTMLFn createHTML);
@JsProperty
void setCreateScript(TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateScriptFn createScript);
@JsProperty
void setCreateScriptURL(TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateScriptURLFn createScriptURL);
@JsProperty
void setCreateURL(TrustedTypePolicyFactory.CreatePolicyPolicyType.CreateURLFn createURL);
}
public native TrustedTypePolicy createPolicy(String name,TrustedTypePolicyFactory.CreatePolicyPolicyType policy,boolean expose);
public native TrustedTypePolicy createPolicy(String name,TrustedTypePolicyFactory.CreatePolicyPolicyType policy);
public native TrustedTypePolicy getExposedPolicy(String name);
public native String[] getPolicyNames();
}
