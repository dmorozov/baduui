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
public class Int8Array extends TypedArray{
@JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
public interface ConstructorLengthUnionType{
@JsOverlay
static Int8Array.ConstructorLengthUnionType of(Object o){
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
static Int8Array.FromSourceUnionType of(Object o){
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
public static final double BYTES_PER_ELEMENT=Int8Array__Constants.BYTES_PER_ELEMENT;
@JsOverlay
public static final <S>Int8Array from(Double[] source,Int8Array.FromMapFn mapFn,S this_){
return from(Js.<JsArrayLike<Double>>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int8Array from(Double[] source,Int8Array.FromMapFn mapFn){
return from(Js.<JsArrayLike<Double>>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int8Array from(Double[] source){
return from(Js.<JsArrayLike<Double>>uncheckedCast(source));
}
public static native <S>Int8Array from(Int8Array.FromSourceUnionType source,Int8Array.FromMapFn mapFn,S this_);
public static native Int8Array from(Int8Array.FromSourceUnionType source,Int8Array.FromMapFn mapFn);
public static native Int8Array from(Int8Array.FromSourceUnionType source);
@JsOverlay
public static final <S>Int8Array from(JsArrayLike<Double> source,Int8Array.FromMapFn mapFn,S this_){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int8Array from(JsArrayLike<Double> source,Int8Array.FromMapFn mapFn){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int8Array from(JsArrayLike<Double> source){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source));
}
@JsOverlay
public static final <S>Int8Array from(JsIterable<Double> source,Int8Array.FromMapFn mapFn,S this_){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int8Array from(JsIterable<Double> source,Int8Array.FromMapFn mapFn){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int8Array from(JsIterable<Double> source){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source));
}
@JsOverlay
public static final <S>Int8Array from(String source,Int8Array.FromMapFn mapFn,S this_){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source),mapFn,this_);
}
@JsOverlay
public static final Int8Array from(String source,Int8Array.FromMapFn mapFn){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source),mapFn);
}
@JsOverlay
public static final Int8Array from(String source){
return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source));
}
public static native Int8Array of(double... var_args);
public Int8Array(ArrayBuffer length,int byteOffset,int length0){}
public Int8Array(ArrayBuffer length,int byteOffset){}
public Int8Array(ArrayBuffer length){}
public Int8Array(ArrayBufferView length,int byteOffset,int length0){}
public Int8Array(ArrayBufferView length,int byteOffset){}
public Int8Array(ArrayBufferView length){}
public Int8Array(Int8Array.ConstructorLengthUnionType length,int byteOffset,int length0){}
public Int8Array(Int8Array.ConstructorLengthUnionType length,int byteOffset){}
public Int8Array(Int8Array.ConstructorLengthUnionType length){}
public Int8Array(SharedArrayBuffer length,int byteOffset,int length0){}
public Int8Array(SharedArrayBuffer length,int byteOffset){}
public Int8Array(SharedArrayBuffer length){}
public Int8Array(int length,int byteOffset,int length0){}
public Int8Array(int[] length,int byteOffset,int length0){}
public Int8Array(int length,int byteOffset){}
public Int8Array(int[] length,int byteOffset){}
public Int8Array(int length){}
public Int8Array(int[] length){}
}
