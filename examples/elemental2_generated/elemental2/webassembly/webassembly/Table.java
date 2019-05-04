package elemental2.webassembly.webassembly;
import elemental2.webassembly.TableDescriptor;
import java.lang.Object;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.webassembly.TableFunction;
@JsType(isNative = true, name = "WebAssembly.Table", namespace = JsPackage.GLOBAL)
public class Table{
public int length;
public Table(TableDescriptor tableDescriptor){}
public native TableFunction get(int index);
public native int grow(int delta);
public native Object set(int index,TableFunction value);
}
