package elemental2.dom;
import jsinterop.base.JsArrayLike;
import elemental2.dom.TextTrack;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TextTrackList implements JsArrayLike<TextTrack>{
public int length;
public native TextTrack getTrackById(String id);
}
