package elemental2.webgl;
import elemental2.dom.HTMLVideoElement;
import elemental2.webgl.WebGLShader;
import java.lang.Double;
import elemental2.webgl.WebGLUniformLocation;
import elemental2.webgl.WebGLFramebuffer;
import elemental2.webgl.WebGLActiveInfo;
import elemental2.dom.HTMLCanvasElement;
import elemental2.webgl.WebGLContextAttributes;
import elemental2.webgl.WebGLTexture;
import jsinterop.base.Js;
import elemental2.core.ArrayBufferView;
import java.lang.Boolean;
import elemental2.webgl.WebGLProgram;
import java.lang.String;
import elemental2.webgl.WebGLBuffer;
import elemental2.dom.ImageData;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.JsObject;
import elemental2.dom.OffscreenCanvas;
import elemental2.core.Float32Array;
import elemental2.core.ArrayBuffer;
import elemental2.core.JsArray;
import elemental2.dom.ImageBitmap;
import elemental2.webgl.WebGLShaderPrecisionFormat;
import elemental2.webgl.WebGLRenderbuffer;
import jsinterop.annotations.JsOverlay;
import elemental2.core.Int32Array;
import java.lang.Object;
import elemental2.dom.HTMLImageElement;
import elemental2.webgl.WebGLObject;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WebGLRenderingContext{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface BufferDataDataUnionType{
@JsOverlay
static WebGLRenderingContext.BufferDataDataUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default ArrayBuffer asArrayBuffer(){
return Js.cast(this);
}
@JsOverlay
default ArrayBufferView asArrayBufferView(){
return Js.cast(this);
}
@JsOverlay
default double asDouble(){
return Js.asDouble(this);
}
@JsOverlay
default boolean isArrayBuffer(){
return (Object)this instanceof ArrayBuffer;
}
@JsOverlay
default boolean isArrayBufferView(){
return (Object)this instanceof ArrayBufferView;
}
@JsOverlay
default boolean isDouble(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface BufferSubDataDataUnionType{
@JsOverlay
static WebGLRenderingContext.BufferSubDataDataUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default ArrayBuffer asArrayBuffer(){
return Js.cast(this);
}
@JsOverlay
default ArrayBufferView asArrayBufferView(){
return Js.cast(this);
}
@JsOverlay
default boolean isArrayBuffer(){
return (Object)this instanceof ArrayBuffer;
}
@JsOverlay
default boolean isArrayBufferView(){
return (Object)this instanceof ArrayBufferView;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface PixelStoreiParamUnionType{
@JsOverlay
static WebGLRenderingContext.PixelStoreiParamUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface TexImage2DImgUnionType{
@JsOverlay
static WebGLRenderingContext.TexImage2DImgUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default HTMLCanvasElement asHTMLCanvasElement(){
return Js.cast(this);
}
@JsOverlay
default HTMLImageElement asHTMLImageElement(){
return Js.cast(this);
}
@JsOverlay
default HTMLVideoElement asHTMLVideoElement(){
return Js.cast(this);
}
@JsOverlay
default ImageBitmap asImageBitmap(){
return Js.cast(this);
}
@JsOverlay
default ImageData asImageData(){
return Js.cast(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default OffscreenCanvas asOffscreenCanvas(){
return Js.cast(this);
}
@JsOverlay
default boolean isHTMLCanvasElement(){
return (Object)this instanceof HTMLCanvasElement;
}
@JsOverlay
default boolean isHTMLImageElement(){
return (Object)this instanceof HTMLImageElement;
}
@JsOverlay
default boolean isHTMLVideoElement(){
return (Object)this instanceof HTMLVideoElement;
}
@JsOverlay
default boolean isImageData(){
return (Object)this instanceof ImageData;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
@JsOverlay
default boolean isOffscreenCanvas(){
return (Object)this instanceof OffscreenCanvas;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface TexSubImage2DDataUnionType{
@JsOverlay
static WebGLRenderingContext.TexSubImage2DDataUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double asDouble(){
return Js.asDouble(this);
}
@JsOverlay
default HTMLCanvasElement asHTMLCanvasElement(){
return Js.cast(this);
}
@JsOverlay
default HTMLImageElement asHTMLImageElement(){
return Js.cast(this);
}
@JsOverlay
default HTMLVideoElement asHTMLVideoElement(){
return Js.cast(this);
}
@JsOverlay
default ImageBitmap asImageBitmap(){
return Js.cast(this);
}
@JsOverlay
default ImageData asImageData(){
return Js.cast(this);
}
@JsOverlay
default OffscreenCanvas asOffscreenCanvas(){
return Js.cast(this);
}
@JsOverlay
default boolean isDouble(){
return (Object)this instanceof Double;
}
@JsOverlay
default boolean isHTMLCanvasElement(){
return (Object)this instanceof HTMLCanvasElement;
}
@JsOverlay
default boolean isHTMLImageElement(){
return (Object)this instanceof HTMLImageElement;
}
@JsOverlay
default boolean isHTMLVideoElement(){
return (Object)this instanceof HTMLVideoElement;
}
@JsOverlay
default boolean isImageData(){
return (Object)this instanceof ImageData;
}
@JsOverlay
default boolean isOffscreenCanvas(){
return (Object)this instanceof OffscreenCanvas;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform1fvValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform1fvValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform1iValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform1iValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform1ivValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform1ivValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default Int32Array asInt32Array(){
return Js.cast(this);
}
@JsOverlay
default JsArray asJsArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isInt32Array(){
return (Object)this instanceof Int32Array;
}
@JsOverlay
default boolean isJsArray(){
return (Object)this instanceof JsArray;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform2fvValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform2fvValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform2iValue1UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform2iValue1UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform2iValue2UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform2iValue2UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform2ivValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform2ivValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default Int32Array asInt32Array(){
return Js.cast(this);
}
@JsOverlay
default JsArray asJsArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isInt32Array(){
return (Object)this instanceof Int32Array;
}
@JsOverlay
default boolean isJsArray(){
return (Object)this instanceof JsArray;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform3fvValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform3fvValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform3iValue1UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform3iValue1UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform3iValue2UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform3iValue2UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform3iValue3UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform3iValue3UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform3ivValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform3ivValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default Int32Array asInt32Array(){
return Js.cast(this);
}
@JsOverlay
default JsArray asJsArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isInt32Array(){
return (Object)this instanceof Int32Array;
}
@JsOverlay
default boolean isJsArray(){
return (Object)this instanceof JsArray;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform4fvValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform4fvValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform4iValue1UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform4iValue1UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform4iValue2UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform4iValue2UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform4iValue3UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform4iValue3UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform4iValue4UnionType{
@JsOverlay
static WebGLRenderingContext.Uniform4iValue4UnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default boolean asBoolean(){
return Js.asBoolean(this);
}
@JsOverlay
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default boolean isBoolean(){
return (Object)this instanceof Boolean;
}
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface Uniform4ivValueUnionType{
@JsOverlay
static WebGLRenderingContext.Uniform4ivValueUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default Int32Array asInt32Array(){
return Js.cast(this);
}
@JsOverlay
default JsArray asJsArray(){
return Js.cast(this);
}
@JsOverlay
default boolean isInt32Array(){
return (Object)this instanceof Int32Array;
}
@JsOverlay
default boolean isJsArray(){
return (Object)this instanceof JsArray;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface UniformMatrix2fvDataUnionType{
@JsOverlay
static WebGLRenderingContext.UniformMatrix2fvDataUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface UniformMatrix3fvDataUnionType{
@JsOverlay
static WebGLRenderingContext.UniformMatrix3fvDataUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface UniformMatrix4fvDataUnionType{
@JsOverlay
static WebGLRenderingContext.UniformMatrix4fvDataUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface VertexAttrib1fvValuesUnionType{
@JsOverlay
static WebGLRenderingContext.VertexAttrib1fvValuesUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface VertexAttrib2fvValuesUnionType{
@JsOverlay
static WebGLRenderingContext.VertexAttrib2fvValuesUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface VertexAttrib3fvValuesUnionType{
@JsOverlay
static WebGLRenderingContext.VertexAttrib3fvValuesUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface VertexAttrib4fvValuesUnionType{
@JsOverlay
static WebGLRenderingContext.VertexAttrib4fvValuesUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default double[] asDoubleArray(){
return Js.cast(this);
}
@JsOverlay
default Float32Array asFloat32Array(){
return Js.cast(this);
}
@JsOverlay
default boolean isDoubleArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isFloat32Array(){
return (Object)this instanceof Float32Array;
}
}
public static double ACTIVE_ATTRIBUTES;
public static double ACTIVE_TEXTURE;
public static double ACTIVE_UNIFORMS;
public static double ALIASED_LINE_WIDTH_RANGE;
public static double ALIASED_POINT_SIZE_RANGE;
public static double ALPHA;
public static double ALPHA_BITS;
public static double ALWAYS;
public static double ARRAY_BUFFER;
public static double ARRAY_BUFFER_BINDING;
public static double ATTACHED_SHADERS;
public static double BACK;
public static double BLEND;
public static double BLEND_COLOR;
public static double BLEND_DST_ALPHA;
public static double BLEND_DST_RGB;
public static double BLEND_EQUATION;
public static double BLEND_EQUATION_ALPHA;
public static double BLEND_EQUATION_RGB;
public static double BLEND_SRC_ALPHA;
public static double BLEND_SRC_RGB;
public static double BLUE_BITS;
public static double BOOL;
public static double BOOL_VEC2;
public static double BOOL_VEC3;
public static double BOOL_VEC4;
public static double BROWSER_DEFAULT_WEBGL;
public static double BUFFER_SIZE;
public static double BUFFER_USAGE;
public static double BYTE;
public static double CCW;
public static double CLAMP_TO_EDGE;
public static double COLOR_ATTACHMENT0;
public static double COLOR_BUFFER_BIT;
public static double COLOR_CLEAR_VALUE;
public static double COLOR_WRITEMASK;
public static double COMPILE_STATUS;
public static double COMPRESSED_TEXTURE_FORMATS;
public static double CONSTANT_ALPHA;
public static double CONSTANT_COLOR;
public static double CONTEXT_LOST_WEBGL;
public static double CULL_FACE;
public static double CULL_FACE_MODE;
public static double CURRENT_PROGRAM;
public static double CURRENT_VERTEX_ATTRIB;
public static double CW;
public static double DECR;
public static double DECR_WRAP;
public static double DELETE_STATUS;
public static double DEPTH_ATTACHMENT;
public static double DEPTH_BITS;
public static double DEPTH_BUFFER_BIT;
public static double DEPTH_CLEAR_VALUE;
public static double DEPTH_COMPONENT;
public static double DEPTH_COMPONENT16;
public static double DEPTH_FUNC;
public static double DEPTH_RANGE;
public static double DEPTH_STENCIL;
public static double DEPTH_STENCIL_ATTACHMENT;
public static double DEPTH_TEST;
public static double DEPTH_WRITEMASK;
public static double DITHER;
public static double DONT_CARE;
public static double DST_ALPHA;
public static double DST_COLOR;
public static double DYNAMIC_DRAW;
public static double ELEMENT_ARRAY_BUFFER;
public static double ELEMENT_ARRAY_BUFFER_BINDING;
public static double EQUAL;
public static double FASTEST;
public static double FLOAT;
public static double FLOAT_MAT2;
public static double FLOAT_MAT3;
public static double FLOAT_MAT4;
public static double FLOAT_VEC2;
public static double FLOAT_VEC3;
public static double FLOAT_VEC4;
public static double FRAGMENT_SHADER;
public static double FRAMEBUFFER;
public static double FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
public static double FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
public static double FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
public static double FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
public static double FRAMEBUFFER_BINDING;
public static double FRAMEBUFFER_COMPLETE;
public static double FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
public static double FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
public static double FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
public static double FRAMEBUFFER_UNSUPPORTED;
public static double FRONT;
public static double FRONT_AND_BACK;
public static double FRONT_FACE;
public static double FUNC_ADD;
public static double FUNC_REVERSE_SUBTRACT;
public static double FUNC_SUBTRACT;
public static double GENERATE_MIPMAP_HINT;
public static double GEQUAL;
public static double GREATER;
public static double GREEN_BITS;
public static double HIGH_FLOAT;
public static double HIGH_INT;
public static double IMPLEMENTATION_COLOR_READ_FORMAT;
public static double IMPLEMENTATION_COLOR_READ_TYPE;
public static double INCR;
public static double INCR_WRAP;
public static double INT;
public static double INT_VEC2;
public static double INT_VEC3;
public static double INT_VEC4;
public static double INVALID_ENUM;
public static double INVALID_FRAMEBUFFER_OPERATION;
public static double INVALID_OPERATION;
public static double INVALID_VALUE;
public static double INVERT;
public static double KEEP;
public static double LEQUAL;
public static double LESS;
public static double LINEAR;
public static double LINEAR_MIPMAP_LINEAR;
public static double LINEAR_MIPMAP_NEAREST;
public static double LINES;
public static double LINE_LOOP;
public static double LINE_STRIP;
public static double LINE_WIDTH;
public static double LINK_STATUS;
public static double LOW_FLOAT;
public static double LOW_INT;
public static double LUMINANCE;
public static double LUMINANCE_ALPHA;
public static double MAX_COMBINED_TEXTURE_IMAGE_UNITS;
public static double MAX_CUBE_MAP_TEXTURE_SIZE;
public static double MAX_FRAGMENT_UNIFORM_VECTORS;
public static double MAX_RENDERBUFFER_SIZE;
public static double MAX_TEXTURE_IMAGE_UNITS;
public static double MAX_TEXTURE_SIZE;
public static double MAX_VARYING_VECTORS;
public static double MAX_VERTEX_ATTRIBS;
public static double MAX_VERTEX_TEXTURE_IMAGE_UNITS;
public static double MAX_VERTEX_UNIFORM_VECTORS;
public static double MAX_VIEWPORT_DIMS;
public static double MEDIUM_FLOAT;
public static double MEDIUM_INT;
public static double MIRRORED_REPEAT;
public static double NEAREST;
public static double NEAREST_MIPMAP_LINEAR;
public static double NEAREST_MIPMAP_NEAREST;
public static double NEVER;
public static double NICEST;
public static double NONE;
public static double NOTEQUAL;
public static double NO_ERROR;
public static double ONE;
public static double ONE_MINUS_CONSTANT_ALPHA;
public static double ONE_MINUS_CONSTANT_COLOR;
public static double ONE_MINUS_DST_ALPHA;
public static double ONE_MINUS_DST_COLOR;
public static double ONE_MINUS_SRC_ALPHA;
public static double ONE_MINUS_SRC_COLOR;
public static double OUT_OF_MEMORY;
public static double PACK_ALIGNMENT;
public static double POINTS;
public static double POLYGON_OFFSET_FACTOR;
public static double POLYGON_OFFSET_FILL;
public static double POLYGON_OFFSET_UNITS;
public static double RED_BITS;
public static double RENDERBUFFER;
public static double RENDERBUFFER_ALPHA_SIZE;
public static double RENDERBUFFER_BINDING;
public static double RENDERBUFFER_BLUE_SIZE;
public static double RENDERBUFFER_DEPTH_SIZE;
public static double RENDERBUFFER_GREEN_SIZE;
public static double RENDERBUFFER_HEIGHT;
public static double RENDERBUFFER_INTERNAL_FORMAT;
public static double RENDERBUFFER_RED_SIZE;
public static double RENDERBUFFER_STENCIL_SIZE;
public static double RENDERBUFFER_WIDTH;
public static double RENDERER;
public static double REPEAT;
public static double REPLACE;
public static double RGB;
public static double RGB565;
public static double RGB5_A1;
public static double RGBA;
public static double RGBA4;
public static double SAMPLER_2D;
public static double SAMPLER_CUBE;
public static double SAMPLES;
public static double SAMPLE_ALPHA_TO_COVERAGE;
public static double SAMPLE_BUFFERS;
public static double SAMPLE_COVERAGE;
public static double SAMPLE_COVERAGE_INVERT;
public static double SAMPLE_COVERAGE_VALUE;
public static double SCISSOR_BOX;
public static double SCISSOR_TEST;
public static double SHADER_TYPE;
public static double SHADING_LANGUAGE_VERSION;
public static double SHORT;
public static double SRC_ALPHA;
public static double SRC_ALPHA_SATURATE;
public static double SRC_COLOR;
public static double STATIC_DRAW;
public static double STENCIL_ATTACHMENT;
public static double STENCIL_BACK_FAIL;
public static double STENCIL_BACK_FUNC;
public static double STENCIL_BACK_PASS_DEPTH_FAIL;
public static double STENCIL_BACK_PASS_DEPTH_PASS;
public static double STENCIL_BACK_REF;
public static double STENCIL_BACK_VALUE_MASK;
public static double STENCIL_BACK_WRITEMASK;
public static double STENCIL_BITS;
public static double STENCIL_BUFFER_BIT;
public static double STENCIL_CLEAR_VALUE;
public static double STENCIL_FAIL;
public static double STENCIL_FUNC;
public static double STENCIL_INDEX;
public static double STENCIL_INDEX8;
public static double STENCIL_PASS_DEPTH_FAIL;
public static double STENCIL_PASS_DEPTH_PASS;
public static double STENCIL_REF;
public static double STENCIL_TEST;
public static double STENCIL_VALUE_MASK;
public static double STENCIL_WRITEMASK;
public static double STREAM_DRAW;
public static double SUBPIXEL_BITS;
public static double TEXTURE;
public static double TEXTURE0;
public static double TEXTURE1;
public static double TEXTURE10;
public static double TEXTURE11;
public static double TEXTURE12;
public static double TEXTURE13;
public static double TEXTURE14;
public static double TEXTURE15;
public static double TEXTURE16;
public static double TEXTURE17;
public static double TEXTURE18;
public static double TEXTURE19;
public static double TEXTURE2;
public static double TEXTURE20;
public static double TEXTURE21;
public static double TEXTURE22;
public static double TEXTURE23;
public static double TEXTURE24;
public static double TEXTURE25;
public static double TEXTURE26;
public static double TEXTURE27;
public static double TEXTURE28;
public static double TEXTURE29;
public static double TEXTURE3;
public static double TEXTURE30;
public static double TEXTURE31;
public static double TEXTURE4;
public static double TEXTURE5;
public static double TEXTURE6;
public static double TEXTURE7;
public static double TEXTURE8;
public static double TEXTURE9;
public static double TEXTURE_2D;
public static double TEXTURE_BINDING_2D;
public static double TEXTURE_BINDING_CUBE_MAP;
public static double TEXTURE_CUBE_MAP;
public static double TEXTURE_CUBE_MAP_NEGATIVE_X;
public static double TEXTURE_CUBE_MAP_NEGATIVE_Y;
public static double TEXTURE_CUBE_MAP_NEGATIVE_Z;
public static double TEXTURE_CUBE_MAP_POSITIVE_X;
public static double TEXTURE_CUBE_MAP_POSITIVE_Y;
public static double TEXTURE_CUBE_MAP_POSITIVE_Z;
public static double TEXTURE_MAG_FILTER;
public static double TEXTURE_MIN_FILTER;
public static double TEXTURE_WRAP_S;
public static double TEXTURE_WRAP_T;
public static double TRIANGLES;
public static double TRIANGLE_FAN;
public static double TRIANGLE_STRIP;
public static double UNPACK_ALIGNMENT;
public static double UNPACK_COLORSPACE_CONVERSION_WEBGL;
public static double UNPACK_FLIP_Y_WEBGL;
public static double UNPACK_PREMULTIPLY_ALPHA_WEBGL;
public static double UNSIGNED_BYTE;
public static double UNSIGNED_INT;
public static double UNSIGNED_SHORT;
public static double UNSIGNED_SHORT_4_4_4_4;
public static double UNSIGNED_SHORT_5_5_5_1;
public static double UNSIGNED_SHORT_5_6_5;
public static double VALIDATE_STATUS;
public static double VENDOR;
public static double VERSION;
public static double VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
public static double VERTEX_ATTRIB_ARRAY_ENABLED;
public static double VERTEX_ATTRIB_ARRAY_NORMALIZED;
public static double VERTEX_ATTRIB_ARRAY_POINTER;
public static double VERTEX_ATTRIB_ARRAY_SIZE;
public static double VERTEX_ATTRIB_ARRAY_STRIDE;
public static double VERTEX_ATTRIB_ARRAY_TYPE;
public static double VERTEX_SHADER;
public static double VIEWPORT;
public static double ZERO;
public HTMLCanvasElement canvas;
public int drawingBufferHeight;
public int drawingBufferWidth;
public native void activeTexture(int texture);
public native void attachShader(WebGLProgram program,WebGLShader shader);
public native void bindAttribLocation(WebGLProgram program,int index,String name);
public native void bindBuffer(int target,WebGLBuffer buffer);
public native void bindFramebuffer(int target,WebGLFramebuffer buffer);
public native void bindRenderbuffer(int target,WebGLRenderbuffer buffer);
public native void bindTexture(int target,WebGLTexture texture);
public native void blendColor(double red,double green,double blue,double alpha);
public native void blendEquation(int mode);
public native void blendEquationSeparate(int modeRGB,int modeAlpha);
public native void blendFunc(int sfactor,int dfactor);
public native void blendFuncSeparate(int srcRGB,int dstRGB,int srcAlpha,int dstAlpha);
@JsOverlay
public final void bufferData(int target,ArrayBuffer data,int usage){
bufferData(target,Js.<WebGLRenderingContext.BufferDataDataUnionType>uncheckedCast(data),usage);
}
@JsOverlay
public final void bufferData(int target,ArrayBufferView data,int usage){
bufferData(target,Js.<WebGLRenderingContext.BufferDataDataUnionType>uncheckedCast(data),usage);
}
public native void bufferData(int target,WebGLRenderingContext.BufferDataDataUnionType data,int usage);
@JsOverlay
public final void bufferData(int target,double data,int usage){
bufferData(target,Js.<WebGLRenderingContext.BufferDataDataUnionType>uncheckedCast(data),usage);
}
@JsOverlay
public final void bufferSubData(int target,double offset,ArrayBuffer data){
bufferSubData(target,offset,Js.<WebGLRenderingContext.BufferSubDataDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void bufferSubData(int target,double offset,ArrayBufferView data){
bufferSubData(target,offset,Js.<WebGLRenderingContext.BufferSubDataDataUnionType>uncheckedCast(data));
}
public native void bufferSubData(int target,double offset,WebGLRenderingContext.BufferSubDataDataUnionType data);
public native int checkFramebufferStatus(int target);
public native void clear(int mask);
public native void clearColor(double red,double green,double blue,double alpha);
public native void clearDepth(double depth);
public native void clearStencil(int s);
public native void colorMask(boolean red,boolean green,boolean blue,boolean alpha);
public native void compileShader(WebGLShader shader);
public native void compressedTexImage2D(int target,int level,int internalformat,int width,int height,int border,ArrayBufferView data);
public native void compressedTexSubImage2D(int target,int level,int xoffset,int yoffset,int width,int height,int format,ArrayBufferView data);
public native void copyTexImage2D(int target,int level,int format,int x,int y,int width,int height,int border);
public native void copyTexSubImage2D(int target,int level,int xoffset,int yoffset,int x,int y,int width,int height);
public native WebGLBuffer createBuffer();
public native WebGLFramebuffer createFramebuffer();
public native WebGLProgram createProgram();
public native WebGLRenderbuffer createRenderbuffer();
public native WebGLShader createShader(int type);
public native WebGLTexture createTexture();
public native void cullFace(int mode);
public native void deleteBuffer(WebGLBuffer buffer);
public native void deleteFramebuffer(WebGLFramebuffer buffer);
public native void deleteProgram(WebGLProgram program);
public native void deleteRenderbuffer(WebGLRenderbuffer buffer);
public native void deleteShader(WebGLShader shader);
public native void deleteTexture(WebGLTexture texture);
public native void depthFunc(int func);
public native void depthMask(boolean flag);
public native void depthRange(double nearVal,double farVal);
public native void detachShader(WebGLProgram program,WebGLShader shader);
public native void disable(int flags);
public native void disableVertexAttribArray(int index);
public native void drawArrays(int mode,int first,int count);
public native void drawElements(int mode,int count,int type,double offset);
public native void enable(int cap);
public native void enableVertexAttribArray(int index);
public native Object finish();
public native Object flush();
public native void framebufferRenderbuffer(int target,int attachment,int renderbuffertarget,WebGLRenderbuffer renderbuffer);
public native void framebufferTexture2D(int target,int attachment,int textarget,WebGLTexture texture,int level);
public native void frontFace(int mode);
public native void generateMipmap(int target);
public native WebGLActiveInfo getActiveAttrib(WebGLProgram program,int index);
public native WebGLActiveInfo getActiveUniform(WebGLProgram program,int index);
public native WebGLShader[] getAttachedShaders(WebGLProgram program);
public native int getAttribLocation(WebGLProgram program,String name);
public native Object getBufferParameter(int target,int pname);
public native WebGLContextAttributes getContextAttributes();
public native int getError();
public native JsObject getExtension(String name);
public native Object getFramebufferAttachmentParameter(int target,int attachment,int pname);
public native Object getParameter(int pname);
public native String getProgramInfoLog(WebGLProgram program);
public native Object getProgramParameter(WebGLProgram program,int pname);
public native Object getRenderbufferParameter(int target,int pname);
public native String getShaderInfoLog(WebGLShader shader);
public native Object getShaderParameter(WebGLShader shader,int pname);
public native WebGLShaderPrecisionFormat getShaderPrecisionFormat(int shadertype,int precisiontype);
public native String getShaderSource(WebGLShader shader);
public native String[] getSupportedExtensions();
public native Object getTexParameter(int target,int pname);
public native Object getUniform(WebGLProgram program,WebGLUniformLocation location);
public native WebGLUniformLocation getUniformLocation(WebGLProgram program,String name);
public native Object getVertexAttrib(int index,int pname);
public native double getVertexAttribOffset(int index,int pname);
public native void hint(int target,int mode);
public native boolean isBuffer(WebGLObject buffer);
public native boolean isContextLost();
public native boolean isEnabled(int cap);
public native boolean isFramebuffer(WebGLObject framebuffer);
public native boolean isProgram(WebGLObject program);
public native boolean isRenderbuffer(WebGLObject renderbuffer);
public native boolean isShader(WebGLObject shader);
public native boolean isTexture(WebGLObject texture);
public native void lineWidth(double width);
public native void linkProgram(WebGLProgram program);
public native void pixelStorei(int pname,WebGLRenderingContext.PixelStoreiParamUnionType param);
@JsOverlay
public final void pixelStorei(int pname,boolean param){
pixelStorei(pname,Js.<WebGLRenderingContext.PixelStoreiParamUnionType>uncheckedCast(param));
}
@JsOverlay
public final void pixelStorei(int pname,int param){
pixelStorei(pname,Js.<WebGLRenderingContext.PixelStoreiParamUnionType>uncheckedCast(param));
}
public native void polygonOffset(double factor,double units);
public native void readPixels(int x,int y,int width,int height,int format,int type,ArrayBufferView pixels);
public native void renderbufferStorage(int target,int internalformat,int width,int height);
public native void sampleCoverage(double coverage,boolean invert);
public native void scissor(int x,int y,int width,int height);
public native void shaderSource(WebGLShader shader,String source);
public native void stencilFunc(int func,int ref,int mask);
public native void stencilFuncSeparate(int face,int func,int ref,int mask);
public native void stencilMask(int mask);
public native void stencilMaskSeparate(int face,int mask);
public native void stencilOp(int fail,int zfail,int zpass);
public native void stencilOpSeparate(int face,int fail,int zfail,int zpass);
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLCanvasElement img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLCanvasElement img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLCanvasElement img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLCanvasElement img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLImageElement img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLImageElement img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLImageElement img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLImageElement img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLVideoElement img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLVideoElement img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLVideoElement img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,HTMLVideoElement img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageBitmap img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageBitmap img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageBitmap img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageBitmap img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageData img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageData img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageData img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,ImageData img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,OffscreenCanvas img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,OffscreenCanvas img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,OffscreenCanvas img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,OffscreenCanvas img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
public native void texImage2D(int target,int level,int internalformat,int format,int type,WebGLRenderingContext.TexImage2DImgUnionType img,int format0,int type0,ArrayBufferView pixels);
public native void texImage2D(int target,int level,int internalformat,int format,int type,WebGLRenderingContext.TexImage2DImgUnionType img,int format0,int type0);
public native void texImage2D(int target,int level,int internalformat,int format,int type,WebGLRenderingContext.TexImage2DImgUnionType img,int format0);
public native void texImage2D(int target,int level,int internalformat,int format,int type,WebGLRenderingContext.TexImage2DImgUnionType img);
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,int img,int format0,int type0,ArrayBufferView pixels){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0,pixels);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,int img,int format0,int type0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0,type0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,int img,int format0){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img),format0);
}
@JsOverlay
public final void texImage2D(int target,int level,int internalformat,int format,int type,int img){
texImage2D(target,level,internalformat,format,type,Js.<WebGLRenderingContext.TexImage2DImgUnionType>uncheckedCast(img));
}
public native void texParameterf(int target,int pname,double param);
public native void texParameteri(int target,int pname,int param);
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLCanvasElement data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLCanvasElement data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLCanvasElement data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLImageElement data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLImageElement data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLImageElement data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLVideoElement data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLVideoElement data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,HTMLVideoElement data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,ImageBitmap data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,ImageBitmap data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,ImageBitmap data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,ImageData data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,ImageData data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,ImageData data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,OffscreenCanvas data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,OffscreenCanvas data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,OffscreenCanvas data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
public native void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,WebGLRenderingContext.TexSubImage2DDataUnionType data,int type0,ArrayBufferView pixels);
public native void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,WebGLRenderingContext.TexSubImage2DDataUnionType data,int type0);
public native void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,WebGLRenderingContext.TexSubImage2DDataUnionType data);
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,double data,int type0,ArrayBufferView pixels){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0,pixels);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,double data,int type0){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data),type0);
}
@JsOverlay
public final void texSubImage2D(int target,int level,int xoffset,int yoffset,int format,int type,double data){
texSubImage2D(target,level,xoffset,yoffset,format,type,Js.<WebGLRenderingContext.TexSubImage2DDataUnionType>uncheckedCast(data));
}
public native void uniform1f(WebGLUniformLocation location,double value);
@JsOverlay
public final void uniform1fv(WebGLUniformLocation location,Float32Array value){
uniform1fv(location,Js.<WebGLRenderingContext.Uniform1fvValueUnionType>uncheckedCast(value));
}
public native void uniform1fv(WebGLUniformLocation location,WebGLRenderingContext.Uniform1fvValueUnionType value);
@JsOverlay
public final void uniform1fv(WebGLUniformLocation location,double[] value){
uniform1fv(location,Js.<WebGLRenderingContext.Uniform1fvValueUnionType>uncheckedCast(value));
}
public native void uniform1i(WebGLUniformLocation location,WebGLRenderingContext.Uniform1iValueUnionType value);
@JsOverlay
public final void uniform1i(WebGLUniformLocation location,boolean value){
uniform1i(location,Js.<WebGLRenderingContext.Uniform1iValueUnionType>uncheckedCast(value));
}
@JsOverlay
public final void uniform1i(WebGLUniformLocation location,int value){
uniform1i(location,Js.<WebGLRenderingContext.Uniform1iValueUnionType>uncheckedCast(value));
}
@JsOverlay
public final void uniform1iv(WebGLUniformLocation location,Int32Array value){
uniform1iv(location,Js.<WebGLRenderingContext.Uniform1ivValueUnionType>uncheckedCast(value));
}
@JsOverlay
public final void uniform1iv(WebGLUniformLocation location,JsArray value){
uniform1iv(location,Js.<WebGLRenderingContext.Uniform1ivValueUnionType>uncheckedCast(value));
}
public native void uniform1iv(WebGLUniformLocation location,WebGLRenderingContext.Uniform1ivValueUnionType value);
public native void uniform2f(WebGLUniformLocation location,double value1,double value2);
@JsOverlay
public final void uniform2fv(WebGLUniformLocation location,Float32Array value){
uniform2fv(location,Js.<WebGLRenderingContext.Uniform2fvValueUnionType>uncheckedCast(value));
}
public native void uniform2fv(WebGLUniformLocation location,WebGLRenderingContext.Uniform2fvValueUnionType value);
@JsOverlay
public final void uniform2fv(WebGLUniformLocation location,double[] value){
uniform2fv(location,Js.<WebGLRenderingContext.Uniform2fvValueUnionType>uncheckedCast(value));
}
public native void uniform2i(WebGLUniformLocation location,WebGLRenderingContext.Uniform2iValue1UnionType value1,WebGLRenderingContext.Uniform2iValue2UnionType value2);
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,WebGLRenderingContext.Uniform2iValue1UnionType value1,boolean value2){
uniform2i(location,value1,Js.<WebGLRenderingContext.Uniform2iValue2UnionType>uncheckedCast(value2));
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,WebGLRenderingContext.Uniform2iValue1UnionType value1,int value2){
uniform2i(location,value1,Js.<WebGLRenderingContext.Uniform2iValue2UnionType>uncheckedCast(value2));
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform2iValue2UnionType value2){
uniform2i(location,Js.<WebGLRenderingContext.Uniform2iValue1UnionType>uncheckedCast(value1),value2);
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,boolean value1,boolean value2){
uniform2i(location,Js.<WebGLRenderingContext.Uniform2iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform2iValue2UnionType>uncheckedCast(value2));
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,boolean value1,int value2){
uniform2i(location,Js.<WebGLRenderingContext.Uniform2iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform2iValue2UnionType>uncheckedCast(value2));
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform2iValue2UnionType value2){
uniform2i(location,Js.<WebGLRenderingContext.Uniform2iValue1UnionType>uncheckedCast(value1),value2);
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,int value1,boolean value2){
uniform2i(location,Js.<WebGLRenderingContext.Uniform2iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform2iValue2UnionType>uncheckedCast(value2));
}
@JsOverlay
public final void uniform2i(WebGLUniformLocation location,int value1,int value2){
uniform2i(location,Js.<WebGLRenderingContext.Uniform2iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform2iValue2UnionType>uncheckedCast(value2));
}
@JsOverlay
public final void uniform2iv(WebGLUniformLocation location,Int32Array value){
uniform2iv(location,Js.<WebGLRenderingContext.Uniform2ivValueUnionType>uncheckedCast(value));
}
@JsOverlay
public final void uniform2iv(WebGLUniformLocation location,JsArray value){
uniform2iv(location,Js.<WebGLRenderingContext.Uniform2ivValueUnionType>uncheckedCast(value));
}
public native void uniform2iv(WebGLUniformLocation location,WebGLRenderingContext.Uniform2ivValueUnionType value);
public native void uniform3f(WebGLUniformLocation location,double value1,double value2,double value3);
@JsOverlay
public final void uniform3fv(WebGLUniformLocation location,Float32Array value){
uniform3fv(location,Js.<WebGLRenderingContext.Uniform3fvValueUnionType>uncheckedCast(value));
}
public native void uniform3fv(WebGLUniformLocation location,WebGLRenderingContext.Uniform3fvValueUnionType value);
@JsOverlay
public final void uniform3fv(WebGLUniformLocation location,double[] value){
uniform3fv(location,Js.<WebGLRenderingContext.Uniform3fvValueUnionType>uncheckedCast(value));
}
public native void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,WebGLRenderingContext.Uniform3iValue3UnionType value3);
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,boolean value3){
uniform3i(location,value1,value2,Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,int value3){
uniform3i(location,value1,value2,Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,boolean value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,value1,Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,boolean value2,boolean value3){
uniform3i(location,value1,Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,boolean value2,int value3){
uniform3i(location,value1,Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,int value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,value1,Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,int value2,boolean value3){
uniform3i(location,value1,Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,WebGLRenderingContext.Uniform3iValue1UnionType value1,int value2,int value3){
uniform3i(location,value1,Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),value2,value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,boolean value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,int value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,boolean value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,boolean value2,boolean value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,boolean value2,int value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,int value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,int value2,boolean value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,boolean value1,int value2,int value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),value2,value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,boolean value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform3iValue2UnionType value2,int value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,boolean value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,boolean value2,boolean value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,boolean value2,int value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,int value2,WebGLRenderingContext.Uniform3iValue3UnionType value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),value3);
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,int value2,boolean value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3i(WebGLUniformLocation location,int value1,int value2,int value3){
uniform3i(location,Js.<WebGLRenderingContext.Uniform3iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform3iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform3iValue3UnionType>uncheckedCast(value3));
}
@JsOverlay
public final void uniform3iv(WebGLUniformLocation location,Int32Array value){
uniform3iv(location,Js.<WebGLRenderingContext.Uniform3ivValueUnionType>uncheckedCast(value));
}
@JsOverlay
public final void uniform3iv(WebGLUniformLocation location,JsArray value){
uniform3iv(location,Js.<WebGLRenderingContext.Uniform3ivValueUnionType>uncheckedCast(value));
}
public native void uniform3iv(WebGLUniformLocation location,WebGLRenderingContext.Uniform3ivValueUnionType value);
public native void uniform4f(WebGLUniformLocation location,double value1,double value2,double value3,double value4);
@JsOverlay
public final void uniform4fv(WebGLUniformLocation location,Float32Array value){
uniform4fv(location,Js.<WebGLRenderingContext.Uniform4fvValueUnionType>uncheckedCast(value));
}
public native void uniform4fv(WebGLUniformLocation location,WebGLRenderingContext.Uniform4fvValueUnionType value);
@JsOverlay
public final void uniform4fv(WebGLUniformLocation location,double[] value){
uniform4fv(location,Js.<WebGLRenderingContext.Uniform4fvValueUnionType>uncheckedCast(value));
}
public native void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4);
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,value1,value2,value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,value1,value2,value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,boolean value4){
uniform4i(location,value1,value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,int value4){
uniform4i(location,value1,value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,boolean value4){
uniform4i(location,value1,value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,int value4){
uniform4i(location,value1,value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,boolean value3,boolean value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,boolean value3,int value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,int value3,boolean value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,boolean value2,int value3,int value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,boolean value3,boolean value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,boolean value3,int value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,int value3,boolean value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,WebGLRenderingContext.Uniform4iValue1UnionType value1,int value2,int value3,int value4){
uniform4i(location,value1,Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,boolean value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,boolean value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,int value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,boolean value2,int value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,boolean value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,boolean value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,int value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,boolean value1,int value2,int value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,boolean value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,WebGLRenderingContext.Uniform4iValue2UnionType value2,int value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),value2,Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,boolean value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,boolean value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,int value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,boolean value2,int value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,WebGLRenderingContext.Uniform4iValue3UnionType value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),value3,Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,boolean value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,boolean value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,boolean value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,int value3,WebGLRenderingContext.Uniform4iValue4UnionType value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),value4);
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,int value3,boolean value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4i(WebGLUniformLocation location,int value1,int value2,int value3,int value4){
uniform4i(location,Js.<WebGLRenderingContext.Uniform4iValue1UnionType>uncheckedCast(value1),Js.<WebGLRenderingContext.Uniform4iValue2UnionType>uncheckedCast(value2),Js.<WebGLRenderingContext.Uniform4iValue3UnionType>uncheckedCast(value3),Js.<WebGLRenderingContext.Uniform4iValue4UnionType>uncheckedCast(value4));
}
@JsOverlay
public final void uniform4iv(WebGLUniformLocation location,Int32Array value){
uniform4iv(location,Js.<WebGLRenderingContext.Uniform4ivValueUnionType>uncheckedCast(value));
}
@JsOverlay
public final void uniform4iv(WebGLUniformLocation location,JsArray value){
uniform4iv(location,Js.<WebGLRenderingContext.Uniform4ivValueUnionType>uncheckedCast(value));
}
public native void uniform4iv(WebGLUniformLocation location,WebGLRenderingContext.Uniform4ivValueUnionType value);
@JsOverlay
public final void uniformMatrix2fv(WebGLUniformLocation location,boolean transpose,Float32Array data){
uniformMatrix2fv(location,transpose,Js.<WebGLRenderingContext.UniformMatrix2fvDataUnionType>uncheckedCast(data));
}
public native void uniformMatrix2fv(WebGLUniformLocation location,boolean transpose,WebGLRenderingContext.UniformMatrix2fvDataUnionType data);
@JsOverlay
public final void uniformMatrix2fv(WebGLUniformLocation location,boolean transpose,double[] data){
uniformMatrix2fv(location,transpose,Js.<WebGLRenderingContext.UniformMatrix2fvDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void uniformMatrix3fv(WebGLUniformLocation location,boolean transpose,Float32Array data){
uniformMatrix3fv(location,transpose,Js.<WebGLRenderingContext.UniformMatrix3fvDataUnionType>uncheckedCast(data));
}
public native void uniformMatrix3fv(WebGLUniformLocation location,boolean transpose,WebGLRenderingContext.UniformMatrix3fvDataUnionType data);
@JsOverlay
public final void uniformMatrix3fv(WebGLUniformLocation location,boolean transpose,double[] data){
uniformMatrix3fv(location,transpose,Js.<WebGLRenderingContext.UniformMatrix3fvDataUnionType>uncheckedCast(data));
}
@JsOverlay
public final void uniformMatrix4fv(WebGLUniformLocation location,boolean transpose,Float32Array data){
uniformMatrix4fv(location,transpose,Js.<WebGLRenderingContext.UniformMatrix4fvDataUnionType>uncheckedCast(data));
}
public native void uniformMatrix4fv(WebGLUniformLocation location,boolean transpose,WebGLRenderingContext.UniformMatrix4fvDataUnionType data);
@JsOverlay
public final void uniformMatrix4fv(WebGLUniformLocation location,boolean transpose,double[] data){
uniformMatrix4fv(location,transpose,Js.<WebGLRenderingContext.UniformMatrix4fvDataUnionType>uncheckedCast(data));
}
public native void useProgram(WebGLProgram program);
public native void validateProgram(WebGLProgram program);
public native void vertexAttrib1f(int indx,double x);
@JsOverlay
public final void vertexAttrib1fv(int indx,Float32Array values){
vertexAttrib1fv(indx,Js.<WebGLRenderingContext.VertexAttrib1fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib1fv(int indx,WebGLRenderingContext.VertexAttrib1fvValuesUnionType values);
@JsOverlay
public final void vertexAttrib1fv(int indx,double[] values){
vertexAttrib1fv(indx,Js.<WebGLRenderingContext.VertexAttrib1fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib2f(int indx,double x,double y);
@JsOverlay
public final void vertexAttrib2fv(int indx,Float32Array values){
vertexAttrib2fv(indx,Js.<WebGLRenderingContext.VertexAttrib2fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib2fv(int indx,WebGLRenderingContext.VertexAttrib2fvValuesUnionType values);
@JsOverlay
public final void vertexAttrib2fv(int indx,double[] values){
vertexAttrib2fv(indx,Js.<WebGLRenderingContext.VertexAttrib2fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib3f(int indx,double x,double y,double z);
@JsOverlay
public final void vertexAttrib3fv(int indx,Float32Array values){
vertexAttrib3fv(indx,Js.<WebGLRenderingContext.VertexAttrib3fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib3fv(int indx,WebGLRenderingContext.VertexAttrib3fvValuesUnionType values);
@JsOverlay
public final void vertexAttrib3fv(int indx,double[] values){
vertexAttrib3fv(indx,Js.<WebGLRenderingContext.VertexAttrib3fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib4f(int indx,double x,double y,double z,double w);
@JsOverlay
public final void vertexAttrib4fv(int indx,Float32Array values){
vertexAttrib4fv(indx,Js.<WebGLRenderingContext.VertexAttrib4fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttrib4fv(int indx,WebGLRenderingContext.VertexAttrib4fvValuesUnionType values);
@JsOverlay
public final void vertexAttrib4fv(int indx,double[] values){
vertexAttrib4fv(indx,Js.<WebGLRenderingContext.VertexAttrib4fvValuesUnionType>uncheckedCast(values));
}
public native void vertexAttribPointer(int indx,int size,int type,boolean normalized,int stride,double offset);
public native void viewport(int x,int y,int width,int height);
}
