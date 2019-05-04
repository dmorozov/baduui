package elemental2.dom;
import elemental2.dom.DragEventInit;
import elemental2.dom.MouseEventInit;
import elemental2.dom.MouseEvent;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.DataTransfer;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DragEvent extends MouseEvent{
public DataTransfer dataTransfer;
public DragEvent(String type,DragEventInit eventInitDict){
// This call is only here for java compilation purpose.
super((String)null,(MouseEventInit)null);
}
public DragEvent(String type){
// This call is only here for java compilation purpose.
super((String)null,(MouseEventInit)null);
}
}
