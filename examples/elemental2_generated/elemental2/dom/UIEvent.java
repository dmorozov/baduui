package elemental2.dom;

import elemental2.dom.Window;
import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;
import elemental2.dom.UIEventInit;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class UIEvent extends Event {
    public int detail;

    public UIEvent(String type, UIEventInit eventInitDict) {
        // This call is only here for java compilation purpose.
        super((String) null, (EventInit) null);
    }

    public UIEvent(String type) {
        // This call is only here for java compilation purpose.
        super((String) null, (EventInit) null);
    }

    public native void initUIEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, Window viewArg,
            int detailArg);
}
