package elemental2.dom;

import jsinterop.annotations.JsProperty;
import jsinterop.base.Js;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.UIEventInit;
import elemental2.dom.Touch;
import jsinterop.base.JsPropertyMap;
import elemental2.dom.EventTarget;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface TouchEventInit extends UIEventInit {
    @JsOverlay
    static TouchEventInit create() {
        return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    Touch[] getChangedTouches();

    @JsProperty
    EventTarget getRelatedTarget();

    @JsProperty
    Touch[] getTargetTouches();

    @JsProperty
    Touch[] getTouches();

    @JsProperty
    void setChangedTouches(Touch[] changedTouches);

    @JsProperty
    void setRelatedTarget(EventTarget relatedTarget);

    @JsProperty
    void setTargetTouches(Touch[] targetTouches);

    @JsProperty
    void setTouches(Touch[] touches);
}
