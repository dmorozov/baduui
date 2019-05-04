package elemental2.core;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsArray;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ITemplateArray extends JsArray<String>{
public String[] raw;
public ITemplateArray(){
// This call is only here for java compilation purpose.
super((Object)null);
}
}
