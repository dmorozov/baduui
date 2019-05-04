package elemental2.dom;
import jsinterop.annotations.JsProperty;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.CSSKeyframeRule;
import elemental2.dom.CSSRuleList;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface CSSKeyframesRule{
Object appendRule(String rule);
Object deleteRule(String key);
CSSKeyframeRule findRule(String key);
@JsProperty
CSSRuleList getCssRules();
@JsProperty
String getName();
@JsProperty
void setCssRules(CSSRuleList cssRules);
@JsProperty
void setName(String name);
}
