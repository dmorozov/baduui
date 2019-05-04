package elemental2.dom;
import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import elemental2.dom.MediaTrackConstraintSet;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import jsinterop.base.JsPropertyMap;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaTrackConstraints extends MediaTrackConstraintSet{
@JsOverlay
static MediaTrackConstraints create(){
return Js.uncheckedCast(JsPropertyMap.of());
}
@JsProperty
MediaTrackConstraintSet[] getAdvanced();
@JsProperty
void setAdvanced(MediaTrackConstraintSet[] advanced);
}
