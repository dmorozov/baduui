package elemental2.dom;

import elemental2.dom.Event;
import java.lang.Object;
import elemental2.dom.ErrorEventInit;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.EventInit;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ErrorEvent extends Event {
    public int colno;
    public Object error;
    public String filename;
    public int lineno;
    public String message;

    public ErrorEvent(String type, ErrorEventInit eventInitDict) {
        // This call is only here for java compilation purpose.
        super((String) null, (EventInit) null);
    }

    public ErrorEvent(String type) {
        // This call is only here for java compilation purpose.
        super((String) null, (EventInit) null);
    }
}
