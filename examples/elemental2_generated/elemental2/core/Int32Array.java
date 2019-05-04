package elemental2.core;
import elemental2.core.JsIterable;
import java.lang.Double;
import elemental2.core.ArrayBuffer;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;
import elemental2.core.ArrayBufferView;
import jsinterop.annotations.JsFunction;
import elemental2.core.TypedArray;
import jsinterop.annotations.JsOverlay;
import java.lang.Object;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.core.SharedArrayBuffer;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Int32Array extends TypedArray{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface ConstructorLengthUnionType{
@JsOverlay
static Int32Array.ConstructorLengthUnionType of(Object o){
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
default int asInt(){
return Js.asInt(this);
}
@JsOverlay
default int[] asIntArray(){
return Js.cast(this);
}
@JsOverlay
default SharedArrayBuffer asSharedArrayBuffer(){
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
@JsOverlay
default boolean isInt(){
return (Object)this instanceof Double;
}
@JsOverlay
default boolean isIntArray(){
return (Object)this instanceof Object[];
}
@JsOverlay
default boolean isSharedArrayBuffer(){
return (Object)this instanceof SharedArrayBuffer;
}
}
@JsFunction
public interface FromMapFn{
double onInvoke(double p0);
}
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface FromSourceUnionType{
@JsOverlay
static Int32Array.FromSourceUnionType of(Object o){
return Js.cast(o);
}
@JsOverlay
default JsArrayLike<Double> asJsArrayLike(){
return Js.cast(this);
}
@JsOverlay
default JsIterable<Double> asJsIterable(){
return Js.cast(this);
}
@JsOverlay
default String asString(){
return Js.asString(this);
}
@JsOverlay
default boolean isString(){
return (Object)this instanceof String;
}
}
@JsOverlay
public static final double BYTES_PER_ELEMENT=Int32Array__Constants.BYTES_PER_ELEMENT;
@JsOverlay
public static final <S>Int32Array from(Double[] source,Int32Array.FromMapFn mapFn,S this_){
return from(Js.<JsArrayLike<Double>>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int32Array from(Double[] source,Int32Array.FromMapFn mapFn){
return from(Js.<JsArrayLike<Double>>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int32Array from(Double[] source){
return from(Js.<JsArrayLike<Double>>uncheckedCast(source));
}
public static native <S>Int32Array from(Int32Array.FromSourceUnionType source,Int32Array.FromMapFn mapFn,S this_);
public static native Int32Array from(Int32Array.FromSourceUnionType source,Int32Array.FromMapFn mapFn);
public static native Int32Array from(Int32Array.FromSourceUnionType source);
@JsOverlay
public static final <S>Int32Array from(JsArrayLike<Double> source,Int32Array.FromMapFn mapFn,S this_){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int32Array from(JsArrayLike<Double> source,Int32Array.FromMapFn mapFn){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int32Array from(JsArrayLike<Double> source){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source));
}
@JsOverlay
public static final <S>Int32Array from(JsIterable<Double> source,Int32Array.FromMapFn mapFn,S this_){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int32Array from(JsIterable<Double> source,Int32Array.FromMapFn mapFn){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int32Array from(JsIterable<Double> source){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source));
}
@JsOverlay
public static final <S>Int32Array from(String source,Int32Array.FromMapFn mapFn,S this_){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int32Array from(String source,Int32Array.FromMapFn mapFn){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int32Array from(String source){
return from(Js.<Int32Array.FromSourceUnionType>uncheckedCast(source));
}
public static native Int32Array of(double... var_args);
public Int32Array(ArrayBuffer length,int byteOffset,int length0){}
public Int32Array(ArrayBuffer length,int byteOffset){}
public Int32Array(ArrayBuffer length){}
public Int32Array(ArrayBufferView length,int byteOffset,int length0){}
public Int32Array(ArrayBufferView length,int byteOffset){}
public Int32Array(ArrayBufferView length){}
public Int32Array(Int32Array.ConstructorLengthUnionType length,int byteOffset,int length0){}
public Int32Array(Int32Array.ConstructorLengthUnionType length,int byteOffset){}
public Int32Array(Int32Array.ConstructorLengthUnionType length){}
public Int32Array(SharedArrayBuffer length,int byteOffset,int length0){}
public Int32Array(SharedArrayBuffer length,int byteOffset){}
public Int32Array(SharedArrayBuffer length){}
public Int32Array(int length,int byteOffset,int length0){}
public Int32Array(int[] length,int byteOffset,int length0){}
public Int32Array(int length,int byteOffset){}
public Int32Array(int[] length,int byteOffset){}
public Int32Array(int length){}
public Int32Array(int[] length){}
}