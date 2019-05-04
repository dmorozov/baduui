package elemental2.core;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
import elemental2.core.JsArray;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RegExpResult extends JsArray<String>{
public JsPropertyMap<String> groups;
public double index;
public String input;
public double length;
public RegExpResult(){
// This call is only here for java compilation purpose.
super((Object)null);
}
}
