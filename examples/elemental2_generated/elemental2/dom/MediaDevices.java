package elemental2.dom;

import elemental2.dom.MediaStreamConstraints;
import elemental2.dom.MediaStream;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;
import elemental2.dom.MediaTrackSupportedConstraints;
import elemental2.dom.MediaDeviceInfo;
import elemental2.dom.EventTarget;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaDevices extends EventTarget {
    Promise<MediaDeviceInfo[]> enumerateDevices();

    MediaTrackSupportedConstraints getSupportedConstraints();

    Promise<MediaStream> getUserMedia(MediaStreamConstraints constraints);
}
