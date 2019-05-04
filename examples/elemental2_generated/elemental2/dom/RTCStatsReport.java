package elemental2.dom;
import java.lang.Double;
import java.lang.Deprecated;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import elemental2.dom.RTCStats;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsIteratorIterable;
import elemental2.core.JsDate;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCStatsReport{
@JsFunction
public interface ForEachCallbackFn<MAP>{
Object onInvoke(RTCStats p0,String p1,MAP p2);
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface GetTimestampUnionType{
@JsOverlay
static RTCStatsReport.GetTimestampUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double asDouble(){
return Js.asDouble(this);
}
@JsOverlay
default JsDate asJsDate(){
return Js.cast(this);
}
@JsOverlay
default boolean isDouble(){
return (Object)this instanceof Double;
}
@JsOverlay
default boolean isJsDate(){
return (Object)this instanceof JsDate;
}
}
<MAP, SCOPE>Object forEach(RTCStatsReport.ForEachCallbackFn<? super MAP> callback,SCOPE thisObj);
<MAP>Object forEach(RTCStatsReport.ForEachCallbackFn<? super MAP> callback);
RTCStats get(String key);
@JsProperty
String getId();
@Deprecated
@JsProperty
RTCStatsReport getLocal();
@Deprecated
@JsProperty
RTCStatsReport getRemote();
@JsProperty
RTCStatsReport.GetTimestampUnionType getTimestamp();
@JsProperty
String getType();
JsIteratorIterable<String> keys();
String[] names();
String stat(String name);
}
