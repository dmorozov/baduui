package elemental2.dom;
import java.lang.Void;
import elemental2.dom.MediaTrackConstraints;
import elemental2.dom.Event;
import jsinterop.annotations.JsMethod;
import elemental2.dom.MediaTrackSettings;
import elemental2.promise.Promise;
import elemental2.dom.EventTarget;
import jsinterop.annotations.JsProperty;
import elemental2.dom.MediaTrackCapabilities;
import jsinterop.annotations.JsFunction;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaStreamTrack extends EventTarget{
@JsFunction
public interface OnendedFn{
Object onInvoke(Event p0);
}
@JsFunction
public interface OnmuteFn{
Object onInvoke(Event p0);
}
@JsFunction
public interface OnoverconstrainedFn{
Object onInvoke(Event p0);
}
@JsFunction
public interface OnunmuteFn{
Object onInvoke(Event p0);
}
Promise<Void> applyConstraints();
Promise<Void> applyConstraints(MediaTrackConstraints constraints);
@JsMethod(name = "clone")
MediaStreamTrack clone_();
MediaTrackCapabilities getCapabilities();
MediaTrackConstraints getConstraints();
@JsProperty
String getContentHint();
@JsProperty
String getId();
@JsProperty
String getKind();
@JsProperty
String getLabel();
@JsProperty
MediaStreamTrack.OnendedFn getOnended();
@JsProperty
MediaStreamTrack.OnmuteFn getOnmute();
@JsProperty
MediaStreamTrack.OnoverconstrainedFn getOnoverconstrained();
@JsProperty
MediaStreamTrack.OnunmuteFn getOnunmute();
@JsProperty
String getReadyState();
MediaTrackSettings getSettings();
@JsProperty
boolean isEnabled();
@JsProperty
boolean isMuted();
@JsProperty
boolean isRemote();
@JsProperty
void setContentHint(String contentHint);
@JsProperty
void setEnabled(boolean enabled);
@JsProperty
void setOnended(MediaStreamTrack.OnendedFn onended);
@JsProperty
void setOnmute(MediaStreamTrack.OnmuteFn onmute);
@JsProperty
void setOnoverconstrained(MediaStreamTrack.OnoverconstrainedFn onoverconstrained);
@JsProperty
void setOnunmute(MediaStreamTrack.OnunmuteFn onunmute);
@JsProperty
void setReadyState(String readyState);
void stop();
}
