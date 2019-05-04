package elemental2.dom;

import elemental2.dom.InputDeviceCapabilities;
import elemental2.dom.MouseEventInit;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.dom.UIEventInit;
import elemental2.dom.DataTransfer;
import elemental2.dom.UIEvent;
import elemental2.dom.EventTarget;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MouseEvent extends UIEvent{
	public boolean altKey;
	public int button;
	public int buttons;
	public double clientX;
	public double clientY;
	public boolean ctrlKey;
	public DataTransfer dataTransfer;
	public boolean metaKey;
	public double offsetX;
	public double offsetY;
	public double pageX;
	public double pageY;
	public EventTarget relatedTarget;
	public double screenX;
	public double screenY;
	public boolean shiftKey;
	public InputDeviceCapabilities sourceCapabilities;
	public double x;
	public double y;

	public MouseEvent(String type,MouseEventInit eventInitDict){
		// This call is only here for java compilation purpose.
		super((String)null,(UIEventInit)null);
	}
	public MouseEvent(String type){
		// This call is only here for java compilation purpose.
		super((String)null,(UIEventInit)null);
	}
	public native boolean getModifierState(String keyIdentifierArg);
}
