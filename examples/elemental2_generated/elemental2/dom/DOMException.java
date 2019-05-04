package elemental2.dom;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMException{
public static int ABORT_ERR;
public static int DATA_CLONE_ERR;
public static int DOMSTRING_SIZE_ERR;
public static int HIERARCHY_REQUEST_ERR;
public static int INDEX_SIZE_ERR;
public static int INUSE_ATTRIBUTE_ERR;
public static int INVALID_ACCESS_ERR;
public static int INVALID_CHARACTER_ERR;
public static int INVALID_MODIFICATION_ERR;
public static int INVALID_NODE_TYPE_ERR;
public static int INVALID_STATE_ERR;
public static int NAMESPACE_ERR;
public static int NETWORK_ERR;
public static int NOT_FOUND_ERR;
public static int NOT_SUPPORTED_ERR;
public static int NO_DATA_ALLOWED_ERR;
public static int NO_MODIFICATION_ALLOWED_ERR;
public static int QUOTA_EXCEEDED_ERR;
public static int SECURITY_ERR;
public static int SYNTAX_ERR;
public static int TIMEOUT_ERR;
public static int TYPE_MISMATCH_ERR;
public static int URL_MISMATCH_ERR;
public static int VALIDATION_ERR;
public static int WRONG_DOCUMENT_ERR;
public int code;
public DOMException(){}
public DOMException(String message,String name){}
public DOMException(String message){}
}
