package elemental2.dom;
import elemental2.dom.Node;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class XPathResult{
public static double ANY_TYPE;
public static double ANY_UNORDERED_NODE_TYPE;
public static double BOOLEAN_TYPE;
public static double FIRST_ORDERED_NODE_TYPE;
public static double NUMBER_TYPE;
public static double ORDERED_NODE_ITERATOR_TYPE;
public static double ORDERED_NODE_SNAPSHOT_TYPE;
public static double STRING_TYPE;
public static double UNORDERED_NODE_ITERATOR_TYPE;
public static double UNORDERED_NODE_SNAPSHOT_TYPE;
public boolean booleanValue;
public boolean invalidInteratorState;
public double numberValue;
public int resultType;
public Node singleNodeValue;
public int snapshotLength;
public String stringValue;
public native Node iterateNext();
public native Node snapshotItem(int index);
}
