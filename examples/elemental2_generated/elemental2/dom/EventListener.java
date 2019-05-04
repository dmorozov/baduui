package elemental2.dom;

import elemental2.dom.Event;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface EventListener {
    void handleEvent(Event evt);
}
