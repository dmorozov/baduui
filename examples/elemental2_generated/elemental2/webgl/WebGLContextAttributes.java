package elemental2.webgl;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WebGLContextAttributes{
public boolean alpha;
public boolean antialias;
public boolean depth;
public boolean failIfMajorPerformanceCaveat;
public boolean preferLowPowerToHighPerformance;
public boolean premultipliedAlpha;
public boolean preserveDrawingBuffer;
public boolean stencil;
}
