package elemental2.dom;
import elemental2.dom.SQLStatementCallback;
import elemental2.dom.SQLError;
import jsinterop.annotations.JsFunction;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SQLTransaction{
@JsFunction
public interface ExecuteSqlErrorCallbackFn{
boolean onInvoke(SQLTransaction p0,SQLError p1);
}
public native void executeSql(String sqlStatement,Object[] queryArgs,SQLStatementCallback callback,SQLTransaction.ExecuteSqlErrorCallbackFn errorCallback);
public native void executeSql(String sqlStatement,Object[] queryArgs,SQLStatementCallback callback);
public native void executeSql(String sqlStatement,Object[] queryArgs);
public native void executeSql(String sqlStatement);
}
