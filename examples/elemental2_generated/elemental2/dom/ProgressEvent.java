package elemental2.dom;

import elemental2.dom.Event;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.ProgressEventInit;
import elemental2.dom.EventInit;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ProgressEvent extends Event {
    public boolean lengthComputable;
    public double loaded;
    public double total;

    public ProgressEvent(String type, ProgressEventInit progressEventInitDict) {
        // This call is only here for java compilation purpose.
        super((String) null, (EventInit) null);
    }

    public ProgressEvent(String type) {
        // This call is only here for java compilation purpose.
        super((String) null, (EventInit) null);
    }
}
