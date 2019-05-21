function the_app(){
  var $wnd_0 = window, $doc_0 = document, gwtOnLoad_0, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (gwtOnLoad_0 && bodyDone) {
      gwtOnLoad_0(onLoadErrorFunc, 'the_app', base, softPermutationId);
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = '__gwt_marker_the_app', markerScript;
    $doc_0.write('<script id="' + markerId + '"><\/script>');
    markerScript = $doc_0.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != 'SCRIPT') {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc_0.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc_0.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value_0 = '';
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  __gwt_isKnownPropertyValue = function(propName, propValue){
    return propValue in values[propName];
  }
  ;
  __gwt_getMetaProperty = function(name_0){
    var value_0 = metaProps[name_0];
    return value_0 == null?null:value_0;
  }
  ;
  the_app.onScriptLoad = function(gwtOnLoadFunc){
    the_app = null;
    gwtOnLoad_0 = gwtOnLoadFunc;
    maybeStartModule();
  }
  ;
  if (isHostedMode()) {
    alert('Single-script hosted mode not yet implemented. See issue ' + 'http://code.google.com/p/google-web-toolkit/issues/detail?id=2079');
    return;
  }
  computeScriptBase();
  processMetas();
  try {
    var strongName;
    strongName = '23FB97B5F2EDBEA398AB838BA81F22A1';
    var idx = strongName.indexOf(':');
    if (idx != -1) {
      softPermutationId = Number(strongName.substring(idx + 1));
    }
  }
   catch (e) {
    return;
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      onBodyDone();
    }
  }
  , 50);
}

the_app();
(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '23FB97B5F2EDBEA398AB838BA81F22A1';var cggl = {};
var jl = {};
var cggcc = {};
var ji = {};
var cggcci = {};
var jlr = {};
var ju = {};
var ji2 = {};
var cbucc = {};
var cbucl = {};
var cbuc = {};
var cbt = {};
var cbuc2 = {};
var cbuccc = {};
var cbucl2 = {};
var cbucm = {};
var cbucce = {};
var cbucca = {};
var cbuccp = {};
var cbuce = {};
var cbuct = {};
var cbucu = {};
var cbucx = {};
var cbujcc = {};
var cbujcd = {};
var cbujce = {};
var cbujch = {};
var cbujcp = {};
var cbujcx = {};
var cbupw = {};
var cbupwa = {};
var cbupwc = {};
var cbupwr = {};
var cbupwu = {};
var cbwc = {};
var cbwcg = {};
var cggccp = {};
var cggcs = {};
var cggcsi = {};
var juf = {};
var jnc = {};
var jus = {};
var jb = {};
var _;
var prototypesByTypeId_0;
var initFnList_0;
var PERMUTATION_NOT_SET = -1;
var permutationId = -1;
function getPermutationId(){
  return permutationId;
}

function setGwtProperty(propertyName, propertyValue){
  if (typeof window === 'object' && typeof window['$gwt'] === 'object') {
    window['$gwt'][propertyName] = propertyValue;
  }
}

function registerEntry_0(){
  return registerEntry();
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  cggl.ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

cggl.ensureModuleInit = function ensureModuleInit(){
  if (initFnList_0 == null) {
    initFnList_0 = [];
  }
}
;
function addInitFunctions(){
  cggl.ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function uniqueId(id_0){
  return jsinterop.closure.getUniqueId(id_0);
}

function typeMarkerFn(){
}

function toString_11(object){
  if (Array.isArray(object) && hasTypeMarker(object)) {
    return jl.toString_1(object);
  }
  return object.toString();
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }
  if (optCtor) {
    var clazz = optCtor.prototype.___clazz;
    clazz.jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || (!parts.length && optCtor || {});
  }
  return cur;
}

cggl.portableObjCreate = function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}
;
cggl.maybeGetClassLiteralFromPlaceHolder = function maybeGetClassLiteralFromPlaceHolder(entry){
  return entry instanceof Array?entry[0]:null;
}
;
function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function getClassPrototype(typeId){
  return prototypesByTypeId_0[typeId];
}

function emptyMethod(){
}

function defineProperties(proto, propertyDefinition){
  for (var key in propertyDefinition) {
    propertyDefinition[key]['configurable'] = true;
  }
  Object.defineProperties(proto, propertyDefinition);
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = cggl.maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = cggl.createSubclassPrototype(superTypeIdOrPrototype);
    _.castableTypeMap = castableTypeMap;
    if (!superTypeIdOrPrototype) {
      _.typeMarker = typeMarkerFn;
    }
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  if (clazz) {
    _.___clazz = clazz;
  }
}

cggl.createSubclassPrototype = function createSubclassPrototype(superTypeIdOrPrototype){
  var superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype;
  if (!superPrototype) {
    superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype];
  }
  return cggl.portableObjCreate(superPrototype);
}
;
function copyObjectProperties(from, to){
  for (var property in from) {
    if (to[property] === undefined) {
      to[property] = from[property];
    }
  }
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  if (!Array.isArray) {
    Array.isArray = function(vArg){
      return Object.prototype.toString.call(vArg) === '[object Array]';
    }
    ;
  }
  function now_0(){
    return (new Date).getTime();
  }

  if (!Date.now) {
    Date.now = now_0;
  }
}

bootstrap();
jl.$clinit_Object = function $clinit_Object(){
  jl.$clinit_Object = emptyMethod;
}
;
jl.$$init = function $$init(this$static){
}
;
jl.$equals = function $equals(this$static, other){
  return this$static === other;
}
;
jl.$finalize = function $finalize(this$static){
}
;
jl.$getClass = function $getClass(this$static){
  return this$static.___clazz;
}
;
jl.$hashCode = function $hashCode(this$static){
  return ji2.getObjectIdentityHashCode(this$static);
}
;
jl.$init__V__devirtual$ = function $init__V__devirtual$(this$static){
  return instanceOfString(this$static)?jl.$$init_2(this$static):instanceOfDouble(this$static)?jl.$$init_1(this$static):instanceOfBoolean(this$static)?jl.$$init_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.$init():jl.$$init(this$static);
}
;
function Object_0(){
  jl.$clinit_Object();
  jl.$init__V__devirtual$(this);
}

jl.equals_Ljava_lang_Object__Z__devirtual$ = function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  jl.$clinit_Object();
  return instanceOfString(this$static)?jl.$equals_3(this$static, other):instanceOfDouble(this$static)?jl.$equals_2(this$static, other):instanceOfBoolean(this$static)?jl.$equals_1(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?jl.$equals(this$static, other):cggcc.$equals_0(this$static, other);
}
;
jl.finalize__V__devirtual$ = function finalize__V__devirtual$(this$static){
  return instanceOfString(this$static)?jl.$finalize(this$static):instanceOfDouble(this$static)?jl.$finalize(this$static):instanceOfBoolean(this$static)?jl.$finalize(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.finalize():jl.$finalize(this$static);
}
;
jl.getClass__Ljava_lang_Class___devirtual$ = function getClass__Ljava_lang_Class___devirtual$(this$static){
  jl.$clinit_Object();
  return instanceOfString(this$static)?jl.$getClass_12(this$static):instanceOfDouble(this$static)?jl.$getClass_11(this$static):instanceOfBoolean(this$static)?jl.$getClass_10(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?jl.$getClass(this$static):cggcc.$getClass_9(this$static);
}
;
jl.hashCode__I__devirtual$ = function hashCode__I__devirtual$(this$static){
  jl.$clinit_Object();
  return instanceOfString(this$static)?jl.$hashCode_3(this$static):instanceOfDouble(this$static)?jl.$hashCode_2(this$static):instanceOfBoolean(this$static)?jl.$hashCode_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?jl.$hashCode(this$static):cggcc.$hashCode_0(this$static);
}
;
jl.toString_1 = function toString_1(object){
  jl.$clinit_Object();
  return jl.getClass__Ljava_lang_Class___devirtual$(object).getName() + '@' + toHexString(jl.hashCode__I__devirtual$(object));
}
;
defineClass(1, null, {1:1}, Object_0);
_.$init = function $init(){
  jl.$$init(this);
}
;
_.equals_0 = function equals(other){
  return jl.$equals(this, other);
}
;
_.finalize = function finalize(){
  jl.$finalize(this);
}
;
_.getClass_0 = function getClass_0(){
  return jl.$getClass(this);
}
;
_.hashCode_0 = function hashCode_0(){
  return jl.$hashCode(this);
}
;
_.toString_0 = function toString_0(){
  return jl.toString_1(this);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
cggcc.$clinit_GWT = function $clinit_GWT(){
  cggcc.$clinit_GWT = emptyMethod;
  jl.$clinit_Object();
}
;
function create(classLiteral){
  cggcc.$clinit_GWT();
  return cggcs.createImpl(classLiteral);
}

function getModuleName(){
  cggcc.$clinit_GWT();
  return getModuleName_0();
}

function getUncaughtExceptionHandler(){
  cggcc.$clinit_GWT();
  return uncaughtExceptionHandler;
}

function isClient(){
  cggcc.$clinit_GWT();
  return true;
}

function isScript(){
  cggcc.$clinit_GWT();
  return true;
}

function reportUncaughtException(e){
  cggcc.$clinit_GWT();
  reportUncaughtException_0(e);
}

defineClass(239, 1, {1:1});
var HOSTED_MODE_PERMUTATION_STRONG_NAME = 'HostedMode';
var uncaughtExceptionHandler = null;
ji.$clinit_Serializable = function $clinit_Serializable(){
  ji.$clinit_Serializable = emptyMethod;
}
;
jl.$clinit_Throwable = function $clinit_Throwable(){
  jl.$clinit_Throwable = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Throwable = function Throwable(){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_33();
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
function Throwable_0(backingJsObject){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_33();
  this.fillInStackTrace();
  this.setBackingJsObject(backingJsObject);
  this.detailMessage = valueOf_24(backingJsObject);
}

jl.Throwable_1 = function Throwable_1(message){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_33();
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
jl.Throwable_2 = function Throwable_2(message, cause){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_33();
  this.cause = cause;
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
jl.Throwable_3 = function Throwable_3(message, cause, enableSuppression, writetableStackTrace){
  Object_0.call(this);
  this.$init_33();
  this.cause = cause;
  this.detailMessage = message;
  this.writetableStackTrace = writetableStackTrace;
  this.disableSuppression = !enableSuppression;
  if (writetableStackTrace) {
    this.fillInStackTrace();
  }
  this.initializeBackingError();
}
;
jl.Throwable_4 = function Throwable_4(cause){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_33();
  this.detailMessage = isNull(cause)?null:cause.toString_0();
  this.cause = cause;
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
jl.fixIE = function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}
;
function of(e){
  jl.$clinit_Throwable();
  var throwable;
  if (jsNotEquals(e, null)) {
    throwable = ji2.getProperty_1(e, '__java$exception');
    if (isNotNull(throwable)) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new jl.NullPointerException_0(e):new jl.JsException_0(e);
}

defineClass(6, 1, {3:1, 1:1, 6:1});
_.$init_33 = function $init_33(){
  this.stackTrace = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 4:1}, 22, 0, 0, 1);
  this.writetableStackTrace = true;
  this.backingJsObject = UNINITIALIZED;
}
;
_.addSuppressed = function addSuppressed(exception){
  ji2.checkNotNull_1(exception, 'Cannot suppress a null exception.');
  ji2.checkCriticalArgument_0(jsNotEquals(exception, this), 'Exception can not suppress itself.');
  if (this.disableSuppression) {
    return;
  }
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Throwable_2_classLit, 1), {3:1, 1:1, 4:1}, 6, 0, [exception]);
  }
   else {
    setCheck(this.suppressedExceptions, this.suppressedExceptions.length, exception);
  }
}
;
_.captureStackTrace = function captureStackTrace(){
  cggcci.captureStackTrace_0(this);
}
;
_.constructJavaStackTrace = function constructJavaStackTrace(){
  return cggcci.constructJavaStackTrace_0(this);
}
;
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.fillInStackTrace = function fillInStackTrace(){
  if (this.writetableStackTrace) {
    if (maskUndefined(this.backingJsObject) !== maskUndefined(UNINITIALIZED)) {
      this.initializeBackingError();
    }
    this.stackTrace = null;
  }
  return this;
}
;
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject;
}
;
_.getCause = function getCause(){
  return this.cause;
}
;
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getStackTrace = function getStackTrace(){
  if (jsEquals(this.stackTrace, null)) {
    this.stackTrace = this.constructJavaStackTrace();
  }
  return this.stackTrace;
}
;
_.getSuppressed = function getSuppressed(){
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = initUnidimensionalArray(cggl.Ljava_lang_Throwable_2_classLit, {3:1, 1:1, 4:1}, 6, 0, 0, 1);
  }
  return this.suppressedExceptions;
}
;
_.initCause = function initCause(cause){
  ji2.checkState_0(isNull(this.cause), "Can't overwrite cause");
  ji2.checkCriticalArgument_0(jsNotEquals(cause, this), 'Self-causation not permitted');
  this.cause = cause;
  return this;
}
;
_.initializeBackingError = function initializeBackingError(){
  var errorMessage, message;
  message = jsEquals(this.detailMessage, null)?null:jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this.detailMessage, '\n', ' ');
  errorMessage = this.toString_1(message);
  this.setBackingJsObject(jl.fixIE(this.createError(errorMessage)));
  this.captureStackTrace();
}
;
_.linkBack = function linkBack(error){
  if (jsNotEquals(error, null)) {
    ji2.setPropertySafe(error, '__java$exception', this);
  }
}
;
_.printStackTrace = function printStackTrace(){
  this.printStackTrace_0((jl.$clinit_System() , jl.err));
}
;
_.printStackTrace_0 = function printStackTrace_0(out){
  this.printStackTraceImpl(out, '', '');
}
;
_.printStackTraceImpl = function printStackTraceImpl(out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + ('' + prefix) + this);
  this.printStackTraceItems(out, ident);
  for (t$array = this.getSuppressed() , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    t.printStackTraceImpl(out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this.getCause();
  if (isNotNull(theCause)) {
    theCause.printStackTraceImpl(out, 'Caused by: ', ident);
  }
}
;
_.printStackTraceItems = function printStackTraceItems(out, ident){
  var element, element$array, element$index, element$max;
  for (element$array = this.getStackTrace() , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}
;
_.setBackingJsObject = function setBackingJsObject(backingJsObject){
  this.backingJsObject = backingJsObject;
  this.linkBack(backingJsObject);
}
;
_.setStackTrace = function setStackTrace(stackTrace){
  var copy, i, length_0;
  length_0 = stackTrace.length;
  copy = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 4:1}, 22, length_0, 0, 1);
  for (i = 0; i < length_0; ++i) {
    copy[i] = castTo(ji2.checkNotNull_0(stackTrace[i]), 22);
  }
  this.stackTrace = copy;
}
;
_.toString_0 = function toString_3(){
  return this.toString_1(this.getLocalizedMessage());
}
;
_.toString_1 = function toString_4(message){
  var className;
  className = jl.getClass__Ljava_lang_Class___devirtual$(this).getName();
  return jsEquals(message, null)?className:className + ': ' + message;
}
;
_.disableSuppression = false;
_.writetableStackTrace = false;
var UNINITIALIZED = '__noinit__';
jl.$clinit_Exception = function $clinit_Exception(){
  jl.$clinit_Exception = emptyMethod;
  jl.$clinit_Throwable();
}
;
jl.Exception = function Exception(){
  jl.$clinit_Exception();
  jl.Throwable.call(this);
  this.$init_34();
}
;
jl.Exception_0 = function Exception_0(backingJsObject){
  jl.$clinit_Exception();
  Throwable_0.call(this, backingJsObject);
  this.$init_34();
}
;
jl.Exception_1 = function Exception_1(message){
  jl.$clinit_Exception();
  jl.Throwable_1.call(this, message);
  this.$init_34();
}
;
jl.Exception_2 = function Exception_2(message, cause){
  jl.$clinit_Exception();
  jl.Throwable_2.call(this, message, cause);
  this.$init_34();
}
;
jl.Exception_3 = function Exception_3(cause){
  jl.$clinit_Exception();
  jl.Throwable_4.call(this, cause);
  this.$init_34();
}
;
defineClass(5, 6, {3:1, 5:1, 1:1, 6:1});
_.$init_34 = function $init_34(){
}
;
jl.$clinit_RuntimeException = function $clinit_RuntimeException(){
  jl.$clinit_RuntimeException = emptyMethod;
  jl.$clinit_Exception();
}
;
jl.RuntimeException = function RuntimeException(){
  jl.$clinit_RuntimeException();
  jl.Exception.call(this);
  this.$init_62();
}
;
jl.RuntimeException_0 = function RuntimeException_0(backingJsObject){
  jl.$clinit_RuntimeException();
  jl.Exception_0.call(this, backingJsObject);
  this.$init_62();
}
;
jl.RuntimeException_1 = function RuntimeException_1(message){
  jl.$clinit_RuntimeException();
  jl.Exception_1.call(this, message);
  this.$init_62();
}
;
jl.RuntimeException_2 = function RuntimeException_2(message, cause){
  jl.$clinit_RuntimeException();
  jl.Exception_2.call(this, message, cause);
  this.$init_62();
}
;
defineClass(8, 5, {3:1, 5:1, 1:1, 8:1, 6:1});
_.$init_62 = function $init_62(){
}
;
jl.$clinit_JsException = function $clinit_JsException(){
  jl.$clinit_JsException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.JsException = function JsException(){
  jl.$clinit_JsException();
  jl.RuntimeException.call(this);
  this.$init_63();
}
;
jl.JsException_0 = function JsException_0(backingJsObject){
  jl.$clinit_JsException();
  jl.RuntimeException_0.call(this, backingJsObject);
  this.$init_63();
}
;
jl.JsException_1 = function JsException_1(msg){
  jl.$clinit_JsException();
  jl.RuntimeException_1.call(this, msg);
  this.$init_63();
}
;
defineClass(45, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.JsException_0);
_.$init_63 = function $init_63(){
}
;
cggcci.$clinit_JavaScriptExceptionBase = function $clinit_JavaScriptExceptionBase(){
  cggcci.$clinit_JavaScriptExceptionBase = emptyMethod;
  jl.$clinit_JsException();
}
;
cggcci.JavaScriptExceptionBase = function JavaScriptExceptionBase(e){
  cggcci.$clinit_JavaScriptExceptionBase();
  jl.JsException_0.call(this, e);
  this.$init_64();
}
;
defineClass(153, 45, {3:1, 5:1, 1:1, 8:1, 6:1});
_.$init_64 = function $init_64(){
}
;
cggcc.$clinit_JavaScriptException = function $clinit_JavaScriptException(){
  cggcc.$clinit_JavaScriptException = emptyMethod;
  cggcci.$clinit_JavaScriptExceptionBase();
  cggcc.NOT_SET = new Object_0;
}
;
cggcc.JavaScriptException = function JavaScriptException(e){
  cggcc.$clinit_JavaScriptException();
  cggcc.JavaScriptException_0.call(this, e, '');
}
;
cggcc.JavaScriptException_0 = function JavaScriptException_0(e, description){
  cggcci.JavaScriptExceptionBase.call(this, e);
  this.$init_65();
  this.e = e;
  this.description = description;
}
;
cggcc.getExceptionDescription = function getExceptionDescription(e){
  if (instanceOfJso(e)) {
    return cggcc.getExceptionDescription0(castToJso(e));
  }
   else {
    return e + '';
  }
}
;
cggcc.getExceptionDescription0 = function getExceptionDescription0(e){
  return e == null?null:e.message;
}
;
cggcc.getExceptionName = function getExceptionName(e){
  if (jsEquals(e, null)) {
    return 'null';
  }
   else if (instanceOfJso(e)) {
    return cggcc.getExceptionName0(castToJso(e));
  }
   else if (instanceOfString(e)) {
    return 'String';
  }
   else {
    return jl.getClass__Ljava_lang_Class___devirtual$(e).getName();
  }
}
;
cggcc.getExceptionName0 = function getExceptionName0(e){
  return e == null?null:e.name;
}
;
defineClass(47, 153, {47:1, 3:1, 5:1, 1:1, 8:1, 6:1}, cggcc.JavaScriptException);
_.$init_65 = function $init_65(){
  this.description = '';
}
;
_.ensureInit = function ensureInit(){
  var exception;
  if (jsEquals(this.message_0, null)) {
    exception = this.getThrown();
    this.name_0 = cggcc.getExceptionName(exception);
    this.description = this.description + ': ' + cggcc.getExceptionDescription(exception);
    this.message_0 = '(' + this.name_0 + ') ' + this.description;
  }
}
;
_.getMessage = function getMessage_0(){
  this.ensureInit();
  return this.message_0;
}
;
_.getName = function getName_1(){
  this.ensureInit();
  return this.name_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(cggcc.NOT_SET)?null:this.e;
}
;
cggcc.$clinit_JavaScriptObject = function $clinit_JavaScriptObject(){
  cggcc.$clinit_JavaScriptObject = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.$cast = function $cast(this$static){
  cggcc.$clinit_JavaScriptObject();
  return this$static;
}
;
cggcc.$equals_0 = function $equals_0(this$static, other){
  cggcc.$clinit_JavaScriptObject();
  if (!isClient()) {
    return getClassPrototype(1).equals_0.call(this$static, other);
  }
  return cggcc.hasEquals(this$static)?cggcc.callEquals(this$static, other):getClassPrototype(1).equals_0.call(this$static, other);
}
;
cggcc.$getClass_9 = function $getClass_9(this$static){
  cggcc.$clinit_JavaScriptObject();
  return getClass_1(this$static);
}
;
cggcc.$hashCode_0 = function $hashCode_0(this$static){
  cggcc.$clinit_JavaScriptObject();
  if (!isClient()) {
    return getClassPrototype(1).hashCode_0.call(this$static);
  }
  return cggcc.hasHashCode(this$static)?cggcc.callHashCode(this$static):getClassPrototype(1).hashCode_0.call(this$static);
}
;
cggcc.callEquals = function callEquals(thisObject, thatObject){
  return thisObject.equals(thatObject);
}
;
cggcc.callHashCode = function callHashCode(object){
  return object.hashCode();
}
;
cggcc.createArray = function createArray(){
  cggcc.$clinit_JavaScriptObject();
  return [];
}
;
function createObject(){
  cggcc.$clinit_JavaScriptObject();
  return {};
}

cggcc.hasEquals = function hasEquals(object){
  return !!object && !!object.equals;
}
;
cggcc.hasHashCode = function hasHashCode(object){
  return !!object && !!object.hashCode;
}
;
cggcc.toStringSimple = function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}
;
cggcc.toStringVerbose = function toStringVerbose(obj){
  var defined = function(m){
    return typeof m != 'undefined';
  }
  ;
  var strip = function(s){
    return s.replace(/\r\n/g, '');
  }
  ;
  if (defined(obj.outerHTML))
    return strip(obj.outerHTML);
  if (defined(obj.innerHTML) && obj.cloneNode) {
    $doc.createElement('div').appendChild(obj.cloneNode(true)).innerHTML;
  }
  if (defined(obj.nodeType) && obj.nodeType == 3) {
    return "'" + obj.data.replace(/ /g, '\u25AB').replace(/\u00A0/, '\u25AA') + "'";
  }
  if (typeof defined(obj.htmlText) && obj.collapse) {
    var html = obj.htmlText;
    if (html) {
      return 'IETextRange [' + strip(html) + ']';
    }
     else {
      var dup = obj.duplicate();
      dup.pasteHTML('|');
      var out = 'IETextRange ' + strip(obj.parentElement().outerHTML);
      dup.moveStart('character', -1);
      dup.pasteHTML('');
      return out;
    }
  }
  return obj.toString?obj.toString():'[JavaScriptObject]';
}
;
cggcci.$clinit_StackTraceCreator = function $clinit_StackTraceCreator(){
  cggcci.$clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  jl.$clinit_Object();
  cggcci.LINE_NUMBER_UNKNOWN = -1;
  {
    enforceLegacy = !cggcci.supportsErrorStack();
    c = castTo(new cggcci.StackTraceCreator$CollectorModernNoSourceMap, 60);
    cggcci.collector_1 = instanceOf(c, 61) && enforceLegacy?new cggcci.StackTraceCreator$CollectorLegacy:c;
  }
}
;
cggcci.captureStackTrace_0 = function captureStackTrace_0(error){
  cggcci.$clinit_StackTraceCreator();
  cggcci.collector_1.collect(error);
}
;
cggcci.constructJavaStackTrace_0 = function constructJavaStackTrace_0(thrown){
  cggcci.$clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = cggcci.collector_1.getStackTrace_0(thrown);
  return cggcci.dropInternalFrames(stackTrace);
}
;
cggcci.dropInternalFrames = function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace_0';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(stackTrace[i].getMethodName(), dropFrameUntilFnName) || jl.equals_Ljava_lang_Object__Z__devirtual$_2(stackTrace[i].getMethodName(), dropFrameUntilFnName2)) {
      cggcci.splice(stackTrace, i + 1);
      break;
    }
  }
  return stackTrace;
}
;
cggcci.extractFunctionName = function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}
;
cggcci.getFnStack = function getFnStack(e){
  cggcci.$clinit_StackTraceCreator();
  return e && e['fnStack']?e['fnStack']:[];
}
;
cggcci.getFunctionName = function getFunctionName(fn){
  cggcci.$clinit_StackTraceCreator();
  return fn.name || (fn.name = cggcci.extractFunctionName(fn.toString()));
}
;
cggcci.parseInt_0 = function parseInt_0(number){
  cggcci.$clinit_StackTraceCreator();
  return parseInt(number) || -1;
}
;
cggcci.splice = function splice(arr, length_0){
  if (arr.length >= length_0) {
    ji2.removeFrom(arr, 0, length_0);
  }
}
;
cggcci.split_0 = function split_0(t){
  cggcci.$clinit_StackTraceCreator();
  var e = t.backingJsObject;
  return e && e.stack?e.stack.split('\n'):[];
}
;
cggcci.supportsErrorStack = function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}
;
defineClass(320, 1, {1:1});
cggcci.ANONYMOUS = 'anonymous';
cggcci.DROP_FRAME_LIMIT = 5;
cggcci.LINE_NUMBER_UNKNOWN = 0;
cggcci.UNKNOWN = 'Unknown';
cggcci.$clinit_StackTraceCreator$Collector = function $clinit_StackTraceCreator$Collector(){
  cggcci.$clinit_StackTraceCreator$Collector = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.StackTraceCreator$Collector = function StackTraceCreator$Collector(){
  cggcci.$clinit_StackTraceCreator$Collector();
  Object_0.call(this);
  this.$init_81();
}
;
defineClass(60, 1, {1:1});
_.$init_81 = function $init_81(){
}
;
cggcci.$clinit_StackTraceCreator$CollectorLegacy = function $clinit_StackTraceCreator$CollectorLegacy(){
  cggcci.$clinit_StackTraceCreator$CollectorLegacy = emptyMethod;
  cggcci.$clinit_StackTraceCreator$Collector();
}
;
cggcci.StackTraceCreator$CollectorLegacy = function StackTraceCreator$CollectorLegacy(){
  cggcci.$clinit_StackTraceCreator$CollectorLegacy();
  cggcci.StackTraceCreator$Collector.call(this);
  this.$init_82();
}
;
defineClass(149, 60, {1:1}, cggcci.StackTraceCreator$CollectorLegacy);
_.$init_82 = function $init_82(){
}
;
_.collect = function collect(error){
  var seen = {};
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = cggcci.getFunctionName(callee);
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace_0 = function getStackTrace_0(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = cggcci.getFnStack(t);
  length_0 = cggcc.$length_0(stack_0);
  stackTrace = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 4:1}, 22, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new jl.StackTraceElement('Unknown', cggcc.$get_0(stack_0, i), null, -1);
  }
  return stackTrace;
}
;
cggcci.$clinit_StackTraceCreator$CollectorModern = function $clinit_StackTraceCreator$CollectorModern(){
  cggcci.$clinit_StackTraceCreator$CollectorModern = emptyMethod;
  cggcci.$clinit_StackTraceCreator$Collector();
}
;
cggcci.StackTraceCreator$CollectorModern = function StackTraceCreator$CollectorModern(){
  cggcci.$clinit_StackTraceCreator$CollectorModern();
  cggcci.StackTraceCreator$Collector.call(this);
  this.$init_83();
}
;
defineClass(61, 60, {61:1, 1:1});
_.$init_83 = function $init_83(){
}
;
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new jl.StackTraceElement('Unknown', method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace_0 = function getStackTrace_1(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste;
  stack_0 = cggcci.split_0(t);
  stackTrace = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 4:1}, 22, 0, 0, 1);
  addIndex = 0;
  length_0 = cggcc.$length_0(stack_0);
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = this.parse_1(cggcc.$get_0(stack_0, 0));
  if (!jl.equals_Ljava_lang_Object__Z__devirtual$_2(ste.getMethodName(), 'anonymous')) {
    stackTrace[addIndex++] = ste;
  }
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = this.parse_1(cggcc.$get_0(stack_0, i));
  }
  return stackTrace;
}
;
_.parse_1 = function parse_1(stString){
  var closeParen, col, endFileUrlIndex, fileName, ieAnonymousFunctionName, index_0, lastColonIndex, line, location_0, toReturn;
  location_0 = '';
  if (jl.isEmpty__Z__devirtual$(stString)) {
    return this.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = jl.trim__Ljava_lang_String___devirtual$(stString);
  if (jl.startsWith_Ljava_lang_String__Z__devirtual$(toReturn, 'at ')) {
    toReturn = jl.substring_I_Ljava_lang_String___devirtual$(toReturn, 3);
  }
  toReturn = this.stripSquareBrackets(toReturn);
  index_0 = jl.indexOf_Ljava_lang_String__I__devirtual$(toReturn, '(');
  if (index_0 == -1) {
    index_0 = jl.indexOf_Ljava_lang_String__I__devirtual$(toReturn, '@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = jl.trim__Ljava_lang_String___devirtual$(jl.substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1));
      toReturn = jl.trim__Ljava_lang_String___devirtual$(jl.substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
    }
  }
   else {
    closeParen = jl.indexOf_Ljava_lang_String_I_I__devirtual$(toReturn, ')', index_0);
    location_0 = jl.substring_II_Ljava_lang_String___devirtual$(toReturn, index_0 + 1, closeParen);
    toReturn = jl.trim__Ljava_lang_String___devirtual$(jl.substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
  }
  index_0 = jl.indexOf_I_I__devirtual$(toReturn, 46);
  if (index_0 != -1) {
    toReturn = jl.substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1);
  }
  ieAnonymousFunctionName = 'Anonymous function';
  if (jl.isEmpty__Z__devirtual$(toReturn) || jl.equals_Ljava_lang_Object__Z__devirtual$_2(toReturn, 'Anonymous function')) {
    toReturn = 'anonymous';
  }
  lastColonIndex = jl.lastIndexOf_I_I__devirtual$(location_0, 58);
  endFileUrlIndex = jl.lastIndexOf_II_I__devirtual$(location_0, 58, lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = jl.substring_II_Ljava_lang_String___devirtual$(location_0, 0, endFileUrlIndex);
    line = cggcci.parseInt_0(jl.substring_II_Ljava_lang_String___devirtual$(location_0, endFileUrlIndex + 1, lastColonIndex));
    col = cggcci.parseInt_0(jl.substring_I_Ljava_lang_String___devirtual$(location_0, lastColonIndex + 1));
  }
  return this.createSte(fileName, toReturn, line, col);
}
;
_.stripSquareBrackets = function stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}
;
cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap = function $clinit_StackTraceCreator$CollectorModernNoSourceMap(){
  cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap = emptyMethod;
  cggcci.$clinit_StackTraceCreator$CollectorModern();
}
;
cggcci.StackTraceCreator$CollectorModernNoSourceMap = function StackTraceCreator$CollectorModernNoSourceMap(){
  cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap();
  cggcci.StackTraceCreator$CollectorModern.call(this);
  this.$init_84();
}
;
defineClass(150, 61, {60:1, 61:1, 1:1}, cggcci.StackTraceCreator$CollectorModernNoSourceMap);
_.$init_84 = function $init_84(){
}
;
_.createSte = function createSte_0(fileName, method, line, col){
  return new jl.StackTraceElement('Unknown', method, fileName, -1);
}
;
cggl.$clinit_Array = function $clinit_Array(){
  cggl.$clinit_Array = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.Array_0 = function Array_0(){
  Object_0.call(this);
  this.$init_88();
}
;
cggl.asArray = function asArray(array){
  return array;
}
;
cggl.canSet = function canSet(array, value_0){
  switch (cggl.getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return instanceOfArray(value_0);
    case 11:
      return instanceOfFunction(value_0);
    case 12:
      return instanceOfJsObject(value_0);
    case 0:
      return canCast(value_0, cggl.getElementTypeId(array));
    case 2:
      return isJavaScriptObject(value_0);
    case 1:
      return isJavaScriptObject(value_0) || canCast(value_0, cggl.getElementTypeId(array));
    default:return true;
  }
}
;
function ensureNotNull(array){
  cggl.$clinit_Array();
  return ji2.checkNotNull_0(array);
}

function getClassLiteralForArray(clazz, dimensions){
  cggl.$clinit_Array();
  return cggl.getClassLiteralForArrayImpl(clazz, dimensions);
}

cggl.getClassLiteralForArrayImpl = function getClassLiteralForArrayImpl(clazz, dimensions){
  return jl.getClassLiteralForArray_0(clazz, dimensions);
}
;
cggl.getElementTypeCategory = function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}
;
cggl.getElementTypeId = function getElementTypeId(array){
  return array.__elementTypeId$;
}
;
function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  cggl.$clinit_Array();
  return cggl.initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

cggl.initMultidimensionalArray_0 = function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = cggl.initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  if (leafElementTypeCategory != 10) {
    stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  }
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      cggl.set_1(result, i, cggl.initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count));
    }
  }
  return result;
}
;
function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  cggl.$clinit_Array();
  var result;
  result = cggl.initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  if (elementTypeCategory != 10) {
    stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  }
  return result;
}

cggl.initializeArrayElementsWithDefaults = function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}
;
function isJavaArray(src_0){
  cggl.$clinit_Array();
  return isArray(src_0) && hasTypeMarker(src_0);
}

function isPrimitiveArray(array){
  cggl.$clinit_Array();
  var elementTypeCategory;
  elementTypeCategory = cggl.getElementTypeCategory(array);
  return elementTypeCategory >= 14 && elementTypeCategory <= 16;
}

function newArray(size_0){
  cggl.$clinit_Array();
  return new Array(size_0);
}

cggl.set_1 = function set_1(array, index_0, value_0){
  return array[index_0] = value_0;
}
;
function setCheck(array, index_0, value_0){
  cggl.$clinit_Array();
  ji2.checkArrayType(jsEquals(value_0, null) || cggl.canSet(array, value_0));
  return cggl.set_1(array, index_0, value_0);
}

cggl.setClass = function setClass(o, clazz){
  o.___clazz = clazz;
}
;
cggl.setElementTypeCategory = function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}
;
cggl.setElementTypeId = function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}
;
function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  cggl.$clinit_Array();
  cggl.setClass(array, arrayClass);
  setCastableTypeMap(array, castableTypeMap);
  setTypeMarker(array);
  cggl.setElementTypeId(array, elementTypeId);
  cggl.setElementTypeCategory(array, elementTypeCategory);
  return array;
}

cggl.stampJavaTypeInfo_0 = function stampJavaTypeInfo_0(array, referenceType){
  cggl.$clinit_Array();
  if (cggl.getElementTypeCategory(referenceType) != 10) {
    stampJavaTypeInfo(jl.getClass__Ljava_lang_Class___devirtual$(referenceType), getCastableTypeMap(referenceType), cggl.getElementTypeId(referenceType), cggl.getElementTypeCategory(referenceType), array);
  }
  return cggl.asArray(array);
}
;
defineClass(288, 1, {1:1});
_.$init_88 = function $init_88(){
}
;
var TYPE_ARRAY = 3;
var TYPE_JAVA_LANG_BOOLEAN = 8;
var TYPE_JAVA_LANG_DOUBLE = 7;
var TYPE_JAVA_LANG_OBJECT = 5;
var TYPE_JAVA_LANG_STRING = 6;
var TYPE_JAVA_OBJECT = 0;
var TYPE_JAVA_OBJECT_OR_JSO = 1;
var TYPE_JSO = 2;
var TYPE_JSO_ARRAY = 4;
var TYPE_JS_ARRAY = 13;
var TYPE_JS_FUNCTION = 11;
var TYPE_JS_NATIVE = 9;
var TYPE_JS_OBJECT = 12;
var TYPE_JS_UNKNOWN_NATIVE = 10;
var TYPE_PRIMITIVE_BOOLEAN = 16;
var TYPE_PRIMITIVE_LONG = 14;
var TYPE_PRIMITIVE_NUMBER = 15;
cggl.$clinit_Cast = function $clinit_Cast(){
  cggl.$clinit_Cast = emptyMethod;
  jl.$clinit_Object();
}
;
function Cast(){
  Object_0.call(this);
  this.$init_90();
}

function canCast(src_0, dstId){
  cggl.$clinit_Cast();
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function canCastClass(srcClazz, dstClass){
  cggl.$clinit_Cast();
  var srcTypeId = srcClazz.typeId;
  var dstTypeId = dstClass.typeId;
  var prototype_0 = prototypesByTypeId_0[srcTypeId];
  return canCast(prototype_0, dstTypeId);
}

function castTo(src_0, dstId){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || canCast(src_0, dstId));
  return src_0;
}

function castToAllowJso(src_0, dstId){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || isJavaScriptObject(src_0) || canCast(src_0, dstId));
  return src_0;
}

function castToArray(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfArray(src_0));
  return src_0;
}

function castToBoolean(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfBoolean(src_0));
  return src_0;
}

function castToDouble(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfDouble(src_0));
  return src_0;
}

function castToFunction(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || cggl.isFunction(src_0));
  return src_0;
}

function castToJsArray(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfJsArray(src_0));
  return src_0;
}

function castToJsObject(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || cggl.isJsObject(src_0));
  return src_0;
}

function castToJso(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || isJavaScriptObject(src_0));
  return src_0;
}

function castToJsoArray(src_0, dstId){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfJsoArray(src_0, dstId));
  return src_0;
}

function castToNative(src_0, jsType){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || cggl.jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfString(src_0));
  return src_0;
}

function castToUnknownNative(src_0){
  cggl.$clinit_Cast();
  return src_0;
}

function charToString(x_0){
  cggl.$clinit_Cast();
  return String.fromCharCode(x_0);
}

function getClass_1(array){
  cggl.$clinit_Cast();
  return array.___clazz || (Array.isArray(array) && getClassLiteralForArray(cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit);
}

function hasJavaObjectVirtualDispatch(src_0){
  cggl.$clinit_Cast();
  return !isArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && canCast(src_0, dstId);
}

function instanceOfAllowJso(src_0, dstId){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && (isJavaScriptObject(src_0) || canCast(src_0, dstId));
}

function instanceOfArray(src_0){
  cggl.$clinit_Cast();
  return isArray(src_0) && !isPrimitiveArray(src_0);
}

function instanceOfBoolean(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'number';
}

function instanceOfFunction(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && cggl.isFunction(src_0);
}

function instanceOfJsArray(src_0){
  cggl.$clinit_Cast();
  return isArray(src_0);
}

function instanceOfJsObject(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && cggl.isJsObject(src_0);
}

function instanceOfJso(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && isJavaScriptObject(src_0);
}

function instanceOfJsoArray(src_0, dstId){
  cggl.$clinit_Cast();
  return canCast(src_0, dstId) || !hasTypeMarker(src_0) && isArray(src_0);
}

function instanceOfNative(src_0, jsType){
  cggl.$clinit_Cast();
  return cggl.jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'string';
}

function instanceOfUnknownNative(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null);
}

function isArray(src_0){
  cggl.$clinit_Cast();
  return Array.isArray(src_0);
}

cggl.isFunction = function isFunction(src_0){
  return typeof src_0 === 'function';
}
;
function isJavaScriptObject(src_0){
  cggl.$clinit_Cast();
  return cggl.isJsObjectOrFunction(src_0) && !hasTypeMarker(src_0);
}

cggl.isJsObject = function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}
;
cggl.isJsObjectOrFunction = function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}
;
function isNotNull(src_0){
  cggl.$clinit_Cast();
  return !!src_0;
}

function isNull(src_0){
  cggl.$clinit_Cast();
  return !src_0;
}

function jsEquals(a, b){
  cggl.$clinit_Cast();
  return a == b;
}

function jsNotEquals(a, b){
  cggl.$clinit_Cast();
  return a != b;
}

cggl.jsinstanceOf = function jsinstanceOf(obj, jsType){
  return obj && (jsType && obj instanceof jsType);
}
;
function maskUndefined(src_0){
  cggl.$clinit_Cast();
  return src_0 == null?null:src_0;
}

function narrow_byte(x_0){
  cggl.$clinit_Cast();
  return x_0 << 24 >> 24;
}

function narrow_char(x_0){
  cggl.$clinit_Cast();
  return x_0 & 65535;
}

function narrow_int(x_0){
  cggl.$clinit_Cast();
  return x_0 | 0;
}

function narrow_short(x_0){
  cggl.$clinit_Cast();
  return x_0 << 16 >> 16;
}

function round_byte(x_0){
  cggl.$clinit_Cast();
  return narrow_byte(round_int(x_0));
}

function round_char(x_0){
  cggl.$clinit_Cast();
  return narrow_char(round_int(x_0));
}

function round_int(x_0){
  cggl.$clinit_Cast();
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

function round_short(x_0){
  cggl.$clinit_Cast();
  return narrow_short(round_int(x_0));
}

function throwClassCastExceptionUnlessNull(o){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(o, null));
  return o;
}

defineClass(289, 1, {1:1});
_.$init_90 = function $init_90(){
}
;
var booleanCastMap;
var doubleCastMap;
var stringCastMap;
cggl.$clinit_Exceptions = function $clinit_Exceptions(){
  cggl.$clinit_Exceptions = emptyMethod;
  jl.$clinit_Object();
}
;
function Exceptions(){
  Object_0.call(this);
  this.$init_91();
}

function checkNotNull(arg){
  cggl.$clinit_Exceptions();
  if (arg == null) {
    throw new TypeError('null pointer');
  }
  return arg;
}

cggl.getJavaException = function getJavaException(e){
  return e && e['__java$exception'];
}
;
function makeAssertionError(){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError;
}

function makeAssertionError_Object(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_5(message);
}

function makeAssertionError_boolean(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_7(message);
}

function makeAssertionError_char(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_0(message);
}

function makeAssertionError_double(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_1(message);
}

function makeAssertionError_float(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_2(message);
}

function makeAssertionError_int(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_3(message);
}

function makeAssertionError_long(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_4(message);
}

function safeClose(resource, mainException){
  cggl.$clinit_Exceptions();
  var e;
  if (isNull(resource)) {
    return mainException;
  }
  try {
    resource.close_0();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      if (isNull(mainException)) {
        return e;
      }
      mainException.addSuppressed(e);
    }
     else 
      throw toJs($e0);
  }
  return mainException;
}

function toJava(e){
  cggl.$clinit_Exceptions();
  var javaException;
  if (instanceOf(e, 6)) {
    return e;
  }
  javaException = cggl.getJavaException(e);
  if (isNull(javaException)) {
    javaException = new cggcc.JavaScriptException(e);
    cggcci.captureStackTrace_0(javaException);
  }
  return javaException;
}

function toJs(t){
  cggl.$clinit_Exceptions();
  return t.backingJsObject;
}

defineClass(291, 1, {1:1});
_.$init_91 = function $init_91(){
}
;
cggl.$clinit_Util = function $clinit_Util(){
  cggl.$clinit_Util = emptyMethod;
  jl.$clinit_Object();
}
;
function Util(){
  Object_0.call(this);
  this.$init_96();
}

function getCastableTypeMap(o){
  cggl.$clinit_Util();
  return o.castableTypeMap;
}

function hasTypeMarker(o){
  cggl.$clinit_Util();
  return o.typeMarker === typeMarkerFn;
}

function makeEnumName(enumName){
  cggl.$clinit_Util();
  return enumName;
}

function setCastableTypeMap(o, castableTypeMap){
  cggl.$clinit_Util();
  o.castableTypeMap = castableTypeMap;
}

function setTypeMarker(o){
  cggl.$clinit_Util();
  o.typeMarker = typeMarkerFn;
}

defineClass(296, 1, {1:1});
_.$init_96 = function $init_96(){
}
;
jl.$clinit_Error = function $clinit_Error(){
  jl.$clinit_Error = emptyMethod;
  jl.$clinit_Throwable();
}
;
jl.Error_0 = function Error_0(){
  jl.$clinit_Error();
  jl.Throwable.call(this);
  this.$init_105();
}
;
jl.Error_1 = function Error_1(message){
  jl.$clinit_Error();
  jl.Throwable_1.call(this, message);
  this.$init_105();
}
;
jl.Error_2 = function Error_2(message, cause){
  jl.$clinit_Error();
  jl.Throwable_2.call(this, message, cause);
  this.$init_105();
}
;
defineClass(29, 6, {3:1, 29:1, 1:1, 6:1});
_.$init_105 = function $init_105(){
}
;
jl.$clinit_AssertionError = function $clinit_AssertionError(){
  jl.$clinit_AssertionError = emptyMethod;
  jl.$clinit_Error();
}
;
jl.AssertionError = function AssertionError(){
  jl.$clinit_AssertionError();
  jl.Error_0.call(this);
  this.$init_106();
}
;
jl.AssertionError_0 = function AssertionError_0(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_19(message));
}
;
jl.AssertionError_1 = function AssertionError_1(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_20(message));
}
;
jl.AssertionError_2 = function AssertionError_2(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_21(message));
}
;
jl.AssertionError_3 = function AssertionError_3(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_22(message));
}
;
jl.AssertionError_4 = function AssertionError_4(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_23(message));
}
;
jl.AssertionError_5 = function AssertionError_5(message){
  jl.$clinit_AssertionError();
  jl.Error_2.call(this, valueOf_24(message), instanceOf(message, 6)?castTo(message, 6):null);
  this.$init_106();
}
;
jl.AssertionError_6 = function AssertionError_6(message){
  jl.Error_1.call(this, message);
  this.$init_106();
}
;
jl.AssertionError_7 = function AssertionError_7(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_25(message));
}
;
defineClass(11, 29, {3:1, 29:1, 1:1, 6:1}, jl.AssertionError, jl.AssertionError_0, jl.AssertionError_1, jl.AssertionError_2, jl.AssertionError_3, jl.AssertionError_4, jl.AssertionError_5, jl.AssertionError_7);
_.$init_106 = function $init_106(){
}
;
jl.$clinit_Comparable = function $clinit_Comparable(){
  jl.$clinit_Comparable = emptyMethod;
}
;
function $isInstance_2(instance){
  jl.$clinit_Comparable();
  var type_0;
  type_0 = typeof(instance);
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(type_0, 'boolean') || jl.equals_Ljava_lang_Object__Z__devirtual$_2(type_0, 'number') || jl.equals_Ljava_lang_Object__Z__devirtual$_2(type_0, 'string')) {
    return true;
  }
  return jsNotEquals(instance, null) && instance.$implements__java_lang_Comparable == true;
}

jl.$clinit_Boolean = function $clinit_Boolean(){
  jl.$clinit_Boolean = emptyMethod;
  jl.$clinit_Object();
  FALSE = jl.valueOf_8(false);
  TRUE = jl.valueOf_8(true);
  TYPE = cggl.Z_classLit;
}
;
jl.$$init_0 = function $$init_0(this$static){
}
;
jl.$booleanValue = function $booleanValue(this$static){
  return ji2.unsafeCastToBoolean(ji2.checkNotNull_0(this$static));
}
;
jl.$compareTo = function $compareTo(this$static, b){
  return compare_1(jl.booleanValue__Z__devirtual$(this$static), jl.booleanValue__Z__devirtual$(b));
}
;
jl.$compareTo_0 = function $compareTo_0(this$static, b){
  return jl.compareTo_Ljava_lang_Boolean__I__devirtual$(this$static, castToBoolean(b));
}
;
function $create(x_0){
  jl.$clinit_Boolean();
  return ji2.uncheckedCast(parseBoolean(x_0));
}

jl.$create_0 = function $create_0(x_0){
  return ji2.uncheckedCast(x_0);
}
;
jl.$equals_1 = function $equals_1(this$static, o){
  return maskUndefined(ji2.checkNotNull_0(this$static)) === maskUndefined(o);
}
;
jl.$getClass_10 = function $getClass_10(this$static){
  return cggl.Ljava_lang_Boolean_2_classLit;
}
;
jl.$hashCode_1 = function $hashCode_1(this$static){
  return jl.hashCode_3(jl.booleanValue__Z__devirtual$(this$static));
}
;
jl.$init__V__devirtual$_0 = function $init__V__devirtual$_0(this$static){
  return jl.$$init_0(this$static);
}
;
function $isInstance(instance){
  jl.$clinit_Boolean();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('boolean', typeof(instance));
}

function Boolean_0(s){
  Object_0.call(this);
  jl.$init__V__devirtual$_0(this);
  $create(s);
}

jl.Boolean_1 = function Boolean_1(value_0){
  Object_0.call(this);
  jl.$init__V__devirtual$_0(this);
  jl.$create_0(value_0);
}
;
jl.booleanValue__Z__devirtual$ = function booleanValue__Z__devirtual$(this$static){
  return jl.$booleanValue(this$static);
}
;
function compare_1(x_0, y_0){
  jl.$clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

jl.compareTo_Ljava_lang_Boolean__I__devirtual$ = function compareTo_Ljava_lang_Boolean__I__devirtual$(this$static, b){
  return jl.$compareTo(this$static, b);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$ = function compareTo_Ljava_lang_Object__I__devirtual$(this$static, b){
  return jl.$compareTo_0(this$static, b);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$_0 = function compareTo_Ljava_lang_Object__I__devirtual$_0(this$static, other){
  return instanceOfString(this$static)?jl.$compareTo_3(this$static, other):instanceOfDouble(this$static)?jl.$compareTo_2(this$static, other):instanceOfBoolean(this$static)?jl.$compareTo_0(this$static, other):this$static.compareTo_0(other);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_0 = function equals_Ljava_lang_Object__Z__devirtual$_0(this$static, o){
  return jl.$equals_1(this$static, o);
}
;
jl.getClass__Ljava_lang_Class___devirtual$_0 = function getClass__Ljava_lang_Class___devirtual$_0(this$static){
  return jl.$getClass_10(this$static);
}
;
jl.hashCode_3 = function hashCode_3(value_0){
  return value_0?1231:1237;
}
;
jl.hashCode__I__devirtual$_0 = function hashCode__I__devirtual$_0(this$static){
  return jl.$hashCode_1(this$static);
}
;
function logicalAnd(a, b){
  jl.$clinit_Boolean();
  return a && b;
}

function logicalOr(a, b){
  jl.$clinit_Boolean();
  return a || b;
}

function logicalXor(a, b){
  jl.$clinit_Boolean();
  return a ^ b;
}

function parseBoolean(s){
  jl.$clinit_Boolean();
  return jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$('true', s);
}

jl.toString_13 = function toString_13(x_0){
  return jl.valueOf_25(x_0);
}
;
function valueOf_7(s){
  jl.$clinit_Boolean();
  return jl.valueOf_8(parseBoolean(s));
}

jl.valueOf_8 = function valueOf_8(b){
  return b?jl.$create_0(true):jl.$create_0(false);
}
;
booleanCastMap = {3:1, 143:1, 13:1, 1:1};
var FALSE;
var TRUE;
var TYPE;
jl.$clinit_CharSequence = function $clinit_CharSequence(){
  jl.$clinit_CharSequence = emptyMethod;
}
;
jl.$chars = function $chars(this$static){
  return jus.intStream_0(new jl.CharSequence$lambda$0$Type(this$static), 64 | 16384 | 16, false);
}
;
function $isInstance_1(instance){
  jl.$clinit_CharSequence();
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(typeof(instance), 'string')) {
    return true;
  }
  return jsNotEquals(instance, null) && instance.$implements__java_lang_CharSequence == true;
}

jl.$lambda$0 = function $lambda$0(this$static){
  var it;
  {
    it = new jl.CharSequence$1(this$static);
    return ju.spliterator_8(it, fromInt_0(jl.length__I__devirtual$(this$static)), 16);
  }
}
;
jlr.$clinit_Type = function $clinit_Type(){
  jlr.$clinit_Type = emptyMethod;
}
;
jl.$clinit_Class = function $clinit_Class(){
  jl.$clinit_Class = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Class = function Class(){
  Object_0.call(this);
  this.$init_111();
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}
;
jl.createClassObject = function createClassObject(packageName, compoundClassName, typeId){
  var clazz;
  clazz = new jl.Class;
  if (isClassMetadataEnabled()) {
    clazz.packageName = packageName;
    clazz.compoundName = compoundClassName;
  }
   else {
    synthesizeClassNamesFromTypeId(clazz, typeId);
  }
  return clazz;
}
;
function createForClass(packageName, compoundClassName, typeId, superclass){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, typeId);
  jl.maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc, enumValueOfFunc){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, typeId);
  jl.maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = isNotNull(enumConstantsFunc)?8:0;
  clazz.superclass = clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  clazz.enumValueOfFunc = enumValueOfFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, null);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject('', className, primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

jl.getClassLiteralForArray_0 = function getClassLiteralForArray_0(leafClass, dimensions){
  jl.$clinit_Class();
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}
;
function getPrototypeForClass(clazz){
  jl.$clinit_Class();
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

jl.initializeNames = function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    if (componentType.isPrimitive()) {
      clazz.typeName = '[' + componentType.typeId;
    }
     else if (!componentType.isArray_0()) {
      clazz.typeName = '[L' + componentType.getName() + ';';
    }
     else {
      clazz.typeName = '[' + componentType.getName();
    }
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = jl.join_0('.', [packageName, jl.join_0('$', compoundName)]);
  clazz.canonicalName = jl.join_0('.', [packageName, jl.join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}
;
function isClassMetadataEnabled(){
  jl.$clinit_Class();
  return true;
}

jl.join_0 = function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}
;
jl.maybeSetClassLiteral = function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}
;
function synthesizeClassNamesFromTypeId(clazz, typeId){
  jl.$clinit_Class();
  clazz.typeName = 'Class$' + (!!typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
}

defineClass(83, 1, {1:1}, jl.Class);
_.$init_111 = function $init_111(){
  this.sequentialId = nextSequentialId++;
}
;
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new jl.Class;
  clazz.modifiers = 4;
  clazz.superclass = cggl.Ljava_lang_Object_2_classLit;
  if (dimensions > 1) {
    clazz.componentType = jl.getClassLiteralForArray_0(this, dimensions - 1);
  }
   else {
    clazz.componentType = this;
  }
  return clazz;
}
;
_.desiredAssertionStatus = function desiredAssertionStatus(){
  return false;
}
;
_.ensureNamesAreInitialized = function ensureNamesAreInitialized(){
  if (jsNotEquals(this.typeName, null)) {
    return;
  }
  jl.initializeNames(this);
}
;
_.getCanonicalName = function getCanonicalName(){
  this.ensureNamesAreInitialized();
  return this.canonicalName;
}
;
_.getName = function getName_2(){
  this.ensureNamesAreInitialized();
  return this.typeName;
}
;
_.getSimpleName = function getSimpleName(){
  this.ensureNamesAreInitialized();
  return this.simpleName;
}
;
_.isArray_0 = function isArray_0(){
  return (this.modifiers & 4) != 0;
}
;
_.isInterface = function isInterface(){
  return (this.modifiers & 2) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_17(){
  return (this.isInterface()?'interface ':this.isPrimitive()?'':'class ') + ('' + this.getName());
}
;
_.modifiers = 0;
_.sequentialId = 0;
var ARRAY = 4;
var ENUM = 8;
var INTERFACE = 2;
var PRIMITIVE = 1;
var nextSequentialId = 1;
jl.$clinit_ClassCastException = function $clinit_ClassCastException(){
  jl.$clinit_ClassCastException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ClassCastException = function ClassCastException(){
  jl.$clinit_ClassCastException();
  jl.RuntimeException.call(this);
  this.$init_112();
}
;
jl.ClassCastException_0 = function ClassCastException_0(message){
  jl.$clinit_ClassCastException();
  jl.RuntimeException_1.call(this, message);
  this.$init_112();
}
;
defineClass(93, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.ClassCastException, jl.ClassCastException_0);
_.$init_112 = function $init_112(){
}
;
jl.$clinit_Number = function $clinit_Number(){
  jl.$clinit_Number = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$init__V__devirtual$_1 = function $init__V__devirtual$_1(this$static){
  return instanceOfDouble(this$static)?jl.$$init_1(this$static):this$static.$init_107();
}
;
jl.$isInstance_0 = function $isInstance_0(instance){
  jl.$clinit_Number();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('number', typeof(instance)) || instanceOfNative(instance, $wnd.java.lang.Number$impl);
}
;
jl.Number_0 = function Number_0(){
  jl.$clinit_Number();
  Object_0.call(this);
  jl.$init__V__devirtual$_1(this);
}
;
jl.__decodeAndValidateInt = function __decodeAndValidateInt(s, lowerBound, upperBound){
  var decode;
  decode = jl.__decodeNumberString(s);
  return jl.__parseAndValidateInt(decode.payload, decode.radix, lowerBound, upperBound);
}
;
jl.__decodeNumberString = function __decodeNumberString(s){
  var negative, radix;
  if (jl.startsWith_Ljava_lang_String__Z__devirtual$(s, '-')) {
    negative = true;
    s = jl.substring_I_Ljava_lang_String___devirtual$(s, 1);
  }
   else {
    negative = false;
    if (jl.startsWith_Ljava_lang_String__Z__devirtual$(s, '+')) {
      s = jl.substring_I_Ljava_lang_String___devirtual$(s, 1);
    }
  }
  if (jl.startsWith_Ljava_lang_String__Z__devirtual$(s, '0x') || jl.startsWith_Ljava_lang_String__Z__devirtual$(s, '0X')) {
    s = jl.substring_I_Ljava_lang_String___devirtual$(s, 2);
    radix = 16;
  }
   else if (jl.startsWith_Ljava_lang_String__Z__devirtual$(s, '#')) {
    s = jl.substring_I_Ljava_lang_String___devirtual$(s, 1);
    radix = 16;
  }
   else if (jl.startsWith_Ljava_lang_String__Z__devirtual$(s, '0')) {
    radix = 8;
  }
   else {
    radix = 10;
  }
  if (negative) {
    s = '-' + s;
  }
  return new jl.Number$__Decode(radix, s);
}
;
jl.__isValidDouble = function __isValidDouble(str){
  if (jsEquals(jl.floatRegex, null)) {
    jl.floatRegex = new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$');
  }
  return jl.floatRegex.test(str);
}
;
jl.__parseAndValidateDouble = function __parseAndValidateDouble(s){
  jl.$clinit_Number();
  if (!jl.__isValidDouble(s)) {
    throw toJs(jl.forInputString(s));
  }
  return parseFloat(s);
}
;
jl.__parseAndValidateInt = function __parseAndValidateInt(s, radix, lowerBound, upperBound){
  jl.$clinit_Number();
  var i, isTooLow, length_0, startIndex, toReturn;
  if (jsEquals(s, null)) {
    throw toJs(jl.forNullInputString());
  }
  if (radix < 2 || radix > 36) {
    throw toJs(jl.forRadix(radix));
  }
  length_0 = jl.length__I__devirtual$_0(s);
  startIndex = length_0 > 0 && (jl.charAt_I_C__devirtual$_0(s, 0) == 45 || jl.charAt_I_C__devirtual$_0(s, 0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(jl.charAt_I_C__devirtual$_0(s, i), radix) == -1) {
      throw toJs(jl.forInputString(s));
    }
  }
  toReturn = parseInt(s, radix);
  isTooLow = toReturn < lowerBound;
  if (isNaN(toReturn)) {
    throw toJs(jl.forInputString(s));
  }
   else if (isTooLow || toReturn > upperBound) {
    throw toJs(jl.forInputString(s));
  }
  return toReturn;
}
;
jl.__parseAndValidateLong = function __parseAndValidateLong(s, radix){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (jsEquals(s, null)) {
    throw toJs(jl.forNullInputString());
  }
  if (radix < 2 || radix > 36) {
    throw toJs(jl.forRadix(radix));
  }
  orig = s;
  length_0 = jl.length__I__devirtual$_0(s);
  negative = false;
  if (length_0 > 0) {
    c = jl.charAt_I_C__devirtual$_0(s, 0);
    if (c == 45 || c == 43) {
      s = jl.substring_I_Ljava_lang_String___devirtual$(s, 1);
      length_0--;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw toJs(jl.forInputString(orig));
  }
  while (jl.length__I__devirtual$_0(s) > 0 && jl.charAt_I_C__devirtual$_0(s, 0) == 48) {
    s = jl.substring_I_Ljava_lang_String___devirtual$(s, 1);
    length_0--;
  }
  if (length_0 > (jl.$clinit_Number$__ParseLong() , jl.maxLengthForRadix)[radix]) {
    throw toJs(jl.forInputString(orig));
  }
  for (i = 0; i < length_0; i++) {
    if (digit(jl.charAt_I_C__devirtual$_0(s, i), radix) == -1) {
      throw toJs(jl.forInputString(orig));
    }
  }
  toReturn = 0;
  maxDigits = (jl.$clinit_Number$__ParseLong() , jl.maxDigitsForRadix)[radix];
  radixPower = fromInt_0((jl.$clinit_Number$__ParseLong() , jl.maxDigitsRadixPower)[radix]);
  minValue = neg_0((jl.$clinit_Number$__ParseLong() , jl.maxValueForRadix)[radix]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt_0(-parseInt(jl.substring_II_Ljava_lang_String___devirtual$(s, 0, head), radix));
    s = jl.substring_I_Ljava_lang_String___devirtual$(s, head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = parseInt(jl.substring_II_Ljava_lang_String___devirtual$(s, 0, maxDigits), radix);
    s = jl.substring_I_Ljava_lang_String___devirtual$(s, maxDigits);
    length_0 -= maxDigits;
    if (!firstTime) {
      if (lt(toReturn, minValue)) {
        throw toJs(jl.forInputString(orig));
      }
      toReturn = mul_0(toReturn, radixPower);
    }
     else {
      firstTime = false;
    }
    toReturn = sub_1(toReturn, fromInt_0(head));
  }
  if (gt(toReturn, 0)) {
    throw toJs(jl.forInputString(orig));
  }
  if (!negative) {
    toReturn = neg_0(toReturn);
    if (lt(toReturn, 0)) {
      throw toJs(jl.forInputString(orig));
    }
  }
  return toReturn;
}
;
jl.byteValue__B__devirtual$ = function byteValue__B__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$byteValue(this$static):this$static.byteValue();
}
;
jl.doubleValue__D__devirtual$ = function doubleValue__D__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$doubleValue(this$static):this$static.doubleValue();
}
;
jl.floatValue__F__devirtual$ = function floatValue__F__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$floatValue(this$static):this$static.floatValue();
}
;
jl.getClass__Ljava_lang_Class___devirtual$_1 = function getClass__Ljava_lang_Class___devirtual$_1(this$static){
  return instanceOfDouble(this$static)?jl.$getClass_11(this$static):this$static.___clazz;
}
;
jl.intValue__I__devirtual$ = function intValue__I__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$intValue(this$static):this$static.intValue();
}
;
jl.longValue__J__devirtual$ = function longValue__J__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$longValue(this$static):this$static.longValue();
}
;
jl.shortValue__S__devirtual$ = function shortValue__S__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$shortValue(this$static):this$static.shortValue();
}
;
defineClass(30, 1, {3:1, 1:1});
_.$init_107 = function $init_107(){
}
;
_.byteValue = function byteValue(){
  return narrow_byte(jl.intValue__I__devirtual$(this));
}
;
_.shortValue = function shortValue(){
  return narrow_short(jl.intValue__I__devirtual$(this));
}
;
jl.$clinit_Double = function $clinit_Double(){
  jl.$clinit_Double = emptyMethod;
  jl.$clinit_Number();
  MIN_EXPONENT = -1022;
  NaN_0 = 0 / 0;
  NEGATIVE_INFINITY = -1 / 0;
  POSITIVE_INFINITY = 1 / 0;
  BYTES_1 = narrow_int(64 / 8);
  TYPE_2 = cggl.D_classLit;
}
;
jl.$$init_1 = function $$init_1(this$static){
}
;
jl.$byteValue = function $byteValue(this$static){
  return round_byte(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$compareTo_1 = function $compareTo_1(this$static, b){
  return compare_4(jl.doubleValue__D__devirtual$_0(this$static), jl.doubleValue__D__devirtual$_0(b));
}
;
jl.$compareTo_2 = function $compareTo_2(this$static, b){
  return jl.compareTo_Ljava_lang_Double__I__devirtual$(this$static, castToDouble(b));
}
;
jl.$create_1 = function $create_1(x_0){
  return ji2.uncheckedCast(x_0);
}
;
function $create_2(s){
  jl.$clinit_Double();
  return ji2.uncheckedCast(parseDouble(s));
}

jl.$doubleValue = function $doubleValue(this$static){
  return ji2.unsafeCastToDouble(ji2.checkNotNull_0(this$static));
}
;
jl.$equals_2 = function $equals_2(this$static, o){
  return maskUndefined(ji2.checkNotNull_0(this$static)) === maskUndefined(o);
}
;
jl.$floatValue = function $floatValue(this$static){
  return jl.doubleValue__D__devirtual$_0(this$static);
}
;
jl.$getClass_11 = function $getClass_11(this$static){
  return cggl.Ljava_lang_Double_2_classLit;
}
;
jl.$hashCode_2 = function $hashCode_2(this$static){
  return jl.hashCode_8(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$init__V__devirtual$_2 = function $init__V__devirtual$_2(this$static){
  return jl.$$init_1(this$static);
}
;
jl.$intValue = function $intValue(this$static){
  return round_int(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$isInfinite = function $isInfinite(this$static){
  return jl.isInfinite(jl.doubleValue__D__devirtual$_0(this$static));
}
;
function $isInstance_3(instance){
  jl.$clinit_Double();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('number', typeof(instance));
}

jl.$isNaN = function $isNaN(this$static){
  return isNaN(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$longValue = function $longValue(this$static){
  return fromDouble_0(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$shortValue = function $shortValue(this$static){
  return round_short(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.Double = function Double(value_0){
  jl.Number_0.call(this);
  jl.$init__V__devirtual$_2(this);
  jl.$create_1(value_0);
}
;
function Double_0(s){
  jl.Number_0.call(this);
  jl.$init__V__devirtual$_2(this);
  $create_2(s);
}

jl.byteValue__B__devirtual$_0 = function byteValue__B__devirtual$_0(this$static){
  return jl.$byteValue(this$static);
}
;
function compare_4(x_0, y_0){
  jl.$clinit_Double();
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  if (isNaN(x_0)) {
    if (isNaN(y_0)) {
      return 0;
    }
     else {
      return 1;
    }
  }
   else {
    return -1;
  }
}

jl.compareTo_Ljava_lang_Double__I__devirtual$ = function compareTo_Ljava_lang_Double__I__devirtual$(this$static, b){
  return jl.$compareTo_1(this$static, b);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$_1 = function compareTo_Ljava_lang_Object__I__devirtual$_1(this$static, b){
  return jl.$compareTo_2(this$static, b);
}
;
function doubleToLongBits(value_0){
  jl.$clinit_Double();
  var bit, exp_0, i, ihi, ilo, negative;
  if (isNaN(value_0)) {
    return {l:0, m:0, h:524160};
  }
  negative = false;
  if (value_0 == 0) {
    if (1 / value_0 == -Infinity) {
      return {l:0, m:0, h:524288};
    }
     else {
      return 0;
    }
  }
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  if (jl.isInfinite(value_0)) {
    if (negative) {
      return {l:0, m:0, h:1048320};
    }
     else {
      return {l:0, m:0, h:524032};
    }
  }
  exp_0 = 0;
  if (value_0 < 1) {
    bit = 512;
    for (i = 0; i < 10; i++ , bit >>= 1) {
      if (value_0 < (jl.$clinit_Double$PowersTable() , jl.invPowers)[i] && exp_0 - bit >= -1023) {
        value_0 *= (jl.$clinit_Double$PowersTable() , jl.powers)[i];
        exp_0 -= bit;
      }
    }
    if (value_0 < 1 && exp_0 - 1 >= -1023) {
      value_0 *= 2;
      exp_0--;
    }
  }
   else if (value_0 >= 2) {
    bit = 512;
    for (i = 0; i < 10; i++ , bit >>= 1) {
      if (value_0 >= (jl.$clinit_Double$PowersTable() , jl.powers)[i]) {
        value_0 *= (jl.$clinit_Double$PowersTable() , jl.invPowers)[i];
        exp_0 += bit;
      }
    }
  }
  if (exp_0 > -1023) {
    value_0 -= 1;
  }
   else {
    value_0 *= 0.5;
  }
  ihi = fromDouble_0(value_0 * 1048576);
  value_0 -= toDouble_0(ihi) * 9.5367431640625E-7;
  ilo = fromDouble_0(value_0 * 4503599627370496);
  ihi = or_0(ihi, fromInt_0(exp_0 + 1023 << 20));
  if (negative) {
    ihi = or_0(ihi, 2147483648);
  }
  return or_0(shl_0(ihi, 32), ilo);
}

jl.doubleValue__D__devirtual$_0 = function doubleValue__D__devirtual$_0(this$static){
  return jl.$doubleValue(this$static);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_1 = function equals_Ljava_lang_Object__Z__devirtual$_1(this$static, o){
  return jl.$equals_2(this$static, o);
}
;
jl.floatValue__F__devirtual$_0 = function floatValue__F__devirtual$_0(this$static){
  return jl.$floatValue(this$static);
}
;
jl.getClass__Ljava_lang_Class___devirtual$_2 = function getClass__Ljava_lang_Class___devirtual$_2(this$static){
  return jl.$getClass_11(this$static);
}
;
jl.hashCode_8 = function hashCode_8(d){
  return round_int(d);
}
;
jl.hashCode__I__devirtual$_1 = function hashCode__I__devirtual$_1(this$static){
  return jl.$hashCode_2(this$static);
}
;
jl.intValue__I__devirtual$_0 = function intValue__I__devirtual$_0(this$static){
  jl.$clinit_Double();
  return jl.$intValue(this$static);
}
;
jl.isInfinite = function isInfinite(x_0){
  jl.$clinit_Double();
  return !isNaN(x_0) && !isFinite(x_0);
}
;
jl.isInfinite__Z__devirtual$ = function isInfinite__Z__devirtual$(this$static){
  return jl.$isInfinite(this$static);
}
;
jl.isNaN__Z__devirtual$ = function isNaN__Z__devirtual$(this$static){
  return jl.$isNaN(this$static);
}
;
function longBitsToDouble(bits){
  jl.$clinit_Double();
  var bit, d, d0, exp_0, i, ihi, ilo, negative;
  ihi = shr_0(bits, 32);
  ilo = and_0(bits, 4294967295);
  if (lt(ihi, 0)) {
    ihi = add_2(ihi, 4294967296);
  }
  if (lt(ilo, 0)) {
    ilo = add_2(ilo, 4294967296);
  }
  negative = neq(and_0(ihi, -2147483648), 0);
  exp_0 = toInt_0(and_0(shr_0(ihi, 20), 2047));
  ihi = and_0(ihi, 1048575);
  if (exp_0 == 0) {
    d0 = toDouble_0(ihi) * 9.5367431640625E-7 + toDouble_0(ilo) * 2.220446049250313E-16;
    d0 *= 2.2250738585072014E-308;
    return negative?d0 == 0?-0:-d0:d0;
  }
   else if (exp_0 == 2047) {
    if (eq(ihi, 0) && eq(ilo, 0)) {
      return negative?-Infinity:Infinity;
    }
     else {
      return NaN;
    }
  }
  exp_0 -= 1023;
  d = 1 + toDouble_0(ihi) * 9.5367431640625E-7 + toDouble_0(ilo) * 2.220446049250313E-16;
  if (exp_0 > 0) {
    bit = 512;
    for (i = 0; i < 10; i++ , bit >>= 1) {
      if (exp_0 >= bit) {
        d *= (jl.$clinit_Double$PowersTable() , jl.powers)[i];
        exp_0 -= bit;
      }
    }
  }
   else if (exp_0 < 0) {
    while (exp_0 < 0) {
      bit = 512;
      for (i = 0; i < 10; i++ , bit >>= 1) {
        if (exp_0 <= -bit) {
          d *= (jl.$clinit_Double$PowersTable() , jl.invPowers)[i];
          exp_0 += bit;
        }
      }
    }
  }
  return negative?-d:d;
}

jl.longValue__J__devirtual$_0 = function longValue__J__devirtual$_0(this$static){
  return jl.$longValue(this$static);
}
;
function max_0(a, b){
  jl.$clinit_Double();
  return $wnd.Math.max(a, b);
}

function min_0(a, b){
  jl.$clinit_Double();
  return $wnd.Math.min(a, b);
}

function parseDouble(s){
  jl.$clinit_Double();
  return jl.__parseAndValidateDouble(s);
}

jl.shortValue__S__devirtual$_0 = function shortValue__S__devirtual$_0(this$static){
  return jl.$shortValue(this$static);
}
;
function sum(a, b){
  jl.$clinit_Double();
  return a + b;
}

jl.toString_18 = function toString_18(b){
  return jl.valueOf_20(b);
}
;
jl.valueOf_11 = function valueOf_11(d){
  jl.$clinit_Double();
  return jl.$create_1(d);
}
;
function valueOf_12(s){
  jl.$clinit_Double();
  return $create_2(s);
}

doubleCastMap = {3:1, 13:1, 145:1, 1:1};
var BYTES_1 = 0;
var MAX_EXPONENT = 1023;
var MAX_VALUE_2 = 1.7976931348623157E308;
var MIN_EXPONENT = 0;
var MIN_NORMAL = 2.2250738585072014E-308;
var MIN_VALUE_2 = 4.9E-324;
var NEGATIVE_INFINITY = 0;
var NaN_0 = 0;
var POSITIVE_INFINITY = 0;
var POWER_1 = 2;
var POWER_128 = 3.4028236692093846E38;
var POWER_16 = 65536;
var POWER_2 = 4;
var POWER_20 = 1048576;
var POWER_256 = 1.157920892373162E77;
var POWER_31 = 2147483648;
var POWER_32 = 4294967296;
var POWER_4 = 16;
var POWER_512 = 1.3407807929942597E154;
var POWER_52 = 4503599627370496;
var POWER_64 = 1.8446744073709552E19;
var POWER_8 = 256;
var POWER_MINUS_1 = 0.5;
var POWER_MINUS_1022 = 2.2250738585072014E-308;
var POWER_MINUS_128 = 2.9387358770557188E-39;
var POWER_MINUS_16 = 1.52587890625E-5;
var POWER_MINUS_2 = 0.25;
var POWER_MINUS_20 = 9.5367431640625E-7;
var POWER_MINUS_256 = 8.636168555094445E-78;
var POWER_MINUS_32 = 2.3283064365386963E-10;
var POWER_MINUS_4 = 0.0625;
var POWER_MINUS_512 = 7.458340731200207E-155;
var POWER_MINUS_52 = 2.220446049250313E-16;
var POWER_MINUS_64 = 5.421010862427522E-20;
var POWER_MINUS_8 = 0.00390625;
var SIZE_1 = 64;
var TYPE_2;
jl.$clinit_IllegalStateException = function $clinit_IllegalStateException(){
  jl.$clinit_IllegalStateException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IllegalStateException = function IllegalStateException(){
  jl.$clinit_IllegalStateException();
  jl.RuntimeException.call(this);
  this.$init_115();
}
;
jl.IllegalStateException_0 = function IllegalStateException_0(s){
  jl.$clinit_IllegalStateException();
  jl.RuntimeException_1.call(this, s);
  this.$init_115();
}
;
defineClass(49, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.IllegalStateException, jl.IllegalStateException_0);
_.$init_115 = function $init_115(){
}
;
jl.$clinit_IndexOutOfBoundsException = function $clinit_IndexOutOfBoundsException(){
  jl.$clinit_IndexOutOfBoundsException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IndexOutOfBoundsException = function IndexOutOfBoundsException(message){
  jl.$clinit_IndexOutOfBoundsException();
  jl.RuntimeException_1.call(this, message);
  this.$init_116();
}
;
defineClass(50, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.IndexOutOfBoundsException);
_.$init_116 = function $init_116(){
}
;
jl.$clinit_Integer = function $clinit_Integer(){
  jl.$clinit_Integer = emptyMethod;
  jl.$clinit_Number();
  BYTES_3 = narrow_int(32 / 8);
  TYPE_4 = cggl.I_classLit;
}
;
jl.Integer = function Integer(value_0){
  jl.Number_0.call(this);
  this.$init_117();
  this.value_0 = value_0;
}
;
function compare_6(x_0, y_0){
  jl.$clinit_Integer();
  if (x_0 < y_0) {
    return -1;
  }
   else if (x_0 > y_0) {
    return 1;
  }
   else {
    return 0;
  }
}

jl.hashCode_12 = function hashCode_12(i){
  return i;
}
;
function numberOfLeadingZeros_0(i){
  jl.$clinit_Integer();
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  jl.$clinit_Integer();
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      rtn++;
    }
    return rtn;
  }
}

jl.parseInt_1 = function parseInt_1(s){
  jl.$clinit_Integer();
  return parseInt_2(s, 10);
}
;
function parseInt_2(s, radix){
  jl.$clinit_Integer();
  return jl.__parseAndValidateInt(s, radix, -2147483648, 2147483647);
}

function toHexString(value_0){
  jl.$clinit_Integer();
  return jl.toUnsignedString(value_0, 16);
}

jl.toRadixString = function toRadixString(value_0, radix){
  var number;
  number = ji2.uncheckedCast(value_0);
  return number.toString(radix);
}
;
jl.toString_22 = function toString_22(value_0){
  return jl.valueOf_22(value_0);
}
;
jl.toUnsigned = function toUnsigned(value_0){
  return value_0 >>> 0;
}
;
jl.toUnsignedString = function toUnsignedString(value_0, radix){
  return jl.toRadixString(jl.toUnsigned(value_0), radix);
}
;
jl.valueOf_14 = function valueOf_14(i){
  jl.$clinit_Integer();
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (jl.$clinit_Integer$BoxedValues() , jl.boxedValues_1)[rebase];
    if (isNull(result)) {
      result = (jl.$clinit_Integer$BoxedValues() , jl.boxedValues_1)[rebase] = new jl.Integer(i);
    }
    return result;
  }
  return new jl.Integer(i);
}
;
jl.valueOf_15 = function valueOf_15(s){
  jl.$clinit_Integer();
  return valueOf_16(s, 10);
}
;
function valueOf_16(s, radix){
  jl.$clinit_Integer();
  return jl.valueOf_14(parseInt_2(s, radix));
}

defineClass(32, 30, {3:1, 13:1, 32:1, 1:1}, jl.Integer);
_.$init_117 = function $init_117(){
}
;
_.compareTo_0 = function compareTo_8(b){
  return this.compareTo_4(castTo(b, 32));
}
;
_.byteValue = function byteValue_2(){
  return narrow_byte(this.value_0);
}
;
_.compareTo_4 = function compareTo_7(b){
  return compare_6(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_1(){
  return this.value_0;
}
;
_.equals_0 = function equals_6(o){
  return instanceOf(o, 32) && castTo(o, 32).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_1(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_11(){
  return jl.hashCode_12(this.value_0);
}
;
_.intValue = function intValue_1(){
  return this.value_0;
}
;
_.longValue = function longValue_2(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_2(){
  return narrow_short(this.value_0);
}
;
_.toString_0 = function toString_21(){
  return jl.toString_22(this.value_0);
}
;
_.value_0 = 0;
var BYTES_3 = 0;
var MAX_VALUE_4 = 2147483647;
var MIN_VALUE_4 = -2147483648;
var SIZE_3 = 32;
var TYPE_4;
jl.$clinit_NullPointerException = function $clinit_NullPointerException(){
  jl.$clinit_NullPointerException = emptyMethod;
  jl.$clinit_JsException();
}
;
jl.NullPointerException = function NullPointerException(){
  jl.$clinit_NullPointerException();
  jl.JsException.call(this);
  this.$init_119();
}
;
jl.NullPointerException_0 = function NullPointerException_0(typeError){
  jl.$clinit_NullPointerException();
  jl.JsException_0.call(this, typeError);
  this.$init_119();
}
;
jl.NullPointerException_1 = function NullPointerException_1(message){
  jl.$clinit_NullPointerException();
  jl.JsException_1.call(this, message);
  this.$init_119();
}
;
defineClass(67, 45, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.NullPointerException, jl.NullPointerException_0, jl.NullPointerException_1);
_.$init_119 = function $init_119(){
}
;
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
jl.$clinit_NullPointerException$NativeTypeError = function $clinit_NullPointerException$NativeTypeError(){
  jl.$clinit_NullPointerException$NativeTypeError = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_Number$JavaLangNumber = function $clinit_Number$JavaLangNumber(){
  jl.$clinit_Number$JavaLangNumber = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_String = function $clinit_String(){
  jl.$clinit_String = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_CharSequence();
  CASE_INSENSITIVE_ORDER = new jl.String$1;
}
;
jl.$$init_2 = function $$init_2(this$static){
}
;
jl.$asNativeString = function $asNativeString(this$static){
  return ji2.uncheckedCast(this$static);
}
;
jl.$charAt = function $charAt(this$static, index_0){
  ji2.checkStringElementIndex(index_0, jl.length__I__devirtual$_0(this$static));
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).charCodeAt(index_0);
}
;
jl.$chars_0 = function $chars_0(this$static){
  return jl.$chars(this$static);
}
;
jl.$codePointAt = function $codePointAt(this$static, index_0){
  return codePointAt(this$static, index_0, jl.length__I__devirtual$_0(this$static));
}
;
jl.$codePointBefore = function $codePointBefore(this$static, index_0){
  return codePointBefore(this$static, index_0, 0);
}
;
jl.$codePointCount = function $codePointCount(this$static, beginIndex, endIndex){
  return codePointCount(this$static, beginIndex, endIndex);
}
;
jl.$compareTo_3 = function $compareTo_3(this$static, other){
  return jl.compareTo_Ljava_lang_String__I__devirtual$(this$static, castToString(other));
}
;
jl.$compareTo_4 = function $compareTo_4(this$static, other){
  var a, b;
  a = ji2.unsafeCastToDouble(ji2.checkNotNull_0(this$static));
  b = ji2.unsafeCastToDouble(ji2.checkNotNull_0(other));
  return a == b?0:a < b?-1:1;
}
;
jl.$compareToIgnoreCase = function $compareToIgnoreCase(this$static, other){
  return jl.compareTo_Ljava_lang_String__I__devirtual$(jl.toLowerCase__Ljava_lang_String___devirtual$(this$static), jl.toLowerCase__Ljava_lang_String___devirtual$(other));
}
;
jl.$concat = function $concat(this$static, str){
  return castToString(ji2.checkNotNull_0(this$static)) + ('' + castToString(ji2.checkNotNull_0(str)));
}
;
jl.$contains = function $contains(this$static, s){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this$static, toString_11(s)) != -1;
}
;
jl.$contentEquals = function $contentEquals(this$static, cs){
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(this$static, toString_11(cs));
}
;
jl.$contentEquals_0 = function $contentEquals_0(this$static, sb){
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(this$static, sb.toString_0());
}
;
jl.$create_3 = function $create_3(){
  return '';
}
;
jl.$create_4 = function $create_4(other){
  return castToString(ji2.checkNotNull_0(other));
}
;
jl.$create_5 = function $create_5(sb){
  return sb.toString_0();
}
;
function $create_6(sb){
  jl.$clinit_String();
  return sb.toString_0();
}

jl.$create_7 = function $create_7(bytes){
  return jl.$create_8(bytes, 0, bytes.length);
}
;
jl.$create_8 = function $create_8(bytes, ofs, len){
  return jl.$create_10(bytes, ofs, len, (ji2.$clinit_EmulatedCharset() , ji2.UTF_8));
}
;
jl.$create_9 = function $create_9(bytes, ofs, len, charsetName){
  return jl.$create_10(bytes, ofs, len, jl.getCharset(charsetName));
}
;
jl.$create_10 = function $create_10(bytes, ofs, len, charset){
  return jl.valueOf_26(castTo(charset, 28).decodeString(bytes, ofs, len));
}
;
jl.$create_11 = function $create_11(bytes, charsetName){
  return jl.$create_9(bytes, 0, bytes.length, charsetName);
}
;
jl.$create_12 = function $create_12(bytes, charset){
  return jl.$create_10(bytes, 0, bytes.length, charset);
}
;
jl.$create_13 = function $create_13(value_0){
  return jl.valueOf_26(value_0);
}
;
jl.$create_14 = function $create_14(value_0, offset, count){
  return jl.valueOf_27(value_0, offset, count);
}
;
jl.$create_15 = function $create_15(codePoints, offset, count){
  var charIdx, chars;
  chars = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 19, count * 2, 15, 1);
  charIdx = 0;
  while (count-- > 0) {
    charIdx += toChars(codePoints[offset++], chars, charIdx);
  }
  return jl.valueOf_27(chars, 0, charIdx);
}
;
jl.$endsWith = function $endsWith(this$static, suffix){
  var suffixlength;
  suffixlength = jl.length__I__devirtual$_0(suffix);
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(jl.length__I__devirtual$_0(this$static) - suffixlength, suffixlength), suffix);
}
;
jl.$equals_3 = function $equals_3(this$static, other){
  return maskUndefined(ji2.checkNotNull_0(this$static)) === maskUndefined(other);
}
;
jl.$equalsIgnoreCase = function $equalsIgnoreCase(this$static, other){
  ji2.checkNotNull_0(this$static);
  if (jsEquals(other, null)) {
    return false;
  }
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(this$static, other)) {
    return true;
  }
  return jl.length__I__devirtual$_0(this$static) == jl.length__I__devirtual$_0(other) && jl.equals_Ljava_lang_Object__Z__devirtual$_2(jl.toLowerCase__Ljava_lang_String___devirtual$(this$static), jl.toLowerCase__Ljava_lang_String___devirtual$(other));
}
;
jl.$getBytes = function $getBytes(this$static){
  return jl.getBytes_Ljava_nio_charset_Charset___B__devirtual$(this$static, (ji2.$clinit_EmulatedCharset() , ji2.UTF_8));
}
;
jl.$getBytes_0 = function $getBytes_0(this$static, charsetName){
  return jl.getBytes_Ljava_nio_charset_Charset___B__devirtual$(this$static, jl.getCharset(charsetName));
}
;
jl.$getBytes_1 = function $getBytes_1(this$static, charset){
  return castTo(charset, 28).getBytes(this$static);
}
;
jl.$getChars = function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin){
  ji2.checkCriticalStringBounds(srcBegin, srcEnd, jl.length__I__devirtual$_0(this$static));
  ji2.checkCriticalStringBounds(dstBegin, dstBegin + (srcEnd - srcBegin), dst.length);
  jl.getChars0_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin);
}
;
jl.$getChars0 = function $getChars0(this$static, srcBegin, srcEnd, dst, dstBegin){
  while (srcBegin < srcEnd) {
    dst[dstBegin++] = jl.charAt_I_C__devirtual$_0(this$static, srcBegin++);
  }
}
;
jl.$getClass_12 = function $getClass_12(this$static){
  return cggl.Ljava_lang_String_2_classLit;
}
;
jl.$hashCode_3 = function $hashCode_3(this$static){
  return ji2.getStringHashCode(this$static);
}
;
jl.$indexOf = function $indexOf(this$static, codePoint){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this$static, fromCodePoint(codePoint));
}
;
jl.$indexOf_0 = function $indexOf_0(this$static, codePoint, startIndex){
  return jl.indexOf_Ljava_lang_String_I_I__devirtual$(this$static, fromCodePoint(codePoint), startIndex);
}
;
jl.$indexOf_1 = function $indexOf_1(this$static, str){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).indexOf(str);
}
;
jl.$indexOf_2 = function $indexOf_2(this$static, str, startIndex){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).indexOf(str, startIndex);
}
;
jl.$init__V__devirtual$_3 = function $init__V__devirtual$_3(this$static){
  return jl.$$init_2(this$static);
}
;
jl.$intern = function $intern(this$static){
  return castToString(ji2.checkNotNull_0(this$static));
}
;
jl.$isEmpty = function $isEmpty(this$static){
  return jl.length__I__devirtual$_0(this$static) == 0;
}
;
function $isInstance_4(instance){
  jl.$clinit_String();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('string', typeof(instance));
}

jl.$lastIndexOf = function $lastIndexOf(this$static, codePoint){
  return jl.lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, fromCodePoint(codePoint));
}
;
jl.$lastIndexOf_0 = function $lastIndexOf_0(this$static, codePoint, startIndex){
  return jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, fromCodePoint(codePoint), startIndex);
}
;
jl.$lastIndexOf_1 = function $lastIndexOf_1(this$static, str){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).lastIndexOf(str);
}
;
jl.$lastIndexOf_2 = function $lastIndexOf_2(this$static, str, start_0){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).lastIndexOf(str, start_0);
}
;
jl.$length_1 = function $length_1(this$static){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).length;
}
;
jl.$matches = function $matches(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}
;
jl.$nativeReplaceAll = function $nativeReplaceAll(this$static, regex, replace){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).replace(new RegExp(regex, 'g'), replace);
}
;
jl.$offsetByCodePoints = function $offsetByCodePoints(this$static, index_0, codePointOffset){
  return offsetByCodePoints(this$static, index_0, codePointOffset);
}
;
jl.$regionMatches = function $regionMatches(this$static, toffset, other, ooffset, len){
  return jl.regionMatches_ZILjava_lang_String_II_Z__devirtual$(this$static, false, toffset, other, ooffset, len);
}
;
jl.$regionMatches_0 = function $regionMatches_0(this$static, ignoreCase, toffset, other, ooffset, len){
  var left, right;
  ji2.checkNotNull_0(other);
  if (toffset < 0 || ooffset < 0 || len <= 0) {
    return false;
  }
  if (toffset + len > jl.length__I__devirtual$_0(this$static) || ooffset + len > jl.length__I__devirtual$_0(other)) {
    return false;
  }
  left = jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(toffset, len);
  right = jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(other).substr(ooffset, len);
  return ignoreCase?jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(left, right):jl.equals_Ljava_lang_Object__Z__devirtual$_2(left, right);
}
;
jl.$replace = function $replace(this$static, from, to){
  var hex, regex, replace;
  hex = toHexString(from);
  regex = '\\u' + jl.substring_I_Ljava_lang_String___devirtual$('0000', jl.length__I__devirtual$_0(hex)) + hex;
  replace = String.fromCharCode(to);
  return jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace);
}
;
jl.$replace_0 = function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(toString_11(from), '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(toString_11(to), '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replacement);
}
;
jl.$replaceAll = function $replaceAll(this$static, regex, replace){
  replace = jl.translateReplaceString(replace);
  return jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace);
}
;
jl.$replaceFirst = function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = jl.translateReplaceString(replace);
  jsRegEx = new RegExp(regex);
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).replace(jsRegEx, replace);
}
;
jl.$split = function $split(this$static, regex){
  return jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(this$static, regex, 0);
}
;
jl.$split_0 = function $split_0(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(cggl.Ljava_lang_String_2_classLit, {3:1, 1:1, 4:1}, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (jsEquals(matchObj, null) || jsEquals(trail, '') || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = jl.substring_II_Ljava_lang_String___devirtual$(trail, 0, matchIndex);
      trail = jl.substring_II_Ljava_lang_String___devirtual$(trail, matchIndex + jl.length__I__devirtual$_0(ji2.$asArray(matchObj)[0]), jl.length__I__devirtual$_0(trail));
      compiled.lastIndex = 0;
      if (jsEquals(lastTrail, trail)) {
        out[count] = jl.substring_II_Ljava_lang_String___devirtual$(trail, 0, 1);
        trail = jl.substring_I_Ljava_lang_String___devirtual$(trail, 1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && jl.length__I__devirtual$_0(this$static) > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && jsEquals(out[lastNonEmpty - 1], '')) {
      --lastNonEmpty;
    }
    if (lastNonEmpty < out.length) {
      ji2.setLength(out, lastNonEmpty);
    }
  }
  return out;
}
;
jl.$startsWith = function $startsWith(this$static, prefix){
  return jl.startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, 0);
}
;
jl.$startsWith_0 = function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && jl.equals_Ljava_lang_Object__Z__devirtual$_2(jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(toffset, jl.length__I__devirtual$_0(prefix)), prefix);
}
;
jl.$subSequence = function $subSequence(this$static, beginIndex, endIndex){
  return jl.substring_II_Ljava_lang_String___devirtual$(this$static, beginIndex, endIndex);
}
;
jl.$substring = function $substring(this$static, beginIndex){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(beginIndex);
}
;
jl.$substring_0 = function $substring_0(this$static, beginIndex, endIndex){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(beginIndex, endIndex - beginIndex);
}
;
jl.$toCharArray = function $toCharArray(this$static){
  var charArr, n;
  n = jl.length__I__devirtual$_0(this$static);
  charArr = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 19, n, 15, 1);
  jl.getChars0_II_CI_V__devirtual$(this$static, 0, n, charArr, 0);
  return charArr;
}
;
jl.$toLowerCase = function $toLowerCase(this$static){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLowerCase();
}
;
jl.$toLowerCase_0 = function $toLowerCase_0(this$static, locale){
  return jsEquals(locale, ju.getDefault())?jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLocaleLowerCase():jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLowerCase();
}
;
jl.$toUpperCase = function $toUpperCase(this$static){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toUpperCase();
}
;
jl.$toUpperCase_0 = function $toUpperCase_0(this$static, locale){
  return jsEquals(locale, ju.getDefault())?jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLocaleUpperCase():jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toUpperCase();
}
;
jl.$trim = function $trim(this$static){
  var end, length_0, start_0;
  length_0 = jl.length__I__devirtual$_0(this$static);
  start_0 = 0;
  while (start_0 < length_0 && jl.charAt_I_C__devirtual$_0(this$static, start_0) <= 32) {
    start_0++;
  }
  end = length_0;
  while (end > start_0 && jl.charAt_I_C__devirtual$_0(this$static, end - 1) <= 32) {
    end--;
  }
  return start_0 > 0 || end < length_0?jl.substring_II_Ljava_lang_String___devirtual$(this$static, start_0, end):this$static;
}
;
jl.String_0 = function String_0(){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_3();
}
;
jl.String_1 = function String_1(other){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_4(other);
}
;
jl.String_2 = function String_2(sb){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_5(sb);
}
;
function String_3(sb){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  $create_6(sb);
}

jl.String_4 = function String_4(bytes){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_7(bytes);
}
;
jl.String_5 = function String_5(bytes, ofs, len){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_8(bytes, ofs, len);
}
;
jl.String_6 = function String_6(bytes, ofs, len, charsetName){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_9(bytes, ofs, len, charsetName);
}
;
jl.String_7 = function String_7(bytes, ofs, len, charset){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_10(bytes, ofs, len, charset);
}
;
jl.String_8 = function String_8(bytes, charsetName){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_11(bytes, charsetName);
}
;
jl.String_9 = function String_9(bytes, charset){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_12(bytes, charset);
}
;
jl.String_10 = function String_10(value_0){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_13(value_0);
}
;
jl.String_11 = function String_11(value_0, offset, count){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_14(value_0, offset, count);
}
;
jl.String_12 = function String_12(codePoints, offset, count){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_15(codePoints, offset, count);
}
;
jl.asNativeString__Ljava_lang_String$NativeString___devirtual$ = function asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static){
  return jl.$asNativeString(this$static);
}
;
jl.charAt_I_C__devirtual$ = function charAt_I_C__devirtual$(this$static, index_0){
  jl.$clinit_String();
  return instanceOfString(this$static)?jl.$charAt(this$static, index_0):this$static.charAt(index_0);
}
;
jl.charAt_I_C__devirtual$_0 = function charAt_I_C__devirtual$_0(this$static, index_0){
  jl.$clinit_String();
  return jl.$charAt(this$static, index_0);
}
;
jl.chars__Ljava_util_stream_IntStream___devirtual$ = function chars__Ljava_util_stream_IntStream___devirtual$(this$static){
  return instanceOfString(this$static)?jl.$chars_0(this$static):this$static.chars();
}
;
jl.chars__Ljava_util_stream_IntStream___devirtual$_0 = function chars__Ljava_util_stream_IntStream___devirtual$_0(this$static){
  return jl.$chars_0(this$static);
}
;
jl.codePointAt_I_I__devirtual$ = function codePointAt_I_I__devirtual$(this$static, index_0){
  jl.$clinit_String();
  return jl.$codePointAt(this$static, index_0);
}
;
jl.codePointBefore_I_I__devirtual$ = function codePointBefore_I_I__devirtual$(this$static, index_0){
  return jl.$codePointBefore(this$static, index_0);
}
;
jl.codePointCount_II_I__devirtual$ = function codePointCount_II_I__devirtual$(this$static, beginIndex, endIndex){
  return jl.$codePointCount(this$static, beginIndex, endIndex);
}
;
jl.compareToIgnoreCase_Ljava_lang_String__I__devirtual$ = function compareToIgnoreCase_Ljava_lang_String__I__devirtual$(this$static, other){
  jl.$clinit_String();
  return jl.$compareToIgnoreCase(this$static, other);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$_2 = function compareTo_Ljava_lang_Object__I__devirtual$_2(this$static, other){
  return jl.$compareTo_3(this$static, other);
}
;
jl.compareTo_Ljava_lang_String__I__devirtual$ = function compareTo_Ljava_lang_String__I__devirtual$(this$static, other){
  return jl.$compareTo_4(this$static, other);
}
;
jl.concat_Ljava_lang_String__Ljava_lang_String___devirtual$ = function concat_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, str){
  return jl.$concat(this$static, str);
}
;
jl.contains_Ljava_lang_CharSequence__Z__devirtual$ = function contains_Ljava_lang_CharSequence__Z__devirtual$(this$static, s){
  jl.$clinit_String();
  return jl.$contains(this$static, s);
}
;
jl.contentEquals_Ljava_lang_CharSequence__Z__devirtual$ = function contentEquals_Ljava_lang_CharSequence__Z__devirtual$(this$static, cs){
  return jl.$contentEquals(this$static, cs);
}
;
jl.contentEquals_Ljava_lang_StringBuffer__Z__devirtual$ = function contentEquals_Ljava_lang_StringBuffer__Z__devirtual$(this$static, sb){
  return jl.$contentEquals_0(this$static, sb);
}
;
jl.copyValueOf = function copyValueOf(v){
  return jl.valueOf_26(v);
}
;
function copyValueOf_0(v, offset, count){
  jl.$clinit_String();
  return jl.valueOf_27(v, offset, count);
}

jl.endsWith_Ljava_lang_String__Z__devirtual$ = function endsWith_Ljava_lang_String__Z__devirtual$(this$static, suffix){
  jl.$clinit_String();
  return jl.$endsWith(this$static, suffix);
}
;
jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$ = function equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(this$static, other){
  jl.$clinit_String();
  return jl.$equalsIgnoreCase(this$static, other);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_2 = function equals_Ljava_lang_Object__Z__devirtual$_2(this$static, other){
  jl.$clinit_String();
  return jl.$equals_3(this$static, other);
}
;
jl.fromCharCode = function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}
;
function fromCodePoint(codePoint){
  jl.$clinit_String();
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = getHighSurrogate(codePoint);
    loSurrogate = getLowSurrogate(codePoint);
    return jl.valueOf_19(hiSurrogate) + ('' + jl.valueOf_19(loSurrogate));
  }
   else {
    return jl.valueOf_19(narrow_char(codePoint));
  }
}

jl.getBytes_Ljava_lang_String___B__devirtual$ = function getBytes_Ljava_lang_String___B__devirtual$(this$static, charsetName){
  return jl.$getBytes_0(this$static, charsetName);
}
;
jl.getBytes_Ljava_nio_charset_Charset___B__devirtual$ = function getBytes_Ljava_nio_charset_Charset___B__devirtual$(this$static, charset){
  return jl.$getBytes_1(this$static, charset);
}
;
jl.getBytes___B__devirtual$ = function getBytes___B__devirtual$(this$static){
  return jl.$getBytes(this$static);
}
;
jl.getChars0_II_CI_V__devirtual$ = function getChars0_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin){
  return jl.$getChars0(this$static, srcBegin, srcEnd, dst, dstBegin);
}
;
jl.getChars_II_CI_V__devirtual$ = function getChars_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin){
  jl.$clinit_String();
  return jl.$getChars(this$static, srcBegin, srcEnd, dst, dstBegin);
}
;
jl.getCharset = function getCharset(charsetName){
  var e;
  try {
    return jnc.forName(charsetName);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 66)) {
      e = $e0;
      throw toJs(new ji.UnsupportedEncodingException(charsetName));
    }
     else 
      throw toJs($e0);
  }
}
;
jl.getClass__Ljava_lang_Class___devirtual$_3 = function getClass__Ljava_lang_Class___devirtual$_3(this$static){
  return jl.$getClass_12(this$static);
}
;
jl.hashCode__I__devirtual$_2 = function hashCode__I__devirtual$_2(this$static){
  jl.$clinit_String();
  return jl.$hashCode_3(this$static);
}
;
jl.indexOf_II_I__devirtual$ = function indexOf_II_I__devirtual$(this$static, codePoint, startIndex){
  return jl.$indexOf_0(this$static, codePoint, startIndex);
}
;
jl.indexOf_I_I__devirtual$ = function indexOf_I_I__devirtual$(this$static, codePoint){
  jl.$clinit_String();
  return jl.$indexOf(this$static, codePoint);
}
;
jl.indexOf_Ljava_lang_String_I_I__devirtual$ = function indexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, startIndex){
  jl.$clinit_String();
  return jl.$indexOf_2(this$static, str, startIndex);
}
;
jl.indexOf_Ljava_lang_String__I__devirtual$ = function indexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$indexOf_1(this$static, str);
}
;
jl.intern__Ljava_lang_String___devirtual$ = function intern__Ljava_lang_String___devirtual$(this$static){
  return jl.$intern(this$static);
}
;
jl.isEmpty__Z__devirtual$ = function isEmpty__Z__devirtual$(this$static){
  jl.$clinit_String();
  return jl.$isEmpty(this$static);
}
;
function join_1(delimiter, elements){
  jl.$clinit_String();
  var e, e$iterator, joiner;
  joiner = new ju.StringJoiner(delimiter);
  for (e$iterator = elements.iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_2(), 54);
    joiner.add_1(e);
  }
  return joiner.toString_0();
}

jl.join_2 = function join_2(delimiter, elements){
  var e, e$array, e$index, e$max, joiner;
  joiner = new ju.StringJoiner(delimiter);
  for (e$array = elements , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    joiner.add_1(e);
  }
  return joiner.toString_0();
}
;
jl.lastIndexOf_II_I__devirtual$ = function lastIndexOf_II_I__devirtual$(this$static, codePoint, startIndex){
  jl.$clinit_String();
  return jl.$lastIndexOf_0(this$static, codePoint, startIndex);
}
;
jl.lastIndexOf_I_I__devirtual$ = function lastIndexOf_I_I__devirtual$(this$static, codePoint){
  jl.$clinit_String();
  return jl.$lastIndexOf(this$static, codePoint);
}
;
jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$ = function lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, start_0){
  jl.$clinit_String();
  return jl.$lastIndexOf_2(this$static, str, start_0);
}
;
jl.lastIndexOf_Ljava_lang_String__I__devirtual$ = function lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$lastIndexOf_1(this$static, str);
}
;
jl.length__I__devirtual$ = function length__I__devirtual$(this$static){
  jl.$clinit_String();
  return instanceOfString(this$static)?jl.$length_1(this$static):this$static.length_0();
}
;
jl.length__I__devirtual$_0 = function length__I__devirtual$_0(this$static){
  jl.$clinit_String();
  return jl.$length_1(this$static);
}
;
jl.matches_Ljava_lang_String__Z__devirtual$ = function matches_Ljava_lang_String__Z__devirtual$(this$static, regex){
  jl.$clinit_String();
  return jl.$matches(this$static, regex);
}
;
jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$ = function nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  jl.$clinit_String();
  return jl.$nativeReplaceAll(this$static, regex, replace);
}
;
jl.offsetByCodePoints_II_I__devirtual$ = function offsetByCodePoints_II_I__devirtual$(this$static, index_0, codePointOffset){
  return jl.$offsetByCodePoints(this$static, index_0, codePointOffset);
}
;
jl.regionMatches_ILjava_lang_String_II_Z__devirtual$ = function regionMatches_ILjava_lang_String_II_Z__devirtual$(this$static, toffset, other, ooffset, len){
  return jl.$regionMatches(this$static, toffset, other, ooffset, len);
}
;
jl.regionMatches_ZILjava_lang_String_II_Z__devirtual$ = function regionMatches_ZILjava_lang_String_II_Z__devirtual$(this$static, ignoreCase, toffset, other, ooffset, len){
  return jl.$regionMatches_0(this$static, ignoreCase, toffset, other, ooffset, len);
}
;
jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$ = function replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  jl.$clinit_String();
  return jl.$replaceAll(this$static, regex, replace);
}
;
jl.replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$ = function replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  return jl.$replaceFirst(this$static, regex, replace);
}
;
jl.replace_CC_Ljava_lang_String___devirtual$ = function replace_CC_Ljava_lang_String___devirtual$(this$static, from, to){
  return jl.$replace(this$static, from, to);
}
;
jl.replace_Ljava_lang_CharSequence_Ljava_lang_CharSequence__Ljava_lang_String___devirtual$ = function replace_Ljava_lang_CharSequence_Ljava_lang_CharSequence__Ljava_lang_String___devirtual$(this$static, from, to){
  return jl.$replace_0(this$static, from, to);
}
;
jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$ = function split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(this$static, regex, maxMatch){
  return jl.$split_0(this$static, regex, maxMatch);
}
;
jl.split_Ljava_lang_String___Ljava_lang_String___devirtual$ = function split_Ljava_lang_String___Ljava_lang_String___devirtual$(this$static, regex){
  jl.$clinit_String();
  return jl.$split(this$static, regex);
}
;
jl.startsWith_Ljava_lang_String_I_Z__devirtual$ = function startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, toffset){
  return jl.$startsWith_0(this$static, prefix, toffset);
}
;
jl.startsWith_Ljava_lang_String__Z__devirtual$ = function startsWith_Ljava_lang_String__Z__devirtual$(this$static, prefix){
  jl.$clinit_String();
  return jl.$startsWith(this$static, prefix);
}
;
jl.subSequence_II_Ljava_lang_CharSequence___devirtual$ = function subSequence_II_Ljava_lang_CharSequence___devirtual$(this$static, start_0, end){
  return instanceOfString(this$static)?jl.$subSequence(this$static, start_0, end):this$static.subSequence(start_0, end);
}
;
jl.subSequence_II_Ljava_lang_CharSequence___devirtual$_0 = function subSequence_II_Ljava_lang_CharSequence___devirtual$_0(this$static, beginIndex, endIndex){
  return jl.$subSequence(this$static, beginIndex, endIndex);
}
;
jl.substring_II_Ljava_lang_String___devirtual$ = function substring_II_Ljava_lang_String___devirtual$(this$static, beginIndex, endIndex){
  jl.$clinit_String();
  return jl.$substring_0(this$static, beginIndex, endIndex);
}
;
jl.substring_I_Ljava_lang_String___devirtual$ = function substring_I_Ljava_lang_String___devirtual$(this$static, beginIndex){
  jl.$clinit_String();
  return jl.$substring(this$static, beginIndex);
}
;
jl.toCharArray___C__devirtual$ = function toCharArray___C__devirtual$(this$static){
  return jl.$toCharArray(this$static);
}
;
jl.toLowerCase_Ljava_util_Locale__Ljava_lang_String___devirtual$ = function toLowerCase_Ljava_util_Locale__Ljava_lang_String___devirtual$(this$static, locale){
  return jl.$toLowerCase_0(this$static, locale);
}
;
jl.toLowerCase__Ljava_lang_String___devirtual$ = function toLowerCase__Ljava_lang_String___devirtual$(this$static){
  return jl.$toLowerCase(this$static);
}
;
jl.toUpperCase_Ljava_util_Locale__Ljava_lang_String___devirtual$ = function toUpperCase_Ljava_util_Locale__Ljava_lang_String___devirtual$(this$static, locale){
  return jl.$toUpperCase_0(this$static, locale);
}
;
jl.toUpperCase__Ljava_lang_String___devirtual$ = function toUpperCase__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$toUpperCase(this$static);
}
;
jl.translateReplaceString = function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = jl.indexOf_Ljava_lang_String_I_I__devirtual$(replaceStr, '\\', pos))) {
    if (jl.charAt_I_C__devirtual$_0(replaceStr, pos + 1) == 36) {
      replaceStr = jl.substring_II_Ljava_lang_String___devirtual$(replaceStr, 0, pos) + '$' + jl.substring_I_Ljava_lang_String___devirtual$(replaceStr, ++pos);
    }
     else {
      replaceStr = jl.substring_II_Ljava_lang_String___devirtual$(replaceStr, 0, pos) + ('' + jl.substring_I_Ljava_lang_String___devirtual$(replaceStr, ++pos));
    }
  }
  return replaceStr;
}
;
jl.trim__Ljava_lang_String___devirtual$ = function trim__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$trim(this$static);
}
;
jl.valueOf_19 = function valueOf_19(x_0){
  jl.$clinit_String();
  return String.fromCharCode(x_0);
}
;
jl.valueOf_20 = function valueOf_20(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_21 = function valueOf_21(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_22 = function valueOf_22(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_23 = function valueOf_23(x_0){
  jl.$clinit_String();
  return '' + toString_10(x_0);
}
;
function valueOf_24(x_0){
  jl.$clinit_String();
  return jsEquals(x_0, null)?'null':toString_11(x_0);
}

jl.valueOf_25 = function valueOf_25(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_26 = function valueOf_26(x_0){
  return jl.valueOf_27(x_0, 0, x_0.length);
}
;
jl.valueOf_27 = function valueOf_27(x_0, offset, count){
  var batchEnd, batchSize, batchStart, end, s;
  end = offset + count;
  ji2.checkCriticalStringBounds(offset, end, x_0.length);
  batchSize = 10000;
  s = '';
  for (batchStart = offset; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + batchSize, end);
    s += '' + jl.fromCharCode(ji2.unsafeClone(x_0, batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}
;
stringCastMap = {3:1, 54:1, 13:1, 1:1, 2:1};
var CASE_INSENSITIVE_ORDER;
ju.$clinit_Comparator = function $clinit_Comparator(){
  ju.$clinit_Comparator = emptyMethod;
}
;
jl.$clinit_String$1 = function $clinit_String$1(){
  jl.$clinit_String$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Comparator();
}
;
jl.String$1 = function String$1(){
  jl.$clinit_String$1();
  Object_0.call(this);
  this.$init_124();
}
;
defineClass(105, 1, {1:1}, jl.String$1);
_.$init_124 = function $init_124(){
}
;
_.equals_0 = function equals_10(other){
  return getClassPrototype(1).equals_0.call(this, other);
}
;
jl.$clinit_StringIndexOutOfBoundsException = function $clinit_StringIndexOutOfBoundsException(){
  jl.$clinit_StringIndexOutOfBoundsException = emptyMethod;
  jl.$clinit_IndexOutOfBoundsException();
}
;
jl.StringIndexOutOfBoundsException = function StringIndexOutOfBoundsException(message){
  jl.$clinit_StringIndexOutOfBoundsException();
  jl.IndexOutOfBoundsException.call(this, message);
  this.$init_126();
}
;
defineClass(95, 50, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.StringIndexOutOfBoundsException);
_.$init_126 = function $init_126(){
}
;
jl.$clinit_Throwable$NativeError = function $clinit_Throwable$NativeError(){
  jl.$clinit_Throwable$NativeError = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_Throwable$NativeTypeError = function $clinit_Throwable$NativeTypeError(){
  jl.$clinit_Throwable$NativeTypeError = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_Coercions = function $clinit_Coercions(){
  ji2.$clinit_Coercions = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.ensureInt = function ensureInt(value_0){
  ji2.$clinit_Coercions();
  return value_0 | 0;
}
;
defineClass(358, 1, {1:1});
ji2.$clinit_HashCodes = function $clinit_HashCodes(){
  ji2.$clinit_HashCodes = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.getObjectIdentityHashCode = function getObjectIdentityHashCode(o){
  ji2.$clinit_HashCodes();
  return ji2.getHashCode_0(o);
}
;
ji2.getStringHashCode = function getStringHashCode(s){
  ji2.$clinit_HashCodes();
  return ji2.getHashCode_1(s);
}
;
defineClass(324, 1, {1:1});
ji2.$clinit_InternalPreconditions = function $clinit_InternalPreconditions(){
  ji2.$clinit_InternalPreconditions = emptyMethod;
  jl.$clinit_Object();
  ji2.LEVEL_NORMAL_OR_HIGHER = jsEquals('NORMAL', 'NORMAL');
  ji2.LEVEL_OPT_OR_HIGHER = jsEquals('NORMAL', 'OPTIMIZED') || jsEquals('NORMAL', 'NORMAL');
  ji2.LEVEL_MINIMAL_OR_HIGHER = jsEquals('NORMAL', 'MINIMAL') || jsEquals('NORMAL', 'OPTIMIZED') || jsEquals('NORMAL', 'NORMAL');
  {
    if (!ji2.LEVEL_MINIMAL_OR_HIGHER) {
      throw toJs(new jl.IllegalStateException_0('Incorrect level: ' + 'NORMAL'));
    }
  }
  ji2.IS_TYPE_CHECKED = jsEquals(ji2.CHECK_TYPE, 'AUTO') && ji2.LEVEL_OPT_OR_HIGHER || jsEquals(ji2.CHECK_TYPE, 'ENABLED');
  ji2.IS_BOUNDS_CHECKED = jsEquals(ji2.CHECK_BOUNDS, 'AUTO') && ji2.LEVEL_NORMAL_OR_HIGHER || jsEquals(ji2.CHECK_BOUNDS, 'ENABLED');
  ji2.IS_API_CHECKED = jsEquals(ji2.CHECK_API, 'AUTO') && ji2.LEVEL_NORMAL_OR_HIGHER || jsEquals(ji2.CHECK_API, 'ENABLED');
  ji2.IS_NUMERIC_CHECKED = jsEquals(ji2.CHECK_NUMERIC, 'AUTO') && ji2.LEVEL_NORMAL_OR_HIGHER || jsEquals(ji2.CHECK_NUMERIC, 'ENABLED');
  ji2.IS_ASSERTED = jsEquals('DISABLED', 'ENABLED');
}
;
ji2.checkArgument = function checkArgument(expression, errorMessage){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalArgument_0(expression, errorMessage);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalArgument_0(expression, errorMessage);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkArrayType = function checkArrayType(expression){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_TYPE_CHECKED) {
    ji2.checkCriticalArrayType(expression);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalArrayType(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkCriticalArgument = function checkCriticalArgument(expression){
  ji2.$clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new jl.IllegalArgumentException);
  }
}
;
ji2.checkCriticalArgument_0 = function checkCriticalArgument_0(expression, errorMessage){
  ji2.$clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new jl.IllegalArgumentException_0(valueOf_24(errorMessage)));
  }
}
;
ji2.checkCriticalArgument_1 = function checkCriticalArgument_1(expression, errorMessageTemplate, errorMessageArgs){
  ji2.$clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new jl.IllegalArgumentException_0(ji2.format(errorMessageTemplate, errorMessageArgs)));
  }
}
;
ji2.checkCriticalArrayType = function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new jl.ArrayStoreException);
  }
}
;
ji2.checkCriticalElement = function checkCriticalElement(expression){
  ji2.$clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new ju.NoSuchElementException);
  }
}
;
ji2.checkCriticalElementIndex = function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new jl.IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}
;
ji2.checkCriticalNotNull = function checkCriticalNotNull(reference){
  if (jsEquals(reference, null)) {
    throw toJs(new jl.NullPointerException);
  }
  return reference;
}
;
ji2.checkCriticalNotNull_0 = function checkCriticalNotNull_0(reference, errorMessage){
  if (jsEquals(reference, null)) {
    throw toJs(new jl.NullPointerException_1(valueOf_24(errorMessage)));
  }
}
;
ji2.checkCriticalPositionIndex = function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new jl.IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}
;
ji2.checkCriticalPositionIndexes = function checkCriticalPositionIndexes(start_0, end, size_0){
  ji2.$clinit_InternalPreconditions();
  if (start_0 < 0 || end > size_0) {
    throw toJs(new jl.IndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new jl.IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}
;
ji2.checkCriticalState = function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new jl.IllegalStateException);
  }
}
;
ji2.checkCriticalState_0 = function checkCriticalState_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new jl.IllegalStateException_0(valueOf_24(errorMessage)));
  }
}
;
ji2.checkCriticalStringBounds = function checkCriticalStringBounds(start_0, end, length_0){
  ji2.$clinit_InternalPreconditions();
  if (start_0 < 0 || end > length_0 || end < start_0) {
    throw toJs(new jl.StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', length: ' + length_0));
  }
}
;
ji2.checkCriticalStringElementIndex = function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new jl.StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}
;
ji2.checkCriticalType = function checkCriticalType(expression, message){
  if (!expression) {
    throw toJs(new jl.ClassCastException_0(message));
  }
}
;
ji2.checkElement = function checkElement(expression){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalElement(expression);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalElement(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkElementIndex = function checkElementIndex(index_0, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalElementIndex(index_0, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalElementIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkNotNull_0 = function checkNotNull_0(reference){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalNotNull(reference);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalNotNull(reference);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
  return reference;
}
;
ji2.checkNotNull_1 = function checkNotNull_1(reference, errorMessage){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalNotNull_0(reference, errorMessage);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalNotNull_0(reference, errorMessage);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkPositionIndex = function checkPositionIndex(index_0, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalPositionIndex(index_0, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalPositionIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkPositionIndexes = function checkPositionIndexes(start_0, end, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalPositionIndexes(start_0, end, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalPositionIndexes(start_0, end, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkState = function checkState(expression){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalState(expression);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalState(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkState_0 = function checkState_0(expression, errorMessage){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalState_0(expression, errorMessage);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalState_0(expression, errorMessage);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkStringElementIndex = function checkStringElementIndex(index_0, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalStringElementIndex(index_0, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalStringElementIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkType = function checkType(expression){
  ji2.$clinit_InternalPreconditions();
  ji2.checkType_0(expression, null);
}
;
ji2.checkType_0 = function checkType_0(expression, message){
  var e;
  if (ji2.IS_TYPE_CHECKED) {
    ji2.checkCriticalType(expression, message);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalType(expression, message);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.format = function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = valueOf_24(template);
  builder = new jl.StringBuilder(jl.length__I__devirtual$_0(template) + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = jl.indexOf_Ljava_lang_String_I_I__devirtual$(template, '%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    builder.append_2(jl.substring_II_Ljava_lang_String___devirtual$(template, templateStart, placeholderStart));
    builder.append_1(args[i++]);
    templateStart = placeholderStart + 2;
  }
  builder.append_2(jl.substring_I_Ljava_lang_String___devirtual$(template, templateStart));
  if (i < args.length) {
    builder.append_2(' [');
    builder.append_1(args[i++]);
    while (i < args.length) {
      builder.append_2(', ');
      builder.append_1(args[i++]);
    }
    builder.append(93);
  }
  return builder.toString_0();
}
;
ji2.isApiChecked = function isApiChecked(){
  ji2.$clinit_InternalPreconditions();
  return ji2.IS_API_CHECKED || ji2.IS_ASSERTED;
}
;
defineClass(317, 1, {1:1});
ji2.CHECK_API = 'AUTO';
ji2.CHECK_BOUNDS = 'AUTO';
ji2.CHECK_NUMERIC = 'AUTO';
ji2.CHECK_TYPE = 'AUTO';
ji2.IS_API_CHECKED = false;
ji2.IS_ASSERTED = false;
ji2.IS_BOUNDS_CHECKED = false;
ji2.IS_NUMERIC_CHECKED = false;
ji2.IS_TYPE_CHECKED = false;
ji2.LEVEL_MINIMAL_OR_HIGHER = false;
ji2.LEVEL_NORMAL_OR_HIGHER = false;
ji2.LEVEL_OPT_OR_HIGHER = false;
ji2.$clinit_JsUtils = function $clinit_JsUtils(){
  ji2.$clinit_JsUtils = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.getProperty_1 = function getProperty_1(map_0, key){
  ji2.$clinit_JsUtils();
  return map_0[key];
}
;
ji2.isUndefined = function isUndefined(value_0){
  ji2.$clinit_JsUtils();
  return value_0 === undefined;
}
;
ji2.setProperty_2 = function setProperty_2(map_0, key, value_0){
  ji2.$clinit_JsUtils();
  map_0[key] = value_0;
}
;
ji2.setPropertySafe = function setPropertySafe(map_0, key, value_0){
  ji2.$clinit_JsUtils();
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}
;
ji2.uncheckedCast = function uncheckedCast(o){
  ji2.$clinit_JsUtils();
  return o;
}
;
ji2.unsafeCastToBoolean = function unsafeCastToBoolean(bool){
  ji2.$clinit_JsUtils();
  return bool;
}
;
ji2.unsafeCastToDouble = function unsafeCastToDouble(number){
  ji2.$clinit_JsUtils();
  return number;
}
;
defineClass(307, 1, {1:1});
ji2.$clinit_NativeRegExp = function $clinit_NativeRegExp(){
  ji2.$clinit_NativeRegExp = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_ObjectHashing = function $clinit_ObjectHashing(){
  ji2.$clinit_ObjectHashing = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.getHashCode_0 = function getHashCode_0(o){
  ji2.$clinit_ObjectHashing();
  return o.$H || (o.$H = ji2.getNextHashId());
}
;
ji2.getNextHashId = function getNextHashId(){
  return ++ji2.nextHashId;
}
;
defineClass(335, 1, {1:1});
ji2.HASH_CODE_PROPERTY = '$H';
ji2.nextHashId = 0;
ji2.$clinit_StringHashCache = function $clinit_StringHashCache(){
  ji2.$clinit_StringHashCache = emptyMethod;
  jl.$clinit_Object();
  ji2.back_0 = new Object_0;
  ji2.front = new Object_0;
}
;
ji2.compute = function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = jl.length__I__devirtual$_0(str);
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = jl.charAt_I_C__devirtual$_0(str, i + 3) + 31 * (jl.charAt_I_C__devirtual$_0(str, i + 2) + 31 * (jl.charAt_I_C__devirtual$_0(str, i + 1) + 31 * (jl.charAt_I_C__devirtual$_0(str, i) + 31 * hashCode)));
    hashCode = ji2.ensureInt(hashCode);
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + jl.charAt_I_C__devirtual$_0(str, i++);
  }
  hashCode = ji2.ensureInt(hashCode);
  return hashCode;
}
;
ji2.getHashCode_1 = function getHashCode_1(str){
  ji2.$clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = ji2.getProperty_1(ji2.front, key);
  if (jsNotEquals(result, null)) {
    return jl.intValue__I__devirtual$_0(result);
  }
  result = ji2.getProperty_1(ji2.back_0, key);
  hashCode = jsEquals(result, null)?ji2.compute(str):jl.intValue__I__devirtual$_0(result);
  ji2.increment();
  ji2.setProperty_2(ji2.front, key, jl.valueOf_11(hashCode));
  return hashCode;
}
;
ji2.increment = function increment(){
  if (ji2.count_0 == 256) {
    ji2.back_0 = ji2.front;
    ji2.front = new Object_0;
    ji2.count_0 = 0;
  }
  ++ji2.count_0;
}
;
defineClass(336, 1, {1:1});
ji2.MAX_CACHE = 256;
ji2.count_0 = 0;
cggl.Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null);
cggl.Lcom_google_gwt_core_client_GWT_2_classLit = createForClass('com.google.gwt.core.client', 'GWT', 239, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_io_Serializable_2_classLit = createForInterface('java.io', 'Serializable');
cggl.Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 6, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 5, cggl.Ljava_lang_Throwable_2_classLit);
cggl.Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8, cggl.Ljava_lang_Exception_2_classLit);
cggl.Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 45, cggl.Ljava_lang_RuntimeException_2_classLit);
cggl.Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 153, cggl.Ljava_lang_JsException_2_classLit);
cggl.Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 47, cggl.Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator', 320, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 60, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 149, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 61, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 150, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
cggl.Lcom_google_gwt_lang_Array_2_classLit = createForClass('com.google.gwt.lang', 'Array', 288, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Cast_2_classLit = createForClass('com.google.gwt.lang', 'Cast', 289, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Exceptions_2_classLit = createForClass('com.google.gwt.lang', 'Exceptions', 291, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Util_2_classLit = createForClass('com.google.gwt.lang', 'Util', 296, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 29, cggl.Ljava_lang_Throwable_2_classLit);
cggl.Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 11, cggl.Ljava_lang_Error_2_classLit);
cggl.Ljava_lang_Comparable_2_classLit = createForInterface('java.lang', 'Comparable');
cggl.Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 143, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_CharSequence_2_classLit = createForInterface('java.lang', 'CharSequence');
cggl.Ljava_lang_reflect_Type_2_classLit = createForInterface('java.lang.reflect', 'Type');
cggl.Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 83, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 93, cggl.Ljava_lang_RuntimeException_2_classLit);
cggl.Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 30, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 145, cggl.Ljava_lang_Number_2_classLit);
cggl.Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 49, cggl.Ljava_lang_RuntimeException_2_classLit);
cggl.Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 50, cggl.Ljava_lang_RuntimeException_2_classLit);
cggl.Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 32, cggl.Ljava_lang_Number_2_classLit);
cggl.Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 67, cggl.Ljava_lang_JsException_2_classLit);
cggl.Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_util_Comparator_2_classLit = createForInterface('java.util', 'Comparator');
cggl.Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 105, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 95, cggl.Ljava_lang_IndexOutOfBoundsException_2_classLit);
cggl.Ljavaemul_internal_Coercions_2_classLit = createForClass('javaemul.internal', 'Coercions', 358, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljavaemul_internal_HashCodes_2_classLit = createForClass('javaemul.internal', 'HashCodes', 324, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljavaemul_internal_InternalPreconditions_2_classLit = createForClass('javaemul.internal', 'InternalPreconditions', 317, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljavaemul_internal_JsUtils_2_classLit = createForClass('javaemul.internal', 'JsUtils', 307, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljavaemul_internal_ObjectHashing_2_classLit = createForClass('javaemul.internal', 'ObjectHashing', 335, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljavaemul_internal_StringHashCache_2_classLit = createForClass('javaemul.internal', 'StringHashCache', 336, cggl.Ljava_lang_Object_2_classLit);
cbucc.$clinit_BUIWidget = function $clinit_BUIWidget(){
  cbucc.$clinit_BUIWidget = emptyMethod;
  jl.$clinit_Object();
}
;
cbucc.BUIWidget = function BUIWidget(attributes){
  cbucc.$clinit_BUIWidget();
  var border, color_0, padding;
  Object_0.call(this);
  this.$init_0();
  if (isNotNull(attributes)) {
    this.id_0 = castToString(attributes.get('id'));
    this.zorder = cbucca.safeEnum_3(castToString(attributes.get('zorder')), null);
    this.width_0 = cbucu.safeInt(castToString(attributes.get('width')), -1);
    this.height_0 = cbucu.safeInt(castToString(attributes.get('height')), -1);
    this.paddingLeft_0 = cbucu.safeInt(castToString(attributes.get('paddingLeft')), -1);
    this.paddingRight_0 = cbucu.safeInt(castToString(attributes.get('paddingRight')), -1);
    this.paddingTop_0 = cbucu.safeInt(castToString(attributes.get('paddingTop')), -1);
    this.paddingBottom_0 = cbucu.safeInt(castToString(attributes.get('paddingBottom')), -1);
    color_0 = castToString(attributes.get('backgroundColor'));
    this.backgroundColor_0 = jsNotEquals(null, color_0)?cbucca.fromString_0(color_0):null;
    border = castToString(attributes.get('borderTop'));
    this.borderTop = jsNotEquals(null, border)?cbucca.fromString(border):null;
    border = castToString(attributes.get('borderLeft'));
    this.borderLeft = jsNotEquals(null, border)?cbucca.fromString(border):null;
    border = castToString(attributes.get('borderBottom'));
    this.borderBottom = jsNotEquals(null, border)?cbucca.fromString(border):null;
    border = castToString(attributes.get('borderRight'));
    this.borderRight = jsNotEquals(null, border)?cbucca.fromString(border):null;
    border = castToString(attributes.get('border'));
    this.border = jsNotEquals(null, border)?cbucca.fromString(border):null;
    this.verticalAlign = cbucca.safeEnum_2(castToString(attributes.get('verticalAlign')), null);
    padding = castToString(attributes.get('padding'));
    if (jsNotEquals(null, padding)) {
      this.setPadding(padding);
    }
    this.triggerEvent = castToString(attributes.get('triggerEvent'));
    this.eventArgs = castToString(attributes.get('eventArgs'));
    this.listenToEvent = castToString(attributes.get('listenToEvent'));
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_2('test', this.id_0)) {
      (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['CREATE: apply attributes']));
      this.printAttributes();
    }
  }
}
;
defineClass(10, 1, {10:1, 1:1});
_.$init_0 = function $init_0(){
  this.children = new ju.ArrayList;
}
;
_.OnAfterRender = function OnAfterRender(context){
}
;
_.OnBeforeRender = function OnBeforeRender(context){
}
;
_.OnBeforeRenderChildren = function OnBeforeRenderChildren(context, self_0){
}
;
_.addChild = function addChild(child){
  this.children.add(child);
  return castTo(this, 10);
}
;
_.applyAttributes = function applyAttributes(){
  if (isNotNull(this.self_0)) {
    if (jsNotEquals(null, this.id_0))
      this.self_0.setId(this.id_0);
    if (isNotNull(this.backgroundColor_0))
      this.self_0.setBackgroundColor_0(this.backgroundColor_0.asString());
    if (isNotNull(this.zorder))
      this.self_0.setZOrder(this.zorder);
    if (this.width_0 >= 0)
      this.self_0.setWidth(this.width_0);
    if (this.height_0 >= 0)
      this.self_0.setHeight(this.height_0);
    if (this.paddingLeft_0 >= 0)
      this.self_0.setPaddingLeft_0(this.paddingLeft_0);
    if (this.paddingRight_0 >= 0)
      this.self_0.setPaddingRight_0(this.paddingRight_0);
    if (this.paddingTop_0 >= 0)
      this.self_0.setPaddingTop_0(this.paddingTop_0);
    if (this.paddingBottom_0 >= 0)
      this.self_0.setPaddingBottom_0(this.paddingBottom_0);
    if (isNotNull(this.borderTop))
      this.self_0.setBorderTop(this.borderTop.asString());
    if (isNotNull(this.borderLeft))
      this.self_0.setBorderLeft(this.borderLeft.asString());
    if (isNotNull(this.borderBottom))
      this.self_0.setBorderBottom_0(this.borderBottom.asString());
    if (isNotNull(this.borderRight))
      this.self_0.setBorderRight(this.borderRight.asString());
    if (isNotNull(this.border))
      this.self_0.setBorder(this.border.asString());
    if (isNotNull(this.verticalAlign))
      this.self_0.setVerticalAlign(this.verticalAlign);
    if (isNotNull(this.onclick_0)) {
      this.self_0.registerClickHandler(this.onclick_0);
    }
    if (isNotNull(this.onmouseover_0)) {
      this.self_0.registerMouseOverHandler(this.onmouseover_0);
    }
    if (isNotNull(this.onmousemove_0)) {
      this.self_0.registerMouseMoveHandler(this.onmousemove_0);
    }
    if (isNotNull(this.onmouseout_0)) {
      this.self_0.registerMouseOutHandler(this.onmouseout_0);
    }
  }
}
;
_.build = function build(context){
}
;
_.destroyComponent = function destroyComponent(){
  var child, child$iterator;
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['=== on destroy ===']));
  for (child$iterator = this.children.iterator(); child$iterator.hasNext_0();) {
    child = castTo(child$iterator.next_2(), 10);
    child.destroyComponent();
  }
  if (isNotNull(this.self_0)) {
    this.self_0.destroyComponent();
  }
}
;
_.getChildren = function getChildren(){
  return this.children;
}
;
_.getEventArgs = function getEventArgs(){
  return this.eventArgs;
}
;
_.getHeight = function getHeight(){
  return this.height_0;
}
;
_.getPadding = function getPadding(){
  return this.paddingTop_0 + ' ' + this.getPaddingRight() + ' ' + this.getPaddingBottom() + ' ' + this.getPaddingLeft();
}
;
_.getPaddingBottom = function getPaddingBottom(){
  return this.paddingBottom_0;
}
;
_.getPaddingLeft = function getPaddingLeft(){
  return this.paddingLeft_0;
}
;
_.getPaddingRight = function getPaddingRight(){
  return this.paddingRight_0;
}
;
_.getTriggerEvent = function getTriggerEvent(){
  return this.triggerEvent;
}
;
_.getWidth = function getWidth(){
  return this.width_0;
}
;
_.nativeComponent = function nativeComponent_0(){
  return this.self_0;
}
;
_.printAttributes = function printAttributes(){
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['Attributes:']));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    id: ' + this.id_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    backgroundColor: ' + this.backgroundColor_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    zorder: ' + this.zorder]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    width: ' + this.width_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    height: ' + this.height_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    paddingLeft: ' + this.paddingLeft_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    paddingRight: ' + this.paddingRight_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    paddingTop: ' + this.paddingTop_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    paddingBottom: ' + this.paddingBottom_0]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    borderTop: ' + this.borderTop]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    borderLeft: ' + this.borderLeft]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    borderBottom: ' + this.borderBottom]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    borderRight: ' + this.borderRight]));
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['    border: ' + this.border]));
}
;
_.render = function render(context){
  if (isNotNull(this.parent_0))
    return this.render_0(context, this.parent_0);
  return null;
}
;
_.render_0 = function render_0(context, parent_0){
  var child, child$iterator, childNative;
  this.OnBeforeRender(context);
  if (isNotNull(this.self_0)) {
    this.destroyComponent();
  }
  this.parent_0 = parent_0;
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['RENDER: create native component']));
  this.self_0 = this.createNative();
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['RENDER: apply attributes']));
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2('test', this.id_0))
    this.printAttributes();
  this.applyAttributes();
  if (isNotNull(this.self_0)) {
    this.OnBeforeRenderChildren(context, this.self_0);
    for (child$iterator = this.children.iterator(); child$iterator.hasNext_0();) {
      child = castTo(child$iterator.next_2(), 10);
      childNative = child.render_0(context.clone(), this.self_0);
      this.self_0.addChild_0(childNative);
    }
    if (isNotNull(parent_0)) {
      parent_0.addChild_0(this.self_0);
    }
  }
  this.OnAfterRender(context);
  return this.self_0;
}
;
_.setBackgroundColor = function setBackgroundColor(backgroundColor){
  this.backgroundColor_0 = backgroundColor;
  this.applyAttributes();
  return castTo(this, 10);
}
;
_.setBorderBottom = function setBorderBottom(borderBottom){
  this.borderBottom = borderBottom;
  this.applyAttributes();
  return castTo(this, 10);
}
;
_.setPadding = function setPadding(padding){
  var e, invalid, padValue, values;
  values = jsEquals(null, padding)?stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1}, 2, 6, []):jl.split_Ljava_lang_String___Ljava_lang_String___devirtual$(padding, ' ');
  invalid = false;
  try {
    if (values.length == 1) {
      padValue = jl.valueOf_15(values[0]).intValue();
      this.setPaddingLeft(padValue);
      this.setPaddingRight(padValue);
      this.setPaddingTop(padValue);
      this.setPaddingBottom(padValue);
      this.applyAttributes();
    }
     else if (values.length == 4) {
      this.setPaddingLeft(jl.valueOf_15(values[3]).intValue());
      this.setPaddingRight(jl.valueOf_15(values[1]).intValue());
      this.setPaddingTop(jl.valueOf_15(values[0]).intValue());
      this.setPaddingBottom(jl.valueOf_15(values[2]).intValue());
      this.applyAttributes();
    }
     else {
      invalid = true;
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 5)) {
      e = $e0;
      invalid = true;
    }
     else 
      throw toJs($e0);
  }
  if (invalid) {
    (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().error_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['Invalid padding value: ' + padding]));
  }
  return castTo(this, 10);
}
;
_.setPaddingBottom = function setPaddingBottom(paddingBottom){
  this.paddingBottom_0 = paddingBottom;
  this.applyAttributes();
  return castTo(this, 10);
}
;
_.setPaddingLeft = function setPaddingLeft(paddingLeft){
  this.paddingLeft_0 = paddingLeft;
  this.applyAttributes();
  return castTo(this, 10);
}
;
_.setPaddingRight = function setPaddingRight(paddingRight){
  this.paddingRight_0 = paddingRight;
  this.applyAttributes();
  return castTo(this, 10);
}
;
_.setPaddingTop = function setPaddingTop(paddingTop){
  this.paddingTop_0 = paddingTop;
  this.applyAttributes();
  return castTo(this, 10);
}
;
_.triggerUIEvent = function triggerUIEvent(triggerEvent, eventArgs){
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().debug(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ["Trigger new event: '" + triggerEvent + "' with arguments: '" + eventArgs + "'"]));
}
;
_.height_0 = 0;
_.paddingBottom_0 = 0;
_.paddingLeft_0 = 0;
_.paddingRight_0 = 0;
_.paddingTop_0 = 0;
_.width_0 = 0;
cbucc.ATTR_BG_COLOR = 'backgroundColor';
cbucc.ATTR_BORDER = 'border';
cbucc.ATTR_BORDER_BOTTOM = 'borderBottom';
cbucc.ATTR_BORDER_LEFT = 'borderLeft';
cbucc.ATTR_BORDER_RIGHT = 'borderRight';
cbucc.ATTR_BORDER_TOP = 'borderTop';
cbucc.ATTR_EVENT_ARGS = 'eventArgs';
cbucc.ATTR_EVENT_LISTEN = 'listenToEvent';
cbucc.ATTR_EVENT_TRIGGER = 'triggerEvent';
cbucc.ATTR_HEIGHT = 'height';
cbucc.ATTR_ID = 'id';
cbucc.ATTR_PADDING = 'padding';
cbucc.ATTR_PADDING_BOTTOM = 'paddingBottom';
cbucc.ATTR_PADDING_LEFT = 'paddingLeft';
cbucc.ATTR_PADDING_RIGHT = 'paddingRight';
cbucc.ATTR_PADDING_TOP = 'paddingTop';
cbucc.ATTR_VERTICAL_ALIGN = 'verticalAlign';
cbucc.ATTR_WIDTH = 'width';
cbucc.ATTR_Z_ORDER = 'zorder';
cggl.Lcom_badu_ui_core_components_BUIWidget_2_classLit = createForClass('com.badu.ui.core.components', 'BUIWidget', 10, cggl.Ljava_lang_Object_2_classLit);
cbucc.$clinit_StatelessWidget = function $clinit_StatelessWidget(){
  cbucc.$clinit_StatelessWidget = emptyMethod;
  cbucc.$clinit_BUIWidget();
}
;
cbucc.StatelessWidget = function StatelessWidget(attributes){
  cbucc.$clinit_StatelessWidget();
  cbucc.BUIWidget.call(this, attributes);
  this.$init_1();
}
;
defineClass(57, 10, {10:1, 1:1});
_.$init_1 = function $init_1(){
}
;
cggl.Lcom_badu_ui_core_components_StatelessWidget_2_classLit = createForClass('com.badu.ui.core.components', 'StatelessWidget', 57, cggl.Lcom_badu_ui_core_components_BUIWidget_2_classLit);
cbucc.$clinit_AppRoot = function $clinit_AppRoot(){
  cbucc.$clinit_AppRoot = emptyMethod;
  cbucc.$clinit_StatelessWidget();
}
;
cbucc.AppRoot = function AppRoot(){
  cbucc.$clinit_AppRoot();
  cbucc.StatelessWidget.call(this, null);
  this.$init_2();
}
;
defineClass(131, 57, {10:1, 1:1});
_.$init_2 = function $init_2(){
}
;
_.createNative = function createNative(){
  return (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).componentFactory_0().rootComponent();
}
;
cggl.Lcom_badu_ui_core_components_AppRoot_2_classLit = createForClass('com.badu.ui.core.components', 'AppRoot', 131, cggl.Lcom_badu_ui_core_components_StatelessWidget_2_classLit);
cbucl.$clinit_BUIAppLifecycle = function $clinit_BUIAppLifecycle(){
  cbucl.$clinit_BUIAppLifecycle = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_listeners_BUIAppLifecycle_2_classLit = createForInterface('com.badu.ui.core.listeners', 'BUIAppLifecycle');
cbuc.$clinit_BUIApp = function $clinit_BUIApp(){
  cbuc.$clinit_BUIApp = emptyMethod;
  cbucc.$clinit_AppRoot();
}
;
cbuc.BUIApp = function BUIApp(platform, theme){
  cbuc.$clinit_BUIApp();
  cbucc.AppRoot.call(this);
  this.$init_3();
  cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM = platform;
  cbuc.$clinit_BUIPlatform() , cbuc.THEME = theme;
  (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).addAppLifecycleListener(this);
}
;
defineClass(128, 131, {10:1, 1:1});
_.$init_3 = function $init_3(){
}
;
_.createEventBus = function createEventBus(){
}
;
_.createUI = function createUI(context){
  this.build(context);
}
;
_.log_0 = function log_0(){
  return (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0();
}
;
_.onInitialized = function onInitialized(){
}
;
_.onStarted = function onStarted(){
}
;
_.start_1 = function start_1(){
  var context;
  this.createEventBus();
  this.onInitialized();
  context = new cbuc.RenderContext;
  this.createUI(context);
  this.render_0(context, null);
  this.onStarted();
}
;
cggl.Lcom_badu_ui_core_BUIApp_2_classLit = createForClass('com.badu.ui.core', 'BUIApp', 128, cggl.Lcom_badu_ui_core_components_AppRoot_2_classLit);
cbt.$clinit_TheAppMain = function $clinit_TheAppMain(){
  cbt.$clinit_TheAppMain = emptyMethod;
  cbuc.$clinit_BUIApp();
}
;
cbt.TheAppMain = function TheAppMain(platform){
  cbt.$clinit_TheAppMain();
  cbuc.BUIApp.call(this, platform, new cbuct.DefaultTheme);
  this.$init_4();
}
;
cbt.lambda$1 = function lambda$1(error_0){
  cbt.$clinit_TheAppMain();
  {
    (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().error_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['Unable to load template: ' + 'templates/home2.bui', error_0]));
  }
}
;
defineClass(125, 128, {10:1, 1:1});
_.$init_4 = function $init_4(){
}
;
_.lambda$0 = function lambda$0(context_1, widget_1){
  cbt.$clinit_TheAppMain();
  {
    this.render(context_1);
  }
}
;
_.build = function build_0(context){
  cbuc2.initialize();
  cbucu.loadFromTemplate(this, 'templates/home2.bui', context).whenReady(new cbt.TheAppMain$lambda$0$Type(this, context)).whenError(new cbt.TheAppMain$lambda$1$Type).loadResource();
}
;
cbt.HOME_TEMPLATE = 'templates/home2.bui';
cggl.Lcom_badu_theapp_TheAppMain_2_classLit = createForClass('com.badu.theapp', 'TheAppMain', 125, cggl.Lcom_badu_ui_core_BUIApp_2_classLit);
cbuc.$clinit_Resource$OnReady = function $clinit_Resource$OnReady(){
  cbuc.$clinit_Resource$OnReady = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_Resource$OnReady_2_classLit = createForInterface('com.badu.ui.core', 'Resource/OnReady');
cbt.$clinit_TheAppMain$lambda$0$Type = function $clinit_TheAppMain$lambda$0$Type(){
  cbt.$clinit_TheAppMain$lambda$0$Type = emptyMethod;
}
;
cbt.TheAppMain$lambda$0$Type = function TheAppMain$lambda$0$Type($$outer_0, context_1){
  cbt.$clinit_TheAppMain$lambda$0$Type();
  this.$$outer_0 = $$outer_0;
  this.context_1 = context_1;
}
;
defineClass(129, 1, {1:1}, cbt.TheAppMain$lambda$0$Type);
_.OnReady = function OnReady(arg0){
  this.$$outer_0.lambda$0(this.context_1, arg0);
}
;
cggl.Lcom_badu_theapp_TheAppMain$lambda$0$Type_2_classLit = createForClass('com.badu.theapp', 'TheAppMain/lambda$0$Type', 129, cggl.Ljava_lang_Object_2_classLit);
cbuc.$clinit_Resource$OnError = function $clinit_Resource$OnError(){
  cbuc.$clinit_Resource$OnError = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_Resource$OnError_2_classLit = createForInterface('com.badu.ui.core', 'Resource/OnError');
cbt.$clinit_TheAppMain$lambda$1$Type = function $clinit_TheAppMain$lambda$1$Type(){
  cbt.$clinit_TheAppMain$lambda$1$Type = emptyMethod;
}
;
cbt.TheAppMain$lambda$1$Type = function TheAppMain$lambda$1$Type(){
  cbt.$clinit_TheAppMain$lambda$1$Type();
}
;
defineClass(130, 1, {1:1}, cbt.TheAppMain$lambda$1$Type);
_.OnError = function OnError(arg0){
  cbt.lambda$1(arg0);
}
;
cggl.Lcom_badu_theapp_TheAppMain$lambda$1$Type_2_classLit = createForClass('com.badu.theapp', 'TheAppMain/lambda$1$Type', 130, cggl.Ljava_lang_Object_2_classLit);
cbuc2.$clinit_BADUComponents = function $clinit_BADUComponents(){
  cbuc2.$clinit_BADUComponents = emptyMethod;
  jl.$clinit_Object();
}
;
cbuc2.initialize = function initialize(){
  cbuc2.$clinit_BADUComponents();
  cbuccc.registerComponent_1();
  cbuccc.registerComponent_5();
  cbuccc.registerComponent_6();
  cbuc2.registerComponent_0();
  cbuc2.registerComponent();
  cbucl2.registerComponent_2();
  cbucm.registerComponent_3();
}
;
defineClass(360, 1, {1:1});
cggl.Lcom_badu_ui_components_BADUComponents_2_classLit = createForClass('com.badu.ui.components', 'BADUComponents', 360, cggl.Ljava_lang_Object_2_classLit);
cbuc2.$clinit_Image = function $clinit_Image(){
  cbuc2.$clinit_Image = emptyMethod;
  cbucc.$clinit_StatelessWidget();
  {
    cbuc2.registerComponent();
  }
}
;
cbuc2.Image_0 = function Image_0(attributes){
  cbuc2.$clinit_Image();
  var srcAttr;
  cbucc.StatelessWidget.call(this, attributes);
  this.$init_5();
  srcAttr = castToString(attributes.get('src'));
  if (jsNotEquals(null, srcAttr) && jl.length__I__devirtual$_0(srcAttr) > 0) {
    this.src_0 = (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getResourceManager().findById(srcAttr);
  }
   else {
    this.src_0 = null;
  }
}
;
cbuc2.registerComponent = function registerComponent(){
  cbuc2.$clinit_Image();
  cbuc.registerFactory('image', new cbuc2.Image$ComponentFactoryImpl);
}
;
defineClass(203, 57, {10:1, 1:1}, cbuc2.Image_0);
_.$init_5 = function $init_5(){
}
;
_.createNative = function createNative_0(){
  return this.createNative_0();
}
;
_.createNative_0 = function createNative_1(){
  return (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).componentFactory_0().createImage(this.src_0, this.getWidth(), this.getHeight());
}
;
cbuc2.ATTR_SRC = 'src';
cbuc2.TAG = 'image';
cggl.Lcom_badu_ui_components_Image_2_classLit = createForClass('com.badu.ui.components', 'Image', 203, cggl.Lcom_badu_ui_core_components_StatelessWidget_2_classLit);
cbuc.$clinit_ComponentFactory = function $clinit_ComponentFactory(){
  cbuc.$clinit_ComponentFactory = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_ComponentFactory_2_classLit = createForInterface('com.badu.ui.core', 'ComponentFactory');
cbuc2.$clinit_Image$ComponentFactoryImpl = function $clinit_Image$ComponentFactoryImpl(){
  cbuc2.$clinit_Image$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbuc2.Image$ComponentFactoryImpl = function Image$ComponentFactoryImpl(){
  cbuc2.$clinit_Image$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_6();
}
;
defineClass(204, 1, {38:1, 1:1}, cbuc2.Image$ComponentFactoryImpl);
_.$init_6 = function $init_6(){
}
;
_.createComponent = function createComponent(tagName, attributes){
  return new cbuc2.Image_0(attributes);
}
;
cggl.Lcom_badu_ui_components_Image$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.components', 'Image/ComponentFactoryImpl', 204, cggl.Ljava_lang_Object_2_classLit);
cbuc2.$clinit_Text = function $clinit_Text(){
  cbuc2.$clinit_Text = emptyMethod;
  cbucc.$clinit_StatelessWidget();
  {
    cbuc2.registerComponent_0();
  }
}
;
cbuc2.Text_0 = function Text_0(attributes){
  cbuc2.$clinit_Text();
  cbucc.StatelessWidget.call(this, attributes);
  this.$init_7();
  this.text_0 = castToString(attributes.get('text'));
  this.color_0 = castToString(attributes.get('color'));
}
;
cbuc2.registerComponent_0 = function registerComponent_0(){
  cbuc2.$clinit_Text();
  cbuc.registerFactory('text', new cbuc2.Text$ComponentFactoryImpl);
}
;
defineClass(201, 57, {10:1, 1:1}, cbuc2.Text_0);
_.$init_7 = function $init_7(){
}
;
_.createNative = function createNative_2(){
  return this.createNative_1();
}
;
_.applyAttributes = function applyAttributes_0(){
  var nativeComponent;
  getClassPrototype(10).applyAttributes.call(this);
  nativeComponent = castTo(this.nativeComponent(), 503);
  if (isNotNull(nativeComponent)) {
    if (jsNotEquals(null, this.text_0))
      nativeComponent.setText(this.text_0);
    if (jsNotEquals(null, this.color_0))
      nativeComponent.setColor(this.color_0);
  }
}
;
_.createNative_1 = function createNative_3(){
  return (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).componentFactory_0().createText(this.text_0);
}
;
_.getColor = function getColor(){
  return this.color_0;
}
;
cbuc2.ATTR_COLOR = 'color';
cbuc2.ATTR_TEXT = 'text';
cbuc2.TAG_0 = 'text';
cggl.Lcom_badu_ui_components_Text_2_classLit = createForClass('com.badu.ui.components', 'Text', 201, cggl.Lcom_badu_ui_core_components_StatelessWidget_2_classLit);
cbuc2.$clinit_Text$ComponentFactoryImpl = function $clinit_Text$ComponentFactoryImpl(){
  cbuc2.$clinit_Text$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbuc2.Text$ComponentFactoryImpl = function Text$ComponentFactoryImpl(){
  cbuc2.$clinit_Text$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_8();
}
;
defineClass(202, 1, {38:1, 1:1}, cbuc2.Text$ComponentFactoryImpl);
_.$init_8 = function $init_8(){
}
;
_.createComponent = function createComponent_0(tagName, attributes){
  return new cbuc2.Text_0(attributes);
}
;
cggl.Lcom_badu_ui_components_Text$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.components', 'Text/ComponentFactoryImpl', 202, cggl.Ljava_lang_Object_2_classLit);
cbuccc.$clinit_Box = function $clinit_Box(){
  cbuccc.$clinit_Box = emptyMethod;
  cbucc.$clinit_StatelessWidget();
  {
    cbuccc.registerComponent_1();
  }
}
;
cbuccc.Box = function Box(attributes){
  cbuccc.$clinit_Box();
  cbucc.StatelessWidget.call(this, attributes);
  this.$init_9();
  this.justifyContent_0 = cbucca.safeEnum_1(castToString(attributes.get('justifyContent')), null);
  this.alignItems_0 = cbucca.safeEnum(castToString(attributes.get('alignItems')), null);
  this.flexLayout = cbucca.safeEnum_0(castToString(attributes.get('layout')), null);
  this.flexGrow_0 = cbucu.safeInt(castToString(attributes.get('flexGrow')), -1);
  this.flexShrink_0 = cbucu.safeInt(castToString(attributes.get('flexShrink')), -1);
  this.flexBasis_0 = castToString(attributes.get('flexBasis'));
}
;
cbuccc.registerComponent_1 = function registerComponent_1(){
  cbuccc.$clinit_Box();
  cbuc.registerFactory('box', new cbuccc.Box$ComponentFactoryImpl);
}
;
defineClass(41, 57, {10:1, 1:1}, cbuccc.Box);
_.$init_9 = function $init_9(){
  this.flexGrow_0 = 0;
  this.flexShrink_0 = 1;
  this.flexBasis_0 = 'auto';
}
;
_.createNative = function createNative_4(){
  return this.createNative_2();
}
;
_.applyAttributes = function applyAttributes_1(){
  var box;
  getClassPrototype(10).applyAttributes.call(this);
  box = castTo(this.nativeComponent(), 236);
  if (isNotNull(box)) {
    if (isNotNull(this.justifyContent_0))
      box.setJustifyContent(this.justifyContent_0);
    if (isNotNull(this.alignItems_0))
      box.setAlignItems(this.alignItems_0);
    if (isNotNull(this.flexLayout))
      box.setLayout(this.flexLayout);
    if (this.flexGrow_0 >= 0)
      box.setFlexGrow(this.flexGrow_0);
    if (this.flexShrink_0 >= 0)
      box.setFlexShrink(this.flexShrink_0);
    if (jsNotEquals(null, this.flexBasis_0))
      box.setFlexBasis(this.flexBasis_0);
  }
}
;
_.createNative_2 = function createNative_5(){
  return (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).componentFactory_0().createFlexbox();
}
;
_.getFlexBasis = function getFlexBasis(){
  return this.flexBasis_0;
}
;
_.flexGrow_0 = 0;
_.flexShrink_0 = 0;
cbuccc.ATTR_ALIGN_ITEMS = 'alignItems';
cbuccc.ATTR_BASIS = 'flexBasis';
cbuccc.ATTR_DIRECTION = 'layout';
cbuccc.ATTR_GROW = 'flexGrow';
cbuccc.ATTR_JUSTIFY_CONTENT = 'justifyContent';
cbuccc.ATTR_SHRINK = 'flexShrink';
cbuccc.AUTO = 'auto';
cbuccc.TAG_1 = 'box';
cggl.Lcom_badu_ui_core_components_common_Box_2_classLit = createForClass('com.badu.ui.core.components.common', 'Box', 41, cggl.Lcom_badu_ui_core_components_StatelessWidget_2_classLit);
cbucl2.$clinit_Drawer = function $clinit_Drawer(){
  cbucl2.$clinit_Drawer = emptyMethod;
  cbuccc.$clinit_Box();
  {
    cbucl2.registerComponent_2();
  }
}
;
cbucl2.Drawer = function Drawer(attributes){
  cbucl2.$clinit_Drawer();
  cbuccc.Box.call(this, attributes);
  this.$init_10();
}
;
cbucl2.lambda$1_0 = function lambda$1_0(error_0){
  cbucl2.$clinit_Drawer();
  {
    (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().error_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['Unable to load template: ' + 'templates/core/components/drawer.bui', error_0]));
  }
}
;
cbucl2.registerComponent_2 = function registerComponent_2(){
  cbucl2.$clinit_Drawer();
  cbuc.registerFactory('drawer', new cbucl2.Drawer$ComponentFactoryImpl);
}
;
defineClass(205, 41, {10:1, 1:1}, cbucl2.Drawer);
_.$init_10 = function $init_10(){
}
;
_.lambda$0_0 = function lambda$0_0(context_1, widget_1){
  cbucl2.$clinit_Drawer();
  {
    this.render(context_1);
  }
}
;
_.OnBeforeRender = function OnBeforeRender_0(context){
}
;
_.build = function build_1(context){
  cbuc2.initialize();
  cbucu.loadFromTemplate(this, 'templates/core/components/drawer.bui', context).whenReady(new cbucl2.Drawer$lambda$0$Type(this, context)).whenError(new cbucl2.Drawer$lambda$1$Type).loadResource();
}
;
cbucl2.DRAWER_TEMPLATE = 'templates/core/components/drawer.bui';
cbucl2.TAG_2 = 'drawer';
cggl.Lcom_badu_ui_components_layout_Drawer_2_classLit = createForClass('com.badu.ui.components.layout', 'Drawer', 205, cggl.Lcom_badu_ui_core_components_common_Box_2_classLit);
cbucl2.$clinit_Drawer$ComponentFactoryImpl = function $clinit_Drawer$ComponentFactoryImpl(){
  cbucl2.$clinit_Drawer$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbucl2.Drawer$ComponentFactoryImpl = function Drawer$ComponentFactoryImpl(){
  cbucl2.$clinit_Drawer$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_11();
}
;
defineClass(206, 1, {38:1, 1:1}, cbucl2.Drawer$ComponentFactoryImpl);
_.$init_11 = function $init_11(){
}
;
_.createComponent = function createComponent_1(tagName, attributes){
  return new cbucl2.Drawer(attributes);
}
;
cggl.Lcom_badu_ui_components_layout_Drawer$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.components.layout', 'Drawer/ComponentFactoryImpl', 206, cggl.Ljava_lang_Object_2_classLit);
cbucl2.$clinit_Drawer$lambda$0$Type = function $clinit_Drawer$lambda$0$Type(){
  cbucl2.$clinit_Drawer$lambda$0$Type = emptyMethod;
}
;
cbucl2.Drawer$lambda$0$Type = function Drawer$lambda$0$Type($$outer_0, context_1){
  cbucl2.$clinit_Drawer$lambda$0$Type();
  this.$$outer_0 = $$outer_0;
  this.context_1 = context_1;
}
;
defineClass(207, 1, {1:1}, cbucl2.Drawer$lambda$0$Type);
_.OnReady = function OnReady_0(arg0){
  this.$$outer_0.lambda$0_0(this.context_1, arg0);
}
;
cggl.Lcom_badu_ui_components_layout_Drawer$lambda$0$Type_2_classLit = createForClass('com.badu.ui.components.layout', 'Drawer/lambda$0$Type', 207, cggl.Ljava_lang_Object_2_classLit);
cbucl2.$clinit_Drawer$lambda$1$Type = function $clinit_Drawer$lambda$1$Type(){
  cbucl2.$clinit_Drawer$lambda$1$Type = emptyMethod;
}
;
cbucl2.Drawer$lambda$1$Type = function Drawer$lambda$1$Type(){
  cbucl2.$clinit_Drawer$lambda$1$Type();
}
;
defineClass(208, 1, {1:1}, cbucl2.Drawer$lambda$1$Type);
_.OnError = function OnError_0(arg0){
  cbucl2.lambda$1_0(arg0);
}
;
cggl.Lcom_badu_ui_components_layout_Drawer$lambda$1$Type_2_classLit = createForClass('com.badu.ui.components.layout', 'Drawer/lambda$1$Type', 208, cggl.Ljava_lang_Object_2_classLit);
cbucm.$clinit_Menu = function $clinit_Menu(){
  cbucm.$clinit_Menu = emptyMethod;
  cbuccc.$clinit_Box();
  {
    cbucm.registerComponent_3();
  }
}
;
cbucm.Menu = function Menu(attributes){
  cbucm.$clinit_Menu();
  cbuccc.Box.call(this, cbucm.combineWithDefaults(attributes));
  this.$init_12();
}
;
cbucm.combineWithDefaults = function combineWithDefaults(attributes){
  var all;
  all = new ju.HashMap;
  if (isNotNull(attributes) && attributes.size() > 0) {
    all.putAll(attributes);
  }
  all.put('layout', (cbucca.$clinit_FlexLayout() , cbucca.vertical).name());
  return all;
}
;
cbucm.registerComponent_3 = function registerComponent_3(){
  cbucm.$clinit_Menu();
  cbuc.registerFactory('menu', new cbucm.Menu$ComponentFactoryImpl);
  cbucm.registerComponent_4();
}
;
defineClass(78, 41, {78:1, 10:1, 1:1}, cbucm.Menu);
_.$init_12 = function $init_12(){
}
;
_.OnBeforeRenderChildren = function OnBeforeRenderChildren_0(context, self_0){
  this.OnBeforeRenderChildren_0(context, castTo(self_0, 236));
}
;
_.OnBeforeRenderChildren_0 = function OnBeforeRenderChildren_1(context, self_0){
  context.setProperty_0('menu', this);
}
;
cbucm.TAG_3 = 'menu';
cggl.Lcom_badu_ui_components_menu_Menu_2_classLit = createForClass('com.badu.ui.components.menu', 'Menu', 78, cggl.Lcom_badu_ui_core_components_common_Box_2_classLit);
cbucm.$clinit_Menu$ComponentFactoryImpl = function $clinit_Menu$ComponentFactoryImpl(){
  cbucm.$clinit_Menu$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbucm.Menu$ComponentFactoryImpl = function Menu$ComponentFactoryImpl(){
  cbucm.$clinit_Menu$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_13();
}
;
defineClass(209, 1, {38:1, 1:1}, cbucm.Menu$ComponentFactoryImpl);
_.$init_13 = function $init_13(){
}
;
_.createComponent = function createComponent_2(tagName, attributes){
  return new cbucm.Menu(attributes);
}
;
cggl.Lcom_badu_ui_components_menu_Menu$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.components.menu', 'Menu/ComponentFactoryImpl', 209, cggl.Ljava_lang_Object_2_classLit);
cbucm.$clinit_MenuItem = function $clinit_MenuItem(){
  cbucm.$clinit_MenuItem = emptyMethod;
  cbuccc.$clinit_Box();
  {
    cbucm.registerComponent_4();
  }
}
;
cbucm.MenuItem = function MenuItem(attributes){
  cbucm.$clinit_MenuItem();
  cbuccc.Box.call(this, attributes);
  this.$init_14();
  this.initialize();
}
;
cbucm.registerComponent_4 = function registerComponent_4(){
  cbucm.$clinit_MenuItem();
  cbuc.registerFactory('menu-item', new cbucm.MenuItem$ComponentFactoryImpl);
}
;
defineClass(219, 41, {10:1, 1:1}, cbucm.MenuItem);
_.$init_14 = function $init_14(){
  this.menu = null;
}
;
_.OnAfterRender = function OnAfterRender_0(context){
  this.menu = castTo(context.getProperty('menu'), 78);
}
;
_.initialize = function initialize_0(){
  this.onclick_0 = new cbucm.MenuItem$0methodref$onItemClick$Type(this);
  this.onmouseover_0 = new cbucm.MenuItem$1methodref$onMouseOver$Type(this);
  this.onmouseout_0 = new cbucm.MenuItem$2methodref$onMouseOut$Type(this);
  this.setBorderBottom(new cbucca.BUIBorder((cbuc.$clinit_BUIPlatform() , cbuc.THEME).menuItemBorderWidth(), (cbuc.$clinit_BUIPlatform() , cbuc.THEME).menuItemBorderStyle(), (cbuc.$clinit_BUIPlatform() , cbuc.THEME).menuItemBorderColor()));
  this.setBackgroundColor((cbuc.$clinit_BUIPlatform() , cbuc.THEME).menuItemBgColor());
}
;
_.onItemClick = function onItemClick(){
  this.triggerUIEvent(this.getTriggerEvent(), this.getEventArgs());
}
;
_.onMouseOut = function onMouseOut(){
  this.setBackgroundColor((cbuc.$clinit_BUIPlatform() , cbuc.THEME).menuItemBgColor());
}
;
_.onMouseOver = function onMouseOver(){
  this.setBackgroundColor((cbuc.$clinit_BUIPlatform() , cbuc.THEME).menuItemActiveBgColor());
}
;
cbucm.TAG_4 = 'menu-item';
cggl.Lcom_badu_ui_components_menu_MenuItem_2_classLit = createForClass('com.badu.ui.components.menu', 'MenuItem', 219, cggl.Lcom_badu_ui_core_components_common_Box_2_classLit);
cbucce.$clinit_UIEvent = function $clinit_UIEvent(){
  cbucce.$clinit_UIEvent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_events_UIEvent_2_classLit = createForInterface('com.badu.ui.core.components.events', 'UIEvent');
cbucce.$clinit_OnClickEvent = function $clinit_OnClickEvent(){
  cbucce.$clinit_OnClickEvent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_events_OnClickEvent_2_classLit = createForInterface('com.badu.ui.core.components.events', 'OnClickEvent');
cbucm.$clinit_MenuItem$0methodref$onItemClick$Type = function $clinit_MenuItem$0methodref$onItemClick$Type(){
  cbucm.$clinit_MenuItem$0methodref$onItemClick$Type = emptyMethod;
}
;
cbucm.MenuItem$0methodref$onItemClick$Type = function MenuItem$0methodref$onItemClick$Type($$outer_0){
  cbucm.$clinit_MenuItem$0methodref$onItemClick$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(221, 1, {1:1}, cbucm.MenuItem$0methodref$onItemClick$Type);
_.onClick = function onClick(){
  this.$$outer_0.onItemClick();
}
;
cggl.Lcom_badu_ui_components_menu_MenuItem$0methodref$onItemClick$Type_2_classLit = createForClass('com.badu.ui.components.menu', 'MenuItem/0methodref$onItemClick$Type', 221, cggl.Ljava_lang_Object_2_classLit);
cbucce.$clinit_OnMouseEvent = function $clinit_OnMouseEvent(){
  cbucce.$clinit_OnMouseEvent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_events_OnMouseEvent_2_classLit = createForInterface('com.badu.ui.core.components.events', 'OnMouseEvent');
cbucce.$clinit_OnMouseOverEvent = function $clinit_OnMouseOverEvent(){
  cbucce.$clinit_OnMouseOverEvent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_events_OnMouseOverEvent_2_classLit = createForInterface('com.badu.ui.core.components.events', 'OnMouseOverEvent');
cbucm.$clinit_MenuItem$1methodref$onMouseOver$Type = function $clinit_MenuItem$1methodref$onMouseOver$Type(){
  cbucm.$clinit_MenuItem$1methodref$onMouseOver$Type = emptyMethod;
}
;
cbucm.MenuItem$1methodref$onMouseOver$Type = function MenuItem$1methodref$onMouseOver$Type($$outer_0){
  cbucm.$clinit_MenuItem$1methodref$onMouseOver$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(222, 1, {1:1}, cbucm.MenuItem$1methodref$onMouseOver$Type);
_.onMouseOver = function onMouseOver_0(){
  this.$$outer_0.onMouseOver();
}
;
cggl.Lcom_badu_ui_components_menu_MenuItem$1methodref$onMouseOver$Type_2_classLit = createForClass('com.badu.ui.components.menu', 'MenuItem/1methodref$onMouseOver$Type', 222, cggl.Ljava_lang_Object_2_classLit);
cbucce.$clinit_OnMouseOutEvent = function $clinit_OnMouseOutEvent(){
  cbucce.$clinit_OnMouseOutEvent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_events_OnMouseOutEvent_2_classLit = createForInterface('com.badu.ui.core.components.events', 'OnMouseOutEvent');
cbucm.$clinit_MenuItem$2methodref$onMouseOut$Type = function $clinit_MenuItem$2methodref$onMouseOut$Type(){
  cbucm.$clinit_MenuItem$2methodref$onMouseOut$Type = emptyMethod;
}
;
cbucm.MenuItem$2methodref$onMouseOut$Type = function MenuItem$2methodref$onMouseOut$Type($$outer_0){
  cbucm.$clinit_MenuItem$2methodref$onMouseOut$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(223, 1, {1:1}, cbucm.MenuItem$2methodref$onMouseOut$Type);
_.onMouseOut = function onMouseOut_0(){
  this.$$outer_0.onMouseOut();
}
;
cggl.Lcom_badu_ui_components_menu_MenuItem$2methodref$onMouseOut$Type_2_classLit = createForClass('com.badu.ui.components.menu', 'MenuItem/2methodref$onMouseOut$Type', 223, cggl.Ljava_lang_Object_2_classLit);
cbucm.$clinit_MenuItem$ComponentFactoryImpl = function $clinit_MenuItem$ComponentFactoryImpl(){
  cbucm.$clinit_MenuItem$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbucm.MenuItem$ComponentFactoryImpl = function MenuItem$ComponentFactoryImpl(){
  cbucm.$clinit_MenuItem$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_15();
}
;
defineClass(220, 1, {38:1, 1:1}, cbucm.MenuItem$ComponentFactoryImpl);
_.$init_15 = function $init_15(){
}
;
_.createComponent = function createComponent_3(tagName, attributes){
  return new cbucm.MenuItem(attributes);
}
;
cggl.Lcom_badu_ui_components_menu_MenuItem$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.components.menu', 'MenuItem/ComponentFactoryImpl', 220, cggl.Ljava_lang_Object_2_classLit);
cbuc.$clinit_Resource = function $clinit_Resource(){
  cbuc.$clinit_Resource = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_Resource_2_classLit = createForInterface('com.badu.ui.core', 'Resource');
cbuc.$clinit_AbstractResource = function $clinit_AbstractResource(){
  cbuc.$clinit_AbstractResource = emptyMethod;
  jl.$clinit_Object();
}
;
cbuc.AbstractResource = function AbstractResource(){
  cbuc.$clinit_AbstractResource();
  Object_0.call(this);
  this.$init_16();
}
;
defineClass(76, 1, {1:1});
_.$init_16 = function $init_16(){
}
;
_.whenError = function whenError(error){
  this.errorListener = error;
  return this;
}
;
_.whenReady = function whenReady(listener){
  this.successListener = listener;
  return this;
}
;
cggl.Lcom_badu_ui_core_AbstractResource_2_classLit = createForClass('com.badu.ui.core', 'AbstractResource', 76, cggl.Ljava_lang_Object_2_classLit);
cbuc.$clinit_BUIPlatform = function $clinit_BUIPlatform(){
  cbuc.$clinit_BUIPlatform = emptyMethod;
  jl.$clinit_Object();
}
;
cbuc.BUIPlatform = function BUIPlatform(){
  cbuc.$clinit_BUIPlatform();
  Object_0.call(this);
  this.$init_17();
}
;
defineClass(152, 1, {1:1});
_.$init_17 = function $init_17(){
}
;
_.addAppLifecycleListener = function addAppLifecycleListener(listener){
  cbuc.appLifecycleListener = listener;
}
;
cggl.Lcom_badu_ui_core_BUIPlatform_2_classLit = createForClass('com.badu.ui.core', 'BUIPlatform', 152, cggl.Ljava_lang_Object_2_classLit);
cbuc.$clinit_ComponentRegistry = function $clinit_ComponentRegistry(){
  cbuc.$clinit_ComponentRegistry = emptyMethod;
  jl.$clinit_Object();
  cbuc.MUTEX = new Object_0;
  cbuc.factories = new ju.HashMap;
}
;
cbuc.registerFactory = function registerFactory(componentName, factory){
  cbuc.$clinit_ComponentRegistry();
  {
    cbuc.MUTEX;
    cbuc.factories.put(componentName, factory);
  }
}
;
cbuc.resolveFactory = function resolveFactory(componentName){
  cbuc.$clinit_ComponentRegistry();
  {
    cbuc.MUTEX;
    return castTo(cbuc.factories.get(componentName), 38);
  }
}
;
defineClass(399, 1, {1:1});
cggl.Lcom_badu_ui_core_ComponentRegistry_2_classLit = createForClass('com.badu.ui.core', 'ComponentRegistry', 399, cggl.Ljava_lang_Object_2_classLit);
cbuc.$clinit_PlatformComponent = function $clinit_PlatformComponent(){
  cbuc.$clinit_PlatformComponent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_PlatformComponent_2_classLit = createForInterface('com.badu.ui.core', 'PlatformComponent');
cbuc.$clinit_PlatformComponentFactory = function $clinit_PlatformComponentFactory(){
  cbuc.$clinit_PlatformComponentFactory = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_PlatformComponentFactory_2_classLit = createForInterface('com.badu.ui.core', 'PlatformComponentFactory');
cbuc.$clinit_RenderContext = function $clinit_RenderContext(){
  cbuc.$clinit_RenderContext = emptyMethod;
  jl.$clinit_Object();
}
;
cbuc.RenderContext = function RenderContext(){
  cbuc.$clinit_RenderContext();
  Object_0.call(this);
  this.$init_18();
}
;
defineClass(88, 1, {1:1}, cbuc.RenderContext);
_.$init_18 = function $init_18(){
  this.properties = new ju.HashMap;
}
;
_.clone = function clone(){
  var copy;
  copy = new cbuc.RenderContext;
  copy.properties.putAll(this.properties);
  return copy;
}
;
_.getProperty = function getProperty(name_0){
  return this.getProperty_0(name_0, null);
}
;
_.getProperty_0 = function getProperty_0(name_0, defaultValue){
  var value_0;
  value_0 = this.properties.get(name_0);
  if (jsNotEquals(null, value_0)) {
    return value_0;
  }
  return defaultValue;
}
;
_.setProperty_0 = function setProperty(name_0, value_0){
  this.properties.put(name_0, value_0);
  return this;
}
;
cggl.Lcom_badu_ui_core_RenderContext_2_classLit = createForClass('com.badu.ui.core', 'RenderContext', 88, cggl.Ljava_lang_Object_2_classLit);
cbuc.$clinit_ResourceManager = function $clinit_ResourceManager(){
  cbuc.$clinit_ResourceManager = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_ResourceManager_2_classLit = createForInterface('com.badu.ui.core', 'ResourceManager');
cbuc.$clinit_ViewportManager = function $clinit_ViewportManager(){
  cbuc.$clinit_ViewportManager = emptyMethod;
}
;
cbuc.$parseUnitsToDPUnits = function $parseUnitsToDPUnits(this$static, width_0){
  if (jsNotEquals(null, width_0) && jl.length__I__devirtual$_0(width_0) > 2) {
    if (jl.endsWith_Ljava_lang_String__Z__devirtual$(width_0, 'px')) {
      return this$static.calculateDPSize(jl.parseInt_1(jl.substring_II_Ljava_lang_String___devirtual$(width_0, 0, jl.length__I__devirtual$_0(width_0) - jl.length__I__devirtual$_0('px'))));
    }
     else if (jl.endsWith_Ljava_lang_String__Z__devirtual$(width_0, 'dp')) {
      return jl.parseInt_1(jl.substring_II_Ljava_lang_String___devirtual$(width_0, 0, jl.length__I__devirtual$_0(width_0) - jl.length__I__devirtual$_0('dp')));
    }
     else {
      return jl.parseInt_1(width_0);
    }
  }
  return 0;
}
;
cbuc.UNIT_DP = 'dp';
cbuc.UNIT_PIXEL = 'px';
cggl.Lcom_badu_ui_core_ViewportManager_2_classLit = createForInterface('com.badu.ui.core', 'ViewportManager');
jl.$clinit_Enum = function $clinit_Enum(){
  jl.$clinit_Enum = emptyMethod;
  jl.$clinit_Object();
}
;
function Enum(name_0, ordinal){
  jl.$clinit_Enum();
  Object_0.call(this);
  this.$init_19();
  this.name_0 = name_0;
  this.ordinal_0 = ordinal;
}

function createValueOfMap(enumConstants){
  jl.$clinit_Enum();
  var result, value_0, value$array, value$index, value$max;
  result = createObject();
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    jl.put0(result, ':' + value_0.name(), value_0);
  }
  return result;
}

jl.get0 = function get0(map_0, name_0){
  return map_0[name_0];
}
;
jl.put0 = function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}
;
function valueOf(map_0, name_0){
  jl.$clinit_Enum();
  var result;
  ji2.checkNotNull_0(name_0);
  result = jl.get0(map_0, ':' + name_0);
  ji2.checkCriticalArgument_1(isNotNull(result), 'Enum constant undefined: %s', stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, [name_0]));
  return result;
}

defineClass(15, 1, {3:1, 13:1, 15:1, 1:1});
_.$init_19 = function $init_19(){
}
;
_.compareTo_0 = function compareTo_0(other){
  return this.compareTo(castTo(other, 15));
}
;
_.compareTo = function compareTo(other){
  return this.ordinal_0 - castTo(other, 15).ordinal_0;
}
;
_.equals = function equals_0(other){
  return this === other;
}
;
_.equals_0 = function(other){
  return this.equals(other);
}
;
_.hashCode = function hashCode_1(){
  return getClassPrototype(1).hashCode_0.call(this);
}
;
_.hashCode_0 = function(){
  return this.hashCode();
}
;
_.name = function name_1(){
  return jsNotEquals(this.name_0, null)?this.name_0:'' + this.ordinal_0;
}
;
_.ordinal = function ordinal_0(){
  return this.ordinal_0;
}
;
_.toString = function toString_2(){
  return this.name();
}
;
_.toString_0 = function(){
  return this.toString();
}
;
_.ordinal_0 = 0;
cggl.Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 15, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_AlignItems = function $clinit_AlignItems(){
  cbucca.$clinit_AlignItems = emptyMethod;
  jl.$clinit_Enum();
  cbucca.flexStart = new cbucca.AlignItems('flexStart', 0);
  cbucca.flexEnd = new cbucca.AlignItems('flexEnd', 1);
  cbucca.center = new cbucca.AlignItems('center', 2);
  cbucca.stretch = new cbucca.AlignItems('stretch', 3);
  cbucca.baseline = new cbucca.AlignItems('baseline', 4);
}
;
cbucca.AlignItems = function AlignItems(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_20();
}
;
cbucca.safeEnum = function safeEnum(value_0, defaultValue){
  cbucca.$clinit_AlignItems();
  var e, e$array, e$index, e$max;
  if (jsNotEquals(null, value_0)) {
    for (e$array = cbucca.values_0() , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
      e = e$array[e$index];
      if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(e.name(), value_0)) {
        return e;
      }
    }
  }
  return null;
}
;
cbucca.valueOf_0 = function valueOf_0(name_0){
  cbucca.$clinit_AlignItems();
  return valueOf((cbucca.$clinit_AlignItems$Map() , cbucca.$MAP), name_0);
}
;
cbucca.values_0 = function values_0(){
  cbucca.$clinit_AlignItems();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_core_components_attributes_AlignItems_2_classLit, 1), {3:1, 1:1, 4:1}, 36, 0, [cbucca.flexStart, cbucca.flexEnd, cbucca.center, cbucca.stretch, cbucca.baseline]);
}
;
defineClass(36, 15, {36:1, 3:1, 13:1, 15:1, 1:1}, cbucca.AlignItems);
_.$init_20 = function $init_20(){
}
;
cggl.Lcom_badu_ui_core_components_attributes_AlignItems_2_classLit = createForEnum('com.badu.ui.core.components.attributes', 'AlignItems', 36, cggl.Ljava_lang_Enum_2_classLit, cbucca.values_0, cbucca.valueOf_0);
cbucca.$clinit_AlignItems$Map = function $clinit_AlignItems$Map(){
  cbucca.$clinit_AlignItems$Map = emptyMethod;
  cbucca.$MAP = createValueOfMap(cbucca.values_0());
}
;
defineClass(496, 1, {1:1});
cggl.Lcom_badu_ui_core_components_attributes_AlignItems$Map_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'AlignItems/Map', 496, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_BUIBorder = function $clinit_BUIBorder(){
  cbucca.$clinit_BUIBorder = emptyMethod;
  jl.$clinit_Object();
}
;
cbucca.BUIBorder = function BUIBorder(width_0, style, color_0){
  cbucca.$clinit_BUIBorder();
  Object_0.call(this);
  this.$init_21();
  this.width_0 = width_0;
  this.style_0 = style;
  this.color_0 = color_0;
}
;
cbucca.fromString = function fromString(border){
  cbucca.$clinit_BUIBorder();
  var parts;
  parts = jl.split_Ljava_lang_String___Ljava_lang_String___devirtual$(border, ' ');
  if (jsNotEquals(null, parts) && parts.length == 3) {
    return new cbucca.BUIBorder((cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getViewportManager().parseUnitsToDPUnits(parts[0]), cbucca.fromString_1(parts[1]), cbucca.fromString_0(parts[2]));
  }
  throw toJs(new jl.IllegalArgumentException_0('Unexpected border value: ' + border + ". The border value expected in format: 'WIDTH STYLE COLOR'. Example: 1 solid #000000"));
}
;
defineClass(97, 1, {1:1}, cbucca.BUIBorder);
_.$init_21 = function $init_21(){
}
;
_.asString = function asString(){
  return (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getViewportManager().calculatePixelSize(this.width_0) + 'px' + ' ' + this.style_0.name() + ' ' + this.color_0.asString();
}
;
_.getWidth = function getWidth_0(){
  return this.width_0;
}
;
_.width_0 = 0;
cggl.Lcom_badu_ui_core_components_attributes_BUIBorder_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'BUIBorder', 97, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_BUIColor = function $clinit_BUIColor(){
  cbucca.$clinit_BUIColor = emptyMethod;
  jl.$clinit_Object();
}
;
cbucca.BUIColor = function BUIColor(color_0){
  Object_0.call(this);
  this.$init_22();
  this.color_0 = color_0;
}
;
cbucca.fromString_0 = function fromString_0(color_0){
  cbucca.$clinit_BUIColor();
  return new cbucca.BUIColor(color_0);
}
;
defineClass(180, 1, {1:1}, cbucca.BUIColor);
_.$init_22 = function $init_22(){
}
;
_.asString = function asString_0(){
  return this.color_0;
}
;
cggl.Lcom_badu_ui_core_components_attributes_BUIColor_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'BUIColor', 180, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_BorderStyle = function $clinit_BorderStyle(){
  cbucca.$clinit_BorderStyle = emptyMethod;
  jl.$clinit_Enum();
  cbucca.solid = new cbucca.BorderStyle('solid', 0);
}
;
cbucca.BorderStyle = function BorderStyle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_23();
}
;
cbucca.fromString_1 = function fromString_1(style){
  cbucca.$clinit_BorderStyle();
  var s, s$array, s$index, s$max;
  for (s$array = cbucca.values_1() , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(s.name(), style))
      return s;
  }
  return cbucca.solid;
}
;
cbucca.valueOf_1 = function valueOf_1(name_0){
  cbucca.$clinit_BorderStyle();
  return valueOf((cbucca.$clinit_BorderStyle$Map() , cbucca.$MAP_0), name_0);
}
;
cbucca.values_1 = function values_1(){
  cbucca.$clinit_BorderStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_core_components_attributes_BorderStyle_2_classLit, 1), {3:1, 1:1, 4:1}, 74, 0, [cbucca.solid]);
}
;
defineClass(74, 15, {74:1, 3:1, 13:1, 15:1, 1:1}, cbucca.BorderStyle);
_.$init_23 = function $init_23(){
}
;
cggl.Lcom_badu_ui_core_components_attributes_BorderStyle_2_classLit = createForEnum('com.badu.ui.core.components.attributes', 'BorderStyle', 74, cggl.Ljava_lang_Enum_2_classLit, cbucca.values_1, cbucca.valueOf_1);
cbucca.$clinit_BorderStyle$Map = function $clinit_BorderStyle$Map(){
  cbucca.$clinit_BorderStyle$Map = emptyMethod;
  cbucca.$MAP_0 = createValueOfMap(cbucca.values_1());
}
;
defineClass(359, 1, {1:1});
cggl.Lcom_badu_ui_core_components_attributes_BorderStyle$Map_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'BorderStyle/Map', 359, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_FlexLayout = function $clinit_FlexLayout(){
  cbucca.$clinit_FlexLayout = emptyMethod;
  jl.$clinit_Enum();
  cbucca.horizontal = new cbucca.FlexLayout('horizontal', 0);
  cbucca.vertical = new cbucca.FlexLayout('vertical', 1);
  cbucca.horizontalReverse = new cbucca.FlexLayout('horizontalReverse', 2);
  cbucca.verticalReverse = new cbucca.FlexLayout('verticalReverse', 3);
}
;
cbucca.FlexLayout = function FlexLayout(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_24();
}
;
cbucca.safeEnum_0 = function safeEnum_0(value_0, defaultValue){
  cbucca.$clinit_FlexLayout();
  var e, e$array, e$index, e$max;
  if (jsNotEquals(null, value_0)) {
    for (e$array = cbucca.values_2() , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
      e = e$array[e$index];
      if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(e.name(), value_0)) {
        return e;
      }
    }
  }
  return null;
}
;
cbucca.valueOf_2 = function valueOf_2(name_0){
  cbucca.$clinit_FlexLayout();
  return valueOf((cbucca.$clinit_FlexLayout$Map() , cbucca.$MAP_1), name_0);
}
;
cbucca.values_2 = function values_2(){
  cbucca.$clinit_FlexLayout();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_core_components_attributes_FlexLayout_2_classLit, 1), {3:1, 1:1, 4:1}, 43, 0, [cbucca.horizontal, cbucca.vertical, cbucca.horizontalReverse, cbucca.verticalReverse]);
}
;
defineClass(43, 15, {43:1, 3:1, 13:1, 15:1, 1:1}, cbucca.FlexLayout);
_.$init_24 = function $init_24(){
}
;
cggl.Lcom_badu_ui_core_components_attributes_FlexLayout_2_classLit = createForEnum('com.badu.ui.core.components.attributes', 'FlexLayout', 43, cggl.Ljava_lang_Enum_2_classLit, cbucca.values_2, cbucca.valueOf_2);
cbucca.$clinit_FlexLayout$Map = function $clinit_FlexLayout$Map(){
  cbucca.$clinit_FlexLayout$Map = emptyMethod;
  cbucca.$MAP_1 = createValueOfMap(cbucca.values_2());
}
;
defineClass(497, 1, {1:1});
cggl.Lcom_badu_ui_core_components_attributes_FlexLayout$Map_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'FlexLayout/Map', 497, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_JustifyContent = function $clinit_JustifyContent(){
  cbucca.$clinit_JustifyContent = emptyMethod;
  jl.$clinit_Enum();
  cbucca.flexStart_0 = new cbucca.JustifyContent('flexStart', 0);
  cbucca.flexEnd_0 = new cbucca.JustifyContent('flexEnd', 1);
  cbucca.center_0 = new cbucca.JustifyContent('center', 2);
  cbucca.spaceBetween = new cbucca.JustifyContent('spaceBetween', 3);
  cbucca.spaceAround = new cbucca.JustifyContent('spaceAround', 4);
  cbucca.spaceEvenly = new cbucca.JustifyContent('spaceEvenly', 5);
  cbucca.stretch_0 = new cbucca.JustifyContent('stretch', 6);
}
;
cbucca.JustifyContent = function JustifyContent(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_25();
}
;
cbucca.safeEnum_1 = function safeEnum_1(value_0, defaultValue){
  cbucca.$clinit_JustifyContent();
  var e, e$array, e$index, e$max;
  if (jsNotEquals(null, value_0)) {
    for (e$array = cbucca.values_3() , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
      e = e$array[e$index];
      if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(e.name(), value_0)) {
        return e;
      }
    }
  }
  return null;
}
;
cbucca.valueOf_3 = function valueOf_3(name_0){
  cbucca.$clinit_JustifyContent();
  return valueOf((cbucca.$clinit_JustifyContent$Map() , cbucca.$MAP_2), name_0);
}
;
cbucca.values_3 = function values_3(){
  cbucca.$clinit_JustifyContent();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_core_components_attributes_JustifyContent_2_classLit, 1), {3:1, 1:1, 4:1}, 25, 0, [cbucca.flexStart_0, cbucca.flexEnd_0, cbucca.center_0, cbucca.spaceBetween, cbucca.spaceAround, cbucca.spaceEvenly, cbucca.stretch_0]);
}
;
defineClass(25, 15, {25:1, 3:1, 13:1, 15:1, 1:1}, cbucca.JustifyContent);
_.$init_25 = function $init_25(){
}
;
cggl.Lcom_badu_ui_core_components_attributes_JustifyContent_2_classLit = createForEnum('com.badu.ui.core.components.attributes', 'JustifyContent', 25, cggl.Ljava_lang_Enum_2_classLit, cbucca.values_3, cbucca.valueOf_3);
cbucca.$clinit_JustifyContent$Map = function $clinit_JustifyContent$Map(){
  cbucca.$clinit_JustifyContent$Map = emptyMethod;
  cbucca.$MAP_2 = createValueOfMap(cbucca.values_3());
}
;
defineClass(495, 1, {1:1});
cggl.Lcom_badu_ui_core_components_attributes_JustifyContent$Map_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'JustifyContent/Map', 495, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_VerticalAlign = function $clinit_VerticalAlign(){
  cbucca.$clinit_VerticalAlign = emptyMethod;
  jl.$clinit_Enum();
  cbucca.top_0 = new cbucca.VerticalAlign('top', 0);
  cbucca.center_1 = new cbucca.VerticalAlign('center', 1);
  cbucca.bottom = new cbucca.VerticalAlign('bottom', 2);
}
;
cbucca.VerticalAlign = function VerticalAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_26();
}
;
cbucca.safeEnum_2 = function safeEnum_2(value_0, defaultValue){
  cbucca.$clinit_VerticalAlign();
  var e, e$array, e$index, e$max;
  if (jsNotEquals(null, value_0)) {
    for (e$array = cbucca.values_4() , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
      e = e$array[e$index];
      if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(e.name(), value_0)) {
        return e;
      }
    }
  }
  return null;
}
;
cbucca.valueOf_4 = function valueOf_4(name_0){
  cbucca.$clinit_VerticalAlign();
  return valueOf((cbucca.$clinit_VerticalAlign$Map() , cbucca.$MAP_3), name_0);
}
;
cbucca.values_4 = function values_4(){
  cbucca.$clinit_VerticalAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_core_components_attributes_VerticalAlign_2_classLit, 1), {3:1, 1:1, 4:1}, 52, 0, [cbucca.top_0, cbucca.center_1, cbucca.bottom]);
}
;
defineClass(52, 15, {52:1, 3:1, 13:1, 15:1, 1:1}, cbucca.VerticalAlign);
_.$init_26 = function $init_26(){
}
;
cggl.Lcom_badu_ui_core_components_attributes_VerticalAlign_2_classLit = createForEnum('com.badu.ui.core.components.attributes', 'VerticalAlign', 52, cggl.Ljava_lang_Enum_2_classLit, cbucca.values_4, cbucca.valueOf_4);
cbucca.$clinit_VerticalAlign$Map = function $clinit_VerticalAlign$Map(){
  cbucca.$clinit_VerticalAlign$Map = emptyMethod;
  cbucca.$MAP_3 = createValueOfMap(cbucca.values_4());
}
;
defineClass(363, 1, {1:1});
cggl.Lcom_badu_ui_core_components_attributes_VerticalAlign$Map_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'VerticalAlign/Map', 363, cggl.Ljava_lang_Object_2_classLit);
cbucca.$clinit_ZOrder = function $clinit_ZOrder(){
  cbucca.$clinit_ZOrder = emptyMethod;
  jl.$clinit_Enum();
  cbucca.Low = new cbucca.ZOrder('Low', 0);
  cbucca.Medium = new cbucca.ZOrder('Medium', 1);
  cbucca.High = new cbucca.ZOrder('High', 2);
}
;
cbucca.ZOrder = function ZOrder(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_27();
}
;
cbucca.safeEnum_3 = function safeEnum_3(value_0, defaultValue){
  cbucca.$clinit_ZOrder();
  var e, e$array, e$index, e$max;
  if (jsNotEquals(null, value_0)) {
    for (e$array = cbucca.values_5() , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
      e = e$array[e$index];
      if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(e.name(), value_0)) {
        return e;
      }
    }
  }
  return null;
}
;
cbucca.valueOf_5 = function valueOf_5(name_0){
  cbucca.$clinit_ZOrder();
  return valueOf((cbucca.$clinit_ZOrder$Map() , cbucca.$MAP_4), name_0);
}
;
cbucca.values_5 = function values_5(){
  cbucca.$clinit_ZOrder();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_core_components_attributes_ZOrder_2_classLit, 1), {3:1, 1:1, 4:1}, 51, 0, [cbucca.Low, cbucca.Medium, cbucca.High]);
}
;
defineClass(51, 15, {51:1, 3:1, 13:1, 15:1, 1:1}, cbucca.ZOrder);
_.$init_27 = function $init_27(){
}
;
cggl.Lcom_badu_ui_core_components_attributes_ZOrder_2_classLit = createForEnum('com.badu.ui.core.components.attributes', 'ZOrder', 51, cggl.Ljava_lang_Enum_2_classLit, cbucca.values_5, cbucca.valueOf_5);
cbucca.$clinit_ZOrder$Map = function $clinit_ZOrder$Map(){
  cbucca.$clinit_ZOrder$Map = emptyMethod;
  cbucca.$MAP_4 = createValueOfMap(cbucca.values_5());
}
;
defineClass(362, 1, {1:1});
cggl.Lcom_badu_ui_core_components_attributes_ZOrder$Map_2_classLit = createForClass('com.badu.ui.core.components.attributes', 'ZOrder/Map', 362, cggl.Ljava_lang_Object_2_classLit);
cbuccc.$clinit_Box$ComponentFactoryImpl = function $clinit_Box$ComponentFactoryImpl(){
  cbuccc.$clinit_Box$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbuccc.Box$ComponentFactoryImpl = function Box$ComponentFactoryImpl(){
  cbuccc.$clinit_Box$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_28();
}
;
defineClass(197, 1, {38:1, 1:1}, cbuccc.Box$ComponentFactoryImpl);
_.$init_28 = function $init_28(){
}
;
_.createComponent = function createComponent_4(tagName, attributes){
  return new cbuccc.Box(attributes);
}
;
cggl.Lcom_badu_ui_core_components_common_Box$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.core.components.common', 'Box/ComponentFactoryImpl', 197, cggl.Ljava_lang_Object_2_classLit);
cbuccc.$clinit_Slot = function $clinit_Slot(){
  cbuccc.$clinit_Slot = emptyMethod;
  cbuccc.$clinit_Box();
  {
    cbuccc.registerComponent_5();
  }
}
;
cbuccc.Slot = function Slot(attributes){
  cbuccc.$clinit_Slot();
  cbuccc.Box.call(this, attributes);
  this.$init_29();
  this.name_0 = castToString(attributes.get('name'));
}
;
cbuccc.registerComponent_5 = function registerComponent_5(){
  cbuccc.$clinit_Slot();
  cbuc.registerFactory('slot', new cbuccc.Slot$ComponentFactoryImpl);
}
;
defineClass(198, 41, {10:1, 1:1}, cbuccc.Slot);
_.$init_29 = function $init_29(){
}
;
_.getName = function getName(){
  return this.name_0;
}
;
cbuccc.ATTR_NAME = 'name';
cbuccc.TAG_5 = 'slot';
cggl.Lcom_badu_ui_core_components_common_Slot_2_classLit = createForClass('com.badu.ui.core.components.common', 'Slot', 198, cggl.Lcom_badu_ui_core_components_common_Box_2_classLit);
cbuccc.$clinit_Slot$ComponentFactoryImpl = function $clinit_Slot$ComponentFactoryImpl(){
  cbuccc.$clinit_Slot$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbuccc.Slot$ComponentFactoryImpl = function Slot$ComponentFactoryImpl(){
  cbuccc.$clinit_Slot$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_30();
}
;
defineClass(199, 1, {38:1, 1:1}, cbuccc.Slot$ComponentFactoryImpl);
_.$init_30 = function $init_30(){
}
;
_.createComponent = function createComponent_5(tagName, attributes){
  return new cbuccc.Slot(attributes);
}
;
cggl.Lcom_badu_ui_core_components_common_Slot$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.core.components.common', 'Slot/ComponentFactoryImpl', 199, cggl.Ljava_lang_Object_2_classLit);
cbuccc.$clinit_SlotTarget = function $clinit_SlotTarget(){
  cbuccc.$clinit_SlotTarget = emptyMethod;
  cbuccc.$clinit_Box();
  {
    cbuccc.registerComponent_6();
  }
}
;
cbuccc.SlotTarget = function SlotTarget(attributes){
  cbuccc.$clinit_SlotTarget();
  cbuccc.Box.call(this, attributes);
  this.$init_31();
  this.name_0 = castToString(attributes.get('name'));
}
;
cbuccc.registerComponent_6 = function registerComponent_6(){
  cbuccc.$clinit_SlotTarget();
  cbuc.registerFactory('slotTarget', new cbuccc.SlotTarget$ComponentFactoryImpl);
}
;
defineClass(64, 41, {10:1, 64:1, 1:1}, cbuccc.SlotTarget);
_.$init_31 = function $init_31(){
}
;
_.getName = function getName_0(){
  return this.name_0;
}
;
cbuccc.ATTR_NAME_0 = 'name';
cbuccc.TAG_6 = 'slotTarget';
cggl.Lcom_badu_ui_core_components_common_SlotTarget_2_classLit = createForClass('com.badu.ui.core.components.common', 'SlotTarget', 64, cggl.Lcom_badu_ui_core_components_common_Box_2_classLit);
cbuccc.$clinit_SlotTarget$ComponentFactoryImpl = function $clinit_SlotTarget$ComponentFactoryImpl(){
  cbuccc.$clinit_SlotTarget$ComponentFactoryImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cbuccc.SlotTarget$ComponentFactoryImpl = function SlotTarget$ComponentFactoryImpl(){
  cbuccc.$clinit_SlotTarget$ComponentFactoryImpl();
  Object_0.call(this);
  this.$init_32();
}
;
defineClass(200, 1, {38:1, 1:1}, cbuccc.SlotTarget$ComponentFactoryImpl);
_.$init_32 = function $init_32(){
}
;
_.createComponent = function createComponent_6(tagName, attributes){
  return new cbuccc.SlotTarget(attributes);
}
;
cggl.Lcom_badu_ui_core_components_common_SlotTarget$ComponentFactoryImpl_2_classLit = createForClass('com.badu.ui.core.components.common', 'SlotTarget/ComponentFactoryImpl', 200, cggl.Ljava_lang_Object_2_classLit);
cbucce.$clinit_OnMouseMoveEvent = function $clinit_OnMouseMoveEvent(){
  cbucce.$clinit_OnMouseMoveEvent = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_events_OnMouseMoveEvent_2_classLit = createForInterface('com.badu.ui.core.components.events', 'OnMouseMoveEvent');
cbuccp.$clinit_FlexboxWidget = function $clinit_FlexboxWidget(){
  cbuccp.$clinit_FlexboxWidget = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_platform_FlexboxWidget_2_classLit = createForInterface('com.badu.ui.core.components.platform', 'FlexboxWidget');
cbuccp.$clinit_ImageWidget = function $clinit_ImageWidget(){
  cbuccp.$clinit_ImageWidget = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_platform_ImageWidget_2_classLit = createForInterface('com.badu.ui.core.components.platform', 'ImageWidget');
cbuccp.$clinit_TextWidget = function $clinit_TextWidget(){
  cbuccp.$clinit_TextWidget = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_components_platform_TextWidget_2_classLit = createForInterface('com.badu.ui.core.components.platform', 'TextWidget');
cbuce.$clinit_ResourceException = function $clinit_ResourceException(){
  cbuce.$clinit_ResourceException = emptyMethod;
  jl.$clinit_Exception();
}
;
cbuce.ResourceException = function ResourceException(msg){
  cbuce.$clinit_ResourceException();
  jl.Exception_1.call(this, msg);
  this.$init_35();
}
;
cbuce.ResourceException_0 = function ResourceException_0(msg, e){
  cbuce.$clinit_ResourceException();
  jl.Exception_2.call(this, msg, e);
  this.$init_35();
}
;
defineClass(53, 5, {3:1, 5:1, 1:1, 6:1}, cbuce.ResourceException, cbuce.ResourceException_0);
_.$init_35 = function $init_35(){
}
;
cggl.Lcom_badu_ui_core_exceptions_ResourceException_2_classLit = createForClass('com.badu.ui.core.exceptions', 'ResourceException', 53, cggl.Ljava_lang_Exception_2_classLit);
cbuce.$clinit_TemplateParsingException = function $clinit_TemplateParsingException(){
  cbuce.$clinit_TemplateParsingException = emptyMethod;
  jl.$clinit_Exception();
}
;
cbuce.TemplateParsingException = function TemplateParsingException(msg){
  cbuce.$clinit_TemplateParsingException();
  jl.Exception_1.call(this, msg);
  this.$init_36();
}
;
defineClass(65, 5, {65:1, 3:1, 5:1, 1:1, 6:1}, cbuce.TemplateParsingException);
_.$init_36 = function $init_36(){
}
;
cggl.Lcom_badu_ui_core_exceptions_TemplateParsingException_2_classLit = createForClass('com.badu.ui.core.exceptions', 'TemplateParsingException', 65, cggl.Ljava_lang_Exception_2_classLit);
cbuct.$clinit_ITheme = function $clinit_ITheme(){
  cbuct.$clinit_ITheme = emptyMethod;
  cbuct.DEFAULT_PANEL_BG_COLOR = cbucca.fromString_0('#eaeaea');
  cbuct.DEFAULT_MENU_ITEM_BORDER_COLOR = cbucca.fromString_0('#DADADA');
  cbuct.DEFAULT_MENU_ITEM_ACTIVE_COLOR = cbucca.fromString_0('#DADADA');
  cbuct.DEFAULT_MENU_ITEM_BORDER_STYLE = (cbucca.$clinit_BorderStyle() , cbucca.solid);
}
;
cbuct.$menuItemActiveBgColor = function $menuItemActiveBgColor(this$static){
  return cbuct.DEFAULT_MENU_ITEM_ACTIVE_COLOR;
}
;
cbuct.$menuItemBgColor = function $menuItemBgColor(this$static){
  return cbuct.DEFAULT_PANEL_BG_COLOR;
}
;
cbuct.$menuItemBorderColor = function $menuItemBorderColor(this$static){
  return cbuct.DEFAULT_MENU_ITEM_BORDER_COLOR;
}
;
cbuct.$menuItemBorderStyle = function $menuItemBorderStyle(this$static){
  return cbuct.DEFAULT_MENU_ITEM_BORDER_STYLE;
}
;
cbuct.$menuItemBorderWidth = function $menuItemBorderWidth(this$static){
  return 1;
}
;
cbuct.DEFAULT_MENU_ITEM_BORDER_WIDTH = 1;
cggl.Lcom_badu_ui_core_themes_ITheme_2_classLit = createForInterface('com.badu.ui.core.themes', 'ITheme');
cbuct.$clinit_DefaultTheme = function $clinit_DefaultTheme(){
  cbuct.$clinit_DefaultTheme = emptyMethod;
  jl.$clinit_Object();
  cbuct.$clinit_ITheme();
}
;
cbuct.DefaultTheme = function DefaultTheme(){
  cbuct.$clinit_DefaultTheme();
  Object_0.call(this);
  this.$init_37();
}
;
defineClass(127, 1, {1:1}, cbuct.DefaultTheme);
_.$init_37 = function $init_37(){
}
;
_.menuItemActiveBgColor = function menuItemActiveBgColor(){
  return cbuct.$menuItemActiveBgColor(this);
}
;
_.menuItemBgColor = function menuItemBgColor(){
  return cbuct.$menuItemBgColor(this);
}
;
_.menuItemBorderColor = function menuItemBorderColor(){
  return cbuct.$menuItemBorderColor(this);
}
;
_.menuItemBorderStyle = function menuItemBorderStyle(){
  return cbuct.$menuItemBorderStyle(this);
}
;
_.menuItemBorderWidth = function menuItemBorderWidth(){
  return cbuct.$menuItemBorderWidth(this);
}
;
cggl.Lcom_badu_ui_core_themes_DefaultTheme_2_classLit = createForClass('com.badu.ui.core.themes', 'DefaultTheme', 127, cggl.Ljava_lang_Object_2_classLit);
cbucu.$clinit_AttributeUtils = function $clinit_AttributeUtils(){
  cbucu.$clinit_AttributeUtils = emptyMethod;
  jl.$clinit_Object();
}
;
cbucu.isEmpty = function isEmpty(text_0){
  cbucu.$clinit_AttributeUtils();
  if (jsEquals(null, text_0)) {
    return true;
  }
  return jl.length__I__devirtual$_0(jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(text_0, '\\s+', '')) == 0?true:false;
}
;
cbucu.isNumeric = function isNumeric(str){
  cbucu.$clinit_AttributeUtils();
  return jl.matches_Ljava_lang_String__Z__devirtual$(str, '-?\\d+(\\.\\d+)?');
}
;
cbucu.safeInt = function safeInt(value_0, defaultValue){
  cbucu.$clinit_AttributeUtils();
  var e;
  if (jsNotEquals(null, value_0) && jl.length__I__devirtual$_0(value_0) > 0) {
    try {
      return jl.valueOf_15(value_0).intValue();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
      }
       else 
        throw toJs($e0);
    }
  }
  return defaultValue;
}
;
defineClass(398, 1, {1:1});
cggl.Lcom_badu_ui_core_utils_AttributeUtils_2_classLit = createForClass('com.badu.ui.core.utils', 'AttributeUtils', 398, cggl.Ljava_lang_Object_2_classLit);
cbucu.$clinit_PlatformLogger = function $clinit_PlatformLogger(){
  cbucu.$clinit_PlatformLogger = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_utils_PlatformLogger_2_classLit = createForInterface('com.badu.ui.core.utils', 'PlatformLogger');
cbucu.$clinit_TemplateParser = function $clinit_TemplateParser(){
  cbucu.$clinit_TemplateParser = emptyMethod;
  jl.$clinit_Object();
}
;
cbucu.loadFromTemplate = function loadFromTemplate(widget, template, context){
  cbucu.$clinit_TemplateParser();
  return new cbucu.TemplateParser$1(template, widget, context);
}
;
cbucu.traverseTreeNode = function traverseTreeNode(widget, rootNode, context){
  cbucu.$clinit_TemplateParser();
  var childNode, childNode$iterator, children, factory, rootWidget, slot, slotName;
  if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$('slot', rootNode.getTagName())) {
    slotName = castToString(rootNode.getAttributes().get('name'));
    if (jsNotEquals(null, slotName) && jl.length__I__devirtual$_0(slotName) > 0) {
      slot = castTo(context.getProperty(slotName), 64);
      if (isNull(slot)) {
        children = rootNode.getChildren();
        for (childNode$iterator = children.iterator(); childNode$iterator.hasNext_0();) {
          childNode = castTo(childNode$iterator.next_2(), 235);
          cbucu.traverseTreeNode(slot, childNode, context);
        }
      }
       else {
        (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().error_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ["Unknown Slot tag with target name '" + slotName + "'"]));
      }
    }
     else {
      (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().error_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['Slot tag require target name']));
    }
  }
   else {
    factory = cbuc.resolveFactory(rootNode.getTagName());
    if (isNull(factory))
      throw toJs(new cbuce.TemplateParsingException("Unknown element with name '" + rootNode.getTagName() + "'"));
    rootWidget = factory.createComponent(rootNode.getTagName(), rootNode.getAttributes());
    children = rootNode.getChildren();
    for (childNode$iterator = children.iterator(); childNode$iterator.hasNext_0();) {
      childNode = castTo(childNode$iterator.next_2(), 235);
      cbucu.traverseTreeNode(rootWidget, childNode, context);
    }
    widget.addChild(rootWidget);
    if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$('slotTarget', rootNode.getTagName())) {
      slot = castTo(rootWidget, 64);
      context.setProperty_0(slot.getName(), slot);
    }
  }
}
;
defineClass(361, 1, {1:1});
cggl.Lcom_badu_ui_core_utils_TemplateParser_2_classLit = createForClass('com.badu.ui.core.utils', 'TemplateParser', 361, cggl.Ljava_lang_Object_2_classLit);
cbucu.$clinit_TemplateParser$1 = function $clinit_TemplateParser$1(){
  cbucu.$clinit_TemplateParser$1 = emptyMethod;
  cbuc.$clinit_AbstractResource();
}
;
cbucu.TemplateParser$1 = function TemplateParser$1(val$template, val$widget, val$context){
  cbucu.$clinit_TemplateParser$1();
  this.val$template1 = val$template;
  this.val$widget2 = val$widget;
  this.val$context3 = val$context;
  cbuc.AbstractResource.call(this);
  this.$init_38();
}
;
cbucu.lambda$0_1 = function lambda$0_1(widget_0, context_1, successHandler_2, errorHandler_3, template_4, t_5){
  cbucu.$clinit_TemplateParser$1();
  var e;
  {
    try {
      cbucu.traverseTreeNode(widget_0, t_5, context_1);
      successHandler_2.OnReady(widget_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 65)) {
        e = $e0;
        errorHandler_3.OnError(new cbuce.ResourceException_0('Unable to parse template: ' + template_4, e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
cbucu.lambda$1_1 = function lambda$1_1(errorHandler_0, error_1){
  cbucu.$clinit_TemplateParser$1();
  {
    errorHandler_0.OnError(error_1);
  }
}
;
defineClass(183, 76, {1:1}, cbucu.TemplateParser$1);
_.$init_38 = function $init_38(){
}
;
_.loadResource = function loadResource(){
  var errorHandler, resource, resourceManager, successHandler;
  resourceManager = (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getResourceManager();
  successHandler = this.successListener;
  errorHandler = this.errorListener;
  resource = resourceManager.findTemplateById(this.val$template1);
  resource.whenReady(new cbucu.TemplateParser$1$lambda$0$Type(this.val$widget2, this.val$context3, successHandler, errorHandler, this.val$template1)).whenError(new cbucu.TemplateParser$1$lambda$1$Type(errorHandler)).loadResource();
}
;
cggl.Lcom_badu_ui_core_utils_TemplateParser$1_2_classLit = createForClass('com.badu.ui.core.utils', 'TemplateParser/1', 183, cggl.Lcom_badu_ui_core_AbstractResource_2_classLit);
cbucu.$clinit_TemplateParser$1$lambda$0$Type = function $clinit_TemplateParser$1$lambda$0$Type(){
  cbucu.$clinit_TemplateParser$1$lambda$0$Type = emptyMethod;
}
;
cbucu.TemplateParser$1$lambda$0$Type = function TemplateParser$1$lambda$0$Type(widget_0, context_1, successHandler_2, errorHandler_3, template_4){
  cbucu.$clinit_TemplateParser$1$lambda$0$Type();
  this.widget_0 = widget_0;
  this.context_1 = context_1;
  this.successHandler_2 = successHandler_2;
  this.errorHandler_3 = errorHandler_3;
  this.template_4 = template_4;
}
;
defineClass(184, 1, {1:1}, cbucu.TemplateParser$1$lambda$0$Type);
_.OnReady = function OnReady_1(arg0){
  cbucu.lambda$0_1(this.widget_0, this.context_1, this.successHandler_2, this.errorHandler_3, this.template_4, arg0);
}
;
cggl.Lcom_badu_ui_core_utils_TemplateParser$1$lambda$0$Type_2_classLit = createForClass('com.badu.ui.core.utils', 'TemplateParser/1/lambda$0$Type', 184, cggl.Ljava_lang_Object_2_classLit);
cbucu.$clinit_TemplateParser$1$lambda$1$Type = function $clinit_TemplateParser$1$lambda$1$Type(){
  cbucu.$clinit_TemplateParser$1$lambda$1$Type = emptyMethod;
}
;
cbucu.TemplateParser$1$lambda$1$Type = function TemplateParser$1$lambda$1$Type(errorHandler_0){
  cbucu.$clinit_TemplateParser$1$lambda$1$Type();
  this.errorHandler_0 = errorHandler_0;
}
;
defineClass(185, 1, {1:1}, cbucu.TemplateParser$1$lambda$1$Type);
_.OnError = function OnError_1(arg0){
  cbucu.lambda$1_1(this.errorHandler_0, arg0);
}
;
cggl.Lcom_badu_ui_core_utils_TemplateParser$1$lambda$1$Type_2_classLit = createForClass('com.badu.ui.core.utils', 'TemplateParser/1/lambda$1$Type', 185, cggl.Ljava_lang_Object_2_classLit);
cbucx.$clinit_XmlNode = function $clinit_XmlNode(){
  cbucx.$clinit_XmlNode = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_xml_XmlNode_2_classLit = createForInterface('com.badu.ui.core.xml', 'XmlNode');
cbucx.$clinit_XmlParser = function $clinit_XmlParser(){
  cbucx.$clinit_XmlParser = emptyMethod;
}
;
cggl.Lcom_badu_ui_core_xml_XmlParser_2_classLit = createForInterface('com.badu.ui.core.xml', 'XmlParser');
cbujcc.$clinit_CssRule = function $clinit_CssRule(){
  cbujcc.$clinit_CssRule = emptyMethod;
}
;
cbujcc.$clinit_CssRuleList = function $clinit_CssRuleList(){
  cbujcc.$clinit_CssRuleList = emptyMethod;
  jl.$clinit_Object();
}
;
cbujcc.$clinit_CssStyleDeclaration = function $clinit_CssStyleDeclaration(){
  cbujcc.$clinit_CssStyleDeclaration = emptyMethod;
}
;
cbujcc.$clinit_StyleSheet = function $clinit_StyleSheet(){
  cbujcc.$clinit_StyleSheet = emptyMethod;
}
;
cbujcc.$clinit_CssStyleSheet = function $clinit_CssStyleSheet(){
  cbujcc.$clinit_CssStyleSheet = emptyMethod;
}
;
cbujcc.$clinit_MediaList = function $clinit_MediaList(){
  cbujcc.$clinit_MediaList = emptyMethod;
}
;
cggl.Lcom_badu_ui_jsinterop_core_css_MediaList_2_classLit = createForInterface('com.badu.ui.jsinterop.core.css', 'MediaList');
cbujcd.$clinit_Blob = function $clinit_Blob(){
  cbujcd.$clinit_Blob = emptyMethod;
  jl.$clinit_Object();
}
;
cbujce.$clinit_EventTarget = function $clinit_EventTarget(){
  cbujce.$clinit_EventTarget = emptyMethod;
}
;
cbujcd.$clinit_Node = function $clinit_Node(){
  cbujcd.$clinit_Node = emptyMethod;
}
;
cbujcd.$clinit_NodeSelector = function $clinit_NodeSelector(){
  cbujcd.$clinit_NodeSelector = emptyMethod;
}
;
cbujcd.$clinit_Document = function $clinit_Document(){
  cbujcd.$clinit_Document = emptyMethod;
}
;
cbujcd.$clinit_DomTokenList = function $clinit_DomTokenList(){
  cbujcd.$clinit_DomTokenList = emptyMethod;
}
;
cbujcd.$clinit_Element = function $clinit_Element(){
  cbujcd.$clinit_Element = emptyMethod;
}
;
cbujcd.$clinit_FormData = function $clinit_FormData(){
  cbujcd.$clinit_FormData = emptyMethod;
  jl.$clinit_Object();
}
;
cbujcd.$clinit_HTMLElement = function $clinit_HTMLElement(){
  cbujcd.$clinit_HTMLElement = emptyMethod;
}
;
cbujcd.$clinit_HTMLDivElement = function $clinit_HTMLDivElement(){
  cbujcd.$clinit_HTMLDivElement = emptyMethod;
}
;
cbujcd.$clinit_HTMLImageElement = function $clinit_HTMLImageElement(){
  cbujcd.$clinit_HTMLImageElement = emptyMethod;
}
;
cbujce.$clinit_Event = function $clinit_Event(){
  cbujce.$clinit_Event = emptyMethod;
}
;
cbujcd.$clinit_MouseEvent = function $clinit_MouseEvent(){
  cbujcd.$clinit_MouseEvent = emptyMethod;
}
;
cbujcd.$clinit_NamedNodeMap = function $clinit_NamedNodeMap(){
  cbujcd.$clinit_NamedNodeMap = emptyMethod;
}
;
cbujcd.$clinit_NodeList = function $clinit_NodeList(){
  cbujcd.$clinit_NodeList = emptyMethod;
}
;
cbujcd.$clinit_Text_0 = function $clinit_Text_0(){
  cbujcd.$clinit_Text_0 = emptyMethod;
}
;
cbujcd.$clinit_XMLHttpRequest = function $clinit_XMLHttpRequest(){
  cbujcd.$clinit_XMLHttpRequest = emptyMethod;
  jl.$clinit_Object();
}
;
cbujcd.$send = function $send(this$static, data_0){
  this$static.send(jb.uncheckedCast_0(data_0));
}
;
cbujcd.$send_0 = function $send_0(this$static, data_0){
  this$static.send(jb.uncheckedCast_0(data_0));
}
;
cbujcd.$send_1 = function $send_1(this$static, data_0){
  this$static.send(jb.uncheckedCast_0(data_0));
}
;
cbujcd.$clinit_XMLHttpRequest$ResponseUnionType = function $clinit_XMLHttpRequest$ResponseUnionType(){
  cbujcd.$clinit_XMLHttpRequest$ResponseUnionType = emptyMethod;
}
;
cbujcd.$asString = function $asString(this$static){
  cbujcd.$clinit_XMLHttpRequest$ResponseUnionType();
  return jb.asString_1(this$static);
}
;
cbujcd.$isString = function $isString(this$static){
  return instanceOfString(this$static);
}
;
cbujcd.of_0 = function of_0(o){
  return castToUnknownNative(jb.cast(o));
}
;
cbujcd.$clinit_XMLHttpRequest$SendDataUnionType = function $clinit_XMLHttpRequest$SendDataUnionType(){
  cbujcd.$clinit_XMLHttpRequest$SendDataUnionType = emptyMethod;
}
;
cbujcd.$asBlob = function $asBlob(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
cbujcd.$asFormData = function $asFormData(this$static){
  return castToNative(jb.cast(this$static), $wnd.FormData);
}
;
cbujcd.$asString_0 = function $asString_0(this$static){
  return jb.asString_1(this$static);
}
;
cbujcd.$isBlob = function $isBlob(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
cbujcd.$isFormData = function $isFormData(this$static){
  return instanceOfNative(this$static, $wnd.FormData);
}
;
cbujcd.$isString_0 = function $isString_0(this$static){
  return instanceOfString(this$static);
}
;
cbujcd.of_1 = function of_1(o){
  return castToUnknownNative(jb.cast(o));
}
;
cbujce.$clinit_Event$Detail = function $clinit_Event$Detail(){
  cbujce.$clinit_Event$Detail = emptyMethod;
}
;
cbujce.$clinit_Event$Events = function $clinit_Event$Events(){
  cbujce.$clinit_Event$Events = emptyMethod;
}
;
cggl.Lcom_badu_ui_jsinterop_core_events_Event$Events_2_classLit = createForInterface('com.badu.ui.jsinterop.core.events', 'Event/Events');
cbujce.$clinit_ProgressEvent = function $clinit_ProgressEvent(){
  cbujce.$clinit_ProgressEvent = emptyMethod;
}
;
cbujch.$clinit_Console = function $clinit_Console(){
  cbujch.$clinit_Console = emptyMethod;
}
;
cbujch.$clinit_Location = function $clinit_Location(){
  cbujch.$clinit_Location = emptyMethod;
}
;
cbujch.$clinit_Storage = function $clinit_Storage(){
  cbujch.$clinit_Storage = emptyMethod;
}
;
cbujch.$clinit_Window = function $clinit_Window(){
  cbujch.$clinit_Window = emptyMethod;
  jl.$clinit_Object();
}
;
cbujcp.$clinit_IThenable = function $clinit_IThenable(){
  cbujcp.$clinit_IThenable = emptyMethod;
}
;
cbujcp.$clinit_Promise = function $clinit_Promise(){
  cbujcp.$clinit_Promise = emptyMethod;
  jl.$clinit_Object();
}
;
cbujcp.all_0 = function all_0(promises){
  return $wnd.Promise.all(promises);
}
;
cbujcp.race = function race(promises){
  return $wnd.Promise.race(promises);
}
;
cbujcp.resolve = function resolve(value_0){
  return $wnd.Promise.resolve(jb.uncheckedCast_0(value_0));
}
;
cbujcp.resolve_0 = function resolve_0(value_0){
  return $wnd.Promise.resolve(jb.uncheckedCast_0(value_0));
}
;
cbujcp.$onInvoke = function $onInvoke(this$static, value_0){
  this$static(jb.uncheckedCast_0(value_0));
}
;
cbujcp.$onInvoke_0 = function $onInvoke_0(this$static, value_0){
  this$static(jb.uncheckedCast_0(value_0));
}
;
cbujcp.$clinit_Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType = function $clinit_Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType(){
  cbujcp.$clinit_Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType = emptyMethod;
}
;
cbujcp.$asIThenable = function $asIThenable(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
cbujcp.$asT = function $asT(this$static){
  return jb.cast(this$static);
}
;
cbujcp.of_2 = function of_2(o){
  return castToUnknownNative(jb.cast(o));
}
;
cbujcp.$clinit_Promise$ResolveValueUnionType = function $clinit_Promise$ResolveValueUnionType(){
  cbujcp.$clinit_Promise$ResolveValueUnionType = emptyMethod;
}
;
cbujcp.$asIThenable_0 = function $asIThenable_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
cbujcp.$asV = function $asV(this$static){
  return jb.cast(this$static);
}
;
cbujcp.of_3 = function of_3(o){
  return castToUnknownNative(jb.cast(o));
}
;
cbujcx.$clinit_DOMParser = function $clinit_DOMParser(){
  cbujcx.$clinit_DOMParser = emptyMethod;
  jl.$clinit_Object();
}
;
cbujcx.$parseFromString = function $parseFromString(this$static, str, type_0){
  cbujcx.$clinit_DOMParser();
  return this$static.parseFromString(str, type_0.getInternalValue());
}
;
cbujcx.$clinit_SupportedType = function $clinit_SupportedType(){
  cbujcx.$clinit_SupportedType = emptyMethod;
  jl.$clinit_Enum();
  cbujcx.TEXT_HTML = new cbujcx.SupportedType('TEXT_HTML', 0, 'text/html');
  cbujcx.TEXT_XML = new cbujcx.SupportedType('TEXT_XML', 1, 'text/xml');
  cbujcx.APPLICATION_XML = new cbujcx.SupportedType('APPLICATION_XML', 2, 'application/xml');
  cbujcx.APPLICATION_XHTML_XML = new cbujcx.SupportedType('APPLICATION_XHTML_XML', 3, 'application/xhtml+xml');
  cbujcx.IMAGE_SVG_XML = new cbujcx.SupportedType('IMAGE_SVG_XML', 4, 'image/svg+xml');
}
;
cbujcx.SupportedType = function SupportedType(enum$name, enum$ordinal, internalValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_39();
  this.internalValue = internalValue;
}
;
cbujcx.valueOf_6 = function valueOf_6(name_0){
  cbujcx.$clinit_SupportedType();
  return valueOf((cbujcx.$clinit_SupportedType$Map() , cbujcx.$MAP_5), name_0);
}
;
cbujcx.values_6 = function values_6(){
  cbujcx.$clinit_SupportedType();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_badu_ui_jsinterop_core_xml_SupportedType_2_classLit, 1), {3:1, 1:1, 4:1}, 35, 0, [cbujcx.TEXT_HTML, cbujcx.TEXT_XML, cbujcx.APPLICATION_XML, cbujcx.APPLICATION_XHTML_XML, cbujcx.IMAGE_SVG_XML]);
}
;
defineClass(35, 15, {35:1, 3:1, 13:1, 15:1, 1:1}, cbujcx.SupportedType);
_.$init_39 = function $init_39(){
}
;
_.getInternalValue = function getInternalValue(){
  return this.internalValue;
}
;
cggl.Lcom_badu_ui_jsinterop_core_xml_SupportedType_2_classLit = createForEnum('com.badu.ui.jsinterop.core.xml', 'SupportedType', 35, cggl.Ljava_lang_Enum_2_classLit, cbujcx.values_6, cbujcx.valueOf_6);
cbujcx.$clinit_SupportedType$Map = function $clinit_SupportedType$Map(){
  cbujcx.$clinit_SupportedType$Map = emptyMethod;
  cbujcx.$MAP_5 = createValueOfMap(cbujcx.values_6());
}
;
defineClass(494, 1, {1:1});
cggl.Lcom_badu_ui_jsinterop_core_xml_SupportedType$Map_2_classLit = createForClass('com.badu.ui.jsinterop.core.xml', 'SupportedType/Map', 494, cggl.Ljava_lang_Object_2_classLit);
cbupw.$clinit_BaduUI = function $clinit_BaduUI(){
  cbupw.$clinit_BaduUI = emptyMethod;
  jl.$clinit_Object();
}
;
cbupw.BaduUI = function BaduUI(){
  cbupw.$clinit_BaduUI();
  Object_0.call(this);
  this.$init_40();
}
;
cbupw.getHelloWorld = function getHelloWorld(){
  cbupw.$clinit_BaduUI();
  return 'Hello from Java!';
}
;
defineClass(242, 1, {1:1}, cbupw.BaduUI);
_.$init_40 = function $init_40(){
}
;
cggl.Lcom_badu_ui_platforms_web_BaduUI_2_classLit = createForClass('com.badu.ui.platforms.web', 'BaduUI', 242, cggl.Ljava_lang_Object_2_classLit);
cbupw.$clinit_WebPlatformComponentFactory = function $clinit_WebPlatformComponentFactory(){
  cbupw.$clinit_WebPlatformComponentFactory = emptyMethod;
  jl.$clinit_Object();
}
;
cbupw.WebPlatformComponentFactory = function WebPlatformComponentFactory(){
  cbupw.$clinit_WebPlatformComponentFactory();
  Object_0.call(this);
  this.$init_41();
}
;
defineClass(154, 1, {1:1}, cbupw.WebPlatformComponentFactory);
_.$init_41 = function $init_41(){
}
;
_.createFlexbox = function createFlexbox(){
  return new cbupwc.FlexboxComponent;
}
;
_.createImage = function createImage(src_0, width_0, height){
  return new cbupwc.ImageComponent(src_0, width_0, height);
}
;
_.createText = function createText(text_0){
  return new cbupwc.TextComponent(text_0);
}
;
_.rootComponent = function rootComponent(){
  return new cbupwc.RootComponent;
}
;
cggl.Lcom_badu_ui_platforms_web_WebPlatformComponentFactory_2_classLit = createForClass('com.badu.ui.platforms.web', 'WebPlatformComponentFactory', 154, cggl.Ljava_lang_Object_2_classLit);
cbupw.$clinit_WebResourceManager = function $clinit_WebResourceManager(){
  cbupw.$clinit_WebResourceManager = emptyMethod;
  jl.$clinit_Object();
}
;
cbupw.WebResourceManager = function WebResourceManager(){
  cbupw.$clinit_WebResourceManager();
  Object_0.call(this);
  this.$init_42();
}
;
defineClass(155, 1, {1:1}, cbupw.WebResourceManager);
_.$init_42 = function $init_42(){
}
;
_.findById = function findById(template){
  return new cbupwr.WebResource(template);
}
;
_.findTemplateById = function findTemplateById(template){
  return new cbupwr.WebTemplateResource(template);
}
;
cggl.Lcom_badu_ui_platforms_web_WebResourceManager_2_classLit = createForClass('com.badu.ui.platforms.web', 'WebResourceManager', 155, cggl.Ljava_lang_Object_2_classLit);
cbupw.$clinit_WebUIPlatform = function $clinit_WebUIPlatform(){
  cbupw.$clinit_WebUIPlatform = emptyMethod;
  cbuc.$clinit_BUIPlatform();
}
;
cbupw.WebUIPlatform = function WebUIPlatform(){
  cbupw.$clinit_WebUIPlatform();
  cbuc.BUIPlatform.call(this);
  this.$init_43();
  this.componentFactory = new cbupw.WebPlatformComponentFactory;
  this.resourceManager = new cbupw.WebResourceManager;
  this.viewportManager = new cbupw.WebViewportManager;
  this.xmlParser = new cbupw.WebXmlParser;
}
;
defineClass(124, 152, {1:1}, cbupw.WebUIPlatform);
_.$init_43 = function $init_43(){
  this.LOG = new cbupwu.WebLogger;
}
;
_.componentFactory_0 = function componentFactory(){
  return this.componentFactory;
}
;
_.getResourceManager = function getResourceManager(){
  return this.resourceManager;
}
;
_.getViewportManager = function getViewportManager(){
  return this.viewportManager;
}
;
_.getXmlParser = function getXmlParser(){
  return this.xmlParser;
}
;
_.log_0 = function log_1(){
  return this.LOG;
}
;
cggl.Lcom_badu_ui_platforms_web_WebUIPlatform_2_classLit = createForClass('com.badu.ui.platforms.web', 'WebUIPlatform', 124, cggl.Lcom_badu_ui_core_BUIPlatform_2_classLit);
cbupw.$clinit_WebViewportManager = function $clinit_WebViewportManager(){
  cbupw.$clinit_WebViewportManager = emptyMethod;
  jl.$clinit_Object();
  cbuc.$clinit_ViewportManager();
}
;
cbupw.WebViewportManager = function WebViewportManager(){
  cbupw.$clinit_WebViewportManager();
  Object_0.call(this);
  this.$init_44();
}
;
defineClass(156, 1, {1:1}, cbupw.WebViewportManager);
_.$init_44 = function $init_44(){
}
;
_.parseUnitsToDPUnits = function parseUnitsToDPUnits(width_0){
  return cbuc.$parseUnitsToDPUnits(this, width_0);
}
;
_.calculateDPSize = function calculateDPSize(pixelSize){
  return pixelSize;
}
;
_.calculatePixelSize = function calculatePixelSize(unitSize){
  return unitSize;
}
;
cggl.Lcom_badu_ui_platforms_web_WebViewportManager_2_classLit = createForClass('com.badu.ui.platforms.web', 'WebViewportManager', 156, cggl.Ljava_lang_Object_2_classLit);
cbupw.$clinit_WebXmlNode = function $clinit_WebXmlNode(){
  cbupw.$clinit_WebXmlNode = emptyMethod;
  jl.$clinit_Object();
}
;
cbupw.WebXmlNode = function WebXmlNode(node){
  cbupw.$clinit_WebXmlNode();
  Object_0.call(this);
  this.$init_45();
  this.node = node;
}
;
defineClass(102, 1, {235:1, 1:1}, cbupw.WebXmlNode);
_.$init_45 = function $init_45(){
}
;
_.getAttributes = function getAttributes(){
  var attr, attributes, attrs, i;
  attributes = new ju.HashMap;
  attrs = this.node.attributes;
  if (jsNotEquals(null, attrs)) {
    for (i = 0; i < attrs.length; i++) {
      attr = attrs.item(i);
      attributes.put(attr.nodeName, attr.nodeValue);
    }
  }
  return attributes;
}
;
_.getChildren = function getChildren_0(){
  var children, i, node, nodes;
  children = new ju.ArrayList;
  nodes = this.node.childNodes;
  if (jsNotEquals(null, nodes)) {
    for (i = 0; i < nodes.length; i++) {
      node = nodes.item(i);
      if (3 == node.nodeType && cbucu.isEmpty(node.nodeValue)) {
        continue;
      }
      children.add(new cbupw.WebXmlNode(node));
    }
  }
  return children;
}
;
_.getTagName = function getTagName(){
  var nodeName;
  nodeName = this.node.nodeName;
  return jl.indexOf_I_I__devirtual$(nodeName, 35) == 0?jl.substring_I_Ljava_lang_String___devirtual$(nodeName, 1):nodeName;
}
;
cggl.Lcom_badu_ui_platforms_web_WebXmlNode_2_classLit = createForClass('com.badu.ui.platforms.web', 'WebXmlNode', 102, cggl.Ljava_lang_Object_2_classLit);
cbupw.$clinit_WebXmlParser = function $clinit_WebXmlParser(){
  cbupw.$clinit_WebXmlParser = emptyMethod;
  jl.$clinit_Object();
}
;
cbupw.WebXmlParser = function WebXmlParser(){
  cbupw.$clinit_WebXmlParser();
  Object_0.call(this);
  this.$init_46();
}
;
defineClass(157, 1, {1:1}, cbupw.WebXmlParser);
_.$init_46 = function $init_46(){
}
;
_.parse_0 = function parse_0(xml){
  var doc, parser;
  parser = new $wnd.DOMParser;
  doc = cbujcx.$parseFromString(parser, xml, (cbujcx.$clinit_SupportedType() , cbujcx.APPLICATION_XML));
  if (doc.childNodes.length != 1) {
    throw toJs(new cbuce.TemplateParsingException('Template must have single root node'));
  }
  return new cbupw.WebXmlNode(doc.childNodes.item(0));
}
;
cggl.Lcom_badu_ui_platforms_web_WebXmlParser_2_classLit = createForClass('com.badu.ui.platforms.web', 'WebXmlParser', 157, cggl.Ljava_lang_Object_2_classLit);
cbupwa.$clinit_AlignItemsStyle = function $clinit_AlignItemsStyle(){
  cbupwa.$clinit_AlignItemsStyle = emptyMethod;
  jl.$clinit_Object();
}
;
cbupwa.css = function css(style){
  cbupwa.$clinit_AlignItemsStyle();
  switch (style.ordinal()) {
    case (cbucca.$clinit_AlignItems() , cbucca.flexStart).ordinal():
      return 'flex-start';
    case (cbucca.$clinit_AlignItems() , cbucca.flexEnd).ordinal():
      return 'flex-end';
    case (cbucca.$clinit_AlignItems() , cbucca.center).ordinal():
      return 'center';
    case (cbucca.$clinit_AlignItems() , cbucca.stretch).ordinal():
      return 'stretch';
    case (cbucca.$clinit_AlignItems() , cbucca.baseline).ordinal():
      return 'baseline';
  }
  return 'flex-start';
}
;
defineClass(500, 1, {1:1});
cbupwa.CSS_BASELINE = 'baseline';
cbupwa.CSS_CENTER = 'center';
cbupwa.CSS_FLEX_END = 'flex-end';
cbupwa.CSS_FLEX_START = 'flex-start';
cbupwa.CSS_STRETCH = 'stretch';
cggl.Lcom_badu_ui_platforms_web_attributes_AlignItemsStyle_2_classLit = createForClass('com.badu.ui.platforms.web.attributes', 'AlignItemsStyle', 500, cggl.Ljava_lang_Object_2_classLit);
cbupwa.$clinit_JustifyContentStyle = function $clinit_JustifyContentStyle(){
  cbupwa.$clinit_JustifyContentStyle = emptyMethod;
  jl.$clinit_Object();
}
;
cbupwa.css_0 = function css_0(style){
  cbupwa.$clinit_JustifyContentStyle();
  switch (style.ordinal()) {
    case (cbucca.$clinit_JustifyContent() , cbucca.flexStart_0).ordinal():
      return 'flex-start';
    case (cbucca.$clinit_JustifyContent() , cbucca.flexEnd_0).ordinal():
      return 'flex-end';
    case (cbucca.$clinit_JustifyContent() , cbucca.center_0).ordinal():
      return 'center';
    case (cbucca.$clinit_JustifyContent() , cbucca.stretch_0).ordinal():
      return 'stretch';
    case (cbucca.$clinit_JustifyContent() , cbucca.spaceBetween).ordinal():
      return 'space-between';
    case (cbucca.$clinit_JustifyContent() , cbucca.spaceAround).ordinal():
      return 'space-around';
    case (cbucca.$clinit_JustifyContent() , cbucca.spaceEvenly).ordinal():
      return 'space-evenly';
  }
  return 'flex-start';
}
;
defineClass(499, 1, {1:1});
cbupwa.CSS_CENTER_0 = 'center';
cbupwa.CSS_FLEX_END_0 = 'flex-end';
cbupwa.CSS_FLEX_START_0 = 'flex-start';
cbupwa.CSS_SPACE_AROUND = 'space-around';
cbupwa.CSS_SPACE_BETWEEN = 'space-between';
cbupwa.CSS_SPACE_EVENTLY = 'space-evenly';
cbupwa.CSS_STRETCH_0 = 'stretch';
cggl.Lcom_badu_ui_platforms_web_attributes_JustifyContentStyle_2_classLit = createForClass('com.badu.ui.platforms.web.attributes', 'JustifyContentStyle', 499, cggl.Ljava_lang_Object_2_classLit);
cbupwc.$clinit_AbstractComponent = function $clinit_AbstractComponent(){
  cbupwc.$clinit_AbstractComponent = emptyMethod;
  jl.$clinit_Object();
  cbupwc.ZORDERS = new cbupwc.AbstractComponent$1;
}
;
cbupwc.AbstractComponent = function AbstractComponent(platformComponent){
  cbupwc.$clinit_AbstractComponent();
  Object_0.call(this);
  this.$init_47();
  this.platformComponent = platformComponent;
  this.view = (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getViewportManager();
}
;
cbupwc.lambda$0_2 = function lambda$0_2(onclick_0, event_1){
  cbupwc.$clinit_AbstractComponent();
  {
    onclick_0.onClick();
    return jl.$clinit_Boolean() , FALSE;
  }
}
;
cbupwc.lambda$1_2 = function lambda$1_2(onmouseover_0, event_1){
  cbupwc.$clinit_AbstractComponent();
  {
    onmouseover_0.onMouseOver();
    return jl.$clinit_Boolean() , TRUE;
  }
}
;
cbupwc.lambda$2 = function lambda$2(onmousemove_0, event_1){
  cbupwc.$clinit_AbstractComponent();
  var e;
  {
    e = castToUnknownNative(jb.cast(event_1));
    onmousemove_0.onMouseMove(e.clientX, e.clientY);
    return jl.$clinit_Boolean() , TRUE;
  }
}
;
cbupwc.lambda$3 = function lambda$3(onmouseout_0, event_1){
  cbupwc.$clinit_AbstractComponent();
  {
    onmouseout_0.onMouseOut();
    return jl.$clinit_Boolean() , TRUE;
  }
}
;
defineClass(23, 1, {23:1, 1:1});
_.$init_47 = function $init_47(){
}
;
_.addChild_0 = function addChild_0(child){
  var childElement, self_0;
  childElement = castTo(child, 23).getPlatformComponent();
  self_0 = this.getPlatformComponent();
  if (jsNotEquals(null, self_0)) {
    self_0.appendChild(childElement);
  }
}
;
_.addClass = function addClass(cssClass){
  var element;
  element = this.getPlatformComponent();
  if (!cbupwu.isEmpty_1(cssClass))
    element.classList.add(cssClass);
}
;
_.destroyComponent = function destroyComponent_0(){
  var childElement;
  childElement = this.getPlatformComponent();
  childElement.remove();
}
;
_.getPlatformComponent = function getPlatformComponent(){
  return this.platformComponent;
}
;
_.registerClickHandler = function registerClickHandler(onclick_0){
  var element;
  element = this.getPlatformComponent();
  element.onclick = makeLambdaFunction(cbupwc.AbstractComponent$lambda$0$Type.prototype.onInvoke, cbupwc.AbstractComponent$lambda$0$Type, [onclick_0]);
}
;
_.registerMouseMoveHandler = function registerMouseMoveHandler(onmousemove_0){
  var element;
  element = this.getPlatformComponent();
  element.onmousemove = makeLambdaFunction(cbupwc.AbstractComponent$lambda$2$Type.prototype.onInvoke, cbupwc.AbstractComponent$lambda$2$Type, [onmousemove_0]);
}
;
_.registerMouseOutHandler = function registerMouseOutHandler(onmouseout_0){
  var element;
  element = this.getPlatformComponent();
  element.onmouseout = makeLambdaFunction(cbupwc.AbstractComponent$lambda$3$Type.prototype.onInvoke, cbupwc.AbstractComponent$lambda$3$Type, [onmouseout_0]);
}
;
_.registerMouseOverHandler = function registerMouseOverHandler(onmouseover_0){
  var element;
  element = this.getPlatformComponent();
  element.onmouseover = makeLambdaFunction(cbupwc.AbstractComponent$lambda$1$Type.prototype.onInvoke, cbupwc.AbstractComponent$lambda$1$Type, [onmouseover_0]);
}
;
_.setBackgroundColor_0 = function setBackgroundColor_0(color_0){
  this.setProperty_2('background-color', color_0, false);
}
;
_.setBorder = function setBorder(border){
  this.setProperty_1('border', border);
}
;
_.setBorderBottom_0 = function setBorderBottom_0(border){
  this.setProperty_1('border-bottom', border);
}
;
_.setBorderLeft = function setBorderLeft(border){
  this.setProperty_1('border-left', border);
}
;
_.setBorderRight = function setBorderRight(border){
  this.setProperty_1('border-right', border);
}
;
_.setBorderTop = function setBorderTop(border){
  this.setProperty_1('border-top', border);
}
;
_.setHeight = function setHeight(height){
  var value_0;
  value_0 = this.view.calculatePixelSize(height) + 'px';
  this.setProperty_2('height', value_0, false);
}
;
_.setId = function setId(id_0){
  this.getPlatformComponent().setAttribute('id', id_0);
}
;
_.setPaddingBottom_0 = function setPaddingBottom_0(padding){
  var value_0;
  value_0 = this.view.calculatePixelSize(padding) + 'px';
  this.setProperty_2('padding-bottom', value_0, false);
}
;
_.setPaddingLeft_0 = function setPaddingLeft_0(padding){
  var value_0;
  value_0 = this.view.calculatePixelSize(padding) + 'px';
  this.setProperty_2('padding-left', value_0, false);
}
;
_.setPaddingRight_0 = function setPaddingRight_0(padding){
  var value_0;
  value_0 = this.view.calculatePixelSize(padding) + 'px';
  this.setProperty_2('padding-right', value_0, false);
}
;
_.setPaddingTop_0 = function setPaddingTop_0(padding){
  var value_0;
  value_0 = this.view.calculatePixelSize(padding) + 'px';
  this.setProperty_2('padding-top', value_0, false);
}
;
_.setProperty_1 = function setProperty_0(name_0, value_0){
  var element;
  element = this.getPlatformComponent();
  element.style.setProperty(name_0, value_0);
}
;
_.setProperty_2 = function setProperty_1(name_0, value_0, important){
  var element;
  element = this.getPlatformComponent();
  if (important) {
    element.style.setProperty(name_0, value_0, 'important');
  }
   else {
    element.style.setProperty(name_0, value_0);
  }
}
;
_.setVerticalAlign = function setVerticalAlign(verticalAlign){
  if (isNotNull(verticalAlign)) {
    switch (verticalAlign.ordinal()) {
      case (cbucca.$clinit_VerticalAlign() , cbucca.top_0).ordinal():
        this.setProperty_1('margin-bottom', 'auto');
        break;
      case (cbucca.$clinit_VerticalAlign() , cbucca.bottom).ordinal():
        this.setProperty_1('margin-top', 'auto');
        break;
      case (cbucca.$clinit_VerticalAlign() , cbucca.center_1).ordinal():
        this.setProperty_1('margin-bottom', 'auto');
        this.setProperty_1('margin-top', 'auto');
        break;
    }
  }
}
;
_.setWidth = function setWidth(width_0){
  var value_0;
  value_0 = this.view.calculatePixelSize(width_0) + 'px';
  this.setProperty_2('width', value_0, false);
}
;
_.setZOrder = function setZOrder(zorder){
  var className, element;
  element = this.getPlatformComponent();
  className = castToString(cbupwc.ZORDERS.get(zorder));
  if (jsNotEquals(null, className)) {
    element.classList.add(className);
  }
   else {
    (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).log_0().error_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, ['Unknown zorder: ' + zorder]));
  }
}
;
cggl.Lcom_badu_ui_platforms_web_components_AbstractComponent_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'AbstractComponent', 23, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Map = function $clinit_Map(){
  ju.$clinit_Map = emptyMethod;
}
;
ju.$getOrDefault = function $getOrDefault(this$static, key, defaultValue){
  var currentValue;
  currentValue = this$static.get(key);
  return jsEquals(currentValue, null) && !this$static.containsKey(key)?defaultValue:currentValue;
}
;
ju.$putIfAbsent = function $putIfAbsent(this$static, key, value_0){
  var currentValue;
  currentValue = this$static.get(key);
  return jsNotEquals(currentValue, null)?currentValue:this$static.put(key, value_0);
}
;
ju.$replace_1 = function $replace_1(this$static, key, value_0){
  return this$static.containsKey(key)?this$static.put(key, value_0):null;
}
;
cggl.Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map');
ju.$clinit_AbstractMap = function $clinit_AbstractMap(){
  ju.$clinit_AbstractMap = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Map();
}
;
ju.AbstractMap = function AbstractMap(){
  ju.$clinit_AbstractMap();
  Object_0.call(this);
  this.$init_48();
}
;
ju.getEntryValueOrNull = function getEntryValueOrNull(entry){
  ju.$clinit_AbstractMap();
  return isNull(entry)?null:entry.getValue();
}
;
defineClass(72, 1, {1:1, 37:1});
_.$init_48 = function $init_48(){
}
;
_.getOrDefault = function getOrDefault(key, defaultValue){
  return ju.$getOrDefault(this, key, defaultValue);
}
;
_.putIfAbsent = function putIfAbsent(key, value_0){
  return ju.$putIfAbsent(this, key, value_0);
}
;
_.replace = function replace_0(key, value_0){
  return ju.$replace_1(this, key, value_0);
}
;
_.clear = function clear_0(){
  this.entrySet().clear();
}
;
_.containsEntry = function containsEntry(entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this.get(key);
  if (!ju.equals_17(value_0, ourValue)) {
    return false;
  }
  if (jsEquals(ourValue, null) && !this.containsKey(key)) {
    return false;
  }
  return true;
}
;
_.containsKey = function containsKey(key){
  return isNotNull(this.implFindEntry(key, false));
}
;
_.containsValue = function containsValue(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_2(), 14);
    v = entry.getValue();
    if (ju.equals_17(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals_0 = function equals_1(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 37)) {
    return false;
  }
  otherMap = castTo(obj, 37);
  if (this.size() != otherMap.size()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_2(), 14);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get = function get_0(key){
  return ju.getEntryValueOrNull(this.implFindEntry(key, false));
}
;
_.hashCode_0 = function hashCode_2(){
  return ju.hashCode_24(this.entrySet());
}
;
_.implFindEntry = function implFindEntry(key, remove){
  var entry, iter, k;
  for (iter = this.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_2(), 14);
    k = entry.getKey();
    if (ju.equals_17(key, k)) {
      if (remove) {
        entry = new ju.AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_1();
      }
      return entry;
    }
  }
  return null;
}
;
_.isEmpty = function isEmpty_0(){
  return this.size() == 0;
}
;
_.keySet = function keySet(){
  return new ju.AbstractMap$1(this);
}
;
_.put = function put(key, value_0){
  throw toJs(new jl.UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.putAll = function putAll(map_0){
  var e, e$iterator;
  ji2.checkNotNull_0(map_0);
  for (e$iterator = map_0.entrySet().iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_2(), 14);
    this.put(e.getKey(), e.getValue());
  }
}
;
_.remove = function remove_0(key){
  return ju.getEntryValueOrNull(this.implFindEntry(key, true));
}
;
_.size = function size_1(){
  return this.entrySet().size();
}
;
_.toString_0 = function toString_5(){
  var entry, entry$iterator, joiner;
  joiner = new ju.StringJoiner_0(', ', '{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_2(), 14);
    joiner.add_1(this.toString_3(entry));
  }
  return joiner.toString_0();
}
;
_.toString_2 = function toString_6(o){
  return o === this?'(this Map)':valueOf_24(o);
}
;
_.toString_3 = function toString_7(entry){
  return this.toString_2(entry.getKey()) + '=' + this.toString_2(entry.getValue());
}
;
_.values = function values_7(){
  return new ju.AbstractMap$2(this);
}
;
cggl.Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 72, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractHashMap = function $clinit_AbstractHashMap(){
  ju.$clinit_AbstractHashMap = emptyMethod;
  ju.$clinit_AbstractMap();
}
;
ju.AbstractHashMap = function AbstractHashMap(){
  ju.$clinit_AbstractHashMap();
  ju.AbstractMap.call(this);
  this.$init_49();
  this.reset_0();
}
;
ju.AbstractHashMap_0 = function AbstractHashMap_0(ignored){
  ju.$clinit_AbstractHashMap();
  ju.AbstractHashMap_1.call(this, ignored, 0);
}
;
ju.AbstractHashMap_1 = function AbstractHashMap_1(ignored, alsoIgnored){
  ju.AbstractMap.call(this);
  this.$init_49();
  ji2.checkArgument(ignored >= 0, 'Negative initial capacity');
  ji2.checkArgument(alsoIgnored >= 0, 'Non-positive load factor');
  this.reset_0();
}
;
defineClass(75, 72, {1:1, 37:1});
_.$init_49 = function $init_49(){
}
;
_.clear = function clear_1(){
  this.reset_0();
}
;
_.containsKey = function containsKey_0(key){
  return instanceOfString(key)?this.hasStringValue(ji2.uncheckedCast(key)):this.hasHashValue(key);
}
;
_.containsValue = function containsValue_0(value_0){
  return this.containsValue_0(value_0, this.stringMap) || this.containsValue_0(value_0, this.hashCodeMap);
}
;
_.containsValue_0 = function containsValue_1(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_2(), 14);
    if (this.equals_1(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.entrySet = function entrySet(){
  return new ju.AbstractHashMap$EntrySet(this);
}
;
_.get = function get_1(key){
  return instanceOfString(key)?this.getStringValue(ji2.uncheckedCast(key)):this.getHashValue(key);
}
;
_.getHashValue = function getHashValue(key){
  return ju.getEntryValueOrNull(this.hashCodeMap.getEntry(key));
}
;
_.getStringValue = function getStringValue(key){
  return jsEquals(key, null)?this.getHashValue(null):this.stringMap.get_1(key);
}
;
_.hasHashValue = function hasHashValue(key){
  return isNotNull(this.hashCodeMap.getEntry(key));
}
;
_.hasStringValue = function hasStringValue(key){
  return jsEquals(key, null)?this.hasHashValue(null):this.stringMap.contains_0(key);
}
;
_.put = function put_0(key, value_0){
  return instanceOfString(key)?this.putStringValue(ji2.uncheckedCast(key), value_0):this.putHashValue(key, value_0);
}
;
_.putHashValue = function putHashValue(key, value_0){
  return this.hashCodeMap.put_0(key, value_0);
}
;
_.putStringValue = function putStringValue(key, value_0){
  return jsEquals(key, null)?this.putHashValue(null, value_0):this.stringMap.put_1(key, value_0);
}
;
_.remove = function remove_1(key){
  return instanceOfString(key)?this.removeStringValue(ji2.uncheckedCast(key)):this.removeHashValue(key);
}
;
_.removeHashValue = function removeHashValue(key){
  return this.hashCodeMap.remove_2(key);
}
;
_.removeStringValue = function removeStringValue(key){
  return jsEquals(key, null)?this.removeHashValue(null):this.stringMap.remove_3(key);
}
;
_.reset_0 = function reset_0(){
  this.hashCodeMap = new ju.InternalHashCodeMap(this);
  this.stringMap = new ju.InternalStringMap(this);
  ju.structureChanged(this);
}
;
_.size = function size_2(){
  return this.hashCodeMap.size_1() + this.stringMap.size_1();
}
;
cggl.Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 75, cggl.Ljava_util_AbstractMap_2_classLit);
jl.$clinit_Cloneable = function $clinit_Cloneable(){
  jl.$clinit_Cloneable = emptyMethod;
}
;
cggl.Ljava_lang_Cloneable_2_classLit = createForInterface('java.lang', 'Cloneable');
ju.$clinit_HashMap = function $clinit_HashMap(){
  ju.$clinit_HashMap = emptyMethod;
  ju.$clinit_AbstractHashMap();
}
;
ju.HashMap = function HashMap(){
  ju.$clinit_HashMap();
  ju.AbstractHashMap.call(this);
  this.$init_50();
}
;
ju.HashMap_0 = function HashMap_0(ignored){
  ju.$clinit_HashMap();
  ju.AbstractHashMap_0.call(this, ignored);
  this.$init_50();
}
;
defineClass(40, 75, {3:1, 1:1, 37:1}, ju.HashMap, ju.HashMap_0);
_.$init_50 = function $init_50(){
}
;
_.equals_1 = function equals_2(value1, value2){
  return ju.equals_17(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = jl.hashCode__I__devirtual$(key);
  return ji2.ensureInt(hashCode);
}
;
cggl.Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 40, cggl.Ljava_util_AbstractHashMap_2_classLit);
cbupwc.$clinit_AbstractComponent$1 = function $clinit_AbstractComponent$1(){
  cbupwc.$clinit_AbstractComponent$1 = emptyMethod;
  ju.$clinit_HashMap();
}
;
cbupwc.AbstractComponent$1 = function AbstractComponent$1(){
  cbupwc.$clinit_AbstractComponent$1();
  ju.HashMap.call(this);
  this.$init_51();
}
;
defineClass(211, 40, {3:1, 1:1, 37:1}, cbupwc.AbstractComponent$1);
_.$init_51 = function $init_51(){
  {
    this.put((cbucca.$clinit_ZOrder() , cbucca.High), 'bui-zorder-high');
    this.put((cbucca.$clinit_ZOrder() , cbucca.Medium), 'bui-zorder-medium');
    this.put((cbucca.$clinit_ZOrder() , cbucca.Low), 'bui-zorder-low');
  }
}
;
cggl.Lcom_badu_ui_platforms_web_components_AbstractComponent$1_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'AbstractComponent/1', 211, cggl.Ljava_util_HashMap_2_classLit);
cbupwc.$clinit_AbstractComponent$lambda$0$Type = function $clinit_AbstractComponent$lambda$0$Type(){
  cbupwc.$clinit_AbstractComponent$lambda$0$Type = emptyMethod;
}
;
cbupwc.$getClass_0 = function $getClass_0(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwc.AbstractComponent$lambda$0$Type = function AbstractComponent$lambda$0$Type(onclick_0){
  cbupwc.$clinit_AbstractComponent$lambda$0$Type();
  this.onclick_0 = onclick_0;
}
;
defineClass(507, $wnd.Function, {1:1}, cbupwc.AbstractComponent$lambda$0$Type);
_.onInvoke = function onInvoke(arg0){
  return cbupwc.lambda$0_2(this.onclick_0, arg0);
}
;
cbupwc.$clinit_AbstractComponent$lambda$1$Type = function $clinit_AbstractComponent$lambda$1$Type(){
  cbupwc.$clinit_AbstractComponent$lambda$1$Type = emptyMethod;
}
;
cbupwc.$getClass_1 = function $getClass_1(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwc.AbstractComponent$lambda$1$Type = function AbstractComponent$lambda$1$Type(onmouseover_0){
  cbupwc.$clinit_AbstractComponent$lambda$1$Type();
  this.onmouseover_0 = onmouseover_0;
}
;
defineClass(508, $wnd.Function, {1:1}, cbupwc.AbstractComponent$lambda$1$Type);
_.onInvoke = function onInvoke_0(arg0){
  return cbupwc.lambda$1_2(this.onmouseover_0, arg0);
}
;
cbupwc.$clinit_AbstractComponent$lambda$2$Type = function $clinit_AbstractComponent$lambda$2$Type(){
  cbupwc.$clinit_AbstractComponent$lambda$2$Type = emptyMethod;
}
;
cbupwc.$getClass_2 = function $getClass_2(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwc.AbstractComponent$lambda$2$Type = function AbstractComponent$lambda$2$Type(onmousemove_0){
  cbupwc.$clinit_AbstractComponent$lambda$2$Type();
  this.onmousemove_0 = onmousemove_0;
}
;
defineClass(509, $wnd.Function, {1:1}, cbupwc.AbstractComponent$lambda$2$Type);
_.onInvoke = function onInvoke_1(arg0){
  return cbupwc.lambda$2(this.onmousemove_0, arg0);
}
;
cbupwc.$clinit_AbstractComponent$lambda$3$Type = function $clinit_AbstractComponent$lambda$3$Type(){
  cbupwc.$clinit_AbstractComponent$lambda$3$Type = emptyMethod;
}
;
cbupwc.$getClass_3 = function $getClass_3(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwc.AbstractComponent$lambda$3$Type = function AbstractComponent$lambda$3$Type(onmouseout_0){
  cbupwc.$clinit_AbstractComponent$lambda$3$Type();
  this.onmouseout_0 = onmouseout_0;
}
;
defineClass(510, $wnd.Function, {1:1}, cbupwc.AbstractComponent$lambda$3$Type);
_.onInvoke = function onInvoke_2(arg0){
  return cbupwc.lambda$3(this.onmouseout_0, arg0);
}
;
cbupwc.$clinit_FlexboxComponent = function $clinit_FlexboxComponent(){
  cbupwc.$clinit_FlexboxComponent = emptyMethod;
  cbupwc.$clinit_AbstractComponent();
}
;
cbupwc.FlexboxComponent = function FlexboxComponent(){
  cbupwc.$clinit_FlexboxComponent();
  cbupwc.AbstractComponent.call(this, cbupwc.createComponent_7());
  this.$init_52();
}
;
cbupwc.createComponent_7 = function createComponent_7(){
  return castToUnknownNative(jb.cast($wnd.window.document.createElement('div')));
}
;
defineClass(231, 23, {236:1, 23:1, 1:1}, cbupwc.FlexboxComponent);
_.$init_52 = function $init_52(){
}
;
_.setAlignItems = function setAlignItems(alignItems){
  castToUnknownNative(this.getPlatformComponent()).style.alignItems = cbupwa.css(alignItems);
}
;
_.setFlexBasis = function setFlexBasis(flexBasis){
  var value_0;
  value_0 = !cbucu.isNumeric(flexBasis)?flexBasis:(cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getViewportManager().calculatePixelSize(jl.parseInt_1(flexBasis)) + 'px';
  castToUnknownNative(this.getPlatformComponent()).style.flexBasis = value_0;
}
;
_.setFlexGrow = function setFlexGrow(flexGrow){
  castToUnknownNative(this.getPlatformComponent()).style.flexGrow = flexGrow;
}
;
_.setFlexShrink = function setFlexShrink(flexShrink){
  castToUnknownNative(this.getPlatformComponent()).style.flexShrink = flexShrink;
}
;
_.setJustifyContent = function setJustifyContent(justifyContent){
  castToUnknownNative(this.getPlatformComponent()).style.justifyContent = cbupwa.css_0(justifyContent);
}
;
_.setLayout = function setLayout(flexLayout){
  switch (flexLayout.ordinal()) {
    case (cbucca.$clinit_FlexLayout() , cbucca.horizontal).ordinal():
      this.addClass('bui-layout-horizontal');
      break;
    case (cbucca.$clinit_FlexLayout() , cbucca.vertical).ordinal():
      this.addClass('bui-layout-vertical');
      break;
    case (cbucca.$clinit_FlexLayout() , cbucca.horizontalReverse).ordinal():
      this.addClass('bui-layout-horizontal-reverse');
      break;
    case (cbucca.$clinit_FlexLayout() , cbucca.verticalReverse).ordinal():
      this.addClass('bui-layout-vertical-reverse');
      break;
  }
}
;
cbupwc.CLASS_HORIZONTAL = 'bui-layout-horizontal';
cbupwc.CLASS_HORIZONTAL_REVERSE = 'bui-layout-horizontal-reverse';
cbupwc.CLASS_VERTICAL = 'bui-layout-vertical';
cbupwc.CLASS_VERTICAL_REVERSE = 'bui-layout-vertical-reverse';
cggl.Lcom_badu_ui_platforms_web_components_FlexboxComponent_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'FlexboxComponent', 231, cggl.Lcom_badu_ui_platforms_web_components_AbstractComponent_2_classLit);
cbupwc.$clinit_ImageComponent = function $clinit_ImageComponent(){
  cbupwc.$clinit_ImageComponent = emptyMethod;
  cbupwc.$clinit_AbstractComponent();
}
;
cbupwc.ImageComponent = function ImageComponent(src_0, width_0, height){
  cbupwc.$clinit_ImageComponent();
  cbupwc.AbstractComponent.call(this, cbupwc.createComponent_8(src_0, width_0, height));
  this.$init_53();
}
;
cbupwc.createComponent_8 = function createComponent_8(resource, width_0, height){
  var img, src_0;
  img = castToUnknownNative(jb.cast($wnd.window.document.createElement('img')));
  src_0 = castTo(jb.cast(resource), 79);
  src_0.whenReady(new cbupwc.ImageComponent$lambda$0$Type(img)).loadResource();
  if (width_0 > 0)
    img.width = width_0;
  if (height > 0)
    img.height = height;
  return img;
}
;
cbupwc.lambda$0_3 = function lambda$0_3(img_0, path_1){
  cbupwc.$clinit_ImageComponent();
  img_0.src = path_1;
}
;
defineClass(233, 23, {23:1, 1:1}, cbupwc.ImageComponent);
_.$init_53 = function $init_53(){
}
;
cggl.Lcom_badu_ui_platforms_web_components_ImageComponent_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'ImageComponent', 233, cggl.Lcom_badu_ui_platforms_web_components_AbstractComponent_2_classLit);
cbupwc.$clinit_ImageComponent$lambda$0$Type = function $clinit_ImageComponent$lambda$0$Type(){
  cbupwc.$clinit_ImageComponent$lambda$0$Type = emptyMethod;
}
;
cbupwc.ImageComponent$lambda$0$Type = function ImageComponent$lambda$0$Type(img_0){
  cbupwc.$clinit_ImageComponent$lambda$0$Type();
  this.img_0 = img_0;
}
;
defineClass(234, 1, {1:1}, cbupwc.ImageComponent$lambda$0$Type);
_.OnReady = function OnReady_2(arg0){
  cbupwc.lambda$0_3(this.img_0, arg0);
}
;
cggl.Lcom_badu_ui_platforms_web_components_ImageComponent$lambda$0$Type_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'ImageComponent/lambda$0$Type', 234, cggl.Ljava_lang_Object_2_classLit);
cbupwc.$clinit_ImageComponent$lambda$1$Type = function $clinit_ImageComponent$lambda$1$Type(){
  cbupwc.$clinit_ImageComponent$lambda$1$Type = emptyMethod;
}
;
defineClass(498, 1, {1:1});
cggl.Lcom_badu_ui_platforms_web_components_ImageComponent$lambda$1$Type_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'ImageComponent/lambda$1$Type', 498, cggl.Ljava_lang_Object_2_classLit);
cbupwc.$clinit_RootComponent = function $clinit_RootComponent(){
  cbupwc.$clinit_RootComponent = emptyMethod;
  cbupwc.$clinit_AbstractComponent();
}
;
cbupwc.RootComponent = function RootComponent(){
  cbupwc.$clinit_RootComponent();
  cbupwc.AbstractComponent.call(this, $wnd.window.document.body);
  this.$init_54();
}
;
defineClass(210, 23, {23:1, 1:1}, cbupwc.RootComponent);
_.$init_54 = function $init_54(){
}
;
_.destroyComponent = function destroyComponent_1(){
}
;
cggl.Lcom_badu_ui_platforms_web_components_RootComponent_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'RootComponent', 210, cggl.Lcom_badu_ui_platforms_web_components_AbstractComponent_2_classLit);
cbupwc.$clinit_TextComponent = function $clinit_TextComponent(){
  cbupwc.$clinit_TextComponent = emptyMethod;
  cbupwc.$clinit_AbstractComponent();
}
;
cbupwc.TextComponent = function TextComponent(text_0){
  cbupwc.$clinit_TextComponent();
  cbupwc.AbstractComponent.call(this, cbupwc.createComponent_9(text_0));
  this.$init_55();
  this.textNode = castToUnknownNative(jb.cast(this.getPlatformComponent().childNodes.item(0)));
}
;
cbupwc.createComponent_9 = function createComponent_9(text_0){
  var wrapElement;
  wrapElement = castToUnknownNative(jb.cast($wnd.window.document.createElement('span')));
  wrapElement.appendChild($wnd.window.document.createTextNode(text_0));
  return wrapElement;
}
;
defineClass(232, 23, {503:1, 23:1, 1:1}, cbupwc.TextComponent);
_.$init_55 = function $init_55(){
}
;
_.addChild_0 = function addChild_1(child){
}
;
_.setColor = function setColor(color_0){
  this.setProperty_1('color', color_0);
}
;
_.setText = function setText(text_0){
  this.textNode.textContent = text_0;
}
;
cggl.Lcom_badu_ui_platforms_web_components_TextComponent_2_classLit = createForClass('com.badu.ui.platforms.web.components', 'TextComponent', 232, cggl.Lcom_badu_ui_platforms_web_components_AbstractComponent_2_classLit);
cbupwr.$clinit_WebResource = function $clinit_WebResource(){
  cbupwr.$clinit_WebResource = emptyMethod;
  cbuc.$clinit_AbstractResource();
}
;
cbupwr.WebResource = function WebResource(resourcePath){
  cbupwr.$clinit_WebResource();
  cbuc.AbstractResource.call(this);
  this.$init_56();
  this.resourcePath = resourcePath;
}
;
defineClass(79, 76, {79:1, 1:1}, cbupwr.WebResource);
_.$init_56 = function $init_56(){
}
;
_.loadResource = function loadResource_0(){
  this.successListener.OnReady(this.resourcePath);
}
;
cggl.Lcom_badu_ui_platforms_web_resources_WebResource_2_classLit = createForClass('com.badu.ui.platforms.web.resources', 'WebResource', 79, cggl.Lcom_badu_ui_core_AbstractResource_2_classLit);
cbupwr.$clinit_WebTemplateResource = function $clinit_WebTemplateResource(){
  cbupwr.$clinit_WebTemplateResource = emptyMethod;
  cbuc.$clinit_AbstractResource();
}
;
cbupwr.WebTemplateResource = function WebTemplateResource(templatePath){
  cbupwr.$clinit_WebTemplateResource();
  cbuc.AbstractResource.call(this);
  this.$init_57();
  this.templatePath = templatePath;
  this.xmlParser = (cbuc.$clinit_BUIPlatform() , cbuc.PLATFORM).getXmlParser();
}
;
defineClass(228, 76, {1:1}, cbupwr.WebTemplateResource);
_.$init_57 = function $init_57(){
}
;
_.lambda$0_1 = function lambda$0_4(response_0){
  cbupwr.$clinit_WebTemplateResource();
  var e;
  {
    try {
      this.successListener.OnReady(this.xmlParser.parse_0(cbujcd.$asString(response_0)));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        this.errorListener.OnError(new cbuce.ResourceException_0('Unable to fetch remote resource: ' + this.templatePath, e));
      }
       else 
        throw toJs($e0);
    }
    return null;
  }
}
;
_.lambda$1 = function lambda$1_3(error_0){
  cbupwr.$clinit_WebTemplateResource();
  {
    this.errorListener.OnError(new cbuce.ResourceException('Unable to fetch remote resource: ' + this.templatePath + '. Error: ' + error_0));
    return null;
  }
}
;
_.loadResource = function loadResource_1(){
  cbupwu.get_2(this.templatePath).then(makeLambdaFunction(cbupwr.WebTemplateResource$lambda$0$Type.prototype.onInvoke_1, cbupwr.WebTemplateResource$lambda$0$Type, [this])).catch(makeLambdaFunction(cbupwr.WebTemplateResource$lambda$1$Type.prototype.onInvoke_1, cbupwr.WebTemplateResource$lambda$1$Type, [this]));
}
;
cggl.Lcom_badu_ui_platforms_web_resources_WebTemplateResource_2_classLit = createForClass('com.badu.ui.platforms.web.resources', 'WebTemplateResource', 228, cggl.Lcom_badu_ui_core_AbstractResource_2_classLit);
cbupwr.$clinit_WebTemplateResource$lambda$0$Type = function $clinit_WebTemplateResource$lambda$0$Type(){
  cbupwr.$clinit_WebTemplateResource$lambda$0$Type = emptyMethod;
}
;
cbupwr.$getClass_4 = function $getClass_4(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwr.WebTemplateResource$lambda$0$Type = function WebTemplateResource$lambda$0$Type($$outer_0){
  cbupwr.$clinit_WebTemplateResource$lambda$0$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(511, $wnd.Function, {1:1}, cbupwr.WebTemplateResource$lambda$0$Type);
_.onInvoke_1 = function onInvoke_3(arg0){
  return this.$$outer_0.lambda$0_1(arg0);
}
;
cbupwr.$clinit_WebTemplateResource$lambda$1$Type = function $clinit_WebTemplateResource$lambda$1$Type(){
  cbupwr.$clinit_WebTemplateResource$lambda$1$Type = emptyMethod;
}
;
cbupwr.$getClass_5 = function $getClass_5(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwr.WebTemplateResource$lambda$1$Type = function WebTemplateResource$lambda$1$Type($$outer_0){
  cbupwr.$clinit_WebTemplateResource$lambda$1$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(512, $wnd.Function, {1:1}, cbupwr.WebTemplateResource$lambda$1$Type);
_.onInvoke_1 = function onInvoke_4(arg0){
  return this.$$outer_0.lambda$1(arg0);
}
;
cbupwu.$clinit_AjaxUtils = function $clinit_AjaxUtils(){
  cbupwu.$clinit_AjaxUtils = emptyMethod;
  jl.$clinit_Object();
}
;
cbupwu.get_2 = function get_2(resourcePath){
  cbupwu.$clinit_AjaxUtils();
  return new $wnd.Promise(makeLambdaFunction(cbupwu.AjaxUtils$lambda$0$Type.prototype.onInvoke_2, cbupwu.AjaxUtils$lambda$0$Type, [resourcePath]));
}
;
cbupwu.lambda$0_5 = function lambda$0_5(resourcePath_0, resolve_1, reject_2){
  cbupwu.$clinit_AjaxUtils();
  var req;
  {
    req = new $wnd.XMLHttpRequest;
    req.open('GET', resourcePath_0);
    req.onload = makeLambdaFunction(cbupwu.AjaxUtils$lambda$1$Type.prototype.onInvoke_0, cbupwu.AjaxUtils$lambda$1$Type, [req, resolve_1, reject_2]);
    req.onerror = makeLambdaFunction(cbupwu.AjaxUtils$lambda$2$Type.prototype.onInvoke, cbupwu.AjaxUtils$lambda$2$Type, [reject_2]);
    req.send();
  }
}
;
cbupwu.lambda$1_4 = function lambda$1_4(req_0, resolve_1, reject_2, event_3){
  cbupwu.$clinit_AjaxUtils();
  {
    if (req_0.status == 200) {
      cbujcp.$onInvoke_0(resolve_1, req_0.response);
    }
     else {
      reject_2(new cbuce.ResourceException(req_0.statusText));
    }
  }
}
;
cbupwu.lambda$2_0 = function lambda$2_0(reject_0, event_1){
  cbupwu.$clinit_AjaxUtils();
  {
    reject_0(new cbuce.ResourceException('Network Error'));
    return event_1;
  }
}
;
defineClass(492, 1, {1:1});
cggl.Lcom_badu_ui_platforms_web_utils_AjaxUtils_2_classLit = createForClass('com.badu.ui.platforms.web.utils', 'AjaxUtils', 492, cggl.Ljava_lang_Object_2_classLit);
cbupwu.$clinit_AjaxUtils$lambda$0$Type = function $clinit_AjaxUtils$lambda$0$Type(){
  cbupwu.$clinit_AjaxUtils$lambda$0$Type = emptyMethod;
}
;
cbupwu.$getClass_6 = function $getClass_6(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwu.AjaxUtils$lambda$0$Type = function AjaxUtils$lambda$0$Type(resourcePath_0){
  cbupwu.$clinit_AjaxUtils$lambda$0$Type();
  this.resourcePath_0 = resourcePath_0;
}
;
defineClass(514, $wnd.Function, {1:1}, cbupwu.AjaxUtils$lambda$0$Type);
_.onInvoke_2 = function onInvoke_5(arg0, arg1){
  cbupwu.lambda$0_5(this.resourcePath_0, arg0, arg1);
}
;
cbupwu.$clinit_AjaxUtils$lambda$1$Type = function $clinit_AjaxUtils$lambda$1$Type(){
  cbupwu.$clinit_AjaxUtils$lambda$1$Type = emptyMethod;
}
;
cbupwu.$getClass_7 = function $getClass_7(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwu.AjaxUtils$lambda$1$Type = function AjaxUtils$lambda$1$Type(req_0, resolve_1, reject_2){
  cbupwu.$clinit_AjaxUtils$lambda$1$Type();
  this.req_0 = req_0;
  this.resolve_1 = resolve_1;
  this.reject_2 = reject_2;
}
;
defineClass(516, $wnd.Function, {1:1}, cbupwu.AjaxUtils$lambda$1$Type);
_.onInvoke_0 = function onInvoke_6(arg0){
  cbupwu.lambda$1_4(this.req_0, this.resolve_1, this.reject_2, arg0);
}
;
cbupwu.$clinit_AjaxUtils$lambda$2$Type = function $clinit_AjaxUtils$lambda$2$Type(){
  cbupwu.$clinit_AjaxUtils$lambda$2$Type = emptyMethod;
}
;
cbupwu.$getClass_8 = function $getClass_8(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cbupwu.AjaxUtils$lambda$2$Type = function AjaxUtils$lambda$2$Type(reject_0){
  cbupwu.$clinit_AjaxUtils$lambda$2$Type();
  this.reject_0 = reject_0;
}
;
defineClass(517, $wnd.Function, {1:1}, cbupwu.AjaxUtils$lambda$2$Type);
_.onInvoke = function onInvoke_7(arg0){
  return cbupwu.lambda$2_0(this.reject_0, arg0);
}
;
cbupwu.$clinit_StringUtils = function $clinit_StringUtils(){
  cbupwu.$clinit_StringUtils = emptyMethod;
  jl.$clinit_Object();
}
;
cbupwu.isEmpty_1 = function isEmpty_1(text_0){
  cbupwu.$clinit_StringUtils();
  return jsEquals(null, text_0) || jl.length__I__devirtual$_0(text_0) == 0;
}
;
defineClass(501, 1, {1:1});
cggl.Lcom_badu_ui_platforms_web_utils_StringUtils_2_classLit = createForClass('com.badu.ui.platforms.web.utils', 'StringUtils', 501, cggl.Ljava_lang_Object_2_classLit);
cbupwu.$clinit_WebLogger = function $clinit_WebLogger(){
  cbupwu.$clinit_WebLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cbupwu.WebLogger = function WebLogger(){
  cbupwu.$clinit_WebLogger();
  Object_0.call(this);
  this.$init_58();
}
;
defineClass(176, 1, {1:1}, cbupwu.WebLogger);
_.$init_58 = function $init_58(){
}
;
_.debug = function debug(msg){
  var $instance;
  $instance = $wnd.window.console , $instance.log.apply($instance, ensureNotNull(msg));
}
;
_.error_0 = function error_2(msg){
  var $instance;
  $instance = $wnd.window.console , $instance.error.apply($instance, ensureNotNull(msg));
}
;
cggl.Lcom_badu_ui_platforms_web_utils_WebLogger_2_classLit = createForClass('com.badu.ui.platforms.web.utils', 'WebLogger', 176, cggl.Ljava_lang_Object_2_classLit);
cbwc.$clinit_MyApp = function $clinit_MyApp(){
  cbwc.$clinit_MyApp = emptyMethod;
  cbt.$clinit_TheAppMain();
}
;
cbwc.MyApp = function MyApp(){
  cbwc.$clinit_MyApp();
  cbt.TheAppMain.call(this, new cbupw.WebUIPlatform);
  this.$init_59();
}
;
cbwc.startApp = function startApp(){
  cbwc.$clinit_MyApp();
  var app;
  app = new cbwc.MyApp;
  app.start_1();
}
;
defineClass(126, 125, {10:1, 1:1}, cbwc.MyApp);
_.$init_59 = function $init_59(){
}
;
cggl.Lcom_badu_web_client_MyApp_2_classLit = createForClass('com.badu.web.client', 'MyApp', 126, cggl.Lcom_badu_theapp_TheAppMain_2_classLit);
cggcc.$clinit_EntryPoint_0 = function $clinit_EntryPoint_0(){
  cggcc.$clinit_EntryPoint_0 = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_EntryPoint_2_classLit = createForInterface('com.google.gwt.core.client', 'EntryPoint');
cbwcg.$clinit_EntryPoint = function $clinit_EntryPoint(){
  cbwcg.$clinit_EntryPoint = emptyMethod;
  jl.$clinit_Object();
}
;
cbwcg.EntryPoint = function EntryPoint(){
  cbwcg.$clinit_EntryPoint();
  Object_0.call(this);
  this.$init_60();
}
;
defineClass(103, 1, {237:1, 1:1}, cbwcg.EntryPoint);
_.$init_60 = function $init_60(){
}
;
_.onModuleLoad = function onModuleLoad(){
  cbwc.startApp();
}
;
cggl.Lcom_badu_web_client_gwt_EntryPoint_2_classLit = createForClass('com.badu.web.client.gwt', 'EntryPoint', 103, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Duration = function $clinit_Duration(){
  cggcc.$clinit_Duration = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.Duration = function Duration(){
  cggcc.$clinit_Duration();
  Object_0.call(this);
  this.$init_61();
}
;
cggcc.currentTimeMillis = function currentTimeMillis(){
  cggcc.$clinit_Duration();
  return cggcc.now_1();
}
;
cggcc.uncheckedConversion = function uncheckedConversion(elapsed){
  return elapsed;
}
;
defineClass(212, 1, {1:1}, cggcc.Duration);
_.$init_61 = function $init_61(){
  this.start_0 = cggcc.currentTimeMillis();
}
;
_.elapsedMillis = function elapsedMillis(){
  return cggcc.uncheckedConversion(cggcc.currentTimeMillis() - this.start_0);
}
;
_.start_0 = 0;
cggl.Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 212, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Scheduler$ScheduledCommand = function $clinit_Scheduler$ScheduledCommand(){
  cggcc.$clinit_Scheduler$ScheduledCommand = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2_classLit = createForInterface('com.google.gwt.core.client', 'Scheduler/ScheduledCommand');
cggcc.$clinit_GWT$1 = function $clinit_GWT$1(){
  cggcc.$clinit_GWT$1 = emptyMethod;
}
;
defineClass(241, 1, {1:1});
cggl.Lcom_google_gwt_core_client_GWT$1_2_classLit = createForClass('com.google.gwt.core.client', 'GWT/1', 241, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_GWT$UncaughtExceptionHandler = function $clinit_GWT$UncaughtExceptionHandler(){
  cggcc.$clinit_GWT$UncaughtExceptionHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_GWT$UncaughtExceptionHandler_2_classLit = createForInterface('com.google.gwt.core.client', 'GWT/UncaughtExceptionHandler');
cggcc.$clinit_GWT$DefaultUncaughtExceptionHandler = function $clinit_GWT$DefaultUncaughtExceptionHandler(){
  cggcc.$clinit_GWT$DefaultUncaughtExceptionHandler = emptyMethod;
}
;
defineClass(240, 1, {1:1});
cggl.Lcom_google_gwt_core_client_GWT$DefaultUncaughtExceptionHandler_2_classLit = createForClass('com.google.gwt.core.client', 'GWT/DefaultUncaughtExceptionHandler', 240, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_JsArray = function $clinit_JsArray(){
  cggcc.$clinit_JsArray = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$get = function $get(this$static, index_0){
  cggcc.$clinit_JsArray();
  return this$static[index_0];
}
;
cggcc.$length = function $length(this$static){
  cggcc.$clinit_JsArray();
  return this$static.length;
}
;
cggcc.$push = function $push(this$static, value_0){
  cggcc.$clinit_JsArray();
  this$static[this$static.length] = value_0;
}
;
cggcc.$set = function $set(this$static, index_0, value_0){
  cggcc.$clinit_JsArray();
  this$static[index_0] = value_0;
}
;
cggcc.$clinit_JsArrayString = function $clinit_JsArrayString(){
  cggcc.$clinit_JsArrayString = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$get_0 = function $get_0(this$static, index_0){
  cggcc.$clinit_JsArrayString();
  return this$static[index_0];
}
;
cggcc.$length_0 = function $length_0(this$static){
  cggcc.$clinit_JsArrayString();
  return this$static.length;
}
;
cggcc.$clinit_JsDate = function $clinit_JsDate(){
  cggcc.$clinit_JsDate = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.now_1 = function now_1(){
  cggcc.$clinit_JsDate();
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}
;
cggcc.$clinit_RunAsyncCallback = function $clinit_RunAsyncCallback(){
  cggcc.$clinit_RunAsyncCallback = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
cggcc.$clinit_Scheduler = function $clinit_Scheduler(){
  cggcc.$clinit_Scheduler = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.Scheduler = function Scheduler(){
  cggcc.$clinit_Scheduler();
  Object_0.call(this);
  this.$init_66();
}
;
cggcc.get_3 = function get_3(){
  cggcc.$clinit_Scheduler();
  return cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE;
}
;
defineClass(104, 1, {1:1});
_.$init_66 = function $init_66(){
}
;
cggl.Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 104, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Scheduler$RepeatingCommand = function $clinit_Scheduler$RepeatingCommand(){
  cggcc.$clinit_Scheduler$RepeatingCommand = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2_classLit = createForInterface('com.google.gwt.core.client', 'Scheduler/RepeatingCommand');
cggcci.$clinit_AsyncFragmentLoader = function $clinit_AsyncFragmentLoader(){
  cggcci.$clinit_AsyncFragmentLoader = emptyMethod;
  jl.$clinit_Object();
  BROWSER_LOADER = cggcci.makeBrowserLoader(1, stampJavaTypeInfo(getClassLiteralForArray(cggl.I_classLit, 1), {3:1, 1:1}, 19, 15, []));
}
;
function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy, logger, executor){
  var numEntriesPlusOne;
  Object_0.call(this);
  this.$init_67();
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  this.logger = logger;
  this.onSuccessExecutor = executor;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 4:1}, 4, numEntriesPlusOne, 3, 2);
  this.requestedExclusives = new cggcci.AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initUnidimensionalArray(cggl.Z_classLit, {3:1, 1:1}, 19, numEntriesPlusOne, 16, 1);
  this.pendingDownloadErrorHandlers = initUnidimensionalArray(cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, {3:1, 1:1, 4:1}, 91, numEntriesPlusOne, 0, 1);
}

cggcci.makeBrowserLoader = function makeBrowserLoader(numFragments, initialLoad){
  if (isClient()) {
    return new AsyncFragmentLoader(numFragments, initialLoad, castTo(castTo(new cggcci.XhrLoadingStrategy, 89), 89), castTo(castTo(new cggcci.AsyncFragmentLoader$StandardLogger, 135), 135), castTo(castTo(new cggcci.OnSuccessExecutor, 58), 58));
  }
   else {
    return null;
  }
}
;
function onLoad(fragment){
  cggcci.$clinit_AsyncFragmentLoader();
  BROWSER_LOADER.onLoadImpl(fragment);
}

function runAsync(fragment, callback){
  cggcci.$clinit_AsyncFragmentLoader();
  BROWSER_LOADER.runAsyncImpl(fragment, callback);
}

defineClass(136, 1, {1:1}, AsyncFragmentLoader);
_.$init_67 = function $init_67(){
  this.fragmentLoading = -1;
  this.prefetching = false;
  this.prefetchQueue = null;
  this.remainingInitialFragments = null;
}
;
_.anyPrefetchesRequested = function anyPrefetchesRequested(){
  return this.prefetching && isNotNull(this.prefetchQueue) && this.prefetchQueue.size_1() > 0;
}
;
_.clearRequestsAlreadyLoaded = function clearRequestsAlreadyLoaded(){
  var offset;
  while (this.requestedExclusives.size_1() > 0 && this.isLoaded[this.requestedExclusives.peek()]) {
    offset = this.requestedExclusives.remove_0();
    if (offset < this.pendingDownloadErrorHandlers.length) {
      setCheck(this.pendingDownloadErrorHandlers, offset, null);
    }
  }
  if (isNotNull(this.prefetchQueue)) {
    while (this.prefetchQueue.size_1() > 0 && this.isLoaded[this.prefetchQueue.peek()]) {
      this.prefetchQueue.remove_0();
    }
  }
}
;
_.downloadGroup = function downloadGroup(fragment){
  return fragment == this.leftoversFragment()?'leftoversDownload':cggcci.downloadGroupForExclusive(fragment);
}
;
_.executeOnSuccess0 = function executeOnSuccess0(callback){
  callback.onSuccess();
}
;
_.fragmentHasLoaded = function fragmentHasLoaded(fragment){
  this.logFragmentLoaded(fragment);
  if (fragment < this.pendingDownloadErrorHandlers.length) {
    setCheck(this.pendingDownloadErrorHandlers, fragment, null);
  }
  if (this.isInitial(fragment) && isNotNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments.remove_0();
  }
  this.fragmentLoading = -1;
  this.isLoaded[fragment] = true;
  this.startLoadingNextFragment();
}
;
_.haveInitialFragmentsLoaded = function haveInitialFragmentsLoaded(){
  return isNotNull(this.remainingInitialFragments) && this.remainingInitialFragments.size_1() == 0;
}
;
_.initializeRemainingInitialFragments = function initializeRemainingInitialFragments(){
  var sp, sp$array, sp$index, sp$max;
  if (isNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments = new cggcci.AsyncFragmentLoader$BoundedIntQueue(this.initialLoadSequence.length + 1);
    for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      this.remainingInitialFragments.add_0(sp);
    }
    this.remainingInitialFragments.add_0(this.leftoversFragment());
  }
}
;
_.inject = function inject(splitPoint, loadErrorHandler){
  setCheck(this.pendingDownloadErrorHandlers, splitPoint, loadErrorHandler);
  if (!this.isInitial(splitPoint)) {
    this.requestedExclusives.add_0(splitPoint);
  }
  this.startLoadingNextFragment();
}
;
_.isEmpty_0 = function isEmpty_2(array){
  var i;
  for (i = 0; i < array.length; i++) {
    if (jsNotEquals(array[i], null)) {
      return false;
    }
  }
  return true;
}
;
_.isInitial = function isInitial(splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this.leftoversFragment()) {
    return true;
  }
  for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}
;
_.isLoading = function isLoading(splitPoint){
  return isNotNull(this.pendingDownloadErrorHandlers[splitPoint]);
}
;
_.leftoversFragment = function leftoversFragment(){
  return this.numEntries;
}
;
_.logDownloadStart = function logDownloadStart(fragment){
  this.logEventProgress_0(this.downloadGroup(fragment), 'begin', fragment, -1);
}
;
_.logEventProgress = function logEventProgress(eventGroup, type_0){
  this.logEventProgress_0(eventGroup, type_0, -1, -1);
}
;
_.logEventProgress_0 = function logEventProgress_0(eventGroup, type_0, fragment, size_0){
  this.logger.logEventProgress_1(eventGroup, type_0, fragment, size_0);
}
;
_.logFragmentLoaded = function logFragmentLoaded(fragment){
  var logGroup;
  logGroup = this.downloadGroup(fragment);
  this.logEventProgress_0(logGroup, 'end', fragment, -1);
}
;
_.onLoadImpl = function onLoadImpl(fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t;
  this.fragmentHasLoaded(fragment);
  callbacks = this.allCallbacks[fragment];
  if (jsNotEquals(callbacks, null)) {
    this.logEventProgress('runCallbacks' + fragment, 'begin');
    setCheck(this.allCallbacks, fragment, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        castTo(callback, 132).onSuccess();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 6)) {
          t = $e0;
          reportUncaughtException(t);
        }
         else 
          throw toJs($e0);
      }
    }
    this.logEventProgress('runCallbacks' + fragment, 'end');
  }
}
;
_.runAsyncImpl = function runAsyncImpl(fragment, callback){
  var callbacks;
  if (this.isLoaded[fragment]) {
    this.onSuccessExecutor.execute_1(this, callback);
    return;
  }
  callbacks = this.allCallbacks[fragment];
  if (jsEquals(callbacks, null)) {
    callbacks = setCheck(this.allCallbacks, fragment, initUnidimensionalArray(cggl.Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, {3:1, 1:1, 4:1}, 132, 0, 0, 1));
  }
  setCheck(callbacks, callbacks.length, callback);
  if (!this.isLoading(fragment)) {
    this.inject(fragment, new cggcci.AsyncFragmentLoader$1(this, fragment));
  }
}
;
_.startLoadingFragment = function startLoadingFragment(fragment){
  this.fragmentLoading = fragment;
  this.logDownloadStart(fragment);
  this.loadingStrategy.startLoadingFragment_0(fragment, new cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure(this, fragment));
}
;
_.startLoadingNextFragment = function startLoadingNextFragment(){
  if (this.fragmentLoading >= 0) {
    return;
  }
  this.initializeRemainingInitialFragments();
  this.clearRequestsAlreadyLoaded();
  if (this.isEmpty_0(this.pendingDownloadErrorHandlers) && !this.anyPrefetchesRequested()) {
    return;
  }
  if (this.remainingInitialFragments.size_1() > 0) {
    this.startLoadingFragment(this.remainingInitialFragments.peek());
    return;
  }
  if (this.requestedExclusives.size_1() > 0) {
    this.startLoadingFragment(this.requestedExclusives.remove_0());
    return;
  }
  if (this.anyPrefetchesRequested()) {
    this.startLoadingFragment(this.prefetchQueue.remove_0());
    return;
  }
}
;
_.fragmentLoading = 0;
_.numEntries = 0;
_.prefetching = false;
var BROWSER_LOADER;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 136, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$LoadTerminatedHandler = function $clinit_AsyncFragmentLoader$LoadTerminatedHandler(){
  cggcci.$clinit_AsyncFragmentLoader$LoadTerminatedHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
cggcci.$clinit_AsyncFragmentLoader$1 = function $clinit_AsyncFragmentLoader$1(){
  cggcci.$clinit_AsyncFragmentLoader$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$1 = function AsyncFragmentLoader$1(this$0, val$fragment){
  cggcci.$clinit_AsyncFragmentLoader$1();
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
  Object_0.call(this);
  this.$init_68();
}
;
defineClass(137, 1, {91:1, 1:1}, cggcci.AsyncFragmentLoader$1);
_.$init_68 = function $init_68(){
}
;
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$array, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (jsNotEquals(callbacks, null)) {
    setCheck(this.this$01.allCallbacks, this.val$fragment2, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      castTo(callback, 132).onFailure(reason);
    }
  }
}
;
_.val$fragment2 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 137, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue = function $clinit_AsyncFragmentLoader$BoundedIntQueue(){
  cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$BoundedIntQueue = function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue();
  Object_0.call(this);
  this.$init_69();
  this.array = initUnidimensionalArray(cggl.I_classLit, {3:1, 1:1}, 19, maxPuts, 15, 1);
}
;
defineClass(90, 1, {1:1}, cggcci.AsyncFragmentLoader$BoundedIntQueue);
_.$init_69 = function $init_69(){
  this.read = 0;
  this.write_0 = 0;
}
;
_.add_0 = function add_0(x_0){
  this.array[this.write_0++] = x_0;
}
;
_.clear_0 = function clear_2(){
  this.read = 0;
  this.write_0 = 0;
}
;
_.peek = function peek(){
  return this.array[this.read];
}
;
_.remove_0 = function remove_2(){
  return this.array[this.read++];
}
;
_.size_1 = function size_3(){
  return this.write_0 - this.read;
}
;
_.read = 0;
_.write_0 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 90, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure = function $clinit_AsyncFragmentLoader$HttpDownloadFailure(){
  cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.AsyncFragmentLoader$HttpDownloadFailure = function AsyncFragmentLoader$HttpDownloadFailure(url_0, statusCode, statusText){
  cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure();
  jl.RuntimeException_1.call(this, 'Download of ' + url_0 + ' failed with status ' + statusCode + '(' + statusText + ')');
  this.$init_70();
  this.statusCode = statusCode;
}
;
defineClass(139, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, cggcci.AsyncFragmentLoader$HttpDownloadFailure);
_.$init_70 = function $init_70(){
}
;
_.statusCode = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 139, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure = function $clinit_AsyncFragmentLoader$HttpInstallFailure(){
  cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.AsyncFragmentLoader$HttpInstallFailure = function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure();
  jl.RuntimeException_2.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
  this.$init_71();
}
;
defineClass(140, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, cggcci.AsyncFragmentLoader$HttpInstallFailure);
_.$init_71 = function $init_71(){
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 140, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$LoadingStrategy = function $clinit_AsyncFragmentLoader$LoadingStrategy(){
  cggcci.$clinit_AsyncFragmentLoader$LoadingStrategy = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadingStrategy_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadingStrategy');
cggcci.$clinit_AsyncFragmentLoader$Logger = function $clinit_AsyncFragmentLoader$Logger(){
  cggcci.$clinit_AsyncFragmentLoader$Logger = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$Logger_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/Logger');
cggcci.$clinit_AsyncFragmentLoader$LwmLabels = function $clinit_AsyncFragmentLoader$LwmLabels(){
  cggcci.$clinit_AsyncFragmentLoader$LwmLabels = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.downloadGroupForExclusive = function downloadGroupForExclusive(splitPoint){
  cggcci.$clinit_AsyncFragmentLoader$LwmLabels();
  return 'download' + splitPoint;
}
;
defineClass(285, 1, {1:1});
cggcci.BEGIN = 'begin';
cggcci.END = 'end';
cggcci.LEFTOVERS_DOWNLOAD = 'leftoversDownload';
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LwmLabels_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LwmLabels', 285, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = function $clinit_AsyncFragmentLoader$ResetAfterDownloadFailure(){
  cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure = function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_72();
  this.fragment_0 = myFragment;
}
;
defineClass(138, 1, {91:1, 1:1}, cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure);
_.$init_72 = function $init_72(){
}
;
_.loadTerminated = function loadTerminated_0(reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this.this$01.fragmentLoading != this.fragment_0) {
    return;
  }
  handlersToRun = this.this$01.pendingDownloadErrorHandlers;
  this.this$01.pendingDownloadErrorHandlers = initUnidimensionalArray(cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, {3:1, 1:1, 4:1}, 91, this.this$01.numEntries + 1, 0, 1);
  this.this$01.requestedExclusives.clear_0();
  this.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (isNotNull(handler)) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  if (isNotNull(lastException)) {
    throw toJs(lastException);
  }
}
;
_.fragment_0 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 138, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$StandardLogger = function $clinit_AsyncFragmentLoader$StandardLogger(){
  cggcci.$clinit_AsyncFragmentLoader$StandardLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$StandardLogger = function AsyncFragmentLoader$StandardLogger(){
  cggcci.$clinit_AsyncFragmentLoader$StandardLogger();
  Object_0.call(this);
  this.$init_73();
}
;
cggcci.stats = function stats(data_0){
  return $stats(data_0);
}
;
defineClass(134, 1, {135:1, 1:1}, cggcci.AsyncFragmentLoader$StandardLogger);
_.$init_73 = function $init_73(){
}
;
_.createStatsEvent = function createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:getModuleName(), sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  if (fragment >= 0) {
    evt.fragment = fragment;
  }
  if (size_0 >= 0) {
    evt.size = size_0;
  }
  return evt;
}
;
_.isStatsAvailable = function isStatsAvailable(){
  return !!$stats;
}
;
_.logEventProgress_1 = function logEventProgress_1(eventGroup, type_0, fragment, size_0){
  var toss;
  toss = this.isStatsAvailable() && cggcci.stats(this.createStatsEvent(eventGroup, type_0, fragment, size_0));
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/StandardLogger', 134, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_Impl = function $clinit_Impl(){
  cggcci.$clinit_Impl = emptyMethod;
  jl.$clinit_Object();
  {
    if (isScript() && isNotNull((cggcci.$clinit_StackTraceCreator() , cggcci.collector_1))) {
    }
  }
  watchdogEntryDepthTimerId = -1;
}
;
cggcci.apply_0 = function apply_0(jsFunction, thisObj, args){
  if (isScript()) {
    return jsFunction.apply(thisObj, args);
  }
   else {
    var __0 = jsFunction.apply(thisObj, args);
    if (__0 != null) {
      __0 = {val:__0};
    }
    return __0;
  }
}
;
cggcci.enter = function enter(){
  var now_0;
  if (isScript() && entryDepth != 0) {
    now_0 = cggcc.currentTimeMillis();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = cggcci.watchdogEntryDepthSchedule();
    }
  }
  if (entryDepth++ == 0) {
    (cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE).flushEntryCommands();
    return true;
  }
  return false;
}
;
function entry_0(jsFunction){
  cggcci.$clinit_Impl();
  return function(){
    if (isScript()) {
      return cggcci.entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = cggcci.entry0(jsFunction, this, arguments);
      if (__0 != null) {
        __0 = __0.val;
      }
      return __0;
    }
  }
  ;
}

cggcci.entry0 = function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = cggcci.enter();
  try {
    if (isNotNull(getUncaughtExceptionHandler())) {
      try {
        return cggcci.apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 6)) {
          t = $e0;
          reportUncaughtException_0(t);
          return cggcci.undefined_0();
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return cggcci.apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    cggcci.exit(initialEntry);
  }
}
;
cggcci.exit = function exit(initialEntry){
  if (initialEntry) {
    (cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE).flushFinallyCommands();
  }
  entryDepth--;
  if (initialEntry) {
    if (isScript() && watchdogEntryDepthTimerId != -1) {
      cggcci.watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}
;
function getModuleName_0(){
  cggcci.$clinit_Impl();
  return $moduleName;
}

function getNameOf(jsniIdent){
  cggcci.$clinit_Impl();
  throw toJs(new jl.UnsupportedOperationException_0('Impl.getNameOf() is unimplemented in Development Mode'));
}

function registerEntry(){
  cggcci.$clinit_Impl();
  if (isScript()) {
    return entry_0;
  }
   else {
    return $entry = entry_0;
  }
}

cggcci.reportToBrowser = function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}
;
cggcci.reportToBrowser_0 = function reportToBrowser_0(e){
  cggcci.reportToBrowser(instanceOf(e, 47)?castTo(e, 47).getThrown():e);
}
;
function reportUncaughtException_0(e){
  cggcci.$clinit_Impl();
  cggcci.reportUncaughtException_1(e, true);
}

cggcci.reportUncaughtException_1 = function reportUncaughtException_1(e, reportSwallowedExceptionToBrowser){
  var handler;
  if (isNotNull(uncaughtExceptionHandlerForTest)) {
    uncaughtExceptionHandlerForTest.onUncaughtException(e);
  }
  handler = getUncaughtExceptionHandler();
  if (isNotNull(handler)) {
    if (jsEquals(handler, uncaughtExceptionHandlerForTest)) {
      return;
    }
    handler.onUncaughtException(e);
    return;
  }
  if (isClient() && reportSwallowedExceptionToBrowser) {
    cggcci.reportToBrowser_0(e);
  }
   else {
    (jl.$clinit_System() , jl.err).print_0('Uncaught exception ');
    e.printStackTrace_0((jl.$clinit_System() , jl.err));
  }
}
;
cggcci.undefined_0 = function undefined_0(){
  return;
}
;
cggcci.watchdogEntryDepthCancel = function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}
;
cggcci.watchdogEntryDepthRun = function watchdogEntryDepthRun(){
  if (isScript() && entryDepth != 0) {
    entryDepth = 0;
  }
  watchdogEntryDepthTimerId = -1;
}
;
cggcci.watchdogEntryDepthSchedule = function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(cggcci.watchdogEntryDepthRun, 10);
}
;
defineClass(286, 1, {1:1});
var WATCHDOG_ENTRY_DEPTH_CHECK_INTERVAL_MS = 2000;
var entryDepth = 0;
var uncaughtExceptionHandlerForTest;
var watchdogEntryDepthLastScheduled = 0;
var watchdogEntryDepthTimerId = 0;
cggl.Lcom_google_gwt_core_client_impl_Impl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'Impl', 286, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_LoadingStrategyBase = function $clinit_LoadingStrategyBase(){
  cggcci.$clinit_LoadingStrategyBase = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.LoadingStrategyBase = function LoadingStrategyBase(downloadStrategy){
  cggcci.$clinit_LoadingStrategyBase();
  Object_0.call(this);
  this.$init_74();
  this.downloadStrategy = downloadStrategy;
}
;
cggcci.gwtInstallCode = function gwtInstallCode(text_0){
  cggcci.$clinit_LoadingStrategyBase();
  __gwtInstallCode(text_0);
}
;
cggcci.gwtStartLoadingFragment = function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}
;
defineClass(158, 1, {89:1, 1:1});
_.$init_74 = function $init_74(){
  this.manualRetryNumbers = cggcci.create_0();
}
;
_.getManualRetryNum = function getManualRetryNum(fragment){
  var ser;
  ser = cggcci.$get_1(this.manualRetryNumbers, fragment);
  cggcci.$put(this.manualRetryNumbers, fragment, ser + 1);
  return ser;
}
;
_.getMaxAutoRetryCount = function getMaxAutoRetryCount(){
  return cggcci.MAX_AUTO_RETRY_COUNT;
}
;
_.startLoadingFragment_0 = function startLoadingFragment_0(fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0;
  url_0 = cggcci.gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (jsEquals(url_0, null)) {
    return;
  }
  manualRetry = this.getManualRetryNum(fragment);
  if (manualRetry > 0) {
    connector = jl.contains_Ljava_lang_CharSequence__Z__devirtual$(url_0, '?')?38:63;
    url_0 += charToString(connector) + 'manualRetry=' + manualRetry;
  }
  request = new cggcci.LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, this.downloadStrategy, this.getMaxAutoRetryCount());
  request.tryDownload_0();
}
;
cggcci.MAX_AUTO_RETRY_COUNT = 3;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 158, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_LoadingStrategyBase$DownloadStrategy = function $clinit_LoadingStrategyBase$DownloadStrategy(){
  cggcci.$clinit_LoadingStrategyBase$DownloadStrategy = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase$DownloadStrategy_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'LoadingStrategyBase/DownloadStrategy');
cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker = function $clinit_LoadingStrategyBase$FragmentReloadTracker(){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcci.$get_1 = function $get_1(this$static, x_0){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  return this$static[x_0]?this$static[x_0]:0;
}
;
cggcci.$put = function $put(this$static, x_0, y_0){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  this$static[x_0] = y_0;
}
;
cggcci.create_0 = function create_0(){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  return cggcc.createArray();
}
;
cggcci.$clinit_LoadingStrategyBase$RequestData = function $clinit_LoadingStrategyBase$RequestData(){
  cggcci.$clinit_LoadingStrategyBase$RequestData = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.LoadingStrategyBase$RequestData = function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, downloadStrategy, maxRetryCount){
  cggcci.$clinit_LoadingStrategyBase$RequestData();
  Object_0.call(this);
  this.$init_75();
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
  this.downloadStrategy = downloadStrategy;
}
;
defineClass(160, 1, {1:1}, cggcci.LoadingStrategyBase$RequestData);
_.$init_75 = function $init_75(){
  this.errorHandler = null;
}
;
_.getUrl = function getUrl(){
  return this.url_0;
}
;
_.onLoadError = function onLoadError(e, mayRetry){
  var connector;
  if (mayRetry) {
    this.retryCount++;
    if (this.retryCount <= this.maxRetryCount) {
      connector = jl.contains_Ljava_lang_CharSequence__Z__devirtual$(this.originalUrl, '?')?38:63;
      this.url_0 = this.originalUrl + charToString(connector) + 'autoRetry=' + this.retryCount;
      this.downloadStrategy.tryDownload(this);
      return;
    }
  }
  this.errorHandler.loadTerminated(e);
}
;
_.tryDownload_0 = function tryDownload(){
  this.downloadStrategy.tryDownload(this);
}
;
_.tryInstall = function tryInstall(code_0){
  var e, textIntro;
  try {
    cggcci.gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      textIntro = code_0;
      if (jsNotEquals(textIntro, null) && jl.length__I__devirtual$_0(textIntro) > 200) {
        textIntro = jl.substring_II_Ljava_lang_String___devirtual$(textIntro, 0, 200) + '...';
      }
      this.onLoadError(new cggcci.AsyncFragmentLoader$HttpInstallFailure(this.url_0, textIntro, e), false);
    }
     else 
      throw toJs($e0);
  }
}
;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
cggcci.MAX_LOG_LENGTH = 200;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 160, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_OnSuccessExecutor = function $clinit_OnSuccessExecutor(){
  cggcci.$clinit_OnSuccessExecutor = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.OnSuccessExecutor = function OnSuccessExecutor(){
  cggcci.$clinit_OnSuccessExecutor();
  Object_0.call(this);
  this.$init_76();
}
;
defineClass(58, 1, {58:1, 1:1}, cggcci.OnSuccessExecutor);
_.$init_76 = function $init_76(){
}
;
_.execute_1 = function execute(fragmentLoader, callback){
  cggcc.get_3().scheduleDeferred(new cggcci.OnSuccessExecutor$1(this, fragmentLoader, callback));
}
;
cggl.Lcom_google_gwt_core_client_impl_OnSuccessExecutor_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor', 58, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_OnSuccessExecutor$1 = function $clinit_OnSuccessExecutor$1(){
  cggcci.$clinit_OnSuccessExecutor$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.OnSuccessExecutor$1 = function OnSuccessExecutor$1(this$0, val$fragmentLoader, val$callback){
  cggcci.$clinit_OnSuccessExecutor$1();
  this.this$01 = this$0;
  this.val$fragmentLoader2 = val$fragmentLoader;
  this.val$callback3 = val$callback;
  Object_0.call(this);
  this.$init_77();
}
;
defineClass(161, 1, {1:1}, cggcci.OnSuccessExecutor$1);
_.$init_77 = function $init_77(){
}
;
_.execute_0 = function execute_0(){
  this.val$fragmentLoader2.executeOnSuccess0(this.val$callback3);
}
;
cggl.Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 161, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl = function $clinit_SchedulerImpl(){
  cggcci.$clinit_SchedulerImpl = emptyMethod;
  cggcc.$clinit_Scheduler();
  cggcci.INSTANCE = castTo(new cggcci.SchedulerImpl, 77);
}
;
cggcci.SchedulerImpl = function SchedulerImpl(){
  cggcc.Scheduler.call(this);
  this.$init_78();
}
;
cggcci.createQueue = function createQueue(){
  return cggcc.$cast(cggcc.createArray());
}
;
cggcci.execute_1 = function execute_1(cmd){
  return cmd.execute();
}
;
cggcci.push_0 = function push_0(queue, task){
  if (isNull(queue)) {
    queue = cggcci.createQueue();
  }
  cggcc.$push(queue, task);
  return queue;
}
;
cggcci.runScheduledTasks = function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = cggcc.$length(tasks); i < j; i++) {
    t = cggcc.$get(tasks, i);
    try {
      if (cggcci.$isRepeating(t)) {
        if (cggcci.$executeRepeating(t)) {
          rescheduled = cggcci.push_0(rescheduled, t);
        }
      }
       else {
        cggcci.$executeScheduled(t);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}
;
cggcci.scheduleFixedDelayImpl = function scheduleFixedDelayImpl(cmd, delayMs){
  function callback(){
    var ret = $entry(cggcci.execute_1)(cmd);
    if (!isScript()) {
      ret = ret == true;
    }
    if (ret) {
      $wnd.setTimeout(callback, delayMs);
    }
  }

  $wnd.setTimeout(callback, delayMs);
}
;
defineClass(77, 104, {77:1, 1:1}, cggcci.SchedulerImpl);
_.$init_78 = function $init_78(){
  this.flushRunning = false;
  this.shouldBeRunning = false;
}
;
_.createDuration = function createDuration(){
  return new cggcc.Duration;
}
;
_.flushEntryCommands = function flushEntryCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.entryCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.entryCommands;
      this.entryCommands = null;
      rescheduled = cggcci.runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.entryCommands));
    this.entryCommands = rescheduled;
  }
}
;
_.flushFinallyCommands = function flushFinallyCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.finallyCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.finallyCommands;
      this.finallyCommands = null;
      rescheduled = cggcci.runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.finallyCommands));
    this.finallyCommands = rescheduled;
  }
}
;
_.flushPostEventPumpCommands = function flushPostEventPumpCommands(){
  var oldDeferred;
  if (isNotNull(this.deferredCommands)) {
    oldDeferred = this.deferredCommands;
    this.deferredCommands = null;
    if (isNull(this.incrementalCommands)) {
      this.incrementalCommands = cggcci.createQueue();
    }
    cggcci.runScheduledTasks(oldDeferred, this.incrementalCommands);
  }
  if (isNotNull(this.incrementalCommands)) {
    this.incrementalCommands = this.runRepeatingTasks(this.incrementalCommands);
  }
}
;
_.isWorkQueued = function isWorkQueued(){
  return isNotNull(this.deferredCommands) || isNotNull(this.incrementalCommands);
}
;
_.maybeSchedulePostEventPumpCommands = function maybeSchedulePostEventPumpCommands(){
  if (!this.shouldBeRunning) {
    this.shouldBeRunning = true;
    if (isNull(this.flusher)) {
      this.flusher = new cggcci.SchedulerImpl$Flusher(this);
    }
    cggcci.scheduleFixedDelayImpl(this.flusher, 1);
    if (isNull(this.rescue)) {
      this.rescue = new cggcci.SchedulerImpl$Rescuer(this);
    }
    cggcci.scheduleFixedDelayImpl(this.rescue, 50);
  }
}
;
_.runRepeatingTasks = function runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = cggcc.$length(tasks);
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = this.createDuration();
  while (duration.elapsedMillis() < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = cggcc.$get(tasks, i);
      if (isNull(t)) {
        continue;
      }
      executedSomeTask = true;
      if (!cggcci.$executeRepeating(t)) {
        cggcc.$set(tasks, i, null);
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = cggcci.createQueue();
    for (i = 0; i < length_0; i++) {
      if (isNotNull(cggcc.$get(tasks, i))) {
        cggcc.$push(newTasks, cggcc.$get(tasks, i));
      }
    }
    return cggcc.$length(newTasks) == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}
;
_.scheduleDeferred = function scheduleDeferred(cmd){
  this.deferredCommands = cggcci.push_0(this.deferredCommands, cggcci.create_1(cmd));
  this.maybeSchedulePostEventPumpCommands();
}
;
_.scheduleFixedDelay = function scheduleFixedDelay(cmd, delayMs){
  cggcci.scheduleFixedDelayImpl(cmd, delayMs);
}
;
_.flushRunning = false;
_.shouldBeRunning = false;
cggcci.FLUSHER_DELAY = 1;
cggcci.RESCUE_DELAY = 50;
cggcci.TIME_SLICE = 16;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 77, cggl.Lcom_google_gwt_core_client_Scheduler_2_classLit);
cggcci.$clinit_SchedulerImpl$Flusher = function $clinit_SchedulerImpl$Flusher(){
  cggcci.$clinit_SchedulerImpl$Flusher = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.SchedulerImpl$Flusher = function SchedulerImpl$Flusher(this$0){
  cggcci.$clinit_SchedulerImpl$Flusher();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_79();
}
;
defineClass(186, 1, {1:1}, cggcci.SchedulerImpl$Flusher);
_.$init_79 = function $init_79(){
}
;
_.execute = function execute_2(){
  this.this$01.flushRunning = true;
  this.this$01.flushPostEventPumpCommands();
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = this.this$01.isWorkQueued();
}
;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 186, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl$Rescuer = function $clinit_SchedulerImpl$Rescuer(){
  cggcci.$clinit_SchedulerImpl$Rescuer = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.SchedulerImpl$Rescuer = function SchedulerImpl$Rescuer(this$0){
  cggcci.$clinit_SchedulerImpl$Rescuer();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_80();
}
;
defineClass(187, 1, {1:1}, cggcci.SchedulerImpl$Rescuer);
_.$init_80 = function $init_80(){
}
;
_.execute = function execute_3(){
  if (this.this$01.flushRunning) {
    this.this$01.scheduleFixedDelay(this.this$01.flusher, 1);
  }
  return this.this$01.shouldBeRunning;
}
;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 187, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl$Task = function $clinit_SchedulerImpl$Task(){
  cggcci.$clinit_SchedulerImpl$Task = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcci.$executeRepeating = function $executeRepeating(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  return cggcci.$getRepeating(this$static).execute();
}
;
cggcci.$executeScheduled = function $executeScheduled(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  cggcci.$getScheduled(this$static).execute_0();
}
;
cggcci.$getRepeating = function $getRepeating(this$static){
  return this$static[0];
}
;
cggcci.$getScheduled = function $getScheduled(this$static){
  return this$static[0];
}
;
cggcci.$isRepeating = function $isRepeating(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  return this$static[1];
}
;
cggcci.create_1 = function create_1(cmd){
  cggcci.$clinit_SchedulerImpl$Task();
  return [cmd, false];
}
;
cggcci.$clinit_StackTraceCreator$CollectorEmulated = function $clinit_StackTraceCreator$CollectorEmulated(){
  cggcci.$clinit_StackTraceCreator$CollectorEmulated = emptyMethod;
}
;
defineClass(321, 60, {1:1});
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorEmulated_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorEmulated', 321, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorNull = function $clinit_StackTraceCreator$CollectorNull(){
  cggcci.$clinit_StackTraceCreator$CollectorNull = emptyMethod;
}
;
defineClass(322, 60, {1:1});
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorNull_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorNull', 322, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_XhrLoadingStrategy = function $clinit_XhrLoadingStrategy(){
  cggcci.$clinit_XhrLoadingStrategy = emptyMethod;
  cggcci.$clinit_LoadingStrategyBase();
}
;
cggcci.XhrLoadingStrategy = function XhrLoadingStrategy(){
  cggcci.$clinit_XhrLoadingStrategy();
  cggcci.LoadingStrategyBase.call(this, new cggcci.XhrLoadingStrategy$XhrDownloadStrategy);
  this.$init_85();
}
;
cggcci.onLoad_0 = function onLoad_0(request, status_0, statusText, response){
  cggcci.$clinit_XhrLoadingStrategy();
  if ((status_0 == 200 || status_0 == 0) && jsNotEquals(response, null) && jl.length__I__devirtual$_0(response) != 0) {
    request.tryInstall(response);
  }
   else {
    request.onLoadError(new cggcci.AsyncFragmentLoader$HttpDownloadFailure(request.getUrl(), status_0, statusText), true);
  }
}
;
defineClass(133, 158, {89:1, 1:1}, cggcci.XhrLoadingStrategy);
_.$init_85 = function $init_85(){
}
;
cggcci.HTTP_STATUS_NON_HTTP = 0;
cggcci.HTTP_STATUS_OK = 200;
cggl.Lcom_google_gwt_core_client_impl_XhrLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'XhrLoadingStrategy', 133, cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit);
cggcci.$clinit_XhrLoadingStrategy$XhrDownloadStrategy = function $clinit_XhrLoadingStrategy$XhrDownloadStrategy(){
  cggcci.$clinit_XhrLoadingStrategy$XhrDownloadStrategy = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.XhrLoadingStrategy$XhrDownloadStrategy = function XhrLoadingStrategy$XhrDownloadStrategy(){
  cggcci.$clinit_XhrLoadingStrategy$XhrDownloadStrategy();
  Object_0.call(this);
  this.$init_86();
}
;
defineClass(159, 1, {1:1}, cggcci.XhrLoadingStrategy$XhrDownloadStrategy);
_.$init_86 = function $init_86(){
}
;
_.tryDownload = function tryDownload_0(request){
  var xhr = new $wnd.XMLHttpRequest;
  xhr.open('GET', request.getUrl());
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4) {
      xhr.onreadystatechange = function(){
      }
      ;
      cggcci.onLoad_0(request, xhr.status, xhr.statusText, xhr.responseText);
    }
  }
  ;
  xhr.send(null);
}
;
cggl.Lcom_google_gwt_core_client_impl_XhrLoadingStrategy$XhrDownloadStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'XhrLoadingStrategy/XhrDownloadStrategy', 159, cggl.Ljava_lang_Object_2_classLit);
cggccp.$clinit_PrefetchableResource = function $clinit_PrefetchableResource(){
  cggccp.$clinit_PrefetchableResource = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_prefetch_PrefetchableResource_2_classLit = createForInterface('com.google.gwt.core.client.prefetch', 'PrefetchableResource');
cggccp.$clinit_RunAsyncCode = function $clinit_RunAsyncCode(){
  cggccp.$clinit_RunAsyncCode = emptyMethod;
}
;
defineClass(287, 1, {1:1});
cggl.Lcom_google_gwt_core_client_prefetch_RunAsyncCode_2_classLit = createForClass('com.google.gwt.core.client.prefetch', 'RunAsyncCode', 287, cggl.Ljava_lang_Object_2_classLit);
cggcs.$clinit_GWT_0 = function $clinit_GWT_0(){
  cggcs.$clinit_GWT_0 = emptyMethod;
  jl.$clinit_Object();
  {
    if (cggcs.isScript_0()) {
      cggcs.logger_0 = castTo(new cggcsi.JsLogger, 69);
    }
     else {
      cggcs.logger_0 = null;
    }
  }
}
;
cggcs.create_2 = function create_2(classLiteral){
  return cggcs.createImpl(classLiteral);
}
;
cggcs.createImpl = function createImpl(classLiteral){
  cggcs.$clinit_GWT_0();
  if (isNull(cggcs.sGWTBridge)) {
    throw toJs(new jl.UnsupportedOperationException_0('ERROR: GWT.create() is only usable in client code!  It cannot be called, for example, from server code.  If you are running a unit test, check that your test case extends GWTTestCase and that GWT.create() is not called from within an initializer or constructor.'));
  }
   else {
    return cggcs.sGWTBridge.create_0(classLiteral);
  }
}
;
cggcs.isScript_0 = function isScript_0(){
  return true;
}
;
defineClass(327, 1, {1:1});
cggcs.sGWTBridge = null;
cggl.Lcom_google_gwt_core_shared_GWT_2_classLit = createForClass('com.google.gwt.core.shared', 'GWT', 327, cggl.Ljava_lang_Object_2_classLit);
cggcs.$clinit_GWTBridge = function $clinit_GWTBridge(){
  cggcs.$clinit_GWTBridge = emptyMethod;
}
;
defineClass(337, 1, {1:1});
cggl.Lcom_google_gwt_core_shared_GWTBridge_2_classLit = createForClass('com.google.gwt.core.shared', 'GWTBridge', 337, cggl.Ljava_lang_Object_2_classLit);
cggcsi.$clinit_JsLogger = function $clinit_JsLogger(){
  cggcsi.$clinit_JsLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cggcsi.JsLogger = function JsLogger(){
  cggcsi.$clinit_JsLogger();
  Object_0.call(this);
  this.$init_87();
}
;
defineClass(69, 1, {69:1, 1:1}, cggcsi.JsLogger);
_.$init_87 = function $init_87(){
}
;
cggl.Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit = createForClass('com.google.gwt.core.shared.impl', 'JsLogger', 69, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_BigLongLibBase = function $clinit_BigLongLibBase(){
  cggl.$clinit_BigLongLibBase = emptyMethod;
  jl.$clinit_Object();
  cggl.BITS01 = 2 * 22;
  cggl.BITS2 = 64 - 44;
  cggl.MASK = (1 << 22) - 1;
  cggl.MASK_2 = (1 << 20) - 1;
  cggl.SIGN_BIT = 20 - 1;
  cggl.SIGN_BIT_VALUE = 1 << 19;
  cggl.TWO_PWR_31_DBL = 65536 * 32768;
  cggl.TWO_PWR_32_DBL = 65536 * 65536;
  cggl.TWO_PWR_44_DBL = 4194304 * 4194304;
  cggl.TWO_PWR_63_DBL = 4294967296 * 2147483648;
}
;
cggl.create_3 = function create_3(){
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return new cggl.BigLongLibBase$BigLong;
  }
  return cggl.create0(0, 0, 0);
}
;
cggl.create_4 = function create_4(value_0){
  cggl.$clinit_BigLongLibBase();
  var a, a0, a1, a2;
  a0 = value_0 & 4194303;
  a1 = value_0 >> 22 & 4194303;
  a2 = value_0 < 0?1048575:0;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a = new cggl.BigLongLibBase$BigLong;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return cggl.create0(a0, a1, a2);
}
;
cggl.create_5 = function create_5(a0, a1, a2){
  cggl.$clinit_BigLongLibBase();
  var a;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a = new cggl.BigLongLibBase$BigLong;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return cggl.create0(a0, a1, a2);
}
;
cggl.create_6 = function create_6(a){
  cggl.$clinit_BigLongLibBase();
  var b;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    b = new cggl.BigLongLibBase$BigLong;
    b.l_0 = cggl.getL(a);
    b.m_0 = cggl.getM(a);
    b.h_0 = cggl.getH(a);
    return b;
  }
  return cggl.create0(cggl.getL(a), cggl.getM(a), cggl.getH(a));
}
;
cggl.create0 = function create0(l, m, h){
  return {l:l, m:m, h:h};
}
;
cggl.divMod = function divMod(a, b, computeRemainder){
  cggl.$clinit_BigLongLibBase();
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (cggl.isZero(b)) {
    throw toJs(new jl.ArithmeticException('divide by zero'));
  }
  if (cggl.isZero(a)) {
    if (computeRemainder) {
      cggl.remainder = cggl.create_3();
    }
    return cggl.create_3();
  }
  if (cggl.isMinValue(b)) {
    return cggl.divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (cggl.isNegative(b)) {
    b = cggl.neg(b);
    negative = !negative;
  }
  bpower = cggl.powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (cggl.isMinValue(a)) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = cggl.create_6((cggl.$clinit_BigLongLib$Const() , cggl.MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = cggl.shr(a, bpower);
      if (negative) {
        cggl.negate(c);
      }
      if (computeRemainder) {
        cggl.remainder = cggl.create_3();
      }
      return c;
    }
  }
   else if (cggl.isNegative(a)) {
    aIsNegative = true;
    a = cggl.neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return cggl.divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (cggl.compare(a, b) < 0) {
    if (computeRemainder) {
      if (aIsNegative) {
        cggl.remainder = cggl.neg(a);
      }
       else {
        cggl.remainder = cggl.create_6(a);
      }
    }
    return cggl.create_3();
  }
  return cggl.divModHelper(aIsCopy?a:cggl.create_6(a), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}
;
cggl.divModByMinValue = function divModByMinValue(a, computeRemainder){
  if (cggl.isMinValue(a)) {
    if (computeRemainder) {
      cggl.remainder = cggl.create_3();
    }
    return cggl.create_6((cggl.$clinit_BigLongLib$Const() , cggl.ONE));
  }
  if (computeRemainder) {
    cggl.remainder = cggl.create_6(a);
  }
  return cggl.create_3();
}
;
cggl.divModByShift = function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = cggl.shr(a, bpower);
  if (negative) {
    cggl.negate(c);
  }
  if (computeRemainder) {
    a = cggl.maskRight(a, bpower);
    if (aIsNegative) {
      cggl.remainder = cggl.neg(a);
    }
     else {
      cggl.remainder = cggl.create_6(a);
    }
  }
  return c;
}
;
cggl.divModHelper = function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0;
  shift_0 = cggl.numberOfLeadingZeros(b) - cggl.numberOfLeadingZeros(a);
  bshift = cggl.shl(b, shift_0);
  quotient = cggl.create_3();
  while (shift_0 >= 0) {
    gte = cggl.trialSubtract(a, bshift);
    if (gte) {
      cggl.setBit(quotient, shift_0);
      if (cggl.isZero(a)) {
        break;
      }
    }
    cggl.toShru1(bshift);
    shift_0--;
  }
  if (negative) {
    cggl.negate(quotient);
  }
  if (computeRemainder) {
    if (aIsNegative) {
      cggl.remainder = cggl.neg(a);
      if (aIsMinValue) {
        cggl.remainder = cggl.sub_0(cggl.remainder, (cggl.$clinit_BigLongLib$Const() , cggl.ONE));
      }
    }
     else {
      cggl.remainder = cggl.create_6(a);
    }
  }
  return quotient;
}
;
cggl.getH = function getH(a){
  cggl.$clinit_BigLongLibBase();
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return a.h_0;
  }
  return cggl.getHNative(a);
}
;
cggl.getHNative = function getHNative(a){
  return a.h;
}
;
cggl.getL = function getL(a){
  cggl.$clinit_BigLongLibBase();
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return a.l_0;
  }
  return cggl.getLNative(a);
}
;
cggl.getLNative = function getLNative(a){
  return a.l;
}
;
cggl.getM = function getM(a){
  cggl.$clinit_BigLongLibBase();
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return a.m_0;
  }
  return cggl.getMNative(a);
}
;
cggl.getMNative = function getMNative(a){
  return a.m;
}
;
cggl.isMinValue = function isMinValue(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getH(a) == 524288 && cggl.getM(a) == 0 && cggl.getL(a) == 0;
}
;
cggl.isNegative = function isNegative(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.sign(a) != 0;
}
;
cggl.isZero = function isZero(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getL(a) == 0 && cggl.getM(a) == 0 && cggl.getH(a) == 0;
}
;
cggl.maskRight = function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = cggl.getL(a) & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = cggl.getL(a);
    b1 = cggl.getM(a) & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = cggl.getL(a);
    b1 = cggl.getM(a);
    b2 = cggl.getH(a) & (1 << bits - 44) - 1;
  }
  return cggl.create_5(b0, b1, b2);
}
;
cggl.negate = function negate(a){
  cggl.$clinit_BigLongLibBase();
  var neg0, neg1, neg2;
  neg0 = ~cggl.getL(a) + 1 & 4194303;
  neg1 = ~cggl.getM(a) + (neg0 == 0?1:0) & 4194303;
  neg2 = ~cggl.getH(a) + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a.l_0 = neg0;
    a.m_0 = neg1;
    a.h_0 = neg2;
  }
   else {
    cggl.setL(a, neg0);
    cggl.setM(a, neg1);
    cggl.setH(a, neg2);
  }
}
;
cggl.numberOfLeadingZeros = function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(cggl.getH(a));
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(cggl.getM(a));
    if (b1 == 32) {
      return numberOfLeadingZeros_0(cggl.getL(a)) + 32;
    }
     else {
      return b1 + 20 - (32 - 22);
    }
  }
   else {
    return b2 - (32 - 20);
  }
}
;
cggl.powerOfTwo = function powerOfTwo(a){
  var h, l, m;
  l = cggl.getL(a);
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = cggl.getM(a);
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = cggl.getH(a);
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}
;
cggl.setBit = function setBit(a, bit){
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    if (bit < 22) {
      a.l_0 |= 1 << bit;
    }
     else if (bit < 44) {
      a.m_0 |= 1 << bit - 22;
    }
     else {
      a.h_0 |= 1 << bit - 44;
    }
  }
   else {
    if (bit < 22) {
      cggl.setBitL(a, bit);
    }
     else if (bit < 44) {
      cggl.setBitM(a, bit - 22);
    }
     else {
      cggl.setBitH(a, bit - 44);
    }
  }
}
;
cggl.setBitH = function setBitH(a, bit){
  a.h |= 1 << bit;
}
;
cggl.setBitL = function setBitL(a, bit){
  a.l |= 1 << bit;
}
;
cggl.setBitM = function setBitM(a, bit){
  a.m |= 1 << bit;
}
;
cggl.setH = function setH(a, x_0){
  a.h = x_0;
}
;
cggl.setL = function setL(a, x_0){
  a.l = x_0;
}
;
cggl.setM = function setM(a, x_0){
  a.m = x_0;
}
;
cggl.sign = function sign(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getH(a) >> 20 - 1;
}
;
cggl.toDoubleHelper = function toDoubleHelper(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getL(a) + cggl.getM(a) * 4194304 + cggl.getH(a) * 17592186044416;
}
;
cggl.toShru1 = function toShru1(a){
  var a0, a1, a2;
  a1 = cggl.getM(a);
  a2 = cggl.getH(a);
  a0 = cggl.getL(a);
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a.h_0 = a2 >>> 1;
    a.m_0 = a1 >>> 1 | (a2 & 1) << 22 - 1;
    a.l_0 = a0 >>> 1 | (a1 & 1) << 22 - 1;
  }
   else {
    cggl.setH(a, a2 >>> 1);
    cggl.setM(a, a1 >>> 1 | (a2 & 1) << 22 - 1);
    cggl.setL(a, a0 >>> 1 | (a1 & 1) << 22 - 1);
  }
}
;
cggl.trialSubtract = function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = cggl.getH(a) - cggl.getH(b);
  if (sum2 < 0) {
    return false;
  }
  sum0 = cggl.getL(a) - cggl.getL(b);
  sum1 = cggl.getM(a) - cggl.getM(b) + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a.l_0 = sum0 & 4194303;
    a.m_0 = sum1 & 4194303;
    a.h_0 = sum2 & 1048575;
  }
   else {
    cggl.setL(a, sum0 & 4194303);
    cggl.setM(a, sum1 & 4194303);
    cggl.setH(a, sum2 & 1048575);
  }
  return true;
}
;
defineClass(306, 1, {1:1});
cggl.BITS = 22;
cggl.BITS01 = 0;
cggl.BITS2 = 0;
cggl.MASK = 0;
cggl.MASK_2 = 0;
cggl.SIGN_BIT = 0;
cggl.SIGN_BIT_VALUE = 0;
cggl.TWO_PWR_15_DBL = 32768;
cggl.TWO_PWR_16_DBL = 65536;
cggl.TWO_PWR_22_DBL = 4194304;
cggl.TWO_PWR_31_DBL = 0;
cggl.TWO_PWR_32_DBL = 0;
cggl.TWO_PWR_44_DBL = 0;
cggl.TWO_PWR_63_DBL = 0;
cggl.Lcom_google_gwt_lang_BigLongLibBase_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLibBase', 306, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_BigLongLib = function $clinit_BigLongLib(){
  cggl.$clinit_BigLongLib = emptyMethod;
  cggl.$clinit_BigLongLibBase();
}
;
cggl.add_1 = function add_1(a, b){
  cggl.$clinit_BigLongLib();
  var sum0, sum1, sum2;
  sum0 = cggl.getL(a) + cggl.getL(b);
  sum1 = cggl.getM(a) + cggl.getM(b) + (sum0 >> 22);
  sum2 = cggl.getH(a) + cggl.getH(b) + (sum1 >> 22);
  return cggl.create_5(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}
;
cggl.and = function and(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(cggl.getL(a) & cggl.getL(b), cggl.getM(a) & cggl.getM(b), cggl.getH(a) & cggl.getH(b));
}
;
cggl.compare = function compare(a, b){
  cggl.$clinit_BigLongLib();
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = cggl.sign(a);
  signB = cggl.sign(b);
  if (signA != signB) {
    return signB - signA;
  }
  a2 = cggl.getH(a);
  b2 = cggl.getH(b);
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = cggl.getM(a);
  b1 = cggl.getM(b);
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = cggl.getL(a);
  b0 = cggl.getL(b);
  return a0 - b0;
}
;
cggl.div = function div(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.divMod(a, b, false);
}
;
cggl.fromDouble = function fromDouble(value_0){
  cggl.$clinit_BigLongLib();
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return cggl.$clinit_BigLongLib$Const() , cggl.ZERO;
  }
  if (value_0 < -9223372036854775807) {
    return cggl.$clinit_BigLongLib$Const() , cggl.MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return cggl.$clinit_BigLongLib$Const() , cggl.MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= 17592186044416) {
    a2 = round_int(value_0 / 17592186044416);
    value_0 -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value_0 >= 4194304) {
    a1 = round_int(value_0 / 4194304);
    value_0 -= a1 * 4194304;
  }
  a0 = round_int(value_0);
  result = cggl.create_5(a0, a1, a2);
  if (negative) {
    cggl.negate(result);
  }
  return result;
}
;
cggl.fromInt = function fromInt(value_0){
  cggl.$clinit_BigLongLib();
  return cggl.create_4(value_0);
}
;
cggl.getAsLongArray = function getAsLongArray(l){
  cggl.$clinit_BigLongLib();
  var a;
  a = initUnidimensionalArray(cggl.J_classLit, {3:1, 1:1}, 19, 3, 14, 1);
  a[0] = fromInt_0(toInt_0(and_0(l, 4194303)));
  a[1] = fromInt_0(toInt_0(and_0(shr_0(l, 22), 4194303)));
  a[2] = fromInt_0(toInt_0(and_0(shr_0(l, 44), 1048575)));
  return a;
}
;
cggl.mod = function mod(a, b){
  cggl.$clinit_BigLongLib();
  cggl.divMod(a, b, true);
  return cggl.$clinit_BigLongLibBase() , cggl.remainder;
}
;
cggl.mul = function mul(a, b){
  cggl.$clinit_BigLongLib();
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = cggl.getL(a) & 8191;
  a1 = cggl.getL(a) >> 13 | (cggl.getM(a) & 15) << 9;
  a2 = cggl.getM(a) >> 4 & 8191;
  a3 = cggl.getM(a) >> 17 | (cggl.getH(a) & 255) << 5;
  a4 = (cggl.getH(a) & 1048320) >> 8;
  b0 = cggl.getL(b) & 8191;
  b1 = cggl.getL(b) >> 13 | (cggl.getM(b) & 15) << 9;
  b2 = cggl.getM(b) >> 4 & 8191;
  b3 = cggl.getM(b) >> 17 | (cggl.getH(b) & 255) << 5;
  b4 = (cggl.getH(b) & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  if (b4 != 0) {
    p4 += a0 * b4;
  }
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return cggl.create_5(c0, c1, c2);
}
;
cggl.neg = function neg(a){
  cggl.$clinit_BigLongLib();
  var neg0, neg1, neg2;
  neg0 = ~cggl.getL(a) + 1 & 4194303;
  neg1 = ~cggl.getM(a) + (neg0 == 0?1:0) & 4194303;
  neg2 = ~cggl.getH(a) + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  return cggl.create_5(neg0, neg1, neg2);
}
;
cggl.not = function not(a){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(~cggl.getL(a) & 4194303, ~cggl.getM(a) & 4194303, ~cggl.getH(a) & 1048575);
}
;
cggl.or = function or(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(cggl.getL(a) | cggl.getL(b), cggl.getM(a) | cggl.getM(b), cggl.getH(a) | cggl.getH(b));
}
;
cggl.shl = function shl(a, n){
  cggl.$clinit_BigLongLib();
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = cggl.getL(a) << n;
    res1 = cggl.getM(a) << n | cggl.getL(a) >> 22 - n;
    res2 = cggl.getH(a) << n | cggl.getM(a) >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = cggl.getL(a) << n - 22;
    res2 = cggl.getM(a) << n - 22 | cggl.getL(a) >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = cggl.getL(a) << n - 44;
  }
  return cggl.create_5(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}
;
cggl.shr = function shr(a, n){
  cggl.$clinit_BigLongLib();
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = cggl.getH(a);
  negative = (a2 & 524288) != 0;
  if (negative) {
    a2 |= ~1048575;
  }
  if (n < 22) {
    res2 = a2 >> n;
    res1 = cggl.getM(a) >> n | a2 << 22 - n;
    res0 = cggl.getL(a) >> n | cggl.getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = cggl.getM(a) >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return cggl.create_5(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}
;
cggl.shru = function shru(a, n){
  cggl.$clinit_BigLongLib();
  var a2, res0, res1, res2;
  n &= 63;
  a2 = cggl.getH(a) & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = cggl.getM(a) >> n | a2 << 22 - n;
    res0 = cggl.getL(a) >> n | cggl.getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = cggl.getM(a) >> n - 22 | cggl.getH(a) << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return cggl.create_5(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}
;
cggl.sub_0 = function sub_0(a, b){
  cggl.$clinit_BigLongLib();
  var sum0, sum1, sum2;
  sum0 = cggl.getL(a) - cggl.getL(b);
  sum1 = cggl.getM(a) - cggl.getM(b) + (sum0 >> 22);
  sum2 = cggl.getH(a) - cggl.getH(b) + (sum1 >> 22);
  return cggl.create_5(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}
;
cggl.toDouble = function toDouble(a){
  cggl.$clinit_BigLongLib();
  if (cggl.compare(a, (cggl.$clinit_BigLongLib$Const() , cggl.ZERO)) < 0) {
    return -cggl.toDoubleHelper(cggl.neg(a));
  }
  return cggl.toDoubleHelper(a);
}
;
cggl.toInt = function toInt(a){
  cggl.$clinit_BigLongLib();
  return cggl.getL(a) | cggl.getM(a) << 22;
}
;
cggl.toString_8 = function toString_8(a){
  cggl.$clinit_BigLongLib();
  var digits, rem, res, tenPower, tenPowerLong, tenPowerZeroes, zeroesNeeded;
  if (cggl.isZero(a)) {
    return '0';
  }
  if (cggl.isMinValue(a)) {
    return '-9223372036854775808';
  }
  if (cggl.isNegative(a)) {
    return '-' + cggl.toString_8(cggl.neg(a));
  }
  rem = a;
  res = '';
  while (!cggl.isZero(rem)) {
    tenPowerZeroes = 9;
    tenPower = 1000000000;
    tenPowerLong = cggl.fromInt(1000000000);
    rem = cggl.divMod(rem, tenPowerLong, true);
    digits = '' + cggl.toInt((cggl.$clinit_BigLongLibBase() , cggl.remainder));
    if (!cggl.isZero(rem)) {
      zeroesNeeded = 9 - jl.length__I__devirtual$_0(digits);
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + ('' + res);
  }
  return res;
}
;
cggl.xor = function xor(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(cggl.getL(a) ^ cggl.getL(b), cggl.getM(a) ^ cggl.getM(b), cggl.getH(a) ^ cggl.getH(b));
}
;
defineClass(325, 306, {1:1});
cggl.Lcom_google_gwt_lang_BigLongLib_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLib', 325, cggl.Lcom_google_gwt_lang_BigLongLibBase_2_classLit);
cggl.$clinit_BigLongLib$Const = function $clinit_BigLongLib$Const(){
  cggl.$clinit_BigLongLib$Const = emptyMethod;
  jl.$clinit_Object();
  cggl.MAX_VALUE = cggl.create_5(4194303, 4194303, 1048575 >> 1);
  cggl.MIN_VALUE = cggl.create_5(0, 0, 524288);
  cggl.ONE = cggl.fromInt(1);
  cggl.TWO = cggl.fromInt(2);
  cggl.ZERO = cggl.fromInt(0);
}
;
defineClass(326, 1, {1:1});
cggl.Lcom_google_gwt_lang_BigLongLib$Const_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLib/Const', 326, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_BigLongLibBase$BigLong = function $clinit_BigLongLibBase$BigLong(){
  cggl.$clinit_BigLongLibBase$BigLong = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.BigLongLibBase$BigLong = function BigLongLibBase$BigLong(){
  cggl.$clinit_BigLongLibBase$BigLong();
  Object_0.call(this);
  this.$init_89();
}
;
defineClass(59, 1, {1:1}, cggl.BigLongLibBase$BigLong);
_.$init_89 = function $init_89(){
}
;
_.h_0 = 0;
_.l_0 = 0;
_.m_0 = 0;
cggl.Lcom_google_gwt_lang_BigLongLibBase$BigLong_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLibBase/BigLong', 59, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib = function $clinit_LongLib(){
  cggl.$clinit_LongLib = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLib = function LongLib(){
  Object_0.call(this);
  this.$init_92();
}
;
function add_2(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) + cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.add_1(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function and_0(a, b){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.and(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function asBigLong(value_0){
  cggl.$clinit_LongLib();
  if (RUN_IN_JVM) {
    return value_0.big_0;
  }
  return cggl.asBigLong0(value_0);
}

cggl.asBigLong0 = function asBigLong0(value_0){
  return value_0;
}
;
cggl.asDouble = function asDouble(value_0){
  return cggl.asDouble_0(cggl.asSmallLong(value_0));
}
;
cggl.asDouble_0 = function asDouble_0(value_0){
  if (RUN_IN_JVM) {
    return isNull(value_0)?NaN:value_0.d;
  }
  return cggl.asDouble0(value_0);
}
;
cggl.asDouble0 = function asDouble0(value_0){
  return value_0;
}
;
cggl.asSmallLong = function asSmallLong(value_0){
  if (RUN_IN_JVM) {
    return value_0.small_0;
  }
  return cggl.asSmallLong0(value_0);
}
;
cggl.asSmallLong0 = function asSmallLong0(value_0){
  return value_0;
}
;
cggl.coerceToInt = function coerceToInt(value_0){
  if (RUN_IN_JVM) {
    return toInt_0(fromDouble_0(value_0));
  }
  return cggl.coerceToInt0(value_0);
}
;
cggl.coerceToInt0 = function coerceToInt0(value_0){
  return value_0 | 0;
}
;
function compare_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) - cggl.asDouble(b);
    if (!isNaN(result)) {
      return result;
    }
  }
  return cggl.compare(cggl.toBigLong(a), cggl.toBigLong(b));
}

function copy_0(value_0){
  cggl.$clinit_LongLib();
  if (cggl.isSmallLong(value_0)) {
    return cggl.createSmallLongEmul(cggl.asDouble(value_0));
  }
   else {
    return cggl.createBigLongEmul(cggl.create_6(asBigLong(value_0)));
  }
}

cggl.createBigLongEmul = function createBigLongEmul(big_0){
  var emul;
  if (RUN_IN_JVM) {
    emul = new cggl.LongLib$LongEmul;
    emul.big_0 = big_0;
    return emul;
  }
  return cggl.createBigLongEmul0(big_0);
}
;
cggl.createBigLongEmul0 = function createBigLongEmul0(value_0){
  return value_0;
}
;
cggl.createLongEmul = function createLongEmul(big_0){
  var a2;
  a2 = cggl.getH(big_0);
  if (a2 == 0) {
    return cggl.createSmallLongEmul(cggl.getL(big_0) + cggl.getM(big_0) * 4194304);
  }
  if (a2 == 1048575) {
    return cggl.createSmallLongEmul(cggl.getL(big_0) + cggl.getM(big_0) * 4194304 - 17592186044416);
  }
  return cggl.createBigLongEmul(big_0);
}
;
cggl.createSmallLongEmul = function createSmallLongEmul(value_0){
  var emul, small_0;
  if (RUN_IN_JVM) {
    small_0 = new cggl.LongLib$SmallLong;
    small_0.d = value_0;
    emul = new cggl.LongLib$LongEmul;
    emul.small_0 = small_0;
    return emul;
  }
  return cggl.createSmallLongEmul0(value_0);
}
;
cggl.createSmallLongEmul0 = function createSmallLongEmul0(value_0){
  return value_0;
}
;
function div_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) / cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(cggl.truncate(result));
    }
  }
  return cggl.createLongEmul(cggl.div(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function eq(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  cggl.$clinit_LongLib();
  if (cggl.isSafeIntegerRange(value_0)) {
    return cggl.createSmallLongEmul(cggl.truncate(value_0));
  }
  return cggl.createLongEmul(cggl.fromDouble(value_0));
}

function fromInt_0(value_0){
  cggl.$clinit_LongLib();
  return cggl.createSmallLongEmul(value_0);
}

function getAsLongArray_0(l){
  cggl.$clinit_LongLib();
  if (cggl.isSafeIntegerRange(toDouble_0(l))) {
    return stampJavaTypeInfo(getClassLiteralForArray(cggl.J_classLit, 1), {3:1, 1:1}, 19, 14, [l]);
  }
  return cggl.getAsLongArray(l);
}

function gt(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) > 0;
}

function gte_0(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) >= 0;
}

cggl.isSafeIntegerRange = function isSafeIntegerRange(value_0){
  return -17592186044416 < value_0 && value_0 < 17592186044416;
}
;
cggl.isSmallLong = function isSmallLong(value_0){
  if (RUN_IN_JVM) {
    return isNotNull(value_0.small_0);
  }
  return cggl.isSmallLong0(value_0);
}
;
cggl.isSmallLong0 = function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}
;
function lt(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) < 0;
}

function lte(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) <= 0;
}

function mod_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) % cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.mod(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function mul_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) * cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.mul(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function neg_0(a){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a)) {
    result = 0 - cggl.asDouble(a);
    if (!isNaN(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.neg(asBigLong(a)));
}

function neq(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) != 0;
}

function not_0(a){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.not(cggl.toBigLong(a)));
}

function or_0(a, b){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.or(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function shl_0(a, n){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.shl(cggl.toBigLong(a), n));
}

function shr_0(a, n){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.shr(cggl.toBigLong(a), n));
}

function shru_0(a, n){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.shru(cggl.toBigLong(a), n));
}

function sub_1(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) - cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.sub_0(cggl.toBigLong(a), cggl.toBigLong(b)));
}

cggl.toBigLong = function toBigLong(value_0){
  return cggl.isSmallLong(value_0)?cggl.toBigLong_0(cggl.asSmallLong(value_0)):asBigLong(value_0);
}
;
cggl.toBigLong_0 = function toBigLong_0(longValue){
  var a0, a1, a3, value_0;
  value_0 = cggl.asDouble_0(longValue);
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = 1048575;
  }
  a1 = round_int(value_0 / 4194304);
  a0 = round_int(value_0 - a1 * 4194304);
  return cggl.create_5(a0, a1, a3);
}
;
function toDouble_0(a){
  cggl.$clinit_LongLib();
  var d;
  if (cggl.isSmallLong(a)) {
    d = cggl.asDouble(a);
    return d == -0?0:d;
  }
  return cggl.toDouble(asBigLong(a));
}

function toInt_0(a){
  cggl.$clinit_LongLib();
  if (cggl.isSmallLong(a)) {
    return cggl.coerceToInt(cggl.asDouble(a));
  }
  return cggl.toInt(asBigLong(a));
}

cggl.toString_9 = function toString_9(value_0){
  if (RUN_IN_JVM) {
    return jl.valueOf_23(fromDouble_0(value_0));
  }
  return jl.valueOf_20(value_0);
}
;
function toString_10(a){
  cggl.$clinit_LongLib();
  if (cggl.isSmallLong(a)) {
    return cggl.toString_9(cggl.asDouble(a));
  }
  return cggl.toString_8(asBigLong(a));
}

cggl.truncate = function truncate(value_0){
  return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
}
;
function xor_0(a, b){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.xor(cggl.toBigLong(a), cggl.toBigLong(b)));
}

defineClass(292, 1, {1:1});
_.$init_92 = function $init_92(){
}
;
var RUN_IN_JVM = false;
cggl.Lcom_google_gwt_lang_LongLib_2_classLit = createForClass('com.google.gwt.lang', 'LongLib', 292, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib$LongEmul = function $clinit_LongLib$LongEmul(){
  cggl.$clinit_LongLib$LongEmul = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLib$LongEmul = function LongLib$LongEmul(){
  cggl.$clinit_LongLib$LongEmul();
  Object_0.call(this);
  this.$init_93();
}
;
defineClass(92, 1, {1:1}, cggl.LongLib$LongEmul);
_.$init_93 = function $init_93(){
}
;
cggl.Lcom_google_gwt_lang_LongLib$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLib/LongEmul', 92, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib$SmallLong = function $clinit_LongLib$SmallLong(){
  cggl.$clinit_LongLib$SmallLong = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLib$SmallLong = function LongLib$SmallLong(){
  cggl.$clinit_LongLib$SmallLong();
  Object_0.call(this);
  this.$init_94();
}
;
defineClass(142, 1, {1:1}, cggl.LongLib$SmallLong);
_.$init_94 = function $init_94(){
}
;
_.d = 0;
cggl.Lcom_google_gwt_lang_LongLib$SmallLong_2_classLit = createForClass('com.google.gwt.lang', 'LongLib/SmallLong', 142, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_Stats = function $clinit_Stats(){
  cggl.$clinit_Stats = emptyMethod;
  jl.$clinit_Object();
}
;
function Stats(){
  Object_0.call(this);
  this.$init_95();
}

function isStatsAvailable_0(){
  cggl.$clinit_Stats();
  return !!$stats;
}

function onModuleStart(mainClassName){
  cggl.$clinit_Stats();
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

defineClass(295, 1, {1:1});
_.$init_95 = function $init_95(){
}
;
cggl.Lcom_google_gwt_lang_Stats_2_classLit = createForClass('com.google.gwt.lang', 'Stats', 295, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_com_00046badu_00046web_00046TheApp__EntryMethodHolder = function $clinit_com_00046badu_00046web_00046TheApp__EntryMethodHolder(){
  cggl.$clinit_com_00046badu_00046web_00046TheApp__EntryMethodHolder = emptyMethod;
  jl.$clinit_Object();
}
;
function init(){
  cggl.$clinit_com_00046badu_00046web_00046TheApp__EntryMethodHolder();
  castTo(new cbwcg.EntryPoint, 237).onModuleLoad();
}

defineClass(238, 1, {1:1});
cggl.Lcom_google_gwt_lang_com_100046badu_100046web_100046TheApp_1_1EntryMethodHolder_2_classLit = createForClass('com.google.gwt.lang', 'com_00046badu_00046web_00046TheApp__EntryMethodHolder', 238, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_AutoCloseable = function $clinit_AutoCloseable(){
  jl.$clinit_AutoCloseable = emptyMethod;
}
;
cggl.Ljava_lang_AutoCloseable_2_classLit = createForInterface('java.lang', 'AutoCloseable');
ji.$clinit_Closeable = function $clinit_Closeable(){
  ji.$clinit_Closeable = emptyMethod;
}
;
cggl.Ljava_io_Closeable_2_classLit = createForInterface('java.io', 'Closeable');
ji.$clinit_Flushable = function $clinit_Flushable(){
  ji.$clinit_Flushable = emptyMethod;
}
;
cggl.Ljava_io_Flushable_2_classLit = createForInterface('java.io', 'Flushable');
ji.$clinit_OutputStream = function $clinit_OutputStream(){
  ji.$clinit_OutputStream = emptyMethod;
  jl.$clinit_Object();
}
;
ji.OutputStream = function OutputStream(){
  ji.$clinit_OutputStream();
  Object_0.call(this);
  this.$init_97();
}
;
defineClass(119, 1, {1:1});
_.$init_97 = function $init_97(){
}
;
_.close_0 = function close_0(){
}
;
_.flush = function flush(){
}
;
cggl.Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 119, cggl.Ljava_lang_Object_2_classLit);
ji.$clinit_FilterOutputStream = function $clinit_FilterOutputStream(){
  ji.$clinit_FilterOutputStream = emptyMethod;
  ji.$clinit_OutputStream();
}
;
ji.FilterOutputStream = function FilterOutputStream(out){
  ji.$clinit_FilterOutputStream();
  ji.OutputStream.call(this);
  this.$init_98();
  this.out = out;
}
;
defineClass(118, 119, {1:1});
_.$init_98 = function $init_98(){
}
;
_.close_0 = function close_1(){
  var e, thrown;
  thrown = null;
  try {
    this.flush();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      thrown = e;
    }
     else 
      throw toJs($e0);
  }
  try {
    this.out.close_0();
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 6)) {
      e = $e1;
      if (isNull(thrown)) {
        thrown = e;
      }
    }
     else 
      throw toJs($e1);
  }
  if (isNotNull(thrown)) {
    throw toJs(new ji.IOException_0(thrown));
  }
}
;
_.flush = function flush_0(){
  this.out.flush();
}
;
cggl.Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 118, cggl.Ljava_io_OutputStream_2_classLit);
ji.$clinit_IOException = function $clinit_IOException(){
  ji.$clinit_IOException = emptyMethod;
  jl.$clinit_Exception();
}
;
ji.IOException = function IOException(message){
  ji.$clinit_IOException();
  jl.Exception_1.call(this, message);
  this.$init_99();
}
;
ji.IOException_0 = function IOException_0(throwable){
  ji.$clinit_IOException();
  jl.Exception_3.call(this, throwable);
  this.$init_99();
}
;
defineClass(84, 5, {3:1, 5:1, 1:1, 6:1}, ji.IOException_0);
_.$init_99 = function $init_99(){
}
;
cggl.Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 84, cggl.Ljava_lang_Exception_2_classLit);
ji.$clinit_PrintStream = function $clinit_PrintStream(){
  ji.$clinit_PrintStream = emptyMethod;
  ji.$clinit_FilterOutputStream();
}
;
ji.PrintStream = function PrintStream(out){
  ji.$clinit_PrintStream();
  ji.FilterOutputStream.call(this, out);
  this.$init_100();
}
;
defineClass(85, 118, {1:1}, ji.PrintStream);
_.$init_100 = function $init_100(){
}
;
_.flush = function flush_1(){
}
;
_.print_0 = function print_0(s){
}
;
_.println = function println(s){
}
;
cggl.Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 85, cggl.Ljava_io_FilterOutputStream_2_classLit);
ji.$clinit_UnsupportedEncodingException = function $clinit_UnsupportedEncodingException(){
  ji.$clinit_UnsupportedEncodingException = emptyMethod;
  ji.$clinit_IOException();
}
;
ji.UnsupportedEncodingException = function UnsupportedEncodingException(msg){
  ji.$clinit_UnsupportedEncodingException();
  ji.IOException.call(this, msg);
  this.$init_101();
}
;
defineClass(106, 84, {3:1, 5:1, 1:1, 6:1}, ji.UnsupportedEncodingException);
_.$init_101 = function $init_101(){
}
;
cggl.Ljava_io_UnsupportedEncodingException_2_classLit = createForClass('java.io', 'UnsupportedEncodingException', 106, cggl.Ljava_io_IOException_2_classLit);
jl.$clinit_Appendable = function $clinit_Appendable(){
  jl.$clinit_Appendable = emptyMethod;
}
;
cggl.Ljava_lang_Appendable_2_classLit = createForInterface('java.lang', 'Appendable');
jl.$clinit_AbstractStringBuilder = function $clinit_AbstractStringBuilder(){
  jl.$clinit_AbstractStringBuilder = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_CharSequence();
}
;
jl.AbstractStringBuilder = function AbstractStringBuilder(string){
  jl.$clinit_AbstractStringBuilder();
  Object_0.call(this);
  this.$init_102();
  this.string = string;
}
;
defineClass(86, 1, {54:1, 1:1});
_.$init_102 = function $init_102(){
}
;
_.chars = function chars_0(){
  return jl.$chars(this);
}
;
_.charAt = function charAt(index_0){
  return jl.charAt_I_C__devirtual$_0(this.string, index_0);
}
;
_.getChars = function getChars(srcStart, srcEnd, dst, dstStart){
  jl.getChars_II_CI_V__devirtual$(this.string, srcStart, srcEnd, dst, dstStart);
}
;
_.indexOf_0 = function indexOf(x_0){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this.string, x_0);
}
;
_.indexOf_1 = function indexOf_0(x_0, start_0){
  return jl.indexOf_Ljava_lang_String_I_I__devirtual$(this.string, x_0, start_0);
}
;
_.lastIndexOf_0 = function lastIndexOf(s){
  return jl.lastIndexOf_Ljava_lang_String__I__devirtual$(this.string, s);
}
;
_.lastIndexOf_1 = function lastIndexOf_0(s, start_0){
  return jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$(this.string, s, start_0);
}
;
_.length_0 = function length_1(){
  return jl.length__I__devirtual$_0(this.string);
}
;
_.subSequence = function subSequence(start_0, end){
  return jl.substring_II_Ljava_lang_String___devirtual$(this.string, start_0, end);
}
;
_.substring_0 = function substring(begin){
  return jl.substring_I_Ljava_lang_String___devirtual$(this.string, begin);
}
;
_.substring_1 = function substring_0(begin, end){
  return jl.substring_II_Ljava_lang_String___devirtual$(this.string, begin, end);
}
;
_.toString_0 = function toString_12(){
  return this.string;
}
;
cggl.Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 86, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_ArithmeticException = function $clinit_ArithmeticException(){
  jl.$clinit_ArithmeticException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ArithmeticException = function ArithmeticException(explanation){
  jl.$clinit_ArithmeticException();
  jl.RuntimeException_1.call(this, explanation);
  this.$init_103();
}
;
defineClass(178, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.ArithmeticException);
_.$init_103 = function $init_103(){
}
;
cggl.Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 178, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_ArrayStoreException = function $clinit_ArrayStoreException(){
  jl.$clinit_ArrayStoreException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ArrayStoreException = function ArrayStoreException(){
  jl.$clinit_ArrayStoreException();
  jl.RuntimeException.call(this);
  this.$init_104();
}
;
defineClass(177, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.ArrayStoreException);
_.$init_104 = function $init_104(){
}
;
cggl.Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 177, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Byte = function $clinit_Byte(){
  jl.$clinit_Byte = emptyMethod;
  jl.$clinit_Number();
  MIN_VALUE_0 = narrow_byte(128);
  MAX_VALUE_0 = narrow_byte(127);
  BYTES = narrow_int(8 / 8);
  TYPE_0 = cggl.B_classLit;
}
;
jl.Byte = function Byte(value_0){
  jl.Number_0.call(this);
  this.$init_108();
  this.value_0 = value_0;
}
;
function compare_2(x_0, y_0){
  jl.$clinit_Byte();
  return x_0 - y_0;
}

jl.hashCode_5 = function hashCode_5(b){
  return b;
}
;
jl.toString_15 = function toString_15(b){
  return jl.valueOf_22(b);
}
;
jl.valueOf_9 = function valueOf_9(b){
  var rebase, result;
  rebase = b + 128;
  result = (jl.$clinit_Byte$BoxedValues() , jl.boxedValues)[rebase];
  if (isNull(result)) {
    result = (jl.$clinit_Byte$BoxedValues() , jl.boxedValues)[rebase] = new jl.Byte(b);
  }
  return result;
}
;
defineClass(39, 30, {3:1, 39:1, 13:1, 1:1}, jl.Byte);
_.$init_108 = function $init_108(){
}
;
_.compareTo_0 = function compareTo_2(b){
  return this.compareTo_1(castTo(b, 39));
}
;
_.byteValue = function byteValue_0(){
  return this.value_0;
}
;
_.compareTo_1 = function compareTo_1(b){
  return compare_2(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue(){
  return this.value_0;
}
;
_.equals_0 = function equals_3(o){
  return instanceOf(o, 39) && castTo(o, 39).value_0 == this.value_0;
}
;
_.floatValue = function floatValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_4(){
  return jl.hashCode_5(this.value_0);
}
;
_.intValue = function intValue(){
  return this.value_0;
}
;
_.longValue = function longValue_0(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_0(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return jl.toString_15(this.value_0);
}
;
_.value_0 = 0;
var BYTES = 0;
var MAX_VALUE_0 = 0;
var MIN_VALUE_0 = 0;
var SIZE = 8;
var TYPE_0;
cggl.Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 39, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Byte$BoxedValues = function $clinit_Byte$BoxedValues(){
  jl.$clinit_Byte$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues = initUnidimensionalArray(cggl.Ljava_lang_Byte_2_classLit, {3:1, 1:1, 4:1}, 39, 256, 0, 1);
}
;
defineClass(297, 1, {1:1});
cggl.Ljava_lang_Byte$BoxedValues_2_classLit = createForClass('java.lang', 'Byte/BoxedValues', 297, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Iterator = function $clinit_Iterator(){
  ju.$clinit_Iterator = emptyMethod;
}
;
ju.$forEachRemaining = function $forEachRemaining(this$static, consumer){
  ji2.checkNotNull_0(consumer);
  while (this$static.hasNext_0()) {
    consumer.accept_0(this$static.next_2());
  }
}
;
ju.$remove = function $remove(this$static){
  throw toJs(new jl.UnsupportedOperationException);
}
;
cggl.Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator');
ju.$clinit_PrimitiveIterator = function $clinit_PrimitiveIterator(){
  ju.$clinit_PrimitiveIterator = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator_2_classLit = createForInterface('java.util', 'PrimitiveIterator');
ju.$clinit_PrimitiveIterator$OfInt = function $clinit_PrimitiveIterator$OfInt(){
  ju.$clinit_PrimitiveIterator$OfInt = emptyMethod;
}
;
ju.$forEachRemaining_0 = function $forEachRemaining_0(this$static, consumer){
  this$static.forEachRemaining_1(castTo(consumer, 9));
}
;
ju.$forEachRemaining_1 = function $forEachRemaining_1(this$static, consumer){
  if (instanceOf(consumer, 9)) {
    this$static.forEachRemaining_1(castTo(consumer, 9));
  }
   else {
    this$static.forEachRemaining_1(castTo(new ju.PrimitiveIterator$OfInt$1methodref$accept$Type(consumer), 9));
  }
}
;
ju.$forEachRemaining_2 = function $forEachRemaining_2(this$static, consumer){
  ji2.checkNotNull_0(consumer);
  while (this$static.hasNext_0()) {
    consumer.accept(this$static.nextInt());
  }
}
;
ju.$next = function $next(this$static){
  return jl.valueOf_14(this$static.nextInt());
}
;
ju.$next_0 = function $next_0(this$static){
  return this$static.next_1();
}
;
cggl.Ljava_util_PrimitiveIterator$OfInt_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfInt');
jl.$clinit_CharSequence$1 = function $clinit_CharSequence$1(){
  jl.$clinit_CharSequence$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
  ju.$clinit_PrimitiveIterator$OfInt();
}
;
jl.CharSequence$1 = function CharSequence$1(this$0){
  jl.$clinit_CharSequence$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_109();
}
;
defineClass(108, 1, {1:1, 16:1, 110:1}, jl.CharSequence$1);
_.$init_109 = function $init_109(){
}
;
_.forEachRemaining = function forEachRemaining(arg0){
  this.forEachRemaining_1(castTo(arg0, 9));
}
;
_.forEachRemaining_0 = function forEachRemaining_0(consumer){
  ju.$forEachRemaining_1(this, consumer);
}
;
_.forEachRemaining_1 = function forEachRemaining_1(consumer){
  ju.$forEachRemaining_2(this, consumer);
}
;
_.next_1 = function next(){
  return ju.$next(this);
}
;
_.next_2 = function next_0(){
  return this.next_1();
}
;
_.remove_1 = function remove_3(){
  ju.$remove(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.cursor_0 < jl.length__I__devirtual$(this.this$01);
}
;
_.nextInt = function nextInt(){
  ji2.checkElement(this.hasNext_0());
  return jl.charAt_I_C__devirtual$(this.this$01, this.cursor_0++);
}
;
_.cursor_0 = 0;
cggl.Ljava_lang_CharSequence$1_2_classLit = createForClass('java.lang', 'CharSequence/1', 108, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Supplier = function $clinit_Supplier(){
  juf.$clinit_Supplier = emptyMethod;
}
;
cggl.Ljava_util_function_Supplier_2_classLit = createForInterface('java.util.function', 'Supplier');
jl.$clinit_CharSequence$lambda$0$Type = function $clinit_CharSequence$lambda$0$Type(){
  jl.$clinit_CharSequence$lambda$0$Type = emptyMethod;
}
;
jl.CharSequence$lambda$0$Type = function CharSequence$lambda$0$Type($$outer_0){
  jl.$clinit_CharSequence$lambda$0$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(107, 1, {1:1, 20:1}, jl.CharSequence$lambda$0$Type);
_.get_0 = function get_4(){
  return jl.$lambda$0(this.$$outer_0);
}
;
cggl.Ljava_lang_CharSequence$lambda$0$Type_2_classLit = createForClass('java.lang', 'CharSequence/lambda$0$Type', 107, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character = function $clinit_Character(){
  jl.$clinit_Character = emptyMethod;
  jl.$clinit_Object();
  TYPE_1 = cggl.Ljava_lang_Character_2_classLit;
  BYTES_0 = narrow_int(16 / 8);
}
;
function Character(value_0){
  Object_0.call(this);
  this.$init_110();
  this.value_0 = value_0;
}

function charCount_0(codePoint){
  jl.$clinit_Character();
  return codePoint >= 65536?2:1;
}

function codePointAt(cs, index_0, limit){
  jl.$clinit_Character();
  var hiSurrogate, loSurrogate;
  hiSurrogate = jl.charAt_I_C__devirtual$(cs, index_0++);
  if (isHighSurrogate(hiSurrogate) && index_0 < limit && isLowSurrogate(loSurrogate = jl.charAt_I_C__devirtual$(cs, index_0))) {
    return toCodePoint(hiSurrogate, loSurrogate);
  }
  return hiSurrogate;
}

function codePointBefore(cs, index_0, start_0){
  jl.$clinit_Character();
  var highSurrogate, loSurrogate;
  loSurrogate = jl.charAt_I_C__devirtual$(cs, --index_0);
  if (isLowSurrogate(loSurrogate) && index_0 > start_0 && isHighSurrogate(highSurrogate = jl.charAt_I_C__devirtual$(cs, index_0 - 1))) {
    return toCodePoint(highSurrogate, loSurrogate);
  }
  return loSurrogate;
}

function codePointCount(seq, beginIndex, endIndex){
  jl.$clinit_Character();
  var ch_0, count, idx;
  count = 0;
  for (idx = beginIndex; idx < endIndex;) {
    ch_0 = jl.charAt_I_C__devirtual$(seq, idx++);
    if (isHighSurrogate(ch_0) && idx < endIndex && isLowSurrogate(jl.charAt_I_C__devirtual$(seq, idx))) {
      ++idx;
    }
    ++count;
  }
  return count;
}

function compare_3(x_0, y_0){
  jl.$clinit_Character();
  return x_0 - y_0;
}

function digit(c, radix){
  jl.$clinit_Character();
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + $wnd.Math.min(radix, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function getHighSurrogate(codePoint){
  jl.$clinit_Character();
  return narrow_char(55296 + (codePoint - 65536 >> 10 & 1023));
}

function getLowSurrogate(codePoint){
  jl.$clinit_Character();
  return narrow_char(56320 + (codePoint - 65536 & 1023));
}

jl.hashCode_7 = function hashCode_7(c){
  return c;
}
;
function isHighSurrogate(ch_0){
  jl.$clinit_Character();
  return ch_0 >= 55296 && ch_0 <= 56319;
}

function isLowSurrogate(ch_0){
  jl.$clinit_Character();
  return ch_0 >= 56320 && ch_0 <= 57343;
}

function offsetByCodePoints(seq, index_0, codePointOffset){
  jl.$clinit_Character();
  if (codePointOffset < 0) {
    while (codePointOffset < 0) {
      --index_0;
      if (isLowSurrogate(jl.charAt_I_C__devirtual$(seq, index_0)) && isHighSurrogate(jl.charAt_I_C__devirtual$(seq, index_0 - 1))) {
        --index_0;
      }
      ++codePointOffset;
    }
  }
   else {
    while (codePointOffset > 0) {
      if (isHighSurrogate(jl.charAt_I_C__devirtual$(seq, index_0)) && isLowSurrogate(jl.charAt_I_C__devirtual$(seq, index_0 + 1))) {
        ++index_0;
      }
      ++index_0;
      --codePointOffset;
    }
  }
  return index_0;
}

function toChars(codePoint, dst, dstIndex){
  jl.$clinit_Character();
  ji2.checkCriticalArgument(codePoint >= 0 && codePoint <= 1114111);
  if (codePoint >= 65536) {
    dst[dstIndex++] = getHighSurrogate(codePoint);
    dst[dstIndex] = getLowSurrogate(codePoint);
    return 2;
  }
   else {
    dst[dstIndex] = narrow_char(codePoint);
    return 1;
  }
}

function toCodePoint(highSurrogate, lowSurrogate){
  jl.$clinit_Character();
  return 65536 + ((highSurrogate & 1023) << 10) + (lowSurrogate & 1023);
}

function valueOf_10(c){
  jl.$clinit_Character();
  var result;
  if (c < 128) {
    result = (jl.$clinit_Character$BoxedValues() , jl.boxedValues_0)[c];
    if (isNull(result)) {
      result = (jl.$clinit_Character$BoxedValues() , jl.boxedValues_0)[c] = new Character(c);
    }
    return result;
  }
  return new Character(c);
}

defineClass(31, 1, {3:1, 31:1, 13:1, 1:1}, Character);
_.$init_110 = function $init_110(){
}
;
_.compareTo_0 = function compareTo_4(c){
  return this.compareTo_2(castTo(c, 31));
}
;
_.charValue = function charValue(){
  return this.value_0;
}
;
_.compareTo_2 = function compareTo_3(c){
  return compare_3(this.value_0, c.value_0);
}
;
_.equals_0 = function equals_4(o){
  return instanceOf(o, 31) && castTo(o, 31).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return jl.hashCode_7(this.value_0);
}
;
_.toString_0 = function toString_16(){
  return jl.valueOf_19(this.value_0);
}
;
_.value_0 = 0;
var BYTES_0 = 0;
var MAX_CODE_POINT = 1114111;
var MAX_HIGH_SURROGATE = 56319;
var MAX_LOW_SURROGATE = 57343;
var MAX_RADIX = 36;
var MAX_SURROGATE = 57343;
var MAX_VALUE_1 = 65535;
var MIN_CODE_POINT = 0;
var MIN_HIGH_SURROGATE = 55296;
var MIN_LOW_SURROGATE = 56320;
var MIN_RADIX = 2;
var MIN_SUPPLEMENTARY_CODE_POINT = 65536;
var MIN_SURROGATE = 55296;
var MIN_VALUE_1 = 0;
var SIZE_0 = 16;
var TYPE_1;
cggl.Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 31, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character$BoxedValues = function $clinit_Character$BoxedValues(){
  jl.$clinit_Character$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_0 = initUnidimensionalArray(cggl.Ljava_lang_Character_2_classLit, {3:1, 1:1, 4:1}, 31, 128, 0, 1);
}
;
defineClass(300, 1, {1:1});
cggl.Ljava_lang_Character$BoxedValues_2_classLit = createForClass('java.lang', 'Character/BoxedValues', 300, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character$CharSequenceAdapter = function $clinit_Character$CharSequenceAdapter(){
  jl.$clinit_Character$CharSequenceAdapter = emptyMethod;
}
;
defineClass(299, 1, {54:1, 1:1});
cggl.Ljava_lang_Character$CharSequenceAdapter_2_classLit = createForClass('java.lang', 'Character/CharSequenceAdapter', 299, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Double$PowersTable = function $clinit_Double$PowersTable(){
  jl.$clinit_Double$PowersTable = emptyMethod;
  jl.$clinit_Object();
  jl.powers = stampJavaTypeInfo(getClassLiteralForArray(cggl.D_classLit, 1), {3:1, 1:1}, 19, 15, [1.3407807929942597E154, 1.157920892373162E77, 3.4028236692093846E38, 1.8446744073709552E19, 4294967296, 65536, 256, 16, 4, 2]);
  jl.invPowers = stampJavaTypeInfo(getClassLiteralForArray(cggl.D_classLit, 1), {3:1, 1:1}, 19, 15, [7.458340731200207E-155, 8.636168555094445E-78, 2.9387358770557188E-39, 5.421010862427522E-20, 2.3283064365386963E-10, 1.52587890625E-5, 0.00390625, 0.0625, 0.25, 0.5]);
}
;
defineClass(301, 1, {1:1});
cggl.Ljava_lang_Double$PowersTable_2_classLit = createForClass('java.lang', 'Double/PowersTable', 301, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Float = function $clinit_Float(){
  jl.$clinit_Float = emptyMethod;
  jl.$clinit_Number();
  MIN_EXPONENT_0 = -126;
  NaN_1 = 0 / 0;
  NEGATIVE_INFINITY_0 = -1 / 0;
  POSITIVE_INFINITY_0 = 1 / 0;
  BYTES_2 = narrow_int(32 / 8);
  TYPE_3 = cggl.F_classLit;
}
;
jl.Float = function Float(value_0){
  jl.Number_0.call(this);
  this.$init_113();
  this.value_0 = value_0;
}
;
function compare_5(x_0, y_0){
  jl.$clinit_Float();
  return compare_4(x_0, y_0);
}

jl.hashCode_10 = function hashCode_10(f){
  return round_int(f);
}
;
jl.isInfinite_1 = function isInfinite_1(x_0){
  return jl.isInfinite(x_0);
}
;
jl.isNaN_1 = function isNaN_1(x_0){
  return isNaN(x_0);
}
;
jl.toString_20 = function toString_20(b){
  return jl.valueOf_21(b);
}
;
jl.valueOf_13 = function valueOf_13(f){
  return new jl.Float(f);
}
;
defineClass(48, 30, {3:1, 13:1, 48:1, 1:1}, jl.Float);
_.$init_113 = function $init_113(){
}
;
_.compareTo_0 = function compareTo_6(b){
  return this.compareTo_3(castTo(b, 48));
}
;
_.byteValue = function byteValue_1(){
  return round_byte(this.value_0);
}
;
_.compareTo_3 = function compareTo_5(b){
  return compare_5(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_0(){
  return this.value_0;
}
;
_.equals_0 = function equals_5(o){
  return instanceOf(o, 48) && castTo(o, 48).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_0(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_9(){
  return jl.hashCode_10(this.value_0);
}
;
_.intValue = function intValue_0(){
  return round_int(this.value_0);
}
;
_.isInfinite = function isInfinite_0(){
  return jl.isInfinite_1(this.value_0);
}
;
_.isNaN_0 = function isNaN_0(){
  return jl.isNaN_1(this.value_0);
}
;
_.longValue = function longValue_1(){
  return fromDouble_0(this.value_0);
}
;
_.shortValue = function shortValue_1(){
  return round_short(this.value_0);
}
;
_.toString_0 = function toString_19(){
  return jl.toString_20(this.value_0);
}
;
_.value_0 = 0;
var BYTES_2 = 0;
var MAX_EXPONENT_0 = 127;
var MAX_VALUE_3 = 3.4028234663852886E38;
var MIN_EXPONENT_0 = 0;
var MIN_NORMAL_0 = 1.1754943508222875E-38;
var MIN_VALUE_3 = 1.401298464324817E-45;
var NEGATIVE_INFINITY_0 = 0;
var NaN_1 = 0;
var POSITIVE_INFINITY_0 = 0;
var POWER_31_INT = 2147483648;
var SIZE_2 = 32;
var TYPE_3;
cggl.Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 48, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_HasCharSequenceTypeMarker = function $clinit_HasCharSequenceTypeMarker(){
  jl.$clinit_HasCharSequenceTypeMarker = emptyMethod;
}
;
jl.$clinit_HasComparableTypeMarker = function $clinit_HasComparableTypeMarker(){
  jl.$clinit_HasComparableTypeMarker = emptyMethod;
}
;
jl.$clinit_IllegalArgumentException = function $clinit_IllegalArgumentException(){
  jl.$clinit_IllegalArgumentException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IllegalArgumentException = function IllegalArgumentException(){
  jl.$clinit_IllegalArgumentException();
  jl.RuntimeException.call(this);
  this.$init_114();
}
;
jl.IllegalArgumentException_0 = function IllegalArgumentException_0(message){
  jl.$clinit_IllegalArgumentException();
  jl.RuntimeException_1.call(this, message);
  this.$init_114();
}
;
defineClass(21, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.IllegalArgumentException, jl.IllegalArgumentException_0);
_.$init_114 = function $init_114(){
}
;
cggl.Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 21, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Integer$BoxedValues = function $clinit_Integer$BoxedValues(){
  jl.$clinit_Integer$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_1 = initUnidimensionalArray(cggl.Ljava_lang_Integer_2_classLit, {3:1, 1:1, 4:1}, 32, 256, 0, 1);
}
;
defineClass(302, 1, {1:1});
cggl.Ljava_lang_Integer$BoxedValues_2_classLit = createForClass('java.lang', 'Integer/BoxedValues', 302, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Integer$NativeNumber = function $clinit_Integer$NativeNumber(){
  jl.$clinit_Integer$NativeNumber = emptyMethod;
}
;
jl.$clinit_Integer$ReverseNibbles = function $clinit_Integer$ReverseNibbles(){
  jl.$clinit_Integer$ReverseNibbles = emptyMethod;
}
;
defineClass(303, 1, {1:1});
cggl.Ljava_lang_Integer$ReverseNibbles_2_classLit = createForClass('java.lang', 'Integer/ReverseNibbles', 303, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Iterable = function $clinit_Iterable(){
  jl.$clinit_Iterable = emptyMethod;
}
;
jl.$forEach = function $forEach(this$static, action){
  var t, t$iterator;
  ji2.checkNotNull_0(action);
  for (t$iterator = this$static.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_2();
    action.accept_0(t);
  }
}
;
jl.$spliterator = function $spliterator(this$static){
  return ju.spliteratorUnknownSize(this$static.iterator(), 0);
}
;
cggl.Ljava_lang_Iterable_2_classLit = createForInterface('java.lang', 'Iterable');
jl.$clinit_Long = function $clinit_Long(){
  jl.$clinit_Long = emptyMethod;
  jl.$clinit_Number();
  BYTES_4 = narrow_int(64 / 8);
  TYPE_5 = cggl.J_classLit;
}
;
jl.Long = function Long(value_0){
  jl.Number_0.call(this);
  this.$init_118();
  this.value_0 = value_0;
}
;
function compare_7(x_0, y_0){
  jl.$clinit_Long();
  if (lt(x_0, y_0)) {
    return -1;
  }
   else if (gt(x_0, y_0)) {
    return 1;
  }
   else {
    return 0;
  }
}

jl.hashCode_14 = function hashCode_14(l){
  return toInt_0(l);
}
;
jl.toString_24 = function toString_24(value_0){
  return jl.valueOf_23(value_0);
}
;
jl.valueOf_17 = function valueOf_17(i){
  var rebase, result;
  if (gt(i, fromInt_0(-129)) && lt(i, 128)) {
    rebase = toInt_0(i) + 128;
    result = (jl.$clinit_Long$BoxedValues() , jl.boxedValues_2)[rebase];
    if (isNull(result)) {
      result = (jl.$clinit_Long$BoxedValues() , jl.boxedValues_2)[rebase] = new jl.Long(i);
    }
    return result;
  }
  return new jl.Long(i);
}
;
defineClass(33, 30, {3:1, 13:1, 33:1, 1:1}, jl.Long);
_.$init_118 = function $init_118(){
}
;
_.compareTo_0 = function compareTo_10(b){
  return this.compareTo_5(castTo(b, 33));
}
;
_.byteValue = function byteValue_3(){
  return narrow_byte(toInt_0(this.value_0));
}
;
_.compareTo_5 = function compareTo_9(b){
  return compare_7(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_2(){
  return toDouble_0(this.value_0);
}
;
_.equals_0 = function equals_7(o){
  return instanceOf(o, 33) && eq(castTo(o, 33).value_0, this.value_0);
}
;
_.floatValue = function floatValue_2(){
  return toDouble_0(this.value_0);
}
;
_.hashCode_0 = function hashCode_13(){
  return jl.hashCode_14(this.value_0);
}
;
_.intValue = function intValue_2(){
  return toInt_0(this.value_0);
}
;
_.longValue = function longValue_3(){
  return this.value_0;
}
;
_.shortValue = function shortValue_3(){
  return narrow_short(toInt_0(this.value_0));
}
;
_.toString_0 = function toString_23(){
  return jl.toString_24(this.value_0);
}
;
_.value_0 = 0;
var BYTES_4 = 0;
var MAX_VALUE_5 = {l:4194303, m:4194303, h:524287};
var MIN_VALUE_5 = {l:0, m:0, h:524288};
var SIZE_4 = 64;
var TYPE_5;
cggl.Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 33, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Long$BoxedValues = function $clinit_Long$BoxedValues(){
  jl.$clinit_Long$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_2 = initUnidimensionalArray(cggl.Ljava_lang_Long_2_classLit, {3:1, 1:1, 4:1}, 33, 256, 0, 1);
}
;
defineClass(304, 1, {1:1});
cggl.Ljava_lang_Long$BoxedValues_2_classLit = createForClass('java.lang', 'Long/BoxedValues', 304, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Math = function $clinit_Math(){
  jl.$clinit_Math = emptyMethod;
  jl.$clinit_Object();
  jl.PI_OVER_180 = 3.141592653589793 / 180;
  jl.PI_UNDER_180 = 180 / 3.141592653589793;
}
;
defineClass(318, 1, {1:1});
jl.E_0 = 2.718281828459045;
jl.PI_0 = 3.141592653589793;
jl.PI_OVER_180 = 0;
jl.PI_UNDER_180 = 0;
cggl.Ljava_lang_Math_2_classLit = createForClass('java.lang', 'Math', 318, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Math$NativeMath = function $clinit_Math$NativeMath(){
  jl.$clinit_Math$NativeMath = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_Number$__Decode = function $clinit_Number$__Decode(){
  jl.$clinit_Number$__Decode = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Number$__Decode = function Number$__Decode(radix, payload){
  jl.$clinit_Number$__Decode();
  Object_0.call(this);
  this.$init_120();
  this.radix = radix;
  this.payload = payload;
}
;
defineClass(144, 1, {1:1}, jl.Number$__Decode);
_.$init_120 = function $init_120(){
}
;
_.radix = 0;
cggl.Ljava_lang_Number$_1_1Decode_2_classLit = createForClass('java.lang', 'Number/__Decode', 144, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Number$__ParseLong = function $clinit_Number$__ParseLong(){
  jl.$clinit_Number$__ParseLong = emptyMethod;
  var i;
  jl.$clinit_Object();
  jl.maxDigitsForRadix = stampJavaTypeInfo(getClassLiteralForArray(cggl.I_classLit, 1), {3:1, 1:1}, 19, 15, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  jl.maxDigitsRadixPower = initUnidimensionalArray(cggl.I_classLit, {3:1, 1:1}, 19, 37, 15, 1);
  jl.maxLengthForRadix = stampJavaTypeInfo(getClassLiteralForArray(cggl.I_classLit, 1), {3:1, 1:1}, 19, 15, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  jl.maxValueForRadix = initUnidimensionalArray(cggl.J_classLit, {3:1, 1:1}, 19, 37, 14, 1);
  {
    for (i = 2; i <= 36; i++) {
      jl.maxDigitsRadixPower[i] = round_int($wnd.Math.pow(i, jl.maxDigitsForRadix[i]));
      jl.maxValueForRadix[i] = div_0({l:4194303, m:4194303, h:524287}, fromInt_0(jl.maxDigitsRadixPower[i]));
    }
  }
}
;
defineClass(298, 1, {1:1});
cggl.Ljava_lang_Number$_1_1ParseLong_2_classLit = createForClass('java.lang', 'Number/__ParseLong', 298, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_NumberFormatException = function $clinit_NumberFormatException(){
  jl.$clinit_NumberFormatException = emptyMethod;
  jl.$clinit_IllegalArgumentException();
}
;
jl.NumberFormatException = function NumberFormatException(message){
  jl.IllegalArgumentException_0.call(this, message);
  this.$init_121();
}
;
jl.forInputString = function forInputString(s){
  jl.$clinit_NumberFormatException();
  return new jl.NumberFormatException('For input string: "' + s + '"');
}
;
jl.forNullInputString = function forNullInputString(){
  jl.$clinit_NumberFormatException();
  return new jl.NumberFormatException('null');
}
;
jl.forRadix = function forRadix(radix){
  jl.$clinit_NumberFormatException();
  return new jl.NumberFormatException('radix ' + radix + ' out of range');
}
;
defineClass(68, 21, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.NumberFormatException);
_.$init_121 = function $init_121(){
}
;
cggl.Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 68, cggl.Ljava_lang_IllegalArgumentException_2_classLit);
jl.$clinit_Runnable = function $clinit_Runnable(){
  jl.$clinit_Runnable = emptyMethod;
}
;
cggl.Ljava_lang_Runnable_2_classLit = createForInterface('java.lang', 'Runnable');
jl.$clinit_Short = function $clinit_Short(){
  jl.$clinit_Short = emptyMethod;
  jl.$clinit_Number();
  MIN_VALUE_6 = narrow_short(32768);
  MAX_VALUE_6 = narrow_short(32767);
  BYTES_5 = narrow_int(16 / 8);
  TYPE_6 = cggl.S_classLit;
}
;
jl.Short = function Short(value_0){
  jl.Number_0.call(this);
  this.$init_122();
  this.value_0 = value_0;
}
;
function compare_8(x_0, y_0){
  jl.$clinit_Short();
  return x_0 - y_0;
}

jl.hashCode_16 = function hashCode_16(s){
  return s;
}
;
jl.toString_26 = function toString_26(b){
  return jl.valueOf_22(b);
}
;
jl.valueOf_18 = function valueOf_18(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = (jl.$clinit_Short$BoxedValues() , jl.boxedValues_3)[rebase];
    if (isNull(result)) {
      result = (jl.$clinit_Short$BoxedValues() , jl.boxedValues_3)[rebase] = new jl.Short(s);
    }
    return result;
  }
  return new jl.Short(s);
}
;
defineClass(34, 30, {3:1, 13:1, 1:1, 34:1}, jl.Short);
_.$init_122 = function $init_122(){
}
;
_.compareTo_0 = function compareTo_11(b){
  return this.compareTo_6(castTo(b, 34));
}
;
_.byteValue = function byteValue_4(){
  return narrow_byte(this.value_0);
}
;
_.compareTo_6 = function compareTo_12(b){
  return compare_8(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_3(){
  return this.value_0;
}
;
_.equals_0 = function equals_8(o){
  return instanceOf(o, 34) && castTo(o, 34).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_3(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_15(){
  return jl.hashCode_16(this.value_0);
}
;
_.intValue = function intValue_3(){
  return this.value_0;
}
;
_.longValue = function longValue_4(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_4(){
  return this.value_0;
}
;
_.toString_0 = function toString_25(){
  return jl.toString_26(this.value_0);
}
;
_.value_0 = 0;
var BYTES_5 = 0;
var MAX_VALUE_6 = 0;
var MIN_VALUE_6 = 0;
var SIZE_5 = 16;
var TYPE_6;
cggl.Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 34, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Short$BoxedValues = function $clinit_Short$BoxedValues(){
  jl.$clinit_Short$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_3 = initUnidimensionalArray(cggl.Ljava_lang_Short_2_classLit, {3:1, 1:1, 4:1}, 34, 256, 0, 1);
}
;
defineClass(305, 1, {1:1});
cggl.Ljava_lang_Short$BoxedValues_2_classLit = createForClass('java.lang', 'Short/BoxedValues', 305, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_StackTraceElement = function $clinit_StackTraceElement(){
  jl.$clinit_StackTraceElement = emptyMethod;
  jl.$clinit_Object();
}
;
jl.StackTraceElement = function StackTraceElement(className, methodName, fileName, lineNumber){
  jl.$clinit_StackTraceElement();
  Object_0.call(this);
  this.$init_123();
  this.className_0 = className;
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}
;
defineClass(22, 1, {3:1, 1:1, 22:1}, jl.StackTraceElement);
_.$init_123 = function $init_123(){
}
;
_.equals_0 = function equals_9(other){
  var st;
  if (instanceOf(other, 22)) {
    st = castTo(other, 22);
    return this.lineNumber == st.lineNumber && ju.equals_18(this.methodName, st.methodName) && ju.equals_18(this.className_0, st.className_0) && ju.equals_18(this.fileName, st.fileName);
  }
  return false;
}
;
_.getMethodName = function getMethodName(){
  return this.methodName;
}
;
_.hashCode_0 = function hashCode_17(){
  return ju.hash_0(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 4:1}, 1, 5, [jl.valueOf_14(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_27(){
  return this.className_0 + '.' + this.methodName + '(' + (jsNotEquals(this.fileName, null)?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
cggl.Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 22, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_String$NativeFunction = function $clinit_String$NativeFunction(){
  jl.$clinit_String$NativeFunction = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_String$NativeString = function $clinit_String$NativeString(){
  jl.$clinit_String$NativeString = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_StringBuffer = function $clinit_StringBuffer(){
  jl.$clinit_StringBuffer = emptyMethod;
}
;
defineClass(284, 86, {54:1, 1:1});
cggl.Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 284, cggl.Ljava_lang_AbstractStringBuilder_2_classLit);
jl.$clinit_StringBuilder = function $clinit_StringBuilder(){
  jl.$clinit_StringBuilder = emptyMethod;
  jl.$clinit_AbstractStringBuilder();
}
;
jl.StringBuilder = function StringBuilder(ignoredCapacity){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, '');
  this.$init_125();
}
;
jl.StringBuilder_0 = function StringBuilder_0(s){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, castToString(ji2.checkNotNull_0(s)));
  this.$init_125();
}
;
defineClass(87, 86, {54:1, 1:1}, jl.StringBuilder, jl.StringBuilder_0);
_.$init_125 = function $init_125(){
}
;
_.append = function append(x_0){
  this.string += charToString(x_0);
  return this;
}
;
_.append_0 = function append_0(x_0){
  this.string += '' + x_0;
  return this;
}
;
_.append_1 = function append_1(x_0){
  this.string += '' + x_0;
  return this;
}
;
_.append_2 = function append_2(x_0){
  this.string += '' + x_0;
  return this;
}
;
cggl.Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 87, cggl.Ljava_lang_AbstractStringBuilder_2_classLit);
jl.$clinit_System = function $clinit_System(){
  jl.$clinit_System = emptyMethod;
  jl.$clinit_Object();
  jl.err = new ji.PrintStream(null);
  jl.out_0 = new ji.PrintStream(null);
}
;
defineClass(323, 1, {1:1});
cggl.Ljava_lang_System_2_classLit = createForClass('java.lang', 'System', 323, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_UnsupportedOperationException = function $clinit_UnsupportedOperationException(){
  jl.$clinit_UnsupportedOperationException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.UnsupportedOperationException = function UnsupportedOperationException(){
  jl.$clinit_UnsupportedOperationException();
  jl.RuntimeException.call(this);
  this.$init_127();
}
;
jl.UnsupportedOperationException_0 = function UnsupportedOperationException_0(message){
  jl.$clinit_UnsupportedOperationException();
  jl.RuntimeException_1.call(this, message);
  this.$init_127();
}
;
defineClass(18, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, jl.UnsupportedOperationException, jl.UnsupportedOperationException_0);
_.$init_127 = function $init_127(){
}
;
cggl.Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 18, cggl.Ljava_lang_RuntimeException_2_classLit);
jnc.$clinit_Charset = function $clinit_Charset(){
  jnc.$clinit_Charset = emptyMethod;
  jl.$clinit_Object();
}
;
jnc.Charset = function Charset(name_0, aliasesIgnored){
  jnc.$clinit_Charset();
  Object_0.call(this);
  this.$init_128();
  this.name_0 = name_0;
}
;
jnc.forName = function forName(charsetName){
  jnc.$clinit_Charset();
  ji2.checkArgument(jsNotEquals(charsetName, null), 'Null charset name');
  charsetName = jl.toUpperCase__Ljava_lang_String___devirtual$(charsetName);
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2((ji2.$clinit_EmulatedCharset() , ji2.ISO_8859_1).name_1(), charsetName)) {
    return ji2.$clinit_EmulatedCharset() , ji2.ISO_8859_1;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_2((ji2.$clinit_EmulatedCharset() , ji2.ISO_LATIN_1).name_1(), charsetName)) {
    return ji2.$clinit_EmulatedCharset() , ji2.ISO_LATIN_1;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_2((ji2.$clinit_EmulatedCharset() , ji2.UTF_8).name_1(), charsetName)) {
    return ji2.$clinit_EmulatedCharset() , ji2.UTF_8;
  }
  if ((new RegExp('^[A-Za-z0-9][\\w-:\\.\\+]*$')).test(charsetName)) {
    throw toJs(new jnc.UnsupportedCharsetException(charsetName));
  }
   else {
    throw toJs(new jnc.IllegalCharsetNameException(charsetName));
  }
}
;
defineClass(27, 1, {13:1, 1:1, 27:1});
_.$init_128 = function $init_128(){
}
;
_.compareTo_0 = function compareTo_13(that){
  return this.compareTo_7(castTo(that, 27));
}
;
_.compareTo_7 = function compareTo_14(that){
  return jl.compareToIgnoreCase_Ljava_lang_String__I__devirtual$(this.name_0, that.name_0);
}
;
_.equals_0 = function equals_11(o){
  var that;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 27)) {
    return false;
  }
  that = castTo(o, 27);
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(this.name_0, that.name_0);
}
;
_.hashCode_0 = function hashCode_18(){
  return jl.hashCode__I__devirtual$_2(this.name_0);
}
;
_.name_1 = function name_2(){
  return this.name_0;
}
;
_.toString_0 = function toString_28(){
  return this.name_0;
}
;
cggl.Ljava_nio_charset_Charset_2_classLit = createForClass('java.nio.charset', 'Charset', 27, cggl.Ljava_lang_Object_2_classLit);
jnc.$clinit_Charset$AvailableCharsets = function $clinit_Charset$AvailableCharsets(){
  jnc.$clinit_Charset$AvailableCharsets = emptyMethod;
}
;
defineClass(283, 1, {1:1});
cggl.Ljava_nio_charset_Charset$AvailableCharsets_2_classLit = createForClass('java.nio.charset', 'Charset/AvailableCharsets', 283, cggl.Ljava_lang_Object_2_classLit);
jnc.$clinit_IllegalCharsetNameException = function $clinit_IllegalCharsetNameException(){
  jnc.$clinit_IllegalCharsetNameException = emptyMethod;
  jl.$clinit_IllegalArgumentException();
}
;
jnc.IllegalCharsetNameException = function IllegalCharsetNameException(charsetName){
  jnc.$clinit_IllegalCharsetNameException();
  jl.IllegalArgumentException_0.call(this, valueOf_24(charsetName));
  this.$init_129();
  this.charsetName = charsetName;
}
;
defineClass(117, 21, {3:1, 5:1, 1:1, 8:1, 6:1}, jnc.IllegalCharsetNameException);
_.$init_129 = function $init_129(){
}
;
cggl.Ljava_nio_charset_IllegalCharsetNameException_2_classLit = createForClass('java.nio.charset', 'IllegalCharsetNameException', 117, cggl.Ljava_lang_IllegalArgumentException_2_classLit);
jnc.$clinit_UnsupportedCharsetException = function $clinit_UnsupportedCharsetException(){
  jnc.$clinit_UnsupportedCharsetException = emptyMethod;
  jl.$clinit_IllegalArgumentException();
}
;
jnc.UnsupportedCharsetException = function UnsupportedCharsetException(charsetName){
  jnc.$clinit_UnsupportedCharsetException();
  jl.IllegalArgumentException_0.call(this, valueOf_24(charsetName));
  this.$init_130();
  this.charsetName = charsetName;
}
;
defineClass(66, 21, {3:1, 5:1, 1:1, 8:1, 6:1, 66:1}, jnc.UnsupportedCharsetException);
_.$init_130 = function $init_130(){
}
;
cggl.Ljava_nio_charset_UnsupportedCharsetException_2_classLit = createForClass('java.nio.charset', 'UnsupportedCharsetException', 66, cggl.Ljava_lang_IllegalArgumentException_2_classLit);
ju.$clinit_Collection = function $clinit_Collection(){
  ju.$clinit_Collection = emptyMethod;
}
;
ju.$spliterator_0 = function $spliterator_0(this$static){
  return ju.spliterator_7(this$static, 0);
}
;
ju.$stream = function $stream(this$static){
  return jus.stream_1(this$static.spliterator_0(), false);
}
;
cggl.Ljava_util_Collection_2_classLit = createForInterface('java.util', 'Collection');
ju.$clinit_AbstractCollection = function $clinit_AbstractCollection(){
  ju.$clinit_AbstractCollection = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
}
;
ju.AbstractCollection = function AbstractCollection(){
  ju.$clinit_AbstractCollection();
  Object_0.call(this);
  this.$init_131();
}
;
defineClass(70, 1, {1:1, 12:1});
_.$init_131 = function $init_131(){
}
;
_.forEach = function forEach(action){
  jl.$forEach(this, action);
}
;
_.spliterator_0 = function spliterator_0(){
  return ju.$spliterator_0(this);
}
;
_.stream = function stream(){
  return ju.$stream(this);
}
;
_.add = function add_3(o){
  throw toJs(new jl.UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  var changed, e, e$iterator;
  ji2.checkNotNull_0(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_2();
    changed = changed | this.add(e);
  }
  return changed;
}
;
_.advanceToFind = function advanceToFind(o, remove){
  var e, iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    e = iter.next_2();
    if (ju.equals_17(o, e)) {
      if (remove) {
        iter.remove_1();
      }
      return true;
    }
  }
  return false;
}
;
_.clear = function clear_3(){
  var iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    iter.next_2();
    iter.remove_1();
  }
}
;
_.contains = function contains(o){
  return this.advanceToFind(o, false);
}
;
_.containsAll = function containsAll(c){
  var e, e$iterator;
  ji2.checkNotNull_0(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_2();
    if (!this.contains(e)) {
      return false;
    }
  }
  return true;
}
;
_.isEmpty = function isEmpty_3(){
  return this.size() == 0;
}
;
_.remove = function remove_4(o){
  return this.advanceToFind(o, true);
}
;
_.removeAll = function removeAll(c){
  var changed, iter, o;
  ji2.checkNotNull_0(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_2();
    if (c.contains(o)) {
      iter.remove_1();
      changed = true;
    }
  }
  return changed;
}
;
_.retainAll = function retainAll(c){
  var changed, iter, o;
  ji2.checkNotNull_0(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_2();
    if (!c.contains(o)) {
      iter.remove_1();
      changed = true;
    }
  }
  return changed;
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 4:1}, 1, this.size(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, result, size_0;
  size_0 = this.size();
  if (a.length < size_0) {
    a = ji2.createFrom(a, size_0);
  }
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_2());
  }
  if (a.length > size_0) {
    setCheck(a, size_0, null);
  }
  return a;
}
;
_.toString_0 = function toString_29(){
  var e, e$iterator, joiner;
  joiner = new ju.StringJoiner_0(', ', '[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_2();
    joiner.add_1(e === this?'(this Collection)':valueOf_24(e));
  }
  return joiner.toString_0();
}
;
cggl.Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 70, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Set = function $clinit_Set(){
  ju.$clinit_Set = emptyMethod;
}
;
ju.$spliterator_2 = function $spliterator_2(this$static){
  return ju.spliterator_7(this$static, 1);
}
;
cggl.Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set');
ju.$clinit_AbstractSet = function $clinit_AbstractSet(){
  ju.$clinit_AbstractSet = emptyMethod;
  ju.$clinit_AbstractCollection();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_Set();
}
;
ju.AbstractSet = function AbstractSet(){
  ju.$clinit_AbstractSet();
  ju.AbstractCollection.call(this);
  this.$init_132();
}
;
defineClass(62, 70, {1:1, 12:1, 24:1});
_.$init_132 = function $init_132(){
}
;
_.spliterator_0 = function spliterator_1(){
  return ju.$spliterator_2(this);
}
;
_.equals_0 = function equals_12(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 24)) {
    return false;
  }
  other = castTo(o, 24);
  if (other.size() != this.size()) {
    return false;
  }
  return this.containsAll(other);
}
;
_.hashCode_0 = function hashCode_19(){
  return ju.hashCode_24(this);
}
;
_.removeAll = function removeAll_0(c){
  var iter, o, o$iterator, size_0;
  ji2.checkNotNull_0(c);
  size_0 = this.size();
  if (size_0 < c.size()) {
    for (iter = this.iterator(); iter.hasNext_0();) {
      o = iter.next_2();
      if (c.contains(o)) {
        iter.remove_1();
      }
    }
  }
   else {
    for (o$iterator = c.iterator(); o$iterator.hasNext_0();) {
      o = o$iterator.next_2();
      this.remove(o);
    }
  }
  return size_0 != this.size();
}
;
cggl.Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 62, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractHashMap$EntrySet = function $clinit_AbstractHashMap$EntrySet(){
  ju.$clinit_AbstractHashMap$EntrySet = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.AbstractHashMap$EntrySet = function AbstractHashMap$EntrySet(this$0){
  ju.$clinit_AbstractHashMap$EntrySet();
  this.this$01 = this$0;
  ju.AbstractSet.call(this);
  this.$init_133();
}
;
defineClass(181, 62, {1:1, 12:1, 24:1}, ju.AbstractHashMap$EntrySet);
_.$init_133 = function $init_133(){
}
;
_.clear = function clear_4(){
  this.this$01.clear();
}
;
_.contains = function contains_0(o){
  if (instanceOf(o, 14)) {
    return this.this$01.containsEntry(castTo(o, 14));
  }
  return false;
}
;
_.iterator = function iterator_0(){
  return new ju.AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_5(entry){
  var key;
  if (this.contains(entry)) {
    key = castTo(entry, 14).getKey();
    this.this$01.remove(key);
    return true;
  }
  return false;
}
;
_.size = function size_4(){
  return this.this$01.size();
}
;
cggl.Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 181, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_AbstractHashMap$EntrySetIterator = function $clinit_AbstractHashMap$EntrySetIterator(){
  ju.$clinit_AbstractHashMap$EntrySetIterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractHashMap$EntrySetIterator = function AbstractHashMap$EntrySetIterator(this$0){
  ju.$clinit_AbstractHashMap$EntrySetIterator();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_134();
  ju.recordLastKnownStructure(this$0, this);
}
;
defineClass(182, 1, {1:1, 16:1}, ju.AbstractHashMap$EntrySetIterator);
_.$init_134 = function $init_134(){
  this.stringMapEntries = this.this$01.stringMap.iterator();
  this.current = this.stringMapEntries;
  this.hasNext = this.computeHasNext();
}
;
_.forEachRemaining_0 = function forEachRemaining_2(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.next_2 = function next_1(){
  return this.next_3();
}
;
_.computeHasNext = function computeHasNext(){
  if (this.current.hasNext_0()) {
    return true;
  }
  if (jsNotEquals(this.current, this.stringMapEntries)) {
    return false;
  }
  this.current = this.this$01.hashCodeMap.iterator();
  return this.current.hasNext_0();
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.next_3 = function next_2(){
  var rv;
  ju.checkStructuralChange(this.this$01, this);
  ji2.checkElement(this.hasNext_0());
  this.last = this.current;
  rv = castTo(this.current.next_2(), 14);
  this.hasNext = this.computeHasNext();
  return rv;
}
;
_.remove_1 = function remove_6(){
  ji2.checkState(isNotNull(this.last));
  ju.checkStructuralChange(this.this$01, this);
  this.last.remove_1();
  this.last = null;
  this.hasNext = this.computeHasNext();
  ju.recordLastKnownStructure(this.this$01, this);
}
;
_.hasNext = false;
cggl.Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 182, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_List = function $clinit_List(){
  ju.$clinit_List = emptyMethod;
}
;
ju.$spliterator_1 = function $spliterator_1(this$static){
  return ju.spliterator_7(this$static, 16);
}
;
cggl.Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
ju.$clinit_AbstractList = function $clinit_AbstractList(){
  ju.$clinit_AbstractList = emptyMethod;
  ju.$clinit_AbstractCollection();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_List();
}
;
ju.AbstractList = function AbstractList(){
  ju.$clinit_AbstractList();
  ju.AbstractCollection.call(this);
  this.$init_135();
}
;
defineClass(71, 70, {1:1, 12:1, 26:1});
_.$init_135 = function $init_135(){
}
;
_.spliterator_0 = function spliterator_2(){
  return ju.$spliterator_1(this);
}
;
_.addAtIndex = function add_4(index_0, element){
  throw toJs(new jl.UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add = function add_5(obj){
  this.addAtIndex(this.size(), obj);
  return true;
}
;
_.addAllAtIndex = function addAll_0(index_0, c){
  var changed, e, e$iterator;
  ji2.checkNotNull_0(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_2();
    this.addAtIndex(index_0++, e);
    changed = true;
  }
  return changed;
}
;
_.clear = function clear_5(){
  this.removeRange(0, this.size());
}
;
_.equals_0 = function equals_13(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 26)) {
    return false;
  }
  other = castTo(o, 26);
  if (this.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_2();
    elemOther = iterOther.next_2();
    if (!ju.equals_17(elem, elemOther)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_20(){
  return ju.hashCode_25(this);
}
;
_.indexOf = function indexOf_1(toFind){
  var i, n;
  for (i = 0 , n = this.size(); i < n; ++i) {
    if (ju.equals_17(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.iterator = function iterator_1(){
  return new ju.AbstractList$IteratorImpl(this);
}
;
_.lastIndexOf = function lastIndexOf_1(toFind){
  var i;
  for (i = this.size() - 1; i > -1; --i) {
    if (ju.equals_17(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.listIterator = function listIterator(from){
  return new ju.AbstractList$ListIteratorImpl(this, from);
}
;
_.removeAtIndex = function remove_7(index_0){
  throw toJs(new jl.UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = this.listIterator(fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next_2();
    iter.remove_1();
  }
}
;
_.setAtIndex = function set_2(index_0, o){
  throw toJs(new jl.UnsupportedOperationException_0('Set not supported on this list'));
}
;
_.subList = function subList(fromIndex, toIndex){
  return new ju.AbstractList$SubList(this, fromIndex, toIndex);
}
;
cggl.Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 71, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractList$IteratorImpl = function $clinit_AbstractList$IteratorImpl(){
  ju.$clinit_AbstractList$IteratorImpl = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractList$IteratorImpl = function AbstractList$IteratorImpl(this$0){
  ju.$clinit_AbstractList$IteratorImpl();
  this.this$01_0 = this$0;
  Object_0.call(this);
  this.$init_136();
}
;
defineClass(73, 1, {1:1, 16:1}, ju.AbstractList$IteratorImpl);
_.$init_136 = function $init_136(){
  this.i = 0;
  this.last = -1;
}
;
_.forEachRemaining_0 = function forEachRemaining_3(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size();
}
;
_.next_2 = function next_3(){
  ji2.checkElement(this.hasNext_0());
  return this.this$01_0.getAtIndex(this.last = this.i++);
}
;
_.remove_1 = function remove_8(){
  ji2.checkState(this.last != -1);
  this.this$01_0.removeAtIndex(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
cggl.Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 73, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_ListIterator = function $clinit_ListIterator(){
  ju.$clinit_ListIterator = emptyMethod;
}
;
cggl.Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator');
ju.$clinit_AbstractList$ListIteratorImpl = function $clinit_AbstractList$ListIteratorImpl(){
  ju.$clinit_AbstractList$ListIteratorImpl = emptyMethod;
  ju.$clinit_AbstractList$IteratorImpl();
  ju.$clinit_Iterator();
}
;
ju.AbstractList$ListIteratorImpl = function AbstractList$ListIteratorImpl(this$0, start_0){
  ju.$clinit_AbstractList$ListIteratorImpl();
  this.this$01 = this$0;
  ju.AbstractList$IteratorImpl.call(this, this$0);
  this.$init_137();
  ji2.checkPositionIndex(start_0, this$0.size());
  this.i = start_0;
}
;
defineClass(169, 73, {1:1, 16:1}, ju.AbstractList$ListIteratorImpl);
_.$init_137 = function $init_137(){
}
;
_.remove_1 = function remove_9(){
  getClassPrototype(73).remove_1.call(this);
}
;
cggl.Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 169, cggl.Ljava_util_AbstractList$IteratorImpl_2_classLit);
ju.$clinit_AbstractList$SubList = function $clinit_AbstractList$SubList(){
  ju.$clinit_AbstractList$SubList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.AbstractList$SubList = function AbstractList$SubList(wrapped, fromIndex, toIndex){
  ju.$clinit_AbstractList$SubList();
  ju.AbstractList.call(this);
  this.$init_138();
  ji2.checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}
;
defineClass(170, 71, {1:1, 12:1, 26:1}, ju.AbstractList$SubList);
_.$init_138 = function $init_138(){
}
;
_.addAtIndex = function add_6(index_0, element){
  ji2.checkPositionIndex(index_0, this.size_0);
  this.wrapped.addAtIndex(this.fromIndex + index_0, element);
  this.size_0++;
}
;
_.getAtIndex = function get_5(index_0){
  ji2.checkElementIndex(index_0, this.size_0);
  return this.wrapped.getAtIndex(this.fromIndex + index_0);
}
;
_.removeAtIndex = function remove_10(index_0){
  var result;
  ji2.checkElementIndex(index_0, this.size_0);
  result = this.wrapped.removeAtIndex(this.fromIndex + index_0);
  this.size_0--;
  return result;
}
;
_.setAtIndex = function set_3(index_0, element){
  ji2.checkElementIndex(index_0, this.size_0);
  return this.wrapped.setAtIndex(this.fromIndex + index_0, element);
}
;
_.size = function size_5(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
cggl.Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 170, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_AbstractMap$1 = function $clinit_AbstractMap$1(){
  ju.$clinit_AbstractMap$1 = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.AbstractMap$1 = function AbstractMap$1(this$0){
  ju.$clinit_AbstractMap$1();
  this.this$01 = this$0;
  ju.AbstractSet.call(this);
  this.$init_139();
}
;
defineClass(172, 62, {1:1, 12:1, 24:1}, ju.AbstractMap$1);
_.$init_139 = function $init_139(){
}
;
_.clear = function clear_6(){
  this.this$01.clear();
}
;
_.contains = function contains_1(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new ju.AbstractMap$1$1(this, outerIter);
}
;
_.remove = function remove_11(key){
  if (this.this$01.containsKey(key)) {
    this.this$01.remove(key);
    return true;
  }
  return false;
}
;
_.size = function size_6(){
  return this.this$01.size();
}
;
cggl.Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 172, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_AbstractMap$1$1 = function $clinit_AbstractMap$1$1(){
  ju.$clinit_AbstractMap$1$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractMap$1$1 = function AbstractMap$1$1(this$1, val$outerIter){
  ju.$clinit_AbstractMap$1$1();
  this.this$11 = this$1;
  this.val$outerIter2 = val$outerIter;
  Object_0.call(this);
  this.$init_140();
}
;
defineClass(173, 1, {1:1, 16:1}, ju.AbstractMap$1$1);
_.$init_140 = function $init_140(){
}
;
_.forEachRemaining_0 = function forEachRemaining_4(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_2 = function next_4(){
  var entry;
  entry = castTo(this.val$outerIter2.next_2(), 14);
  return entry.getKey();
}
;
_.remove_1 = function remove_12(){
  this.val$outerIter2.remove_1();
}
;
cggl.Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 173, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractMap$2 = function $clinit_AbstractMap$2(){
  ju.$clinit_AbstractMap$2 = emptyMethod;
  ju.$clinit_AbstractCollection();
}
;
ju.AbstractMap$2 = function AbstractMap$2(this$0){
  ju.$clinit_AbstractMap$2();
  this.this$01 = this$0;
  ju.AbstractCollection.call(this);
  this.$init_141();
}
;
defineClass(174, 70, {1:1, 12:1}, ju.AbstractMap$2);
_.$init_141 = function $init_141(){
}
;
_.clear = function clear_7(){
  this.this$01.clear();
}
;
_.contains = function contains_2(value_0){
  return this.this$01.containsValue(value_0);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new ju.AbstractMap$2$1(this, outerIter);
}
;
_.size = function size_7(){
  return this.this$01.size();
}
;
cggl.Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 174, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractMap$2$1 = function $clinit_AbstractMap$2$1(){
  ju.$clinit_AbstractMap$2$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractMap$2$1 = function AbstractMap$2$1(this$1, val$outerIter){
  ju.$clinit_AbstractMap$2$1();
  this.this$11 = this$1;
  this.val$outerIter2 = val$outerIter;
  Object_0.call(this);
  this.$init_142();
}
;
defineClass(175, 1, {1:1, 16:1}, ju.AbstractMap$2$1);
_.$init_142 = function $init_142(){
}
;
_.forEachRemaining_0 = function forEachRemaining_5(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_2 = function next_5(){
  var entry;
  entry = castTo(this.val$outerIter2.next_2(), 14);
  return entry.getValue();
}
;
_.remove_1 = function remove_13(){
  this.val$outerIter2.remove_1();
}
;
cggl.Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 175, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Map$Entry = function $clinit_Map$Entry(){
  ju.$clinit_Map$Entry = emptyMethod;
}
;
cggl.Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
ju.$clinit_AbstractMap$AbstractEntry = function $clinit_AbstractMap$AbstractEntry(){
  ju.$clinit_AbstractMap$AbstractEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMap$AbstractEntry = function AbstractMap$AbstractEntry(key, value_0){
  ju.$clinit_AbstractMap$AbstractEntry();
  Object_0.call(this);
  this.$init_143();
  this.key_0 = key;
  this.value_0 = value_0;
}
;
defineClass(171, 1, {1:1, 14:1});
_.$init_143 = function $init_143(){
}
;
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 14)) {
    return false;
  }
  entry = castTo(other, 14);
  return ju.equals_17(this.key_0, entry.getKey()) && ju.equals_17(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_21(){
  return ju.hashCode_27(this.key_0) ^ ju.hashCode_27(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_30(){
  return this.key_0 + '=' + this.value_0;
}
;
cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 171, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractMap$SimpleEntry = function $clinit_AbstractMap$SimpleEntry(){
  ju.$clinit_AbstractMap$SimpleEntry = emptyMethod;
  ju.$clinit_AbstractMap$AbstractEntry();
}
;
ju.AbstractMap$SimpleEntry = function AbstractMap$SimpleEntry(key, value_0){
  ju.$clinit_AbstractMap$SimpleEntry();
  ju.AbstractMap$AbstractEntry.call(this, key, value_0);
  this.$init_144();
}
;
defineClass(96, 171, {1:1, 14:1}, ju.AbstractMap$SimpleEntry);
_.$init_144 = function $init_144(){
}
;
cggl.Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 96, cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit);
ju.$clinit_AbstractMap$SimpleImmutableEntry = function $clinit_AbstractMap$SimpleImmutableEntry(){
  ju.$clinit_AbstractMap$SimpleImmutableEntry = emptyMethod;
}
;
defineClass(354, 171, {1:1, 14:1});
cggl.Ljava_util_AbstractMap$SimpleImmutableEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleImmutableEntry', 354, cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit);
ju.$clinit_AbstractMapEntry = function $clinit_AbstractMapEntry(){
  ju.$clinit_AbstractMapEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMapEntry = function AbstractMapEntry(){
  ju.$clinit_AbstractMapEntry();
  Object_0.call(this);
  this.$init_145();
}
;
defineClass(215, 1, {1:1, 14:1});
_.$init_145 = function $init_145(){
}
;
_.equals_0 = function equals_15(other){
  var entry;
  if (!instanceOf(other, 14)) {
    return false;
  }
  entry = castTo(other, 14);
  return ju.equals_17(this.getKey(), entry.getKey()) && ju.equals_17(this.getValue(), entry.getValue());
}
;
_.hashCode_0 = function hashCode_22(){
  return ju.hashCode_27(this.getKey()) ^ ju.hashCode_27(this.getValue());
}
;
_.toString_0 = function toString_31(){
  return this.getKey() + '=' + this.getValue();
}
;
cggl.Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 215, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Queue = function $clinit_Queue(){
  ju.$clinit_Queue = emptyMethod;
}
;
cggl.Ljava_util_Queue_2_classLit = createForInterface('java.util', 'Queue');
ju.$clinit_AbstractQueue = function $clinit_AbstractQueue(){
  ju.$clinit_AbstractQueue = emptyMethod;
}
;
defineClass(339, 70, {1:1, 12:1});
cggl.Ljava_util_AbstractQueue_2_classLit = createForClass('java.util', 'AbstractQueue', 339, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_RandomAccess = function $clinit_RandomAccess(){
  ju.$clinit_RandomAccess = emptyMethod;
}
;
cggl.Ljava_util_RandomAccess_2_classLit = createForInterface('java.util', 'RandomAccess');
ju.$clinit_ArrayList = function $clinit_ArrayList(){
  ju.$clinit_ArrayList = emptyMethod;
  ju.$clinit_AbstractList();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_List();
}
;
ju.ArrayList = function ArrayList(){
  ju.$clinit_ArrayList();
  ju.AbstractList.call(this);
  this.$init_146();
}
;
defineClass(46, 71, {3:1, 1:1, 12:1, 26:1}, ju.ArrayList);
_.$init_146 = function $init_146(){
  this.array = castToArray(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 4:1}, 1, 0, 5, 1));
}
;
_.addAtIndex = function add_7(index_0, o){
  ji2.checkPositionIndex(index_0, this.array.length);
  ji2.insertTo(this.array, index_0, o);
}
;
_.add = function add_8(o){
  setCheck(this.array, this.array.length, o);
  return true;
}
;
_.addAllAtIndex = function addAll_1(index_0, c){
  var cArray, len;
  ji2.checkPositionIndex(index_0, this.array.length);
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  ji2.insertTo_0(this.array, index_0, cArray);
  return true;
}
;
_.addAll = function addAll_2(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  ji2.insertTo_0(this.array, this.array.length, cArray);
  return true;
}
;
_.clear = function clear_8(){
  this.array = castToArray(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 4:1}, 1, 0, 5, 1));
}
;
_.contains = function contains_3(o){
  return this.indexOf(o) != -1;
}
;
_.forEach = function forEach_0(consumer){
  var e, e$array, e$index, e$max;
  ji2.checkNotNull_0(consumer);
  for (e$array = this.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept_0(e);
  }
}
;
_.getAtIndex = function get_6(index_0){
  ji2.checkElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.indexOf = function indexOf_2(o){
  return this.indexOf_2(o, 0);
}
;
_.indexOf_2 = function indexOf_3(o, index_0){
  for (; index_0 < this.array.length; ++index_0) {
    if (ju.equals_17(o, this.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}
;
_.isEmpty = function isEmpty_4(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_4(){
  return new ju.ArrayList$1(this);
}
;
_.lastIndexOf = function lastIndexOf_2(o){
  return this.lastIndexOf_2(o, this.size() - 1);
}
;
_.lastIndexOf_2 = function lastIndexOf_3(o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (ju.equals_17(o, this.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}
;
_.removeAtIndex = function remove_14(index_0){
  var previous;
  previous = this.getAtIndex(index_0);
  ji2.removeFrom(this.array, index_0, 1);
  return previous;
}
;
_.remove = function remove_15(o){
  var i;
  i = this.indexOf(o);
  if (i == -1) {
    return false;
  }
  this.removeAtIndex(i);
  return true;
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  var count;
  ji2.checkPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  ji2.removeFrom(this.array, fromIndex, count);
}
;
_.setAtIndex = function set_4(index_0, o){
  var previous;
  previous = this.getAtIndex(index_0);
  setCheck(this.array, index_0, o);
  return previous;
}
;
_.size = function size_8(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return ji2.clone_0(this.array, 0, this.array.length);
}
;
_.toArray_0 = function toArray_2(out){
  var i, size_0;
  size_0 = this.array.length;
  if (out.length < size_0) {
    out = ji2.createFrom(out, size_0);
  }
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  if (out.length > size_0) {
    setCheck(out, size_0, null);
  }
  return out;
}
;
cggl.Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 46, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_ArrayList$1 = function $clinit_ArrayList$1(){
  ju.$clinit_ArrayList$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.ArrayList$1 = function ArrayList$1(this$0){
  ju.$clinit_ArrayList$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_147();
}
;
defineClass(224, 1, {1:1, 16:1}, ju.ArrayList$1);
_.$init_147 = function $init_147(){
  this.i = 0;
  this.last = -1;
}
;
_.forEachRemaining_0 = function forEachRemaining_6(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_2 = function next_6(){
  ji2.checkElement(this.hasNext_0());
  this.last = this.i++;
  return this.this$01.array[this.last];
}
;
_.remove_1 = function remove_16(){
  ji2.checkState(this.last != -1);
  this.this$01.removeAtIndex(this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
cggl.Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 224, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Arrays = function $clinit_Arrays(){
  ju.$clinit_Arrays = emptyMethod;
  jl.$clinit_Object();
}
;
ju.hashCode_23 = function hashCode_23(a){
  ju.$clinit_Arrays();
  var e, e$array, e$index, e$max, hashCode;
  if (jsEquals(a, null)) {
    return 0;
  }
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + ju.hashCode_27(e);
    hashCode = ji2.ensureInt(hashCode);
  }
  return hashCode;
}
;
defineClass(436, 1, {1:1});
cggl.Ljava_util_Arrays_2_classLit = createForClass('java.util', 'Arrays', 436, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Arrays$0methodref$compare$Type = function $clinit_Arrays$0methodref$compare$Type(){
  ju.$clinit_Arrays$0methodref$compare$Type = emptyMethod;
}
;
defineClass(634, $wnd.Function, {1:1});
ju.$clinit_Arrays$1methodref$compare$Type = function $clinit_Arrays$1methodref$compare$Type(){
  ju.$clinit_Arrays$1methodref$compare$Type = emptyMethod;
}
;
defineClass(635, $wnd.Function, {1:1});
ju.$clinit_Arrays$ArrayList = function $clinit_Arrays$ArrayList(){
  ju.$clinit_Arrays$ArrayList = emptyMethod;
}
;
defineClass(437, 71, {3:1, 1:1, 12:1, 26:1});
cggl.Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 437, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Arrays$lambda$0$Type = function $clinit_Arrays$lambda$0$Type(){
  ju.$clinit_Arrays$lambda$0$Type = emptyMethod;
}
;
defineClass(633, $wnd.Function, {1:1});
ju.$clinit_Collections = function $clinit_Collections(){
  ju.$clinit_Collections = emptyMethod;
  jl.$clinit_Object();
  ju.EMPTY_LIST = new ju.Collections$EmptyList;
  ju.EMPTY_MAP = new ju.Collections$EmptyMap;
  ju.EMPTY_SET = new ju.Collections$EmptySet;
}
;
ju.emptyIterator = function emptyIterator(){
  ju.$clinit_Collections();
  return castTo((ju.$clinit_Collections$EmptyListIterator() , ju.INSTANCE_0), 16);
}
;
ju.emptySet = function emptySet(){
  ju.$clinit_Collections();
  return castTo(ju.EMPTY_SET, 24);
}
;
ju.hashCode_24 = function hashCode_24(collection){
  ju.$clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_2();
    hashCode = hashCode + ju.hashCode_27(e);
    hashCode = ji2.ensureInt(hashCode);
  }
  return hashCode;
}
;
ju.hashCode_25 = function hashCode_25(list){
  ju.$clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_2();
    hashCode = 31 * hashCode + ju.hashCode_27(e);
    hashCode = ji2.ensureInt(hashCode);
  }
  return hashCode;
}
;
ju.singleton = function singleton(o){
  ju.$clinit_Collections();
  var set_0;
  set_0 = new ju.HashSet(1);
  set_0.add(o);
  return ju.unmodifiableSet(set_0);
}
;
ju.unmodifiableSet = function unmodifiableSet(set_0){
  return new ju.Collections$UnmodifiableSet(set_0);
}
;
defineClass(338, 1, {1:1});
cggl.Ljava_util_Collections_2_classLit = createForClass('java.util', 'Collections', 338, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Enumeration = function $clinit_Enumeration(){
  ju.$clinit_Enumeration = emptyMethod;
}
;
cggl.Ljava_util_Enumeration_2_classLit = createForInterface('java.util', 'Enumeration');
ju.$clinit_Collections$1 = function $clinit_Collections$1(){
  ju.$clinit_Collections$1 = emptyMethod;
}
;
defineClass(353, 1, {1:1});
cggl.Ljava_util_Collections$1_2_classLit = createForClass('java.util', 'Collections/1', 353, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$EmptyList = function $clinit_Collections$EmptyList(){
  ju.$clinit_Collections$EmptyList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.Collections$EmptyList = function Collections$EmptyList(){
  ju.$clinit_Collections$EmptyList();
  ju.AbstractList.call(this);
  this.$init_148();
}
;
defineClass(162, 71, {3:1, 1:1, 12:1, 26:1}, ju.Collections$EmptyList);
_.$init_148 = function $init_148(){
}
;
_.contains = function contains_4(object){
  return false;
}
;
_.getAtIndex = function get_7(location_0){
  ji2.checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return ju.emptyIterator();
}
;
_.size = function size_9(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 162, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Collections$EmptyListIterator = function $clinit_Collections$EmptyListIterator(){
  ju.$clinit_Collections$EmptyListIterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
  ju.INSTANCE_0 = new ju.Collections$EmptyListIterator;
}
;
ju.Collections$EmptyListIterator = function Collections$EmptyListIterator(){
  Object_0.call(this);
  this.$init_149();
}
;
defineClass(163, 1, {1:1, 16:1}, ju.Collections$EmptyListIterator);
_.$init_149 = function $init_149(){
}
;
_.forEachRemaining_0 = function forEachRemaining_7(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_5(){
  return false;
}
;
_.next_2 = function next_7(){
  throw toJs(new ju.NoSuchElementException);
}
;
_.remove_1 = function remove_17(){
  throw toJs(new jl.IllegalStateException);
}
;
cggl.Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 163, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$EmptyMap = function $clinit_Collections$EmptyMap(){
  ju.$clinit_Collections$EmptyMap = emptyMethod;
  ju.$clinit_AbstractMap();
}
;
ju.Collections$EmptyMap = function Collections$EmptyMap(){
  ju.$clinit_Collections$EmptyMap();
  ju.AbstractMap.call(this);
  this.$init_150();
}
;
defineClass(165, 72, {3:1, 1:1, 37:1}, ju.Collections$EmptyMap);
_.$init_150 = function $init_150(){
}
;
_.containsKey = function containsKey_1(key){
  return false;
}
;
_.containsValue = function containsValue_2(value_0){
  return false;
}
;
_.entrySet = function entrySet_0(){
  return ju.$clinit_Collections() , ju.EMPTY_SET;
}
;
_.get = function get_8(key){
  return null;
}
;
_.keySet = function keySet_0(){
  return ju.$clinit_Collections() , ju.EMPTY_SET;
}
;
_.size = function size_10(){
  return 0;
}
;
_.values = function values_8(){
  return ju.$clinit_Collections() , ju.EMPTY_LIST;
}
;
cggl.Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 165, cggl.Ljava_util_AbstractMap_2_classLit);
ju.$clinit_Collections$EmptySet = function $clinit_Collections$EmptySet(){
  ju.$clinit_Collections$EmptySet = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.Collections$EmptySet = function Collections$EmptySet(){
  ju.$clinit_Collections$EmptySet();
  ju.AbstractSet.call(this);
  this.$init_151();
}
;
defineClass(164, 62, {3:1, 1:1, 12:1, 24:1}, ju.Collections$EmptySet);
_.$init_151 = function $init_151(){
}
;
_.contains = function contains_5(object){
  return false;
}
;
_.iterator = function iterator_6(){
  return ju.emptyIterator();
}
;
_.size = function size_11(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 164, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_Collections$LifoQueue = function $clinit_Collections$LifoQueue(){
  ju.$clinit_Collections$LifoQueue = emptyMethod;
}
;
defineClass(340, 339, {3:1, 1:1, 12:1});
cggl.Ljava_util_Collections$LifoQueue_2_classLit = createForClass('java.util', 'Collections/LifoQueue', 340, cggl.Ljava_util_AbstractQueue_2_classLit);
ju.$clinit_Collections$RandomHolder = function $clinit_Collections$RandomHolder(){
  ju.$clinit_Collections$RandomHolder = emptyMethod;
}
;
defineClass(351, 1, {1:1});
cggl.Ljava_util_Collections$RandomHolder_2_classLit = createForClass('java.util', 'Collections/RandomHolder', 351, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$SetFromMap = function $clinit_Collections$SetFromMap(){
  ju.$clinit_Collections$SetFromMap = emptyMethod;
}
;
defineClass(341, 62, {3:1, 1:1, 12:1, 24:1});
cggl.Ljava_util_Collections$SetFromMap_2_classLit = createForClass('java.util', 'Collections/SetFromMap', 341, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_Collections$SingletonList = function $clinit_Collections$SingletonList(){
  ju.$clinit_Collections$SingletonList = emptyMethod;
}
;
defineClass(342, 71, {3:1, 1:1, 12:1, 26:1});
cggl.Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 342, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Collections$UnmodifiableCollection = function $clinit_Collections$UnmodifiableCollection(){
  ju.$clinit_Collections$UnmodifiableCollection = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
}
;
ju.Collections$UnmodifiableCollection = function Collections$UnmodifiableCollection(coll){
  ju.$clinit_Collections$UnmodifiableCollection();
  Object_0.call(this);
  this.$init_152();
  this.coll = coll;
}
;
defineClass(166, 1, {1:1, 12:1});
_.$init_152 = function $init_152(){
}
;
_.forEach = function forEach_1(action){
  jl.$forEach(this, action);
}
;
_.spliterator_0 = function spliterator_3(){
  return ju.$spliterator_0(this);
}
;
_.stream = function stream_0(){
  return ju.$stream(this);
}
;
_.add = function add_9(o){
  throw toJs(new jl.UnsupportedOperationException);
}
;
_.addAll = function addAll_3(c){
  throw toJs(new jl.UnsupportedOperationException);
}
;
_.clear = function clear_9(){
  throw toJs(new jl.UnsupportedOperationException);
}
;
_.contains = function contains_6(o){
  return this.coll.contains(o);
}
;
_.containsAll = function containsAll_0(c){
  return this.coll.containsAll(c);
}
;
_.isEmpty = function isEmpty_5(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_7(){
  return new ju.Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove = function remove_18(o){
  throw toJs(new jl.UnsupportedOperationException);
}
;
_.removeAll = function removeAll_1(c){
  throw toJs(new jl.UnsupportedOperationException);
}
;
_.retainAll = function retainAll_0(c){
  throw toJs(new jl.UnsupportedOperationException);
}
;
_.size = function size_12(){
  return this.coll.size();
}
;
_.toArray = function toArray_3(){
  return this.coll.toArray();
}
;
_.toArray_0 = function toArray_4(a){
  return this.coll.toArray_0(a);
}
;
_.toString_0 = function toString_32(){
  return toString_11(this.coll);
}
;
cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 166, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableCollectionIterator = function $clinit_Collections$UnmodifiableCollectionIterator(){
  ju.$clinit_Collections$UnmodifiableCollectionIterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.Collections$UnmodifiableCollectionIterator = function Collections$UnmodifiableCollectionIterator(it){
  ju.$clinit_Collections$UnmodifiableCollectionIterator();
  Object_0.call(this);
  this.$init_153();
  this.it = it;
}
;
defineClass(168, 1, {1:1, 16:1}, ju.Collections$UnmodifiableCollectionIterator);
_.$init_153 = function $init_153(){
}
;
_.forEachRemaining_0 = function forEachRemaining_8(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_6(){
  return this.it.hasNext_0();
}
;
_.next_2 = function next_8(){
  return this.it.next_2();
}
;
_.remove_1 = function remove_19(){
  throw toJs(new jl.UnsupportedOperationException);
}
;
cggl.Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 168, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableList = function $clinit_Collections$UnmodifiableList(){
  ju.$clinit_Collections$UnmodifiableList = emptyMethod;
}
;
defineClass(343, 166, {1:1, 12:1, 26:1});
cggl.Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 343, cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit);
ju.$clinit_Collections$UnmodifiableListIterator = function $clinit_Collections$UnmodifiableListIterator(){
  ju.$clinit_Collections$UnmodifiableListIterator = emptyMethod;
}
;
defineClass(350, 168, {1:1, 16:1});
cggl.Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 350, cggl.Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit);
ju.$clinit_Collections$UnmodifiableMap = function $clinit_Collections$UnmodifiableMap(){
  ju.$clinit_Collections$UnmodifiableMap = emptyMethod;
}
;
defineClass(344, 1, {1:1, 37:1});
cggl.Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 344, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableSet = function $clinit_Collections$UnmodifiableSet(){
  ju.$clinit_Collections$UnmodifiableSet = emptyMethod;
  ju.$clinit_Collections$UnmodifiableCollection();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_Set();
}
;
ju.Collections$UnmodifiableSet = function Collections$UnmodifiableSet(set_0){
  ju.$clinit_Collections$UnmodifiableSet();
  ju.Collections$UnmodifiableCollection.call(this, set_0);
  this.$init_154();
}
;
defineClass(167, 166, {1:1, 12:1, 24:1}, ju.Collections$UnmodifiableSet);
_.$init_154 = function $init_154(){
}
;
_.spliterator_0 = function spliterator_4(){
  return ju.$spliterator_2(this);
}
;
_.equals_0 = function equals_16(o){
  return jl.equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_26(){
  return jl.hashCode__I__devirtual$(this.coll);
}
;
cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 167, cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = emptyMethod;
}
;
defineClass(345, 167, {1:1, 12:1, 24:1});
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 345, cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = emptyMethod;
}
;
defineClass(352, 1, {1:1, 16:1});
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 352, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = emptyMethod;
}
;
defineClass(346, 1, {1:1, 14:1});
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 346, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableRandomAccessList = function $clinit_Collections$UnmodifiableRandomAccessList(){
  ju.$clinit_Collections$UnmodifiableRandomAccessList = emptyMethod;
}
;
defineClass(347, 343, {1:1, 12:1, 26:1});
cggl.Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 347, cggl.Ljava_util_Collections$UnmodifiableList_2_classLit);
ju.$clinit_SortedMap = function $clinit_SortedMap(){
  ju.$clinit_SortedMap = emptyMethod;
}
;
cggl.Ljava_util_SortedMap_2_classLit = createForInterface('java.util', 'SortedMap');
ju.$clinit_Collections$UnmodifiableSortedMap = function $clinit_Collections$UnmodifiableSortedMap(){
  ju.$clinit_Collections$UnmodifiableSortedMap = emptyMethod;
}
;
defineClass(348, 344, {1:1, 37:1});
cggl.Ljava_util_Collections$UnmodifiableSortedMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSortedMap', 348, cggl.Ljava_util_Collections$UnmodifiableMap_2_classLit);
ju.$clinit_SortedSet = function $clinit_SortedSet(){
  ju.$clinit_SortedSet = emptyMethod;
}
;
cggl.Ljava_util_SortedSet_2_classLit = createForInterface('java.util', 'SortedSet');
ju.$clinit_Collections$UnmodifiableSortedSet = function $clinit_Collections$UnmodifiableSortedSet(){
  ju.$clinit_Collections$UnmodifiableSortedSet = emptyMethod;
}
;
defineClass(349, 167, {1:1, 12:1, 24:1});
cggl.Ljava_util_Collections$UnmodifiableSortedSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSortedSet', 349, cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit);
ju.$clinit_Comparator$lambda$0$Type = function $clinit_Comparator$lambda$0$Type(){
  ju.$clinit_Comparator$lambda$0$Type = emptyMethod;
}
;
defineClass(278, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$0$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$0$Type', 278, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$1$Type = function $clinit_Comparator$lambda$1$Type(){
  ju.$clinit_Comparator$lambda$1$Type = emptyMethod;
}
;
defineClass(279, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$1$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$1$Type', 279, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$2$Type = function $clinit_Comparator$lambda$2$Type(){
  ju.$clinit_Comparator$lambda$2$Type = emptyMethod;
}
;
defineClass(280, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$2$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$2$Type', 280, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$3$Type = function $clinit_Comparator$lambda$3$Type(){
  ju.$clinit_Comparator$lambda$3$Type = emptyMethod;
}
;
defineClass(281, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$3$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$3$Type', 281, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$4$Type = function $clinit_Comparator$lambda$4$Type(){
  ju.$clinit_Comparator$lambda$4$Type = emptyMethod;
}
;
defineClass(282, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$4$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$4$Type', 282, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_ConcurrentModificationDetector = function $clinit_ConcurrentModificationDetector(){
  ju.$clinit_ConcurrentModificationDetector = emptyMethod;
  jl.$clinit_Object();
  ju.API_CHECK = ji2.isApiChecked();
}
;
ju.checkStructuralChange = function checkStructuralChange(host, iterator){
  ju.$clinit_ConcurrentModificationDetector();
  if (!ju.API_CHECK) {
    return;
  }
  if (castToUnknownNative(iterator).$modCount != castToUnknownNative(host).$modCount) {
    throw toJs(new ju.ConcurrentModificationException);
  }
}
;
ju.recordLastKnownStructure = function recordLastKnownStructure(host, iterator){
  ju.$clinit_ConcurrentModificationDetector();
  if (!ju.API_CHECK) {
    return;
  }
  castToUnknownNative(iterator).$modCount = castToUnknownNative(host).$modCount;
}
;
ju.structureChanged = function structureChanged(host){
  ju.$clinit_ConcurrentModificationDetector();
  var modCount, modCountable;
  if (!ju.API_CHECK) {
    return;
  }
  modCountable = castToUnknownNative(host);
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}
;
defineClass(400, 1, {1:1});
ju.API_CHECK = false;
cggl.Ljava_util_ConcurrentModificationDetector_2_classLit = createForClass('java.util', 'ConcurrentModificationDetector', 400, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_ConcurrentModificationDetector$ModCountable = function $clinit_ConcurrentModificationDetector$ModCountable(){
  ju.$clinit_ConcurrentModificationDetector$ModCountable = emptyMethod;
}
;
ju.$clinit_ConcurrentModificationException = function $clinit_ConcurrentModificationException(){
  ju.$clinit_ConcurrentModificationException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
ju.ConcurrentModificationException = function ConcurrentModificationException(){
  ju.$clinit_ConcurrentModificationException();
  jl.RuntimeException.call(this);
  this.$init_155();
}
;
defineClass(230, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, ju.ConcurrentModificationException);
_.$init_155 = function $init_155(){
}
;
cggl.Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 230, cggl.Ljava_lang_RuntimeException_2_classLit);
ju.$clinit_HashSet = function $clinit_HashSet(){
  ju.$clinit_HashSet = emptyMethod;
  ju.$clinit_AbstractSet();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_Set();
}
;
ju.HashSet = function HashSet(initialCapacity){
  ju.$clinit_HashSet();
  ju.AbstractSet.call(this);
  this.$init_156();
  this.map_0 = new ju.HashMap_0(initialCapacity);
}
;
defineClass(179, 62, {3:1, 1:1, 12:1, 24:1}, ju.HashSet);
_.$init_156 = function $init_156(){
}
;
_.add = function add_10(o){
  var old;
  old = this.map_0.put(o, this);
  return jsEquals(old, null);
}
;
_.clear = function clear_10(){
  this.map_0.clear();
}
;
_.contains = function contains_7(o){
  return this.map_0.containsKey(o);
}
;
_.isEmpty = function isEmpty_6(){
  return this.map_0.isEmpty();
}
;
_.iterator = function iterator_8(){
  return this.map_0.keySet().iterator();
}
;
_.remove = function remove_20(o){
  return jsNotEquals(this.map_0.remove(o), null);
}
;
_.size = function size_13(){
  return this.map_0.size();
}
;
cggl.Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 179, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_InternalHashCodeMap = function $clinit_InternalHashCodeMap(){
  ju.$clinit_InternalHashCodeMap = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
}
;
ju.InternalHashCodeMap = function InternalHashCodeMap(host){
  ju.$clinit_InternalHashCodeMap();
  Object_0.call(this);
  this.$init_157();
  this.host_0 = host;
}
;
defineClass(217, 1, {1:1}, ju.InternalHashCodeMap);
_.$init_157 = function $init_157(){
  this.backingMap = ju.newJsMap();
}
;
_.forEach = function forEach_2(action){
  jl.$forEach(this, action);
}
;
_.spliterator_0 = function spliterator_5(){
  return jl.$spliterator(this);
}
;
_.findEntryInChain = function findEntryInChain(key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this.host_0.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}
;
_.getChainOrEmpty = function getChainOrEmpty(hashCode){
  var chain;
  chain = ji2.uncheckedCast(this.backingMap.get(hashCode));
  return jsEquals(chain, null)?this.newEntryChain():chain;
}
;
_.getEntry = function getEntry(key){
  return this.findEntryInChain(key, this.getChainOrEmpty(this.hash_0(key)));
}
;
_.hash_0 = function hash(key){
  return jsEquals(key, null)?0:this.host_0.getHashCode(key);
}
;
_.iterator = function iterator_9(){
  return new ju.InternalHashCodeMap$1(this);
}
;
_.newEntryChain = function newEntryChain(){
  ju.$clinit_InternalHashCodeMap();
  return ji2.uncheckedCast(new Array);
}
;
_.put_0 = function put_1(key, value_0){
  var chain, entry, hashCode;
  hashCode = this.hash_0(key);
  chain = this.getChainOrEmpty(hashCode);
  if (chain.length == 0) {
    this.backingMap.set(hashCode, chain);
  }
   else {
    entry = this.findEntryInChain(key, chain);
    if (isNotNull(entry)) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new ju.AbstractMap$SimpleEntry(key, value_0));
  this.size_0++;
  ju.structureChanged(this.host_0);
  return null;
}
;
_.remove_2 = function remove_21(key){
  var chain, entry, hashCode, i;
  hashCode = this.hash_0(key);
  chain = this.getChainOrEmpty(hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this.host_0.equals_1(key, entry.getKey())) {
      if (chain.length == 1) {
        ji2.setLength(chain, 0);
        ju.$delete(this.backingMap, hashCode);
      }
       else {
        ji2.removeFrom(chain, i, 1);
      }
      this.size_0--;
      ju.structureChanged(this.host_0);
      return entry.getValue();
    }
  }
  return null;
}
;
_.size_1 = function size_14(){
  return this.size_0;
}
;
_.size_0 = 0;
cggl.Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 217, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalHashCodeMap$1 = function $clinit_InternalHashCodeMap$1(){
  ju.$clinit_InternalHashCodeMap$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.InternalHashCodeMap$1 = function InternalHashCodeMap$1(this$0){
  ju.$clinit_InternalHashCodeMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_158();
}
;
defineClass(218, 1, {1:1, 16:1}, ju.InternalHashCodeMap$1);
_.$init_158 = function $init_158(){
  this.chains = this.this$01.backingMap.entries();
  this.itemIndex = 0;
  this.chain = this.this$01.newEntryChain();
  this.lastEntry = null;
}
;
_.forEachRemaining_0 = function forEachRemaining_9(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.next_2 = function next_9(){
  return this.next_3();
}
;
_.hasNext_0 = function hasNext_7(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = ji2.uncheckedCast(ju.$getValue(current));
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.next_3 = function next_10(){
  this.lastEntry = this.chain[this.itemIndex++];
  return this.lastEntry;
}
;
_.remove_1 = function remove_22(){
  this.this$01.remove_2(this.lastEntry.getKey());
  if (this.itemIndex != 0) {
    this.itemIndex--;
  }
}
;
_.itemIndex = 0;
cggl.Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 218, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsMap = function $clinit_InternalJsMap(){
  ju.$clinit_InternalJsMap = emptyMethod;
}
;
ju.$delete = function $delete(this$static, key){
  ju.$clinit_InternalJsMap();
  var fn;
  fn = ji2.getProperty_1(this$static, 'delete');
  fn.call(this$static, key);
}
;
ju.$delete_0 = function $delete_0(this$static, key){
  ju.$clinit_InternalJsMap();
  var fn;
  fn = ji2.getProperty_1(this$static, 'delete');
  fn.call(this$static, key);
}
;
ju.$clinit_InternalJsMap$DeleteFunction = function $clinit_InternalJsMap$DeleteFunction(){
  ju.$clinit_InternalJsMap$DeleteFunction = emptyMethod;
}
;
ju.$clinit_InternalJsMap$Iterator = function $clinit_InternalJsMap$Iterator(){
  ju.$clinit_InternalJsMap$Iterator = emptyMethod;
}
;
ju.$clinit_InternalJsMap$IteratorEntry = function $clinit_InternalJsMap$IteratorEntry(){
  ju.$clinit_InternalJsMap$IteratorEntry = emptyMethod;
}
;
ju.$getKey = function $getKey(this$static){
  ju.$clinit_InternalJsMap$IteratorEntry();
  return ji2.uncheckedCast(this$static.value[0]);
}
;
ju.$getValue = function $getValue(this$static){
  ju.$clinit_InternalJsMap$IteratorEntry();
  return ji2.uncheckedCast(this$static.value[1]);
}
;
ju.$clinit_InternalJsMapFactory = function $clinit_InternalJsMapFactory(){
  ju.$clinit_InternalJsMapFactory = emptyMethod;
  jl.$clinit_Object();
  ju.jsMapCtor = ju.getJsMapConstructor();
}
;
ju.canHandleObjectCreateAndProto = function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}
;
ju.getJsMapConstructor = function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && (Map.prototype.entries && isCorrectIterationProtocol())) {
    return Map;
  }
   else {
    return ju.getJsMapPolyFill();
  }
}
;
ju.getJsMapPolyFill = function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!ju.canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        if (key.charCodeAt(0) == 58) {
          result.push(key.substring(1));
        }
      }
      return result;
    }
    ;
  }
  return Stringmap;
}
;
ju.newJsMap = function newJsMap(){
  ju.$clinit_InternalJsMapFactory();
  return new ju.jsMapCtor;
}
;
defineClass(490, 1, {1:1});
cggl.Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 490, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalStringMap = function $clinit_InternalStringMap(){
  ju.$clinit_InternalStringMap = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
}
;
ju.InternalStringMap = function InternalStringMap(host){
  ju.$clinit_InternalStringMap();
  Object_0.call(this);
  this.$init_159();
  this.host_0 = host;
}
;
ju.toNullIfUndefined = function toNullIfUndefined(value_0){
  return ji2.isUndefined(value_0)?null:value_0;
}
;
defineClass(213, 1, {1:1}, ju.InternalStringMap);
_.$init_159 = function $init_159(){
  this.backingMap = ju.newJsMap();
}
;
_.forEach = function forEach_3(action){
  jl.$forEach(this, action);
}
;
_.spliterator_0 = function spliterator_6(){
  return jl.$spliterator(this);
}
;
_.contains_0 = function contains_8(key){
  return !ji2.isUndefined(this.backingMap.get(key));
}
;
_.get_1 = function get_9(key){
  return this.backingMap.get(key);
}
;
_.iterator = function iterator_10(){
  return new ju.InternalStringMap$1(this);
}
;
_.newMapEntry = function newMapEntry(entry, lastValueMod){
  ju.$clinit_InternalStringMap();
  return new ju.InternalStringMap$2(this, entry, lastValueMod);
}
;
_.put_1 = function put_2(key, value_0){
  var oldValue;
  oldValue = this.backingMap.get(key);
  this.backingMap.set(key, ju.toNullIfUndefined(value_0));
  if (ji2.isUndefined(oldValue)) {
    this.size_0++;
    ju.structureChanged(this.host_0);
  }
   else {
    this.valueMod++;
  }
  return oldValue;
}
;
_.remove_3 = function remove_23(key){
  var value_0;
  value_0 = this.backingMap.get(key);
  if (!ji2.isUndefined(value_0)) {
    ju.$delete_0(this.backingMap, key);
    this.size_0--;
    ju.structureChanged(this.host_0);
  }
   else {
    this.valueMod++;
  }
  return value_0;
}
;
_.size_1 = function size_15(){
  return this.size_0;
}
;
_.size_0 = 0;
_.valueMod = 0;
cggl.Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 213, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalStringMap$1 = function $clinit_InternalStringMap$1(){
  ju.$clinit_InternalStringMap$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.InternalStringMap$1 = function InternalStringMap$1(this$0){
  ju.$clinit_InternalStringMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_160();
}
;
defineClass(214, 1, {1:1, 16:1}, ju.InternalStringMap$1);
_.$init_160 = function $init_160(){
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}
;
_.forEachRemaining_0 = function forEachRemaining_10(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.next_2 = function next_11(){
  return this.next_3();
}
;
_.hasNext_0 = function hasNext_8(){
  return !this.current.done;
}
;
_.next_3 = function next_12(){
  this.last = this.current;
  this.current = this.entries_0.next();
  return this.this$01.newMapEntry(this.last, this.this$01.valueMod);
}
;
_.remove_1 = function remove_24(){
  this.this$01.remove_3(ju.$getKey(this.last));
}
;
cggl.Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 214, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalStringMap$2 = function $clinit_InternalStringMap$2(){
  ju.$clinit_InternalStringMap$2 = emptyMethod;
  ju.$clinit_AbstractMapEntry();
}
;
ju.InternalStringMap$2 = function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  ju.$clinit_InternalStringMap$2();
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
  ju.AbstractMapEntry.call(this);
  this.$init_161();
}
;
defineClass(216, 215, {1:1, 14:1}, ju.InternalStringMap$2);
_.$init_161 = function $init_161(){
}
;
_.getKey = function getKey_0(){
  return ju.$getKey(this.val$entry2);
}
;
_.getValue = function getValue_0(){
  if (this.this$01.valueMod != this.val$lastValueMod3) {
    return this.this$01.get_1(ju.$getKey(this.val$entry2));
  }
  return ju.$getValue(this.val$entry2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put_1(ju.$getKey(this.val$entry2), object);
}
;
_.val$lastValueMod3 = 0;
cggl.Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 216, cggl.Ljava_util_AbstractMapEntry_2_classLit);
ju.$clinit_Locale = function $clinit_Locale(){
  ju.$clinit_Locale = emptyMethod;
  jl.$clinit_Object();
  ju.ROOT = new ju.Locale$1;
  ju.ENGLISH = new ju.Locale$2;
  ju.US = new ju.Locale$3;
  ju.defaultLocale = new ju.Locale$4;
}
;
ju.Locale = function Locale(){
  ju.$clinit_Locale();
  Object_0.call(this);
  this.$init_162();
}
;
ju.getDefault = function getDefault(){
  ju.$clinit_Locale();
  return ju.defaultLocale;
}
;
defineClass(56, 1, {1:1});
_.$init_162 = function $init_162(){
}
;
cggl.Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 56, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Locale$1 = function $clinit_Locale$1(){
  ju.$clinit_Locale$1 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$1 = function Locale$1(){
  ju.$clinit_Locale$1();
  ju.Locale.call(this);
  this.$init_163();
}
;
defineClass(120, 56, {1:1}, ju.Locale$1);
_.$init_163 = function $init_163(){
}
;
_.toString_0 = function toString_33(){
  return '';
}
;
cggl.Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 120, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Locale$2 = function $clinit_Locale$2(){
  ju.$clinit_Locale$2 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$2 = function Locale$2(){
  ju.$clinit_Locale$2();
  ju.Locale.call(this);
  this.$init_164();
}
;
defineClass(121, 56, {1:1}, ju.Locale$2);
_.$init_164 = function $init_164(){
}
;
_.toString_0 = function toString_34(){
  return 'en';
}
;
cggl.Ljava_util_Locale$2_2_classLit = createForClass('java.util', 'Locale/2', 121, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Locale$3 = function $clinit_Locale$3(){
  ju.$clinit_Locale$3 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$3 = function Locale$3(){
  ju.$clinit_Locale$3();
  ju.Locale.call(this);
  this.$init_165();
}
;
defineClass(122, 56, {1:1}, ju.Locale$3);
_.$init_165 = function $init_165(){
}
;
_.toString_0 = function toString_35(){
  return 'en_US';
}
;
cggl.Ljava_util_Locale$3_2_classLit = createForClass('java.util', 'Locale/3', 122, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Locale$4 = function $clinit_Locale$4(){
  ju.$clinit_Locale$4 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$4 = function Locale$4(){
  ju.$clinit_Locale$4();
  ju.Locale.call(this);
  this.$init_166();
}
;
defineClass(123, 56, {1:1}, ju.Locale$4);
_.$init_166 = function $init_166(){
}
;
_.toString_0 = function toString_36(){
  return 'unknown';
}
;
cggl.Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 123, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Map$Entry$lambda$0$Type = function $clinit_Map$Entry$lambda$0$Type(){
  ju.$clinit_Map$Entry$lambda$0$Type = emptyMethod;
}
;
defineClass(355, 1, {3:1, 1:1});
cggl.Ljava_util_Map$Entry$lambda$0$Type_2_classLit = createForClass('java.util', 'Map/Entry/lambda$0$Type', 355, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Map$Entry$lambda$1$Type = function $clinit_Map$Entry$lambda$1$Type(){
  ju.$clinit_Map$Entry$lambda$1$Type = emptyMethod;
}
;
defineClass(356, 1, {3:1, 1:1});
cggl.Ljava_util_Map$Entry$lambda$1$Type_2_classLit = createForClass('java.util', 'Map/Entry/lambda$1$Type', 356, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_NoSuchElementException = function $clinit_NoSuchElementException(){
  ju.$clinit_NoSuchElementException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
ju.NoSuchElementException = function NoSuchElementException(){
  ju.$clinit_NoSuchElementException();
  jl.RuntimeException.call(this);
  this.$init_167();
}
;
defineClass(101, 8, {3:1, 5:1, 1:1, 8:1, 6:1}, ju.NoSuchElementException);
_.$init_167 = function $init_167(){
}
;
cggl.Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 101, cggl.Ljava_lang_RuntimeException_2_classLit);
ju.$clinit_Objects = function $clinit_Objects(){
  ju.$clinit_Objects = emptyMethod;
  jl.$clinit_Object();
}
;
ju.equals_17 = function equals_17(a, b){
  ju.$clinit_Objects();
  return maskUndefined(a) === maskUndefined(b) || jsNotEquals(a, null) && jl.equals_Ljava_lang_Object__Z__devirtual$(a, b);
}
;
ju.equals_18 = function equals_18(a, b){
  ju.$clinit_Objects();
  return jsEquals(a, b);
}
;
ju.hash_0 = function hash_0(values){
  ju.$clinit_Objects();
  return ju.hashCode_23(values);
}
;
ju.hashCode_27 = function hashCode_27(o){
  ju.$clinit_Objects();
  return jsNotEquals(o, null)?jl.hashCode__I__devirtual$(o):0;
}
;
defineClass(397, 1, {1:1});
cggl.Ljava_util_Objects_2_classLit = createForClass('java.util', 'Objects', 397, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_PrimitiveIterator$OfDouble = function $clinit_PrimitiveIterator$OfDouble(){
  ju.$clinit_PrimitiveIterator$OfDouble = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator$OfDouble_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfDouble');
juf.$clinit_DoubleConsumer = function $clinit_DoubleConsumer(){
  juf.$clinit_DoubleConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_DoubleConsumer_2_classLit = createForInterface('java.util.function', 'DoubleConsumer');
ju.$clinit_PrimitiveIterator$OfDouble$0methodref$accept$Type = function $clinit_PrimitiveIterator$OfDouble$0methodref$accept$Type(){
  ju.$clinit_PrimitiveIterator$OfDouble$0methodref$accept$Type = emptyMethod;
}
;
defineClass(243, 1, {1:1});
cggl.Ljava_util_PrimitiveIterator$OfDouble$0methodref$accept$Type_2_classLit = createForClass('java.util', 'PrimitiveIterator/OfDouble/0methodref$accept$Type', 243, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntConsumer = function $clinit_IntConsumer(){
  juf.$clinit_IntConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_IntConsumer_2_classLit = createForInterface('java.util.function', 'IntConsumer');
ju.$clinit_PrimitiveIterator$OfInt$1methodref$accept$Type = function $clinit_PrimitiveIterator$OfInt$1methodref$accept$Type(){
  ju.$clinit_PrimitiveIterator$OfInt$1methodref$accept$Type = emptyMethod;
}
;
ju.PrimitiveIterator$OfInt$1methodref$accept$Type = function PrimitiveIterator$OfInt$1methodref$accept$Type($$outer_0){
  ju.$clinit_PrimitiveIterator$OfInt$1methodref$accept$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(109, 1, {1:1, 9:1}, ju.PrimitiveIterator$OfInt$1methodref$accept$Type);
_.accept = function accept(arg0){
  this.$$outer_0.accept_0(jl.valueOf_14(arg0));
}
;
cggl.Ljava_util_PrimitiveIterator$OfInt$1methodref$accept$Type_2_classLit = createForClass('java.util', 'PrimitiveIterator/OfInt/1methodref$accept$Type', 109, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_PrimitiveIterator$OfLong = function $clinit_PrimitiveIterator$OfLong(){
  ju.$clinit_PrimitiveIterator$OfLong = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator$OfLong_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfLong');
juf.$clinit_LongConsumer = function $clinit_LongConsumer(){
  juf.$clinit_LongConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_LongConsumer_2_classLit = createForInterface('java.util.function', 'LongConsumer');
ju.$clinit_PrimitiveIterator$OfLong$2methodref$accept$Type = function $clinit_PrimitiveIterator$OfLong$2methodref$accept$Type(){
  ju.$clinit_PrimitiveIterator$OfLong$2methodref$accept$Type = emptyMethod;
}
;
defineClass(244, 1, {1:1});
cggl.Ljava_util_PrimitiveIterator$OfLong$2methodref$accept$Type_2_classLit = createForClass('java.util', 'PrimitiveIterator/OfLong/2methodref$accept$Type', 244, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator = function $clinit_Spliterator(){
  ju.$clinit_Spliterator = emptyMethod;
}
;
ju.$forEachRemaining_3 = function $forEachRemaining_3(this$static, consumer){
  while (this$static.tryAdvance(consumer)) {
  }
}
;
ju.CONCURRENT = 4096;
ju.DISTINCT = 1;
ju.IMMUTABLE = 1024;
ju.NONNULL = 256;
ju.ORDERED = 16;
ju.SIZED = 64;
ju.SORTED = 4;
ju.SUBSIZED = 16384;
cggl.Ljava_util_Spliterator_2_classLit = createForInterface('java.util', 'Spliterator');
ju.$clinit_Spliterators$IteratorSpliterator = function $clinit_Spliterators$IteratorSpliterator(){
  ju.$clinit_Spliterators$IteratorSpliterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Spliterator();
}
;
ju.Spliterators$IteratorSpliterator = function Spliterators$IteratorSpliterator(collection, characteristics){
  ju.$clinit_Spliterators$IteratorSpliterator();
  Object_0.call(this);
  this.$init_168();
  this.collection = castTo(ji2.checkNotNull_0(collection), 12);
  this.characteristics = ju.sizeKnownIteratorSpliteratorCharacteristics(characteristics);
}
;
ju.Spliterators$IteratorSpliterator_0 = function Spliterators$IteratorSpliterator_0(it, characteristics){
  ju.$clinit_Spliterators$IteratorSpliterator();
  Object_0.call(this);
  this.$init_168();
  this.it = castTo(ji2.checkNotNull_0(it), 16);
  this.characteristics = ju.sizeUnknownSpliteratorCharacteristics(characteristics);
  this.estimateSize = {l:4194303, m:4194303, h:524287};
}
;
defineClass(80, 1, {1:1, 7:1}, ju.Spliterators$IteratorSpliterator, ju.Spliterators$IteratorSpliterator_0);
_.$init_168 = function $init_168(){
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  this.initIterator();
  return this.estimateSize;
}
;
_.forEachRemaining_0 = function forEachRemaining_11(consumer){
  this.initIterator();
  this.it.forEachRemaining_0(consumer);
}
;
_.initIterator = function initIterator(){
  if (isNull(this.it)) {
    this.it = this.collection.iterator();
    this.estimateSize = fromInt_0(this.collection.size());
  }
}
;
_.tryAdvance = function tryAdvance(consumer){
  ji2.checkNotNull_0(consumer);
  this.initIterator();
  if (this.it.hasNext_0()) {
    consumer.accept_0(this.it.next_2());
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
cggl.Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 80, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_SortedSet$1 = function $clinit_SortedSet$1(){
  ju.$clinit_SortedSet$1 = emptyMethod;
}
;
defineClass(357, 80, {1:1, 7:1});
cggl.Ljava_util_SortedSet$1_2_classLit = createForClass('java.util', 'SortedSet/1', 357, cggl.Ljava_util_Spliterators$IteratorSpliterator_2_classLit);
ju.$clinit_Spliterator$OfPrimitive = function $clinit_Spliterator$OfPrimitive(){
  ju.$clinit_Spliterator$OfPrimitive = emptyMethod;
}
;
ju.$forEachRemaining_5 = function $forEachRemaining_5(this$static, consumer){
  while (this$static.tryAdvance_0(consumer)) {
  }
}
;
cggl.Ljava_util_Spliterator$OfPrimitive_2_classLit = createForInterface('java.util', 'Spliterator/OfPrimitive');
ju.$clinit_Spliterator$OfDouble = function $clinit_Spliterator$OfDouble(){
  ju.$clinit_Spliterator$OfDouble = emptyMethod;
}
;
cggl.Ljava_util_Spliterator$OfDouble_2_classLit = createForInterface('java.util', 'Spliterator/OfDouble');
ju.$clinit_Spliterator$OfDouble$0methodref$accept$Type = function $clinit_Spliterator$OfDouble$0methodref$accept$Type(){
  ju.$clinit_Spliterator$OfDouble$0methodref$accept$Type = emptyMethod;
}
;
defineClass(273, 1, {1:1});
cggl.Ljava_util_Spliterator$OfDouble$0methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfDouble/0methodref$accept$Type', 273, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfDouble$1methodref$accept$Type = function $clinit_Spliterator$OfDouble$1methodref$accept$Type(){
  ju.$clinit_Spliterator$OfDouble$1methodref$accept$Type = emptyMethod;
}
;
defineClass(274, 1, {1:1});
cggl.Ljava_util_Spliterator$OfDouble$1methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfDouble/1methodref$accept$Type', 274, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfInt = function $clinit_Spliterator$OfInt(){
  ju.$clinit_Spliterator$OfInt = emptyMethod;
}
;
ju.$forEachRemaining_4 = function $forEachRemaining_4(this$static, consumer){
  if (instanceOf(consumer, 9)) {
    this$static.forEachRemaining(castTo(consumer, 9));
  }
   else {
    this$static.forEachRemaining(castTo(new ju.Spliterator$OfInt$3methodref$accept$Type(consumer), 9));
  }
}
;
ju.$tryAdvance = function $tryAdvance(this$static, consumer){
  if (instanceOf(consumer, 9)) {
    return this$static.tryAdvance_0(castTo(consumer, 9));
  }
   else {
    return this$static.tryAdvance_0(castTo(new ju.Spliterator$OfInt$2methodref$accept$Type(consumer), 9));
  }
}
;
cggl.Ljava_util_Spliterator$OfInt_2_classLit = createForInterface('java.util', 'Spliterator/OfInt');
ju.$clinit_Spliterator$OfInt$2methodref$accept$Type = function $clinit_Spliterator$OfInt$2methodref$accept$Type(){
  ju.$clinit_Spliterator$OfInt$2methodref$accept$Type = emptyMethod;
}
;
ju.Spliterator$OfInt$2methodref$accept$Type = function Spliterator$OfInt$2methodref$accept$Type($$outer_0){
  ju.$clinit_Spliterator$OfInt$2methodref$accept$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(115, 1, {1:1, 9:1}, ju.Spliterator$OfInt$2methodref$accept$Type);
_.accept = function accept_0(arg0){
  this.$$outer_0.accept_0(jl.valueOf_14(arg0));
}
;
cggl.Ljava_util_Spliterator$OfInt$2methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/2methodref$accept$Type', 115, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfInt$3methodref$accept$Type = function $clinit_Spliterator$OfInt$3methodref$accept$Type(){
  ju.$clinit_Spliterator$OfInt$3methodref$accept$Type = emptyMethod;
}
;
ju.Spliterator$OfInt$3methodref$accept$Type = function Spliterator$OfInt$3methodref$accept$Type($$outer_0){
  ju.$clinit_Spliterator$OfInt$3methodref$accept$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(116, 1, {1:1, 9:1}, ju.Spliterator$OfInt$3methodref$accept$Type);
_.accept = function accept_1(arg0){
  this.$$outer_0.accept_0(jl.valueOf_14(arg0));
}
;
cggl.Ljava_util_Spliterator$OfInt$3methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/3methodref$accept$Type', 116, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfLong = function $clinit_Spliterator$OfLong(){
  ju.$clinit_Spliterator$OfLong = emptyMethod;
}
;
cggl.Ljava_util_Spliterator$OfLong_2_classLit = createForInterface('java.util', 'Spliterator/OfLong');
ju.$clinit_Spliterator$OfLong$4methodref$accept$Type = function $clinit_Spliterator$OfLong$4methodref$accept$Type(){
  ju.$clinit_Spliterator$OfLong$4methodref$accept$Type = emptyMethod;
}
;
defineClass(275, 1, {1:1});
cggl.Ljava_util_Spliterator$OfLong$4methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfLong/4methodref$accept$Type', 275, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfLong$5methodref$accept$Type = function $clinit_Spliterator$OfLong$5methodref$accept$Type(){
  ju.$clinit_Spliterator$OfLong$5methodref$accept$Type = emptyMethod;
}
;
defineClass(276, 1, {1:1});
cggl.Ljava_util_Spliterator$OfLong$5methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfLong/5methodref$accept$Type', 276, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators = function $clinit_Spliterators(){
  ju.$clinit_Spliterators = emptyMethod;
  jl.$clinit_Object();
}
;
ju.iterator_11 = function iterator_11(spliterator){
  ju.$clinit_Spliterators();
  return new ju.Spliterators$IntConsumerIterator(spliterator);
}
;
ju.iterator_12 = function iterator_12(spliterator){
  ju.$clinit_Spliterators();
  return new ju.Spliterators$ConsumerIterator(spliterator);
}
;
ju.sizeKnownIteratorSpliteratorCharacteristics = function sizeKnownIteratorSpliteratorCharacteristics(characteristics){
  ju.$clinit_Spliterators();
  return (characteristics & 4096) == 0?ju.sizeKnownSpliteratorCharacteristics(characteristics):characteristics;
}
;
ju.sizeKnownSpliteratorCharacteristics = function sizeKnownSpliteratorCharacteristics(characteristics){
  return characteristics | 64 | 16384;
}
;
ju.sizeUnknownSpliteratorCharacteristics = function sizeUnknownSpliteratorCharacteristics(characteristics){
  ju.$clinit_Spliterators();
  return characteristics & ~(64 | 16384);
}
;
ju.spliterator_7 = function spliterator_7(c, characteristics){
  ju.$clinit_Spliterators();
  return new ju.Spliterators$IteratorSpliterator(c, characteristics);
}
;
ju.spliterator_8 = function spliterator_8(it, size_0, characteristics){
  ju.$clinit_Spliterators();
  return new ju.Spliterators$IntIteratorSpliterator(it, size_0, characteristics);
}
;
ju.spliteratorUnknownSize = function spliteratorUnknownSize(it, characteristics){
  ju.$clinit_Spliterators();
  return new ju.Spliterators$IteratorSpliterator_0(it, characteristics);
}
;
defineClass(256, 1, {1:1});
cggl.Ljava_util_Spliterators_2_classLit = createForClass('java.util', 'Spliterators', 256, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$BaseSpliterator = function $clinit_Spliterators$BaseSpliterator(){
  ju.$clinit_Spliterators$BaseSpliterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Spliterator();
}
;
ju.Spliterators$BaseSpliterator = function Spliterators$BaseSpliterator(size_0, characteristics){
  ju.$clinit_Spliterators$BaseSpliterator();
  Object_0.call(this);
  this.$init_169();
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}
;
defineClass(81, 1, {1:1, 7:1});
_.$init_169 = function $init_169(){
}
;
_.forEachRemaining_0 = function forEachRemaining_12(consumer){
  ju.$forEachRemaining_3(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 81, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$AbstractDoubleSpliterator = function $clinit_Spliterators$AbstractDoubleSpliterator(){
  ju.$clinit_Spliterators$AbstractDoubleSpliterator = emptyMethod;
}
;
defineClass(257, 81, {1:1, 7:1});
cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractDoubleSpliterator', 257, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$AbstractIntSpliterator = function $clinit_Spliterators$AbstractIntSpliterator(){
  ju.$clinit_Spliterators$AbstractIntSpliterator = emptyMethod;
  ju.$clinit_Spliterators$BaseSpliterator();
  ju.$clinit_Spliterator();
  ju.$clinit_Spliterator$OfPrimitive();
  ju.$clinit_Spliterator$OfInt();
}
;
ju.Spliterators$AbstractIntSpliterator = function Spliterators$AbstractIntSpliterator(size_0, characteristics){
  ju.$clinit_Spliterators$AbstractIntSpliterator();
  ju.Spliterators$BaseSpliterator.call(this, size_0, characteristics);
  this.$init_170();
}
;
defineClass(82, 81, {1:1, 7:1, 17:1});
_.$init_170 = function $init_170(){
}
;
_.forEachRemaining = function forEachRemaining_13(consumer){
  ju.$forEachRemaining_5(this, consumer);
}
;
_.forEachRemaining_0 = function forEachRemaining_14(consumer){
  ju.$forEachRemaining_4(this, consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  return ju.$tryAdvance(this, consumer);
}
;
cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractIntSpliterator', 82, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$AbstractLongSpliterator = function $clinit_Spliterators$AbstractLongSpliterator(){
  ju.$clinit_Spliterators$AbstractLongSpliterator = emptyMethod;
}
;
defineClass(258, 81, {1:1, 7:1});
cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractLongSpliterator', 258, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$AbstractSpliterator = function $clinit_Spliterators$AbstractSpliterator(){
  ju.$clinit_Spliterators$AbstractSpliterator = emptyMethod;
  ju.$clinit_Spliterators$BaseSpliterator();
  ju.$clinit_Spliterator();
}
;
ju.Spliterators$AbstractSpliterator = function Spliterators$AbstractSpliterator(size_0, characteristics){
  ju.$clinit_Spliterators$AbstractSpliterator();
  ju.Spliterators$BaseSpliterator.call(this, size_0, characteristics);
  this.$init_171();
}
;
defineClass(114, 81, {1:1, 7:1});
_.$init_171 = function $init_171(){
}
;
cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 114, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$BaseArraySpliterator = function $clinit_Spliterators$BaseArraySpliterator(){
  ju.$clinit_Spliterators$BaseArraySpliterator = emptyMethod;
}
;
defineClass(268, 1, {1:1, 7:1});
cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 268, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$ArraySpliterator = function $clinit_Spliterators$ArraySpliterator(){
  ju.$clinit_Spliterators$ArraySpliterator = emptyMethod;
}
;
defineClass(269, 268, {1:1, 7:1});
cggl.Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 269, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
juf.$clinit_Consumer = function $clinit_Consumer(){
  juf.$clinit_Consumer = emptyMethod;
}
;
cggl.Ljava_util_function_Consumer_2_classLit = createForInterface('java.util.function', 'Consumer');
ju.$clinit_Spliterators$ConsumerIterator = function $clinit_Spliterators$ConsumerIterator(){
  ju.$clinit_Spliterators$ConsumerIterator = emptyMethod;
  jl.$clinit_Object();
  juf.$clinit_Consumer();
  ju.$clinit_Iterator();
}
;
ju.Spliterators$ConsumerIterator = function Spliterators$ConsumerIterator(spliterator){
  ju.$clinit_Spliterators$ConsumerIterator();
  Object_0.call(this);
  this.$init_172();
  this.spliterator = castTo(ji2.checkNotNull_0(spliterator), 7);
}
;
defineClass(112, 1, {1:1, 16:1}, ju.Spliterators$ConsumerIterator);
_.$init_172 = function $init_172(){
  this.hasElement = false;
}
;
_.forEachRemaining_0 = function forEachRemaining_15(consumer){
  ju.$forEachRemaining(this, consumer);
}
;
_.remove_1 = function remove_25(){
  ju.$remove(this);
}
;
_.accept_0 = function accept_2(element){
  this.nextElement = element;
}
;
_.hasNext_0 = function hasNext_9(){
  if (!this.hasElement) {
    this.hasElement = this.spliterator.tryAdvance(this);
  }
  return this.hasElement;
}
;
_.next_2 = function next_13(){
  var element;
  ji2.checkCriticalElement(this.hasNext_0());
  this.hasElement = false;
  element = this.nextElement;
  this.nextElement = null;
  return element;
}
;
_.hasElement = false;
cggl.Ljava_util_Spliterators$ConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/ConsumerIterator', 112, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$DoubleArraySpliterator = function $clinit_Spliterators$DoubleArraySpliterator(){
  ju.$clinit_Spliterators$DoubleArraySpliterator = emptyMethod;
}
;
defineClass(270, 268, {1:1, 7:1});
cggl.Ljava_util_Spliterators$DoubleArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleArraySpliterator', 270, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
ju.$clinit_Spliterators$DoubleConsumerIterator = function $clinit_Spliterators$DoubleConsumerIterator(){
  ju.$clinit_Spliterators$DoubleConsumerIterator = emptyMethod;
}
;
defineClass(264, 1, {1:1, 16:1});
cggl.Ljava_util_Spliterators$DoubleConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleConsumerIterator', 264, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$DoubleIteratorSpliterator = function $clinit_Spliterators$DoubleIteratorSpliterator(){
  ju.$clinit_Spliterators$DoubleIteratorSpliterator = emptyMethod;
}
;
defineClass(266, 257, {1:1, 7:1});
cggl.Ljava_util_Spliterators$DoubleIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleIteratorSpliterator', 266, cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator = function $clinit_Spliterators$EmptySpliterator(){
  ju.$clinit_Spliterators$EmptySpliterator = emptyMethod;
}
;
defineClass(259, 1, {1:1, 7:1});
cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator', 259, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfDouble = function $clinit_Spliterators$EmptySpliterator$OfDouble(){
  ju.$clinit_Spliterators$EmptySpliterator$OfDouble = emptyMethod;
}
;
defineClass(261, 259, {1:1, 7:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfDouble_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfDouble', 261, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfInt = function $clinit_Spliterators$EmptySpliterator$OfInt(){
  ju.$clinit_Spliterators$EmptySpliterator$OfInt = emptyMethod;
}
;
defineClass(262, 259, {1:1, 7:1, 17:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfInt_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfInt', 262, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfLong = function $clinit_Spliterators$EmptySpliterator$OfLong(){
  ju.$clinit_Spliterators$EmptySpliterator$OfLong = emptyMethod;
}
;
defineClass(263, 259, {1:1, 7:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfLong_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfLong', 263, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfRef = function $clinit_Spliterators$EmptySpliterator$OfRef(){
  ju.$clinit_Spliterators$EmptySpliterator$OfRef = emptyMethod;
}
;
defineClass(260, 259, {1:1, 7:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfRef_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfRef', 260, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$IntArraySpliterator = function $clinit_Spliterators$IntArraySpliterator(){
  ju.$clinit_Spliterators$IntArraySpliterator = emptyMethod;
}
;
defineClass(271, 268, {1:1, 7:1, 17:1});
cggl.Ljava_util_Spliterators$IntArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/IntArraySpliterator', 271, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
ju.$clinit_Spliterators$IntConsumerIterator = function $clinit_Spliterators$IntConsumerIterator(){
  ju.$clinit_Spliterators$IntConsumerIterator = emptyMethod;
  jl.$clinit_Object();
  juf.$clinit_IntConsumer();
  ju.$clinit_Iterator();
  ju.$clinit_PrimitiveIterator$OfInt();
}
;
ju.Spliterators$IntConsumerIterator = function Spliterators$IntConsumerIterator(spliterator){
  ju.$clinit_Spliterators$IntConsumerIterator();
  Object_0.call(this);
  this.$init_173();
  this.spliterator = castTo(ji2.checkNotNull_0(spliterator), 17);
}
;
defineClass(113, 1, {1:1, 16:1, 110:1, 9:1}, ju.Spliterators$IntConsumerIterator);
_.$init_173 = function $init_173(){
  this.hasElement = false;
}
;
_.forEachRemaining = function forEachRemaining_16(arg0){
  this.forEachRemaining_1(castTo(arg0, 9));
}
;
_.forEachRemaining_0 = function forEachRemaining_17(consumer){
  ju.$forEachRemaining_1(this, consumer);
}
;
_.forEachRemaining_1 = function forEachRemaining_18(consumer){
  ju.$forEachRemaining_2(this, consumer);
}
;
_.next_1 = function next_14(){
  return ju.$next(this);
}
;
_.next_2 = function next_15(){
  return this.next_1();
}
;
_.remove_1 = function remove_26(){
  ju.$remove(this);
}
;
_.accept = function accept_3(i){
  this.nextElement = i;
}
;
_.hasNext_0 = function hasNext_10(){
  if (!this.hasElement) {
    this.hasElement = this.spliterator.tryAdvance_0(this);
  }
  return this.hasElement;
}
;
_.nextInt = function nextInt_0(){
  ji2.checkCriticalElement(this.hasNext_0());
  this.hasElement = false;
  return this.nextElement;
}
;
_.hasElement = false;
_.nextElement = 0;
cggl.Ljava_util_Spliterators$IntConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/IntConsumerIterator', 113, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$IntIteratorSpliterator = function $clinit_Spliterators$IntIteratorSpliterator(){
  ju.$clinit_Spliterators$IntIteratorSpliterator = emptyMethod;
  ju.$clinit_Spliterators$AbstractIntSpliterator();
}
;
ju.Spliterators$IntIteratorSpliterator = function Spliterators$IntIteratorSpliterator(it, size_0, characteristics){
  ju.$clinit_Spliterators$IntIteratorSpliterator();
  ju.Spliterators$AbstractIntSpliterator.call(this, size_0, ju.sizeKnownIteratorSpliteratorCharacteristics(characteristics));
  this.$init_174();
  this.it = castTo(ji2.checkNotNull_0(it), 110);
}
;
defineClass(111, 82, {1:1, 7:1, 17:1}, ju.Spliterators$IntIteratorSpliterator);
_.$init_174 = function $init_174(){
}
;
_.forEachRemaining = function forEachRemaining_19(consumer){
  this.forEachRemaining_1(castTo(consumer, 9));
}
;
_.tryAdvance_0 = function tryAdvance_1(consumer){
  return this.tryAdvance_1(castTo(consumer, 9));
}
;
_.forEachRemaining_1 = function forEachRemaining_20(consumer){
  this.it.forEachRemaining_1(consumer);
}
;
_.tryAdvance_1 = function tryAdvance_2(consumer){
  ji2.checkNotNull_0(consumer);
  if (this.it.hasNext_0()) {
    consumer.accept(this.it.nextInt());
    return true;
  }
  return false;
}
;
cggl.Ljava_util_Spliterators$IntIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IntIteratorSpliterator', 111, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
ju.$clinit_Spliterators$LongArraySpliterator = function $clinit_Spliterators$LongArraySpliterator(){
  ju.$clinit_Spliterators$LongArraySpliterator = emptyMethod;
}
;
defineClass(272, 268, {1:1, 7:1});
cggl.Ljava_util_Spliterators$LongArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/LongArraySpliterator', 272, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
ju.$clinit_Spliterators$LongConsumerIterator = function $clinit_Spliterators$LongConsumerIterator(){
  ju.$clinit_Spliterators$LongConsumerIterator = emptyMethod;
}
;
defineClass(265, 1, {1:1, 16:1});
cggl.Ljava_util_Spliterators$LongConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/LongConsumerIterator', 265, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$LongIteratorSpliterator = function $clinit_Spliterators$LongIteratorSpliterator(){
  ju.$clinit_Spliterators$LongIteratorSpliterator = emptyMethod;
}
;
defineClass(267, 258, {1:1, 7:1});
cggl.Ljava_util_Spliterators$LongIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/LongIteratorSpliterator', 267, cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit);
ju.$clinit_StringJoiner = function $clinit_StringJoiner(){
  ju.$clinit_StringJoiner = emptyMethod;
  jl.$clinit_Object();
}
;
ju.StringJoiner = function StringJoiner(delimiter){
  ju.$clinit_StringJoiner();
  ju.StringJoiner_0.call(this, delimiter, '', '');
}
;
ju.StringJoiner_0 = function StringJoiner_0(delimiter, prefix, suffix){
  ju.$clinit_StringJoiner();
  Object_0.call(this);
  this.$init_175();
  this.delimiter = toString_11(delimiter);
  this.prefix = toString_11(prefix);
  this.suffix = toString_11(suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}
;
defineClass(44, 1, {1:1}, ju.StringJoiner, ju.StringJoiner_0);
_.$init_175 = function $init_175(){
}
;
_.add_1 = function add_11(newElement){
  this.initBuilderOrAddDelimiter();
  this.builder.append_0(newElement);
  return this;
}
;
_.initBuilderOrAddDelimiter = function initBuilderOrAddDelimiter(){
  if (isNull(this.builder)) {
    this.builder = new jl.StringBuilder_0(this.prefix);
  }
   else {
    this.builder.append_2(this.delimiter);
  }
}
;
_.length_0 = function length_2(){
  if (isNull(this.builder)) {
    return jl.length__I__devirtual$_0(this.emptyValue);
  }
  return this.builder.length_0() + jl.length__I__devirtual$_0(this.suffix);
}
;
_.toString_0 = function toString_37(){
  if (isNull(this.builder)) {
    return this.emptyValue;
  }
   else if (jl.isEmpty__Z__devirtual$(this.suffix)) {
    return this.builder.toString_0();
  }
   else {
    return this.builder.toString_0() + ('' + this.suffix);
  }
}
;
cggl.Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 44, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_BiConsumer = function $clinit_BiConsumer(){
  juf.$clinit_BiConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_BiConsumer_2_classLit = createForInterface('java.util.function', 'BiConsumer');
juf.$clinit_BiConsumer$lambda$0$Type = function $clinit_BiConsumer$lambda$0$Type(){
  juf.$clinit_BiConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(432, 1, {1:1});
cggl.Ljava_util_function_BiConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'BiConsumer/lambda$0$Type', 432, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_BiFunction = function $clinit_BiFunction(){
  juf.$clinit_BiFunction = emptyMethod;
}
;
cggl.Ljava_util_function_BiFunction_2_classLit = createForInterface('java.util.function', 'BiFunction');
juf.$clinit_BiFunction$lambda$0$Type = function $clinit_BiFunction$lambda$0$Type(){
  juf.$clinit_BiFunction$lambda$0$Type = emptyMethod;
}
;
defineClass(391, 1, {1:1});
cggl.Ljava_util_function_BiFunction$lambda$0$Type_2_classLit = createForClass('java.util.function', 'BiFunction/lambda$0$Type', 391, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_BinaryOperator = function $clinit_BinaryOperator(){
  juf.$clinit_BinaryOperator = emptyMethod;
}
;
cggl.Ljava_util_function_BinaryOperator_2_classLit = createForInterface('java.util.function', 'BinaryOperator');
juf.$clinit_BinaryOperator$lambda$0$Type = function $clinit_BinaryOperator$lambda$0$Type(){
  juf.$clinit_BinaryOperator$lambda$0$Type = emptyMethod;
}
;
defineClass(389, 1, {1:1});
cggl.Ljava_util_function_BinaryOperator$lambda$0$Type_2_classLit = createForClass('java.util.function', 'BinaryOperator/lambda$0$Type', 389, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_BinaryOperator$lambda$1$Type = function $clinit_BinaryOperator$lambda$1$Type(){
  juf.$clinit_BinaryOperator$lambda$1$Type = emptyMethod;
}
;
defineClass(390, 1, {1:1});
cggl.Ljava_util_function_BinaryOperator$lambda$1$Type_2_classLit = createForClass('java.util.function', 'BinaryOperator/lambda$1$Type', 390, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Consumer$lambda$0$Type = function $clinit_Consumer$lambda$0$Type(){
  juf.$clinit_Consumer$lambda$0$Type = emptyMethod;
}
;
defineClass(277, 1, {1:1});
cggl.Ljava_util_function_Consumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Consumer/lambda$0$Type', 277, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_DoubleConsumer$lambda$0$Type = function $clinit_DoubleConsumer$lambda$0$Type(){
  juf.$clinit_DoubleConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(245, 1, {1:1});
cggl.Ljava_util_function_DoubleConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'DoubleConsumer/lambda$0$Type', 245, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Function = function $clinit_Function(){
  juf.$clinit_Function = emptyMethod;
}
;
juf.identity_0 = function identity_0(){
  juf.$clinit_Function();
  return new juf.Function$lambda$0$Type;
}
;
juf.lambda$0_6 = function lambda$0_6(t_0){
  juf.$clinit_Function();
  return t_0;
}
;
cggl.Ljava_util_function_Function_2_classLit = createForInterface('java.util.function', 'Function');
juf.$clinit_Function$lambda$0$Type = function $clinit_Function$lambda$0$Type(){
  juf.$clinit_Function$lambda$0$Type = emptyMethod;
}
;
juf.Function$lambda$0$Type = function Function$lambda$0$Type(){
  juf.$clinit_Function$lambda$0$Type();
}
;
defineClass(148, 1, {1:1}, juf.Function$lambda$0$Type);
_.apply_1 = function apply_1(t){
  return juf.lambda$0_6(t);
}
;
cggl.Ljava_util_function_Function$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$0$Type', 148, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Function$lambda$1$Type = function $clinit_Function$lambda$1$Type(){
  juf.$clinit_Function$lambda$1$Type = emptyMethod;
}
;
defineClass(315, 1, {1:1});
cggl.Ljava_util_function_Function$lambda$1$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$1$Type', 315, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Function$lambda$2$Type = function $clinit_Function$lambda$2$Type(){
  juf.$clinit_Function$lambda$2$Type = emptyMethod;
}
;
defineClass(316, 1, {1:1});
cggl.Ljava_util_function_Function$lambda$2$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$2$Type', 316, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntConsumer$lambda$0$Type = function $clinit_IntConsumer$lambda$0$Type(){
  juf.$clinit_IntConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(246, 1, {1:1, 9:1});
cggl.Ljava_util_function_IntConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'IntConsumer/lambda$0$Type', 246, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntFunction = function $clinit_IntFunction(){
  juf.$clinit_IntFunction = emptyMethod;
}
;
cggl.Ljava_util_function_IntFunction_2_classLit = createForInterface('java.util.function', 'IntFunction');
juf.$clinit_IntPredicate = function $clinit_IntPredicate(){
  juf.$clinit_IntPredicate = emptyMethod;
}
;
cggl.Ljava_util_function_IntPredicate_2_classLit = createForInterface('java.util.function', 'IntPredicate');
juf.$clinit_IntPredicate$lambda$0$Type = function $clinit_IntPredicate$lambda$0$Type(){
  juf.$clinit_IntPredicate$lambda$0$Type = emptyMethod;
}
;
defineClass(433, 1, {1:1});
cggl.Ljava_util_function_IntPredicate$lambda$0$Type_2_classLit = createForClass('java.util.function', 'IntPredicate/lambda$0$Type', 433, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntPredicate$lambda$1$Type = function $clinit_IntPredicate$lambda$1$Type(){
  juf.$clinit_IntPredicate$lambda$1$Type = emptyMethod;
}
;
defineClass(434, 1, {1:1});
cggl.Ljava_util_function_IntPredicate$lambda$1$Type_2_classLit = createForClass('java.util.function', 'IntPredicate/lambda$1$Type', 434, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntPredicate$lambda$2$Type = function $clinit_IntPredicate$lambda$2$Type(){
  juf.$clinit_IntPredicate$lambda$2$Type = emptyMethod;
}
;
defineClass(435, 1, {1:1});
cggl.Ljava_util_function_IntPredicate$lambda$2$Type_2_classLit = createForClass('java.util.function', 'IntPredicate/lambda$2$Type', 435, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntToDoubleFunction = function $clinit_IntToDoubleFunction(){
  juf.$clinit_IntToDoubleFunction = emptyMethod;
}
;
cggl.Ljava_util_function_IntToDoubleFunction_2_classLit = createForInterface('java.util.function', 'IntToDoubleFunction');
juf.$clinit_IntToLongFunction = function $clinit_IntToLongFunction(){
  juf.$clinit_IntToLongFunction = emptyMethod;
}
;
cggl.Ljava_util_function_IntToLongFunction_2_classLit = createForInterface('java.util.function', 'IntToLongFunction');
juf.$clinit_LongConsumer$lambda$0$Type = function $clinit_LongConsumer$lambda$0$Type(){
  juf.$clinit_LongConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(247, 1, {1:1});
cggl.Ljava_util_function_LongConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'LongConsumer/lambda$0$Type', 247, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_ObjIntConsumer = function $clinit_ObjIntConsumer(){
  juf.$clinit_ObjIntConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_ObjIntConsumer_2_classLit = createForInterface('java.util.function', 'ObjIntConsumer');
juf.$clinit_Predicate = function $clinit_Predicate(){
  juf.$clinit_Predicate = emptyMethod;
}
;
cggl.Ljava_util_function_Predicate_2_classLit = createForInterface('java.util.function', 'Predicate');
juf.$clinit_Predicate$0methodref$isNull$Type = function $clinit_Predicate$0methodref$isNull$Type(){
  juf.$clinit_Predicate$0methodref$isNull$Type = emptyMethod;
}
;
defineClass(392, 1, {1:1});
cggl.Ljava_util_function_Predicate$0methodref$isNull$Type_2_classLit = createForClass('java.util.function', 'Predicate/0methodref$isNull$Type', 392, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Predicate$1methodref$equals$Type = function $clinit_Predicate$1methodref$equals$Type(){
  juf.$clinit_Predicate$1methodref$equals$Type = emptyMethod;
}
;
defineClass(393, 1, {1:1});
cggl.Ljava_util_function_Predicate$1methodref$equals$Type_2_classLit = createForClass('java.util.function', 'Predicate/1methodref$equals$Type', 393, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Predicate$lambda$0$Type = function $clinit_Predicate$lambda$0$Type(){
  juf.$clinit_Predicate$lambda$0$Type = emptyMethod;
}
;
defineClass(394, 1, {1:1});
cggl.Ljava_util_function_Predicate$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Predicate/lambda$0$Type', 394, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Predicate$lambda$1$Type = function $clinit_Predicate$lambda$1$Type(){
  juf.$clinit_Predicate$lambda$1$Type = emptyMethod;
}
;
defineClass(395, 1, {1:1});
cggl.Ljava_util_function_Predicate$lambda$1$Type_2_classLit = createForClass('java.util.function', 'Predicate/lambda$1$Type', 395, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Predicate$lambda$2$Type = function $clinit_Predicate$lambda$2$Type(){
  juf.$clinit_Predicate$lambda$2$Type = emptyMethod;
}
;
defineClass(396, 1, {1:1});
cggl.Ljava_util_function_Predicate$lambda$2$Type_2_classLit = createForClass('java.util.function', 'Predicate/lambda$2$Type', 396, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_BaseStream = function $clinit_BaseStream(){
  jus.$clinit_BaseStream = emptyMethod;
}
;
cggl.Ljava_util_stream_BaseStream_2_classLit = createForInterface('java.util.stream', 'BaseStream');
jus.$clinit_Collector = function $clinit_Collector(){
  jus.$clinit_Collector = emptyMethod;
}
;
jus.of_4 = function of_4(supplier, accumulator, combiner, characteristics){
  jus.$clinit_Collector();
  ji2.checkNotNull_0(supplier);
  ji2.checkNotNull_0(accumulator);
  ji2.checkNotNull_0(combiner);
  ji2.checkNotNull_0(characteristics);
  return new jus.CollectorImpl(supplier, accumulator, combiner, juf.identity_0(), characteristics);
}
;
cggl.Ljava_util_stream_Collector_2_classLit = createForInterface('java.util.stream', 'Collector');
jus.$clinit_Collector$Characteristics = function $clinit_Collector$Characteristics(){
  jus.$clinit_Collector$Characteristics = emptyMethod;
  jl.$clinit_Enum();
  jus.CONCURRENT_0 = new jus.Collector$Characteristics('CONCURRENT', 0);
  jus.IDENTITY_FINISH = new jus.Collector$Characteristics('IDENTITY_FINISH', 1);
  jus.UNORDERED = new jus.Collector$Characteristics('UNORDERED', 2);
}
;
jus.Collector$Characteristics = function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_176();
}
;
jus.valueOf_28 = function valueOf_28(name_0){
  jus.$clinit_Collector$Characteristics();
  return valueOf((jus.$clinit_Collector$Characteristics$Map() , jus.$MAP_6), name_0);
}
;
jus.values_9 = function values_9(){
  jus.$clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_util_stream_Collector$Characteristics_2_classLit, 1), {3:1, 1:1, 4:1}, 42, 0, [jus.CONCURRENT_0, jus.IDENTITY_FINISH, jus.UNORDERED]);
}
;
defineClass(42, 15, {3:1, 13:1, 15:1, 1:1, 42:1}, jus.Collector$Characteristics);
_.$init_176 = function $init_176(){
}
;
cggl.Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 42, cggl.Ljava_lang_Enum_2_classLit, jus.values_9, jus.valueOf_28);
jus.$clinit_Collector$Characteristics$Map = function $clinit_Collector$Characteristics$Map(){
  jus.$clinit_Collector$Characteristics$Map = emptyMethod;
  jus.$MAP_6 = createValueOfMap(jus.values_9());
}
;
defineClass(489, 1, {1:1});
cggl.Ljava_util_stream_Collector$Characteristics$Map_2_classLit = createForClass('java.util.stream', 'Collector/Characteristics/Map', 489, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_CollectorImpl = function $clinit_CollectorImpl(){
  jus.$clinit_CollectorImpl = emptyMethod;
  jl.$clinit_Object();
}
;
jus.CollectorImpl = function CollectorImpl(supplier, accumulator, combiner, finisher, characteristics){
  jus.$clinit_CollectorImpl();
  Object_0.call(this);
  this.$init_177();
  this.supplier = supplier;
  this.accumulator = accumulator;
  this.characteristics = ju.emptySet();
  this.combiner = combiner;
  this.finisher = finisher;
}
;
defineClass(229, 1, {1:1}, jus.CollectorImpl);
_.$init_177 = function $init_177(){
}
;
_.accumulator_0 = function accumulator_0(){
  return this.accumulator;
}
;
_.combiner_0 = function combiner_0(){
  return this.combiner;
}
;
_.finisher_0 = function finisher_0(){
  return this.finisher;
}
;
_.supplier_0 = function supplier_0(){
  return this.supplier;
}
;
cggl.Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 229, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors = function $clinit_Collectors(){
  jus.$clinit_Collectors = emptyMethod;
  jl.$clinit_Object();
}
;
jus.addAll_4 = function addAll_4(collection, items){
  collection.addAll(items);
  return collection;
}
;
jus.lambda$21 = function lambda$21(c1_0, c2_1){
  jus.$clinit_Collectors();
  return jus.addAll_4(c1_0, c2_1);
}
;
jus.toCollection = function toCollection(collectionFactory){
  return jus.of_4(collectionFactory, new jus.Collectors$20methodref$add$Type, new jus.Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_util_stream_Collector$Characteristics_2_classLit, 1), {3:1, 1:1, 4:1}, 42, 0, [(jus.$clinit_Collector$Characteristics() , jus.IDENTITY_FINISH)]));
}
;
jus.toList = function toList(){
  jus.$clinit_Collectors();
  return jus.toCollection(new jus.Collectors$21methodref$ctor$Type);
}
;
defineClass(439, 1, {1:1});
cggl.Ljava_util_stream_Collectors_2_classLit = createForClass('java.util.stream', 'Collectors', 439, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$0methodref$getAverage$Type = function $clinit_Collectors$0methodref$getAverage$Type(){
  jus.$clinit_Collectors$0methodref$getAverage$Type = emptyMethod;
}
;
defineClass(440, 1, {1:1});
cggl.Ljava_util_stream_Collectors$0methodref$getAverage$Type_2_classLit = createForClass('java.util.stream', 'Collectors/0methodref$getAverage$Type', 440, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$10methodref$merge$Type = function $clinit_Collectors$10methodref$merge$Type(){
  jus.$clinit_Collectors$10methodref$merge$Type = emptyMethod;
}
;
defineClass(457, 1, {1:1});
cggl.Ljava_util_stream_Collectors$10methodref$merge$Type_2_classLit = createForClass('java.util.stream', 'Collectors/10methodref$merge$Type', 457, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$11methodref$toString$Type = function $clinit_Collectors$11methodref$toString$Type(){
  jus.$clinit_Collectors$11methodref$toString$Type = emptyMethod;
}
;
defineClass(458, 1, {1:1});
cggl.Ljava_util_stream_Collectors$11methodref$toString$Type_2_classLit = createForClass('java.util.stream', 'Collectors/11methodref$toString$Type', 458, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$12methodref$test$Type = function $clinit_Collectors$12methodref$test$Type(){
  jus.$clinit_Collectors$12methodref$test$Type = emptyMethod;
}
;
defineClass(460, 1, {1:1});
cggl.Ljava_util_stream_Collectors$12methodref$test$Type_2_classLit = createForClass('java.util.stream', 'Collectors/12methodref$test$Type', 460, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$13methodref$ctor$Type = function $clinit_Collectors$13methodref$ctor$Type(){
  jus.$clinit_Collectors$13methodref$ctor$Type = emptyMethod;
}
;
defineClass(461, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$13methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/13methodref$ctor$Type', 461, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$14methodref$of$Type = function $clinit_Collectors$14methodref$of$Type(){
  jus.$clinit_Collectors$14methodref$of$Type = emptyMethod;
}
;
defineClass(463, 1, {1:1});
cggl.Ljava_util_stream_Collectors$14methodref$of$Type_2_classLit = createForClass('java.util.stream', 'Collectors/14methodref$of$Type', 463, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$15methodref$ctor$Type = function $clinit_Collectors$15methodref$ctor$Type(){
  jus.$clinit_Collectors$15methodref$ctor$Type = emptyMethod;
}
;
defineClass(469, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$15methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/15methodref$ctor$Type', 469, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$16methodref$ctor$Type = function $clinit_Collectors$16methodref$ctor$Type(){
  jus.$clinit_Collectors$16methodref$ctor$Type = emptyMethod;
}
;
defineClass(472, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$16methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/16methodref$ctor$Type', 472, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$17methodref$ctor$Type = function $clinit_Collectors$17methodref$ctor$Type(){
  jus.$clinit_Collectors$17methodref$ctor$Type = emptyMethod;
}
;
defineClass(475, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$17methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/17methodref$ctor$Type', 475, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$18methodref$getSum$Type = function $clinit_Collectors$18methodref$getSum$Type(){
  jus.$clinit_Collectors$18methodref$getSum$Type = emptyMethod;
}
;
defineClass(478, 1, {1:1});
cggl.Ljava_util_stream_Collectors$18methodref$getSum$Type_2_classLit = createForClass('java.util.stream', 'Collectors/18methodref$getSum$Type', 478, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$19methodref$getSum$Type = function $clinit_Collectors$19methodref$getSum$Type(){
  jus.$clinit_Collectors$19methodref$getSum$Type = emptyMethod;
}
;
defineClass(480, 1, {1:1});
cggl.Ljava_util_stream_Collectors$19methodref$getSum$Type_2_classLit = createForClass('java.util.stream', 'Collectors/19methodref$getSum$Type', 480, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$1methodref$getAverage$Type = function $clinit_Collectors$1methodref$getAverage$Type(){
  jus.$clinit_Collectors$1methodref$getAverage$Type = emptyMethod;
}
;
defineClass(441, 1, {1:1});
cggl.Ljava_util_stream_Collectors$1methodref$getAverage$Type_2_classLit = createForClass('java.util.stream', 'Collectors/1methodref$getAverage$Type', 441, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$20methodref$add$Type = function $clinit_Collectors$20methodref$add$Type(){
  jus.$clinit_Collectors$20methodref$add$Type = emptyMethod;
}
;
jus.Collectors$20methodref$add$Type = function Collectors$20methodref$add$Type(){
  jus.$clinit_Collectors$20methodref$add$Type();
}
;
defineClass(225, 1, {1:1}, jus.Collectors$20methodref$add$Type);
_.accept_1 = function accept_4(arg0, arg1){
  castTo(arg0, 12).add(arg1);
}
;
cggl.Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 225, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$21methodref$ctor$Type = function $clinit_Collectors$21methodref$ctor$Type(){
  jus.$clinit_Collectors$21methodref$ctor$Type = emptyMethod;
}
;
jus.Collectors$21methodref$ctor$Type = function Collectors$21methodref$ctor$Type(){
  jus.$clinit_Collectors$21methodref$ctor$Type();
}
;
defineClass(227, 1, {1:1, 20:1}, jus.Collectors$21methodref$ctor$Type);
_.get_0 = function get_10(){
  return new ju.ArrayList;
}
;
cggl.Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 227, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$22methodref$ctor$Type = function $clinit_Collectors$22methodref$ctor$Type(){
  jus.$clinit_Collectors$22methodref$ctor$Type = emptyMethod;
}
;
defineClass(482, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$22methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/22methodref$ctor$Type', 482, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$23methodref$ctor$Type = function $clinit_Collectors$23methodref$ctor$Type(){
  jus.$clinit_Collectors$23methodref$ctor$Type = emptyMethod;
}
;
defineClass(485, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$23methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/23methodref$ctor$Type', 485, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$24methodref$add$Type = function $clinit_Collectors$24methodref$add$Type(){
  jus.$clinit_Collectors$24methodref$add$Type = emptyMethod;
}
;
defineClass(486, 1, {1:1});
cggl.Ljava_util_stream_Collectors$24methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/24methodref$add$Type', 486, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$2methodref$getAverage$Type = function $clinit_Collectors$2methodref$getAverage$Type(){
  jus.$clinit_Collectors$2methodref$getAverage$Type = emptyMethod;
}
;
defineClass(442, 1, {1:1});
cggl.Ljava_util_stream_Collectors$2methodref$getAverage$Type_2_classLit = createForClass('java.util.stream', 'Collectors/2methodref$getAverage$Type', 442, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$3methodref$ctor$Type = function $clinit_Collectors$3methodref$ctor$Type(){
  jus.$clinit_Collectors$3methodref$ctor$Type = emptyMethod;
}
;
defineClass(445, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$3methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/3methodref$ctor$Type', 445, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$4methodref$addAll$Type = function $clinit_Collectors$4methodref$addAll$Type(){
  jus.$clinit_Collectors$4methodref$addAll$Type = emptyMethod;
}
;
defineClass(448, 1, {1:1});
cggl.Ljava_util_stream_Collectors$4methodref$addAll$Type_2_classLit = createForClass('java.util.stream', 'Collectors/4methodref$addAll$Type', 448, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$5methodref$ctor$Type = function $clinit_Collectors$5methodref$ctor$Type(){
  jus.$clinit_Collectors$5methodref$ctor$Type = emptyMethod;
}
;
defineClass(451, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$5methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/5methodref$ctor$Type', 451, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$6methodref$append$Type = function $clinit_Collectors$6methodref$append$Type(){
  jus.$clinit_Collectors$6methodref$append$Type = emptyMethod;
}
;
defineClass(452, 1, {1:1});
cggl.Ljava_util_stream_Collectors$6methodref$append$Type_2_classLit = createForClass('java.util.stream', 'Collectors/6methodref$append$Type', 452, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$7methodref$append$Type = function $clinit_Collectors$7methodref$append$Type(){
  jus.$clinit_Collectors$7methodref$append$Type = emptyMethod;
}
;
defineClass(453, 1, {1:1});
cggl.Ljava_util_stream_Collectors$7methodref$append$Type_2_classLit = createForClass('java.util.stream', 'Collectors/7methodref$append$Type', 453, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$8methodref$toString$Type = function $clinit_Collectors$8methodref$toString$Type(){
  jus.$clinit_Collectors$8methodref$toString$Type = emptyMethod;
}
;
defineClass(454, 1, {1:1});
cggl.Ljava_util_stream_Collectors$8methodref$toString$Type_2_classLit = createForClass('java.util.stream', 'Collectors/8methodref$toString$Type', 454, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$9methodref$add$Type = function $clinit_Collectors$9methodref$add$Type(){
  jus.$clinit_Collectors$9methodref$add$Type = emptyMethod;
}
;
defineClass(456, 1, {1:1});
cggl.Ljava_util_stream_Collectors$9methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/9methodref$add$Type', 456, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$0$Type = function $clinit_Collectors$lambda$0$Type(){
  jus.$clinit_Collectors$lambda$0$Type = emptyMethod;
}
;
defineClass(443, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$0$Type', 443, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$1$Type = function $clinit_Collectors$lambda$1$Type(){
  jus.$clinit_Collectors$lambda$1$Type = emptyMethod;
}
;
defineClass(444, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$1$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$1$Type', 444, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$10$Type = function $clinit_Collectors$lambda$10$Type(){
  jus.$clinit_Collectors$lambda$10$Type = emptyMethod;
}
;
defineClass(465, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$lambda$10$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$10$Type', 465, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$11$Type = function $clinit_Collectors$lambda$11$Type(){
  jus.$clinit_Collectors$lambda$11$Type = emptyMethod;
}
;
defineClass(466, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$11$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$11$Type', 466, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$12$Type = function $clinit_Collectors$lambda$12$Type(){
  jus.$clinit_Collectors$lambda$12$Type = emptyMethod;
}
;
defineClass(467, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$12$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$12$Type', 467, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$13$Type = function $clinit_Collectors$lambda$13$Type(){
  jus.$clinit_Collectors$lambda$13$Type = emptyMethod;
}
;
defineClass(468, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$13$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$13$Type', 468, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$14$Type = function $clinit_Collectors$lambda$14$Type(){
  jus.$clinit_Collectors$lambda$14$Type = emptyMethod;
}
;
defineClass(470, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$14$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$14$Type', 470, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$15$Type = function $clinit_Collectors$lambda$15$Type(){
  jus.$clinit_Collectors$lambda$15$Type = emptyMethod;
}
;
defineClass(471, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$15$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$15$Type', 471, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$16$Type = function $clinit_Collectors$lambda$16$Type(){
  jus.$clinit_Collectors$lambda$16$Type = emptyMethod;
}
;
defineClass(473, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$16$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$16$Type', 473, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$17$Type = function $clinit_Collectors$lambda$17$Type(){
  jus.$clinit_Collectors$lambda$17$Type = emptyMethod;
}
;
defineClass(474, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$17$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$17$Type', 474, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$18$Type = function $clinit_Collectors$lambda$18$Type(){
  jus.$clinit_Collectors$lambda$18$Type = emptyMethod;
}
;
defineClass(476, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$18$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$18$Type', 476, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$19$Type = function $clinit_Collectors$lambda$19$Type(){
  jus.$clinit_Collectors$lambda$19$Type = emptyMethod;
}
;
defineClass(477, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$19$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$19$Type', 477, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$2$Type = function $clinit_Collectors$lambda$2$Type(){
  jus.$clinit_Collectors$lambda$2$Type = emptyMethod;
}
;
defineClass(446, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$lambda$2$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$2$Type', 446, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$20$Type = function $clinit_Collectors$lambda$20$Type(){
  jus.$clinit_Collectors$lambda$20$Type = emptyMethod;
}
;
defineClass(479, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$20$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$20$Type', 479, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$21$Type = function $clinit_Collectors$lambda$21$Type(){
  jus.$clinit_Collectors$lambda$21$Type = emptyMethod;
}
;
jus.Collectors$lambda$21$Type = function Collectors$lambda$21$Type(){
  jus.$clinit_Collectors$lambda$21$Type();
}
;
defineClass(226, 1, {1:1}, jus.Collectors$lambda$21$Type);
_.apply_0 = function apply_2(arg0, arg1){
  return jus.lambda$21(arg0, arg1);
}
;
cggl.Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 226, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$22$Type = function $clinit_Collectors$lambda$22$Type(){
  jus.$clinit_Collectors$lambda$22$Type = emptyMethod;
}
;
defineClass(481, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$22$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$22$Type', 481, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$23$Type = function $clinit_Collectors$lambda$23$Type(){
  jus.$clinit_Collectors$lambda$23$Type = emptyMethod;
}
;
defineClass(483, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$23$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$23$Type', 483, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$24$Type = function $clinit_Collectors$lambda$24$Type(){
  jus.$clinit_Collectors$lambda$24$Type = emptyMethod;
}
;
defineClass(484, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$24$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$24$Type', 484, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$25$Type = function $clinit_Collectors$lambda$25$Type(){
  jus.$clinit_Collectors$lambda$25$Type = emptyMethod;
}
;
defineClass(487, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$25$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$25$Type', 487, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$26$Type = function $clinit_Collectors$lambda$26$Type(){
  jus.$clinit_Collectors$lambda$26$Type = emptyMethod;
}
;
defineClass(488, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$26$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$26$Type', 488, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$3$Type = function $clinit_Collectors$lambda$3$Type(){
  jus.$clinit_Collectors$lambda$3$Type = emptyMethod;
}
;
defineClass(447, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$3$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$3$Type', 447, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$4$Type = function $clinit_Collectors$lambda$4$Type(){
  jus.$clinit_Collectors$lambda$4$Type = emptyMethod;
}
;
defineClass(449, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$4$Type', 449, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$5$Type = function $clinit_Collectors$lambda$5$Type(){
  jus.$clinit_Collectors$lambda$5$Type = emptyMethod;
}
;
defineClass(450, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$5$Type', 450, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$6$Type = function $clinit_Collectors$lambda$6$Type(){
  jus.$clinit_Collectors$lambda$6$Type = emptyMethod;
}
;
defineClass(455, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$lambda$6$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$6$Type', 455, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$7$Type = function $clinit_Collectors$lambda$7$Type(){
  jus.$clinit_Collectors$lambda$7$Type = emptyMethod;
}
;
defineClass(459, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$7$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$7$Type', 459, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$8$Type = function $clinit_Collectors$lambda$8$Type(){
  jus.$clinit_Collectors$lambda$8$Type = emptyMethod;
}
;
defineClass(462, 1, {1:1, 20:1});
cggl.Ljava_util_stream_Collectors$lambda$8$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$8$Type', 462, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Collectors$lambda$9$Type = function $clinit_Collectors$lambda$9$Type(){
  jus.$clinit_Collectors$lambda$9$Type = emptyMethod;
}
;
defineClass(464, 1, {1:1});
cggl.Ljava_util_stream_Collectors$lambda$9$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$9$Type', 464, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStream = function $clinit_IntStream(){
  jus.$clinit_IntStream = emptyMethod;
}
;
jus.$iterator = function $iterator(this$static){
  return this$static.iterator_0();
}
;
jus.$spliterator_3 = function $spliterator_3(this$static){
  return this$static.spliterator_1();
}
;
cggl.Ljava_util_stream_IntStream_2_classLit = createForInterface('java.util.stream', 'IntStream');
jus.$clinit_IntStream$0methodref$close$Type = function $clinit_IntStream$0methodref$close$Type(){
  jus.$clinit_IntStream$0methodref$close$Type = emptyMethod;
}
;
defineClass(251, 1, {1:1});
cggl.Ljava_util_stream_IntStream$0methodref$close$Type_2_classLit = createForClass('java.util.stream', 'IntStream/0methodref$close$Type', 251, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStream$Builder = function $clinit_IntStream$Builder(){
  jus.$clinit_IntStream$Builder = emptyMethod;
}
;
cggl.Ljava_util_stream_IntStream$Builder_2_classLit = createForInterface('java.util.stream', 'IntStream/Builder');
jus.$clinit_IntStream$1 = function $clinit_IntStream$1(){
  jus.$clinit_IntStream$1 = emptyMethod;
}
;
defineClass(248, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStream$1_2_classLit = createForClass('java.util.stream', 'IntStream/1', 248, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStream$1methodref$close$Type = function $clinit_IntStream$1methodref$close$Type(){
  jus.$clinit_IntStream$1methodref$close$Type = emptyMethod;
}
;
defineClass(252, 1, {1:1});
cggl.Ljava_util_stream_IntStream$1methodref$close$Type_2_classLit = createForClass('java.util.stream', 'IntStream/1methodref$close$Type', 252, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStream$2 = function $clinit_IntStream$2(){
  jus.$clinit_IntStream$2 = emptyMethod;
}
;
defineClass(249, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStream$2_2_classLit = createForClass('java.util.stream', 'IntStream/2', 249, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStream$2$lambda$0$Type = function $clinit_IntStream$2$lambda$0$Type(){
  jus.$clinit_IntStream$2$lambda$0$Type = emptyMethod;
}
;
defineClass(250, 1, {1:1});
cggl.Ljava_util_stream_IntStream$2$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStream/2/lambda$0$Type', 250, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStream$3 = function $clinit_IntStream$3(){
  jus.$clinit_IntStream$3 = emptyMethod;
}
;
defineClass(253, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStream$3_2_classLit = createForClass('java.util.stream', 'IntStream/3', 253, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStream$4 = function $clinit_IntStream$4(){
  jus.$clinit_IntStream$4 = emptyMethod;
}
;
defineClass(254, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStream$4_2_classLit = createForClass('java.util.stream', 'IntStream/4', 254, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStream$5 = function $clinit_IntStream$5(){
  jus.$clinit_IntStream$5 = emptyMethod;
}
;
defineClass(255, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStream$5_2_classLit = createForClass('java.util.stream', 'IntStream/5', 255, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_TerminatableStream = function $clinit_TerminatableStream(){
  jus.$clinit_TerminatableStream = emptyMethod;
  jl.$clinit_Object();
}
;
jus.TerminatableStream = function TerminatableStream(previous){
  jus.$clinit_TerminatableStream();
  Object_0.call(this);
  this.$init_178();
  if (isNull(previous)) {
    this.root = null;
    this.onClose = new ju.ArrayList;
  }
   else {
    this.root = previous;
    this.onClose = null;
  }
}
;
jus.lambda$0_7 = function lambda$0_7(throwables_0, runnable_1){
  jus.$clinit_TerminatableStream();
  var e;
  {
    try {
      runnable_1.run();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throwables_0.add(e);
      }
       else 
        throw toJs($e0);
    }
  }
}
;
defineClass(63, 1, {1:1});
_.$init_178 = function $init_178(){
  this.terminated = false;
}
;
_.close_0 = function close_2(){
  if (isNull(this.root)) {
    this.terminated = true;
    this.runClosers();
  }
   else {
    this.root.close_0();
  }
}
;
_.runClosers = function runClosers(){
  var e, i, size_0, suppressed, throwables;
  throwables = new ju.ArrayList;
  this.onClose.forEach(new jus.TerminatableStream$lambda$0$Type(throwables));
  this.onClose.clear();
  if (!throwables.isEmpty()) {
    e = castTo(throwables.getAtIndex(0), 6);
    for (i = 1 , size_0 = throwables.size(); i < size_0; ++i) {
      suppressed = castTo(throwables.getAtIndex(i), 6);
      if (jsNotEquals(suppressed, e)) {
        e.addSuppressed(suppressed);
      }
    }
    if (instanceOf(e, 8)) {
      throw toJs(castTo(e, 8));
    }
    if (instanceOf(e, 29)) {
      throw toJs(castTo(e, 29));
    }
  }
}
;
_.terminate = function terminate(){
  if (isNull(this.root)) {
    this.throwIfTerminated();
    this.terminated = true;
  }
   else {
    this.root.terminate();
  }
}
;
_.throwIfTerminated = function throwIfTerminated(){
  if (isNotNull(this.root)) {
    this.root.throwIfTerminated();
  }
   else if (this.terminated) {
    throw toJs(new jl.IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}
;
_.terminated = false;
cggl.Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 63, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl = function $clinit_IntStreamImpl(){
  jus.$clinit_IntStreamImpl = emptyMethod;
  jus.$clinit_TerminatableStream();
}
;
jus.IntStreamImpl = function IntStreamImpl(previous, spliterator){
  jus.$clinit_IntStreamImpl();
  jus.TerminatableStream.call(this, previous);
  this.$init_179();
  this.spliterator = spliterator;
}
;
defineClass(100, 63, {1:1}, jus.IntStreamImpl);
_.$init_179 = function $init_179(){
}
;
_.close_0 = function close_3(){
  getClassPrototype(63).close_0.call(this);
}
;
_.iterator = function iterator_13(){
  return this.iterator_0();
}
;
_.spliterator_0 = function spliterator_10(){
  return this.spliterator_1();
}
;
_.iterator_0 = function iterator_14(){
  return ju.iterator_11(this.spliterator_1());
}
;
_.spliterator_1 = function spliterator_9(){
  this.terminate();
  return this.spliterator;
}
;
cggl.Ljava_util_stream_IntStreamImpl_2_classLit = createForClass('java.util.stream', 'IntStreamImpl', 100, cggl.Ljava_util_stream_TerminatableStream_2_classLit);
jus.$clinit_IntStreamImpl$0methodref$ctor$Type = function $clinit_IntStreamImpl$0methodref$ctor$Type(){
  jus.$clinit_IntStreamImpl$0methodref$ctor$Type = emptyMethod;
}
;
defineClass(416, 1, {1:1, 20:1});
cggl.Ljava_util_stream_IntStreamImpl$0methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/0methodref$ctor$Type', 416, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$1 = function $clinit_IntStreamImpl$1(){
  jus.$clinit_IntStreamImpl$1 = emptyMethod;
}
;
defineClass(423, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$1_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/1', 423, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$1$lambda$0$Type = function $clinit_IntStreamImpl$1$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$1$lambda$0$Type = emptyMethod;
}
;
defineClass(424, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$1$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/1/lambda$0$Type', 424, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$1methodref$combine$Type = function $clinit_IntStreamImpl$1methodref$combine$Type(){
  jus.$clinit_IntStreamImpl$1methodref$combine$Type = emptyMethod;
}
;
defineClass(418, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$1methodref$combine$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/1methodref$combine$Type', 418, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$2 = function $clinit_IntStreamImpl$2(){
  jus.$clinit_IntStreamImpl$2 = emptyMethod;
}
;
defineClass(426, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$2_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/2', 426, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$2$lambda$0$Type = function $clinit_IntStreamImpl$2$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$2$lambda$0$Type = emptyMethod;
}
;
defineClass(427, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$2$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/2/lambda$0$Type', 427, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$2methodref$add$Type = function $clinit_IntStreamImpl$2methodref$add$Type(){
  jus.$clinit_IntStreamImpl$2methodref$add$Type = emptyMethod;
}
;
defineClass(425, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$2methodref$add$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/2methodref$add$Type', 425, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$3 = function $clinit_IntStreamImpl$3(){
  jus.$clinit_IntStreamImpl$3 = emptyMethod;
}
;
defineClass(428, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$3_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/3', 428, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$3methodref$valueOf$Type = function $clinit_IntStreamImpl$3methodref$valueOf$Type(){
  jus.$clinit_IntStreamImpl$3methodref$valueOf$Type = emptyMethod;
}
;
defineClass(431, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$3methodref$valueOf$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/3methodref$valueOf$Type', 431, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$Empty = function $clinit_IntStreamImpl$Empty(){
  jus.$clinit_IntStreamImpl$Empty = emptyMethod;
}
;
defineClass(401, 63, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$Empty_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/Empty', 401, cggl.Ljava_util_stream_TerminatableStream_2_classLit);
jus.$clinit_IntStreamImpl$FilterSpliterator = function $clinit_IntStreamImpl$FilterSpliterator(){
  jus.$clinit_IntStreamImpl$FilterSpliterator = emptyMethod;
}
;
defineClass(406, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/FilterSpliterator', 406, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$FilterSpliterator$lambda$0$Type = function $clinit_IntStreamImpl$FilterSpliterator$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$FilterSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(414, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/FilterSpliterator/lambda$0$Type', 414, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$LimitSpliterator = function $clinit_IntStreamImpl$LimitSpliterator(){
  jus.$clinit_IntStreamImpl$LimitSpliterator = emptyMethod;
}
;
defineClass(408, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$LimitSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/LimitSpliterator', 408, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$MapToDoubleSpliterator = function $clinit_IntStreamImpl$MapToDoubleSpliterator(){
  jus.$clinit_IntStreamImpl$MapToDoubleSpliterator = emptyMethod;
}
;
defineClass(405, 257, {1:1, 7:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToDoubleSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToDoubleSpliterator', 405, cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$MapToDoubleSpliterator$lambda$0$Type = function $clinit_IntStreamImpl$MapToDoubleSpliterator$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$MapToDoubleSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(413, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToDoubleSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToDoubleSpliterator/lambda$0$Type', 413, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$MapToIntSpliterator = function $clinit_IntStreamImpl$MapToIntSpliterator(){
  jus.$clinit_IntStreamImpl$MapToIntSpliterator = emptyMethod;
}
;
defineClass(402, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToIntSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToIntSpliterator', 402, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$MapToIntSpliterator$lambda$0$Type = function $clinit_IntStreamImpl$MapToIntSpliterator$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$MapToIntSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(410, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToIntSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToIntSpliterator/lambda$0$Type', 410, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$MapToLongSpliterator = function $clinit_IntStreamImpl$MapToLongSpliterator(){
  jus.$clinit_IntStreamImpl$MapToLongSpliterator = emptyMethod;
}
;
defineClass(404, 258, {1:1, 7:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToLongSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToLongSpliterator', 404, cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$MapToLongSpliterator$lambda$0$Type = function $clinit_IntStreamImpl$MapToLongSpliterator$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$MapToLongSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(412, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToLongSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToLongSpliterator/lambda$0$Type', 412, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$MapToObjSpliterator = function $clinit_IntStreamImpl$MapToObjSpliterator(){
  jus.$clinit_IntStreamImpl$MapToObjSpliterator = emptyMethod;
}
;
defineClass(403, 114, {1:1, 7:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToObjSpliterator', 403, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$MapToObjSpliterator$lambda$0$Type = function $clinit_IntStreamImpl$MapToObjSpliterator$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$MapToObjSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(411, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/MapToObjSpliterator/lambda$0$Type', 411, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$SkipSpliterator = function $clinit_IntStreamImpl$SkipSpliterator(){
  jus.$clinit_IntStreamImpl$SkipSpliterator = emptyMethod;
}
;
defineClass(407, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_IntStreamImpl$SkipSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/SkipSpliterator', 407, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_IntStreamImpl$SkipSpliterator$lambda$0$Type = function $clinit_IntStreamImpl$SkipSpliterator$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$SkipSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(415, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$SkipSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/SkipSpliterator/lambda$0$Type', 415, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$ValueConsumer = function $clinit_IntStreamImpl$ValueConsumer(){
  jus.$clinit_IntStreamImpl$ValueConsumer = emptyMethod;
}
;
defineClass(409, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/ValueConsumer', 409, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$0$Type = function $clinit_IntStreamImpl$lambda$0$Type(){
  jus.$clinit_IntStreamImpl$lambda$0$Type = emptyMethod;
}
;
defineClass(417, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$0$Type', 417, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$1$Type = function $clinit_IntStreamImpl$lambda$1$Type(){
  jus.$clinit_IntStreamImpl$lambda$1$Type = emptyMethod;
}
;
defineClass(419, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$1$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$1$Type', 419, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$2$Type = function $clinit_IntStreamImpl$lambda$2$Type(){
  jus.$clinit_IntStreamImpl$lambda$2$Type = emptyMethod;
}
;
defineClass(420, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$2$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$2$Type', 420, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$3$Type = function $clinit_IntStreamImpl$lambda$3$Type(){
  jus.$clinit_IntStreamImpl$lambda$3$Type = emptyMethod;
}
;
defineClass(421, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$3$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$3$Type', 421, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$4$Type = function $clinit_IntStreamImpl$lambda$4$Type(){
  jus.$clinit_IntStreamImpl$lambda$4$Type = emptyMethod;
}
;
defineClass(422, 1, {1:1, 9:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$4$Type', 422, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$5$Type = function $clinit_IntStreamImpl$lambda$5$Type(){
  jus.$clinit_IntStreamImpl$lambda$5$Type = emptyMethod;
}
;
defineClass(429, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$5$Type', 429, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_IntStreamImpl$lambda$6$Type = function $clinit_IntStreamImpl$lambda$6$Type(){
  jus.$clinit_IntStreamImpl$lambda$6$Type = emptyMethod;
}
;
defineClass(430, 1, {1:1});
cggl.Ljava_util_stream_IntStreamImpl$lambda$6$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$6$Type', 430, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Stream = function $clinit_Stream(){
  jus.$clinit_Stream = emptyMethod;
}
;
jus.of_5 = function of_5(t){
  jus.$clinit_Stream();
  return ju.singleton(t).stream();
}
;
cggl.Ljava_util_stream_Stream_2_classLit = createForInterface('java.util.stream', 'Stream');
jus.$clinit_Stream$0methodref$close$Type = function $clinit_Stream$0methodref$close$Type(){
  jus.$clinit_Stream$0methodref$close$Type = emptyMethod;
}
;
defineClass(331, 1, {1:1});
cggl.Ljava_util_stream_Stream$0methodref$close$Type_2_classLit = createForClass('java.util.stream', 'Stream/0methodref$close$Type', 331, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Stream$Builder = function $clinit_Stream$Builder(){
  jus.$clinit_Stream$Builder = emptyMethod;
}
;
cggl.Ljava_util_stream_Stream$Builder_2_classLit = createForInterface('java.util.stream', 'Stream/Builder');
jus.$clinit_Stream$1 = function $clinit_Stream$1(){
  jus.$clinit_Stream$1 = emptyMethod;
}
;
defineClass(328, 1, {1:1});
cggl.Ljava_util_stream_Stream$1_2_classLit = createForClass('java.util.stream', 'Stream/1', 328, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Stream$1methodref$close$Type = function $clinit_Stream$1methodref$close$Type(){
  jus.$clinit_Stream$1methodref$close$Type = emptyMethod;
}
;
defineClass(332, 1, {1:1});
cggl.Ljava_util_stream_Stream$1methodref$close$Type_2_classLit = createForClass('java.util.stream', 'Stream/1methodref$close$Type', 332, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Stream$2 = function $clinit_Stream$2(){
  jus.$clinit_Stream$2 = emptyMethod;
}
;
defineClass(329, 114, {1:1, 7:1});
cggl.Ljava_util_stream_Stream$2_2_classLit = createForClass('java.util.stream', 'Stream/2', 329, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_Stream$2$lambda$0$Type = function $clinit_Stream$2$lambda$0$Type(){
  jus.$clinit_Stream$2$lambda$0$Type = emptyMethod;
}
;
defineClass(330, 1, {1:1});
cggl.Ljava_util_stream_Stream$2$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'Stream/2/lambda$0$Type', 330, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_Stream$3 = function $clinit_Stream$3(){
  jus.$clinit_Stream$3 = emptyMethod;
}
;
defineClass(333, 114, {1:1, 7:1});
cggl.Ljava_util_stream_Stream$3_2_classLit = createForClass('java.util.stream', 'Stream/3', 333, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_Stream$4 = function $clinit_Stream$4(){
  jus.$clinit_Stream$4 = emptyMethod;
}
;
defineClass(334, 114, {1:1, 7:1});
cggl.Ljava_util_stream_Stream$4_2_classLit = createForClass('java.util.stream', 'Stream/4', 334, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl = function $clinit_StreamImpl(){
  jus.$clinit_StreamImpl = emptyMethod;
  jus.$clinit_TerminatableStream();
  jus.NULL_CONSUMER = new jus.StreamImpl$lambda$0$Type;
}
;
jus.StreamImpl = function StreamImpl(prev, spliterator){
  jus.$clinit_StreamImpl();
  jus.TerminatableStream.call(this, prev);
  this.$init_180();
  this.spliterator = spliterator;
}
;
jus.lambda$0_8 = function lambda$0_8(value_0){
  jus.$clinit_StreamImpl();
  {
  }
}
;
jus.lambda$2_1 = function lambda$2_1(arg0){
  jus.$clinit_StreamImpl();
  return initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 4:1}, 1, arg0, 5, 1);
}
;
jus.lambda$4 = function lambda$4(collector_0, a_1, t_2){
  jus.$clinit_StreamImpl();
  {
    collector_0.accumulator_0().accept_1(a_1, t_2);
    return a_1;
  }
}
;
jus.lambda$5 = function lambda$5(consumer_0, accumulator_1, item_2){
  jus.$clinit_StreamImpl();
  {
    consumer_0.accept_0(accumulator_1.apply_0(consumer_0.value_0, item_2));
  }
}
;
defineClass(98, 63, {1:1}, jus.StreamImpl);
_.$init_180 = function $init_180(){
}
;
_.close_0 = function close_4(){
  getClassPrototype(63).close_0.call(this);
}
;
_.collect_0 = function collect_1(collector){
  return collector.finisher_0().apply_1(this.reduce(collector.supplier_0().get_0(), new jus.StreamImpl$lambda$4$Type(collector), collector.combiner_0()));
}
;
_.flatMapToInt = function flatMapToInt(mapper){
  var flatMapSpliterator, spliteratorOfStreams;
  this.throwIfTerminated();
  spliteratorOfStreams = new jus.StreamImpl$MapToObjSpliterator(mapper, this.spliterator);
  flatMapSpliterator = new jus.StreamImpl$2(this, {l:4194303, m:4194303, h:524287}, 0, spliteratorOfStreams);
  return new jus.IntStreamImpl(this, flatMapSpliterator);
}
;
_.forEach = function forEach_4(action){
  this.forEachOrdered(action);
}
;
_.forEachOrdered = function forEachOrdered(action){
  this.terminate();
  this.spliterator.forEachRemaining_0(action);
}
;
_.iterator = function iterator_15(){
  return ju.iterator_12(this.spliterator_0());
}
;
_.map_1 = function map_1(mapper){
  this.throwIfTerminated();
  return new jus.StreamImpl(this, new jus.StreamImpl$MapToObjSpliterator(mapper, this.spliterator));
}
;
_.reduce = function reduce(identity, accumulator, combiner){
  var consumer;
  this.terminate();
  consumer = new jus.StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this.spliterator.forEachRemaining_0(new jus.StreamImpl$lambda$5$Type(consumer, accumulator));
  return consumer.value_0;
}
;
_.spliterator_0 = function spliterator_11(){
  this.terminate();
  return this.spliterator;
}
;
_.toArray_1 = function toArray_5(){
  return this.toArray_2(new jus.StreamImpl$0methodref$lambda$2$Type);
}
;
_.toArray_2 = function toArray_6(generator){
  var collected;
  collected = castTo(this.collect_0(jus.toList()), 26);
  return collected.toArray_0(castToArray(generator.apply_2(collected.size())));
}
;
cggl.Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 98, cggl.Ljava_util_stream_TerminatableStream_2_classLit);
jus.$clinit_StreamImpl$0methodref$lambda$2$Type = function $clinit_StreamImpl$0methodref$lambda$2$Type(){
  jus.$clinit_StreamImpl$0methodref$lambda$2$Type = emptyMethod;
}
;
jus.StreamImpl$0methodref$lambda$2$Type = function StreamImpl$0methodref$lambda$2$Type(){
  jus.$clinit_StreamImpl$0methodref$lambda$2$Type();
}
;
defineClass(191, 1, {1:1}, jus.StreamImpl$0methodref$lambda$2$Type);
_.apply_2 = function apply_3(arg0){
  return jus.lambda$2_1(arg0);
}
;
cggl.Ljava_util_stream_StreamImpl$0methodref$lambda$2$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/0methodref$lambda$2$Type', 191, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$1 = function $clinit_StreamImpl$1(){
  jus.$clinit_StreamImpl$1 = emptyMethod;
}
;
defineClass(378, 114, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$1_2_classLit = createForClass('java.util.stream', 'StreamImpl/1', 378, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$1$lambda$0$Type = function $clinit_StreamImpl$1$lambda$0$Type(){
  jus.$clinit_StreamImpl$1$lambda$0$Type = emptyMethod;
}
;
defineClass(379, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$1$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/1/lambda$0$Type', 379, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$1methodref$add$Type = function $clinit_StreamImpl$1methodref$add$Type(){
  jus.$clinit_StreamImpl$1methodref$add$Type = emptyMethod;
}
;
defineClass(384, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$1methodref$add$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/1methodref$add$Type', 384, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$2 = function $clinit_StreamImpl$2(){
  jus.$clinit_StreamImpl$2 = emptyMethod;
  ju.$clinit_Spliterators$AbstractIntSpliterator();
}
;
jus.StreamImpl$2 = function StreamImpl$2(this$0, $anonymous0, $anonymous1, val$spliteratorOfStreams){
  jus.$clinit_StreamImpl$2();
  this.this$01 = this$0;
  this.val$spliteratorOfStreams5 = val$spliteratorOfStreams;
  ju.Spliterators$AbstractIntSpliterator.call(this, $anonymous0, $anonymous1);
  this.$init_181();
}
;
defineClass(194, 82, {1:1, 7:1, 17:1}, jus.StreamImpl$2);
_.$init_181 = function $init_181(){
}
;
_.lambda$0_2 = function lambda$0_9(n_0){
  jus.$clinit_StreamImpl$2();
  {
    if (isNotNull(n_0)) {
      this.nextStream = n_0;
      this.next_0 = n_0.spliterator_1();
    }
  }
}
;
_.tryAdvance_0 = function tryAdvance_3(action){
  return this.tryAdvance_1(castTo(action, 9));
}
;
_.advanceToNextSpliterator = function advanceToNextSpliterator(){
  while (isNull(this.next_0)) {
    if (!this.val$spliteratorOfStreams5.tryAdvance(new jus.StreamImpl$2$lambda$0$Type(this))) {
      return false;
    }
  }
  return true;
}
;
_.tryAdvance_1 = function tryAdvance_4(action){
  while (this.advanceToNextSpliterator()) {
    if (this.next_0.tryAdvance_0(action)) {
      return true;
    }
     else {
      this.nextStream.close_0();
      this.nextStream = null;
      this.next_0 = null;
    }
  }
  return false;
}
;
cggl.Ljava_util_stream_StreamImpl$2_2_classLit = createForClass('java.util.stream', 'StreamImpl/2', 194, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_StreamImpl$2$lambda$0$Type = function $clinit_StreamImpl$2$lambda$0$Type(){
  jus.$clinit_StreamImpl$2$lambda$0$Type = emptyMethod;
}
;
jus.StreamImpl$2$lambda$0$Type = function StreamImpl$2$lambda$0$Type($$outer_0){
  jus.$clinit_StreamImpl$2$lambda$0$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(195, 1, {1:1}, jus.StreamImpl$2$lambda$0$Type);
_.accept_0 = function accept_5(arg0){
  this.$$outer_0.lambda$0_2(arg0);
}
;
cggl.Ljava_util_stream_StreamImpl$2$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/2/lambda$0$Type', 195, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$3 = function $clinit_StreamImpl$3(){
  jus.$clinit_StreamImpl$3 = emptyMethod;
}
;
defineClass(380, 258, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$3_2_classLit = createForClass('java.util.stream', 'StreamImpl/3', 380, cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit);
jus.$clinit_StreamImpl$3$lambda$0$Type = function $clinit_StreamImpl$3$lambda$0$Type(){
  jus.$clinit_StreamImpl$3$lambda$0$Type = emptyMethod;
}
;
defineClass(381, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$3$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/3/lambda$0$Type', 381, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$4 = function $clinit_StreamImpl$4(){
  jus.$clinit_StreamImpl$4 = emptyMethod;
}
;
defineClass(382, 257, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$4_2_classLit = createForClass('java.util.stream', 'StreamImpl/4', 382, cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit);
jus.$clinit_StreamImpl$4$lambda$0$Type = function $clinit_StreamImpl$4$lambda$0$Type(){
  jus.$clinit_StreamImpl$4$lambda$0$Type = emptyMethod;
}
;
defineClass(383, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$4$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/4/lambda$0$Type', 383, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$5 = function $clinit_StreamImpl$5(){
  jus.$clinit_StreamImpl$5 = emptyMethod;
}
;
defineClass(385, 114, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$5_2_classLit = createForClass('java.util.stream', 'StreamImpl/5', 385, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$5$2methodref$add$Type = function $clinit_StreamImpl$5$2methodref$add$Type(){
  jus.$clinit_StreamImpl$5$2methodref$add$Type = emptyMethod;
}
;
defineClass(386, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$5$2methodref$add$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/5/2methodref$add$Type', 386, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$6 = function $clinit_StreamImpl$6(){
  jus.$clinit_StreamImpl$6 = emptyMethod;
}
;
defineClass(387, 114, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$6_2_classLit = createForClass('java.util.stream', 'StreamImpl/6', 387, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$6$lambda$0$Type = function $clinit_StreamImpl$6$lambda$0$Type(){
  jus.$clinit_StreamImpl$6$lambda$0$Type = emptyMethod;
}
;
defineClass(388, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$6$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/6/lambda$0$Type', 388, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$Empty = function $clinit_StreamImpl$Empty(){
  jus.$clinit_StreamImpl$Empty = emptyMethod;
}
;
defineClass(364, 63, {1:1});
cggl.Ljava_util_stream_StreamImpl$Empty_2_classLit = createForClass('java.util.stream', 'StreamImpl/Empty', 364, cggl.Ljava_util_stream_TerminatableStream_2_classLit);
jus.$clinit_StreamImpl$FilterSpliterator = function $clinit_StreamImpl$FilterSpliterator(){
  jus.$clinit_StreamImpl$FilterSpliterator = emptyMethod;
}
;
defineClass(368, 114, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 368, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$FilterSpliterator$lambda$0$Type = function $clinit_StreamImpl$FilterSpliterator$lambda$0$Type(){
  jus.$clinit_StreamImpl$FilterSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(374, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 374, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$LimitSpliterator = function $clinit_StreamImpl$LimitSpliterator(){
  jus.$clinit_StreamImpl$LimitSpliterator = emptyMethod;
}
;
defineClass(370, 114, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$LimitSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/LimitSpliterator', 370, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$MapToDoubleSpliterator = function $clinit_StreamImpl$MapToDoubleSpliterator(){
  jus.$clinit_StreamImpl$MapToDoubleSpliterator = emptyMethod;
}
;
defineClass(367, 257, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$MapToDoubleSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToDoubleSpliterator', 367, cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit);
jus.$clinit_StreamImpl$MapToDoubleSpliterator$lambda$0$Type = function $clinit_StreamImpl$MapToDoubleSpliterator$lambda$0$Type(){
  jus.$clinit_StreamImpl$MapToDoubleSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(373, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$MapToDoubleSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToDoubleSpliterator/lambda$0$Type', 373, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$MapToIntSpliterator = function $clinit_StreamImpl$MapToIntSpliterator(){
  jus.$clinit_StreamImpl$MapToIntSpliterator = emptyMethod;
}
;
defineClass(365, 82, {1:1, 7:1, 17:1});
cggl.Ljava_util_stream_StreamImpl$MapToIntSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToIntSpliterator', 365, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
jus.$clinit_StreamImpl$MapToIntSpliterator$lambda$0$Type = function $clinit_StreamImpl$MapToIntSpliterator$lambda$0$Type(){
  jus.$clinit_StreamImpl$MapToIntSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(371, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$MapToIntSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToIntSpliterator/lambda$0$Type', 371, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$MapToLongSpliterator = function $clinit_StreamImpl$MapToLongSpliterator(){
  jus.$clinit_StreamImpl$MapToLongSpliterator = emptyMethod;
}
;
defineClass(366, 258, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$MapToLongSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToLongSpliterator', 366, cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit);
jus.$clinit_StreamImpl$MapToLongSpliterator$lambda$0$Type = function $clinit_StreamImpl$MapToLongSpliterator$lambda$0$Type(){
  jus.$clinit_StreamImpl$MapToLongSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(372, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$MapToLongSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToLongSpliterator/lambda$0$Type', 372, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$MapToObjSpliterator = function $clinit_StreamImpl$MapToObjSpliterator(){
  jus.$clinit_StreamImpl$MapToObjSpliterator = emptyMethod;
  ju.$clinit_Spliterators$AbstractSpliterator();
}
;
jus.StreamImpl$MapToObjSpliterator = function StreamImpl$MapToObjSpliterator(map_0, original){
  jus.$clinit_StreamImpl$MapToObjSpliterator();
  ju.Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & ~(4 | 1));
  this.$init_182();
  ji2.checkNotNull_0(map_0);
  this.map_0 = map_0;
  this.original = original;
}
;
defineClass(99, 114, {1:1, 7:1}, jus.StreamImpl$MapToObjSpliterator);
_.$init_182 = function $init_182(){
}
;
_.lambda$0_3 = function lambda$0_10(action_1, u_1){
  jus.$clinit_StreamImpl$MapToObjSpliterator();
  action_1.accept_0(this.map_0.apply_1(u_1));
}
;
_.tryAdvance = function tryAdvance_5(action){
  return this.original.tryAdvance(new jus.StreamImpl$MapToObjSpliterator$lambda$0$Type(this, action));
}
;
cggl.Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 99, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$MapToObjSpliterator$lambda$0$Type = function $clinit_StreamImpl$MapToObjSpliterator$lambda$0$Type(){
  jus.$clinit_StreamImpl$MapToObjSpliterator$lambda$0$Type = emptyMethod;
}
;
jus.StreamImpl$MapToObjSpliterator$lambda$0$Type = function StreamImpl$MapToObjSpliterator$lambda$0$Type($$outer_0, action_1){
  jus.$clinit_StreamImpl$MapToObjSpliterator$lambda$0$Type();
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}
;
defineClass(189, 1, {1:1}, jus.StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept_0 = function accept_6(arg0){
  this.$$outer_0.lambda$0_3(this.action_1, arg0);
}
;
cggl.Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 189, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$SkipSpliterator = function $clinit_StreamImpl$SkipSpliterator(){
  jus.$clinit_StreamImpl$SkipSpliterator = emptyMethod;
}
;
defineClass(369, 114, {1:1, 7:1});
cggl.Ljava_util_stream_StreamImpl$SkipSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/SkipSpliterator', 369, cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit);
jus.$clinit_StreamImpl$SkipSpliterator$lambda$0$Type = function $clinit_StreamImpl$SkipSpliterator$lambda$0$Type(){
  jus.$clinit_StreamImpl$SkipSpliterator$lambda$0$Type = emptyMethod;
}
;
defineClass(375, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$SkipSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/SkipSpliterator/lambda$0$Type', 375, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$ValueConsumer = function $clinit_StreamImpl$ValueConsumer(){
  jus.$clinit_StreamImpl$ValueConsumer = emptyMethod;
  jl.$clinit_Object();
  juf.$clinit_Consumer();
}
;
jus.StreamImpl$ValueConsumer = function StreamImpl$ValueConsumer(){
  jus.$clinit_StreamImpl$ValueConsumer();
  Object_0.call(this);
  this.$init_183();
}
;
defineClass(188, 1, {1:1}, jus.StreamImpl$ValueConsumer);
_.$init_183 = function $init_183(){
}
;
_.accept_0 = function accept_7(value_0){
  this.value_0 = value_0;
}
;
cggl.Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 188, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$lambda$0$Type = function $clinit_StreamImpl$lambda$0$Type(){
  jus.$clinit_StreamImpl$lambda$0$Type = emptyMethod;
}
;
jus.StreamImpl$lambda$0$Type = function StreamImpl$lambda$0$Type(){
  jus.$clinit_StreamImpl$lambda$0$Type();
}
;
defineClass(190, 1, {1:1}, jus.StreamImpl$lambda$0$Type);
_.accept_0 = function accept_8(arg0){
  jus.lambda$0_8(arg0);
}
;
cggl.Ljava_util_stream_StreamImpl$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$0$Type', 190, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$lambda$1$Type = function $clinit_StreamImpl$lambda$1$Type(){
  jus.$clinit_StreamImpl$lambda$1$Type = emptyMethod;
}
;
defineClass(376, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$lambda$1$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$1$Type', 376, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$lambda$3$Type = function $clinit_StreamImpl$lambda$3$Type(){
  jus.$clinit_StreamImpl$lambda$3$Type = emptyMethod;
}
;
defineClass(377, 1, {1:1});
cggl.Ljava_util_stream_StreamImpl$lambda$3$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$3$Type', 377, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$lambda$4$Type = function $clinit_StreamImpl$lambda$4$Type(){
  jus.$clinit_StreamImpl$lambda$4$Type = emptyMethod;
}
;
jus.StreamImpl$lambda$4$Type = function StreamImpl$lambda$4$Type(collector_0){
  jus.$clinit_StreamImpl$lambda$4$Type();
  this.collector_0 = collector_0;
}
;
defineClass(192, 1, {1:1}, jus.StreamImpl$lambda$4$Type);
_.apply_0 = function apply_4(arg0, arg1){
  return jus.lambda$4(this.collector_0, arg0, arg1);
}
;
cggl.Ljava_util_stream_StreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$4$Type', 192, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamImpl$lambda$5$Type = function $clinit_StreamImpl$lambda$5$Type(){
  jus.$clinit_StreamImpl$lambda$5$Type = emptyMethod;
}
;
jus.StreamImpl$lambda$5$Type = function StreamImpl$lambda$5$Type(consumer_0, accumulator_1){
  jus.$clinit_StreamImpl$lambda$5$Type();
  this.consumer_0 = consumer_0;
  this.accumulator_1 = accumulator_1;
}
;
defineClass(193, 1, {1:1}, jus.StreamImpl$lambda$5$Type);
_.accept_0 = function accept_9(arg0){
  jus.lambda$5(this.consumer_0, this.accumulator_1, arg0);
}
;
cggl.Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 193, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport = function $clinit_StreamSupport(){
  jus.$clinit_StreamSupport = emptyMethod;
  jl.$clinit_Object();
}
;
jus.intStream = function intStream(spliterator, parallel){
  return new jus.IntStreamImpl(null, spliterator);
}
;
jus.intStream_0 = function intStream_0(supplier, characteristics, parallel){
  jus.$clinit_StreamSupport();
  return jus.of_5(supplier).map_1(new jus.StreamSupport$1methodref$get$Type).flatMapToInt(new jus.StreamSupport$lambda$1$Type(parallel));
}
;
jus.lambda$1_5 = function lambda$1_5(parallel_0, intSpliterator_1){
  jus.$clinit_StreamSupport();
  {
    return jus.intStream(intSpliterator_1, parallel_0);
  }
}
;
jus.stream_1 = function stream_1(spliterator, parallel){
  jus.$clinit_StreamSupport();
  return new jus.StreamImpl(null, spliterator);
}
;
defineClass(308, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport_2_classLit = createForClass('java.util.stream', 'StreamSupport', 308, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$0methodref$get$Type = function $clinit_StreamSupport$0methodref$get$Type(){
  jus.$clinit_StreamSupport$0methodref$get$Type = emptyMethod;
}
;
defineClass(309, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport$0methodref$get$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/0methodref$get$Type', 309, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$1methodref$get$Type = function $clinit_StreamSupport$1methodref$get$Type(){
  jus.$clinit_StreamSupport$1methodref$get$Type = emptyMethod;
}
;
jus.StreamSupport$1methodref$get$Type = function StreamSupport$1methodref$get$Type(){
  jus.$clinit_StreamSupport$1methodref$get$Type();
}
;
defineClass(146, 1, {1:1}, jus.StreamSupport$1methodref$get$Type);
_.apply_1 = function apply_5(arg0){
  return castTo(arg0, 20).get_0();
}
;
cggl.Ljava_util_stream_StreamSupport$1methodref$get$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/1methodref$get$Type', 146, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$2methodref$get$Type = function $clinit_StreamSupport$2methodref$get$Type(){
  jus.$clinit_StreamSupport$2methodref$get$Type = emptyMethod;
}
;
defineClass(311, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport$2methodref$get$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/2methodref$get$Type', 311, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$3methodref$get$Type = function $clinit_StreamSupport$3methodref$get$Type(){
  jus.$clinit_StreamSupport$3methodref$get$Type = emptyMethod;
}
;
defineClass(313, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport$3methodref$get$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/3methodref$get$Type', 313, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$lambda$0$Type = function $clinit_StreamSupport$lambda$0$Type(){
  jus.$clinit_StreamSupport$lambda$0$Type = emptyMethod;
}
;
defineClass(310, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/lambda$0$Type', 310, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$lambda$1$Type = function $clinit_StreamSupport$lambda$1$Type(){
  jus.$clinit_StreamSupport$lambda$1$Type = emptyMethod;
}
;
jus.StreamSupport$lambda$1$Type = function StreamSupport$lambda$1$Type(parallel_0){
  jus.$clinit_StreamSupport$lambda$1$Type();
  this.parallel_0 = parallel_0;
}
;
defineClass(147, 1, {1:1}, jus.StreamSupport$lambda$1$Type);
_.apply_1 = function apply_6(arg0){
  return jus.lambda$1_5(this.parallel_0, arg0);
}
;
_.parallel_0 = false;
cggl.Ljava_util_stream_StreamSupport$lambda$1$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/lambda$1$Type', 147, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$lambda$2$Type = function $clinit_StreamSupport$lambda$2$Type(){
  jus.$clinit_StreamSupport$lambda$2$Type = emptyMethod;
}
;
defineClass(312, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport$lambda$2$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/lambda$2$Type', 312, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_StreamSupport$lambda$3$Type = function $clinit_StreamSupport$lambda$3$Type(){
  jus.$clinit_StreamSupport$lambda$3$Type = emptyMethod;
}
;
defineClass(314, 1, {1:1});
cggl.Ljava_util_stream_StreamSupport$lambda$3$Type_2_classLit = createForClass('java.util.stream', 'StreamSupport/lambda$3$Type', 314, cggl.Ljava_lang_Object_2_classLit);
jus.$clinit_TerminatableStream$lambda$0$Type = function $clinit_TerminatableStream$lambda$0$Type(){
  jus.$clinit_TerminatableStream$lambda$0$Type = emptyMethod;
}
;
jus.TerminatableStream$lambda$0$Type = function TerminatableStream$lambda$0$Type(throwables_0){
  jus.$clinit_TerminatableStream$lambda$0$Type();
  this.throwables_0 = throwables_0;
}
;
defineClass(196, 1, {1:1}, jus.TerminatableStream$lambda$0$Type);
_.accept_0 = function accept_10(arg0){
  jus.lambda$0_7(this.throwables_0, arg0);
}
;
cggl.Ljava_util_stream_TerminatableStream$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'TerminatableStream/lambda$0$Type', 196, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_ArrayHelper = function $clinit_ArrayHelper(){
  ji2.$clinit_ArrayHelper = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.asNativeArray = function asNativeArray(array){
  return ji2.uncheckedCast(array);
}
;
ji2.clone_0 = function clone_0(array, fromIndex, toIndex){
  ji2.$clinit_ArrayHelper();
  var result;
  result = ji2.unsafeClone(array, fromIndex, toIndex);
  return ji2.stampJavaTypeInfo_1(result, array);
}
;
ji2.copy_1 = function copy_1(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = ji2.unsafeClone(src_0, srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = ji2.asNativeArray(dest);
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = ji2.unsafeClone(src_0, batchStart, batchEnd);
    ji2.asNativeArray(spliceArgs).splice(0, 0, destOfs, overwrite?len:0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}
;
ji2.createFrom = function createFrom(array, length_0){
  ji2.$clinit_ArrayHelper();
  return ji2.stampJavaTypeInfo_1(new Array(length_0), array);
}
;
ji2.insertTo = function insertTo(array, index_0, value_0){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).splice(index_0, 0, value_0);
}
;
ji2.insertTo_0 = function insertTo_0(array, index_0, values){
  ji2.$clinit_ArrayHelper();
  ji2.copy_1(values, 0, array, index_0, values.length, false);
}
;
ji2.removeFrom = function removeFrom(array, index_0, deleteCount){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).splice(index_0, deleteCount);
}
;
ji2.setLength = function setLength(array, length_0){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).length = length_0;
}
;
ji2.unsafeClone = function unsafeClone(array, fromIndex, toIndex){
  ji2.$clinit_ArrayHelper();
  return ji2.asNativeArray(array).slice(fromIndex, toIndex);
}
;
defineClass(319, 1, {1:1});
ji2.ARRAY_PROCESS_BATCH_SIZE = 10000;
cggl.Ljavaemul_internal_ArrayHelper_2_classLit = createForClass('javaemul.internal', 'ArrayHelper', 319, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_ArrayHelper$NativeFunction = function $clinit_ArrayHelper$NativeFunction(){
  ji2.$clinit_ArrayHelper$NativeFunction = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_ArrayStamper = function $clinit_ArrayStamper(){
  ji2.$clinit_ArrayStamper = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.stampJavaTypeInfo_1 = function stampJavaTypeInfo_1(array, referenceType){
  ji2.$clinit_ArrayStamper();
  return cggl.stampJavaTypeInfo_0(array, referenceType);
}
;
defineClass(438, 1, {1:1});
cggl.Ljavaemul_internal_ArrayStamper_2_classLit = createForClass('javaemul.internal', 'ArrayStamper', 438, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_EmulatedCharset = function $clinit_EmulatedCharset(){
  ji2.$clinit_EmulatedCharset = emptyMethod;
  jnc.$clinit_Charset();
  ji2.UTF_8 = new ji2.EmulatedCharset$UtfCharset('UTF-8');
  ji2.ISO_LATIN_1 = new ji2.EmulatedCharset$LatinCharset('ISO-LATIN-1');
  ji2.ISO_8859_1 = new ji2.EmulatedCharset$LatinCharset('ISO-8859-1');
}
;
ji2.EmulatedCharset = function EmulatedCharset(name_0){
  ji2.$clinit_EmulatedCharset();
  jnc.Charset.call(this, name_0, null);
  this.$init_184();
}
;
defineClass(28, 27, {13:1, 1:1, 27:1, 28:1});
_.$init_184 = function $init_184(){
}
;
cggl.Ljavaemul_internal_EmulatedCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset', 28, cggl.Ljava_nio_charset_Charset_2_classLit);
ji2.$clinit_EmulatedCharset$LatinCharset = function $clinit_EmulatedCharset$LatinCharset(){
  ji2.$clinit_EmulatedCharset$LatinCharset = emptyMethod;
  ji2.$clinit_EmulatedCharset();
}
;
ji2.EmulatedCharset$LatinCharset = function EmulatedCharset$LatinCharset(name_0){
  ji2.$clinit_EmulatedCharset$LatinCharset();
  ji2.EmulatedCharset.call(this, name_0);
  this.$init_185();
}
;
defineClass(94, 28, {13:1, 1:1, 27:1, 28:1}, ji2.EmulatedCharset$LatinCharset);
_.$init_185 = function $init_185(){
}
;
_.decodeString = function decodeString(bytes, ofs, len){
  var chars, i;
  chars = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 19, len, 15, 1);
  for (i = 0; i < len; ++i) {
    chars[i] = narrow_char(bytes[ofs + i] & 255);
  }
  return chars;
}
;
_.getBytes = function getBytes(str){
  var bytes, i, n;
  n = jl.length__I__devirtual$_0(str);
  bytes = initUnidimensionalArray(cggl.B_classLit, {3:1, 1:1}, 19, n, 15, 1);
  for (i = 0; i < n; ++i) {
    bytes[i] = narrow_byte(jl.charAt_I_C__devirtual$_0(str, i) & 255);
  }
  return bytes;
}
;
cggl.Ljavaemul_internal_EmulatedCharset$LatinCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/LatinCharset', 94, cggl.Ljavaemul_internal_EmulatedCharset_2_classLit);
ji2.$clinit_EmulatedCharset$UtfCharset = function $clinit_EmulatedCharset$UtfCharset(){
  ji2.$clinit_EmulatedCharset$UtfCharset = emptyMethod;
  ji2.$clinit_EmulatedCharset();
}
;
ji2.EmulatedCharset$UtfCharset = function EmulatedCharset$UtfCharset(name_0){
  ji2.$clinit_EmulatedCharset$UtfCharset();
  ji2.EmulatedCharset.call(this, name_0);
  this.$init_186();
}
;
defineClass(151, 28, {13:1, 1:1, 27:1, 28:1}, ji2.EmulatedCharset$UtfCharset);
_.$init_186 = function $init_186(){
}
;
_.decodeString = function decodeString_0(bytes, ofs, len){
  var b, ch_0, charCount, chars, count, i, i0, outIdx;
  charCount = 0;
  for (i0 = 0; i0 < len;) {
    ++charCount;
    ch_0 = bytes[ofs + i0];
    if ((ch_0 & 192) == 128) {
      throw toJs(new jl.IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
     else if ((ch_0 & 128) == 0) {
      ++i0;
    }
     else if ((ch_0 & 224) == 192) {
      i0 += 2;
    }
     else if ((ch_0 & 240) == 224) {
      i0 += 3;
    }
     else if ((ch_0 & 248) == 240) {
      i0 += 4;
    }
     else {
      throw toJs(new jl.IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
    if (i0 > len) {
      throw toJs(new jl.IndexOutOfBoundsException('Invalid UTF8 sequence'));
    }
  }
  chars = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 19, charCount, 15, 1);
  outIdx = 0;
  count = 0;
  for (i = 0; i < len;) {
    ch_0 = bytes[ofs + i++];
    if ((ch_0 & 128) == 0) {
      count = 1;
      ch_0 &= 127;
    }
     else if ((ch_0 & 224) == 192) {
      count = 2;
      ch_0 &= 31;
    }
     else if ((ch_0 & 240) == 224) {
      count = 3;
      ch_0 &= 15;
    }
     else if ((ch_0 & 248) == 240) {
      count = 4;
      ch_0 &= 7;
    }
     else if ((ch_0 & 252) == 248) {
      count = 5;
      ch_0 &= 3;
    }
    while (--count > 0) {
      b = bytes[ofs + i++];
      if ((b & 192) != 128) {
        throw toJs(new jl.IllegalArgumentException_0('Invalid UTF8 sequence at ' + (ofs + i - 1) + ', byte=' + toHexString(b)));
      }
      ch_0 = ch_0 << 6 | b & 63;
    }
    outIdx += toChars(ch_0, chars, outIdx);
  }
  return chars;
}
;
_.encodeUtf8 = function encodeUtf8(bytes, ofs, codePoint){
  if (codePoint < 1 << 7) {
    bytes[ofs] = narrow_byte(codePoint & 127);
    return 1;
  }
   else if (codePoint < 1 << 11) {
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 31 | 192);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 2;
  }
   else if (codePoint < 1 << 16) {
    bytes[ofs++] = narrow_byte(codePoint >> 12 & 15 | 224);
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 63 | 128);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 3;
  }
   else if (codePoint < 1 << 21) {
    bytes[ofs++] = narrow_byte(codePoint >> 18 & 7 | 240);
    bytes[ofs++] = narrow_byte(codePoint >> 12 & 63 | 128);
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 63 | 128);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 4;
  }
   else if (codePoint < 1 << 26) {
    bytes[ofs++] = narrow_byte(codePoint >> 24 & 3 | 248);
    bytes[ofs++] = narrow_byte(codePoint >> 18 & 63 | 128);
    bytes[ofs++] = narrow_byte(codePoint >> 12 & 63 | 128);
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 63 | 128);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 5;
  }
  throw toJs(new jl.IllegalArgumentException_0('Character out of range: ' + codePoint));
}
;
_.getBytes = function getBytes_0(str){
  var byteCount, bytes, ch_0, i, i0, n, out;
  n = jl.length__I__devirtual$_0(str);
  byteCount = 0;
  for (i0 = 0; i0 < n;) {
    ch_0 = jl.codePointAt_I_I__devirtual$(str, i0);
    i0 += charCount_0(ch_0);
    if (ch_0 < 1 << 7) {
      byteCount++;
    }
     else if (ch_0 < 1 << 11) {
      byteCount += 2;
    }
     else if (ch_0 < 1 << 16) {
      byteCount += 3;
    }
     else if (ch_0 < 1 << 21) {
      byteCount += 4;
    }
     else if (ch_0 < 1 << 26) {
      byteCount += 5;
    }
  }
  bytes = initUnidimensionalArray(cggl.B_classLit, {3:1, 1:1}, 19, byteCount, 15, 1);
  out = 0;
  for (i = 0; i < n;) {
    ch_0 = jl.codePointAt_I_I__devirtual$(str, i);
    i += charCount_0(ch_0);
    out += this.encodeUtf8(bytes, out, ch_0);
  }
  return bytes;
}
;
cggl.Ljavaemul_internal_EmulatedCharset$UtfCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/UtfCharset', 151, cggl.Ljavaemul_internal_EmulatedCharset_2_classLit);
ji2.$clinit_NativeArray = function $clinit_NativeArray(){
  ji2.$clinit_NativeArray = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_NativeRegExp$Match = function $clinit_NativeRegExp$Match(){
  ji2.$clinit_NativeRegExp$Match = emptyMethod;
}
;
ji2.$asArray = function $asArray(this$static){
  ji2.$clinit_NativeRegExp$Match();
  return ji2.uncheckedCast(this$static);
}
;
jb.$clinit_InternalPreconditions_0 = function $clinit_InternalPreconditions_0(){
  jb.$clinit_InternalPreconditions_0 = emptyMethod;
  jl.$clinit_Object();
  jb.IS_TYPE_CHECKED_0 = jl.equals_Ljava_lang_Object__Z__devirtual$_2('DISABLED', 'ENABLED');
  jb.IS_ASSERTED_0 = jl.equals_Ljava_lang_Object__Z__devirtual$_2('DISABLED', 'ENABLED');
}
;
jb.checkCriticalType_0 = function checkCriticalType_0(expression){
  if (!expression) {
    throw toJs(new jl.ClassCastException);
  }
}
;
jb.checkType_1 = function checkType_1(expression){
  jb.$clinit_InternalPreconditions_0();
  var e;
  if (jb.IS_TYPE_CHECKED_0) {
    jb.checkCriticalType_0(expression);
  }
   else if (jb.IS_ASSERTED_0) {
    try {
      jb.checkCriticalType_0(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
defineClass(493, 1, {1:1});
jb.IS_ASSERTED_0 = false;
jb.IS_TYPE_CHECKED_0 = false;
cggl.Ljsinterop_base_InternalPreconditions_2_classLit = createForClass('jsinterop.base', 'InternalPreconditions', 493, cggl.Ljava_lang_Object_2_classLit);
jb.$clinit_Js = function $clinit_Js(){
  jb.$clinit_Js = emptyMethod;
  jl.$clinit_Object();
}
;
jb.asString_1 = function asString_1(obj){
  jb.$clinit_Js();
  jb.checkType_1(jsEquals(typeof(obj), 'string'));
  return jb.uncheckedCast_0(obj);
}
;
jb.cast = function cast(obj){
  jb.$clinit_Js();
  return obj;
}
;
jb.uncheckedCast_0 = function uncheckedCast_0(obj){
  jb.$clinit_Js();
  return obj;
}
;
defineClass(491, 1, {1:1});
cggl.Ljsinterop_base_Js_2_classLit = createForClass('jsinterop.base', 'Js', 491, cggl.Ljava_lang_Object_2_classLit);
cggl.Z_classLit = createForPrimitive('boolean', 'Z');
cggl.B_classLit = createForPrimitive('byte', 'B');
cggl.C_classLit = createForPrimitive('char', 'C');
cggl.D_classLit = createForPrimitive('double', 'D');
cggl.F_classLit = createForPrimitive('float', 'F');
cggl.I_classLit = createForPrimitive('int', 'I');
cggl.J_classLit = createForPrimitive('long', 'J');
cggl.S_classLit = createForPrimitive('short', 'S');
cggl.V_classLit = createForPrimitive('void', 'V');
cbwc.$clinit_MyApp();
_ = provide('MyApp', cbwc.MyApp);
_.startApp = cbwc.startApp;
cbupw.$clinit_BaduUI();
_ = provide('com.badu.ui.platforms.web.BaduUI', cbupw.BaduUI);
_.getHelloWorld = cbupw.getHelloWorld;
jl.$clinit_Boolean();
_ = provide('java.lang.Boolean');
_.$isInstance = $isInstance;
jl.$clinit_CharSequence();
_ = provide('java.lang.CharSequence');
_.$isInstance = $isInstance_1;
jl.$clinit_Comparable();
_ = provide('java.lang.Comparable');
_.$isInstance = $isInstance_2;
jl.$clinit_Double();
_ = provide('java.lang.Double');
_.$isInstance = $isInstance_3;
jl.$clinit_Number();
_ = provide('java.lang.Number');
_.$isInstance = jl.$isInstance_0;
jl.$clinit_String();
_ = provide('java.lang.String');
_.$isInstance = $isInstance_4;
jl.$clinit_Throwable();
_ = provide('java.lang.Throwable');
_.of = of;
var $entry = registerEntry_0();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[]]);
if (the_app) the_app.onScriptLoad(gwtOnLoad);})();