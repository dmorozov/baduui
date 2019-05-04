package elemental2.dom;
import elemental2.dom.Database;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface DatabaseCallback{
void handleEvent(Database db);
}
