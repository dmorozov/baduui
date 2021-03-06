/*
 * Copyright 2015 David Preindl <david.preindl@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.badu.ui.jsinterop.core.events;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface Event {

    public interface Events {

        public static final String CLICK = "click";
        public static final String CONTEXTMENU = "contextmenu";
        public static final String DBLCLICK = "dblclick";
        public static final String CHANGE = "change";
        public static final String MOUSEDOWN = "mousedown";
        public static final String MOUSEMOVE = "mousemove";
        public static final String MOUSEOUT = "mouseout";
        public static final String MOUSEOVER = "mouseover";
        public static final String MOUSEUP = "mouseup";
        public static final String MOUSEWHEEL = "mousewheel";
        public static final String FOCUS = "focus";
        public static final String FOCUSIN = "focusin";
        public static final String FOCUSOUT = "focusout";
        public static final String BLUR = "blur";
        public static final String KEYDOWN = "keydown";
        public static final String KEYPRESS = "keypress";
        public static final String KEYUP = "keyup";
        public static final String SCROLL = "scroll";
        public static final String BEFORECUT = "beforecut";
        public static final String CUT = "cut";
        public static final String BEFORECOPY = "beforecopy";
        public static final String COPY = "copy";
        public static final String BEFOREPASTE = "beforepaste";
        public static final String PASTE = "paste";
        public static final String DRAGENTER = "dragenter";
        public static final String DRAGOVER = "dragover";
        public static final String DRAGLEAVE = "dragleave";
        public static final String DROP = "drop";
        public static final String DRAGSTART = "dragstart";
        public static final String DRAG = "drag";
        public static final String DRAGEND = "dragend";
        public static final String RESIZE = "resize";
        public static final String SELECTSTART = "selectstart";
        public static final String SUBMIT = "submit";
        public static final String ERROR = "error";
        public static final String WEBKITANIMATIONSTART = "webkitAnimationStart";
        public static final String WEBKITANIMATIONITERATION = "webkitAnimationIteration";
        public static final String WEBKITANIMATIONEND = "webkitAnimationEnd";
        public static final String WEBKITTRANSITIONEND = "webkitTransitionEnd";
        public static final String INPUT = "input";
        public static final String INVALID = "invalid";
        public static final String TOUCHSTART = "touchstart";
        public static final String TOUCHMOVE = "touchmove";
        public static final String TOUCHEND = "touchend";
        public static final String TOUCHCANCEL = "touchcancel";
    }

    @JsProperty
    Detail getDetail();

    @JsProperty
    EventTarget getTarget();

    /**
     * Cancels the event (if it is cancelable).
     */
    void preventDefault();

    /**
     * For this particular event, no other listener will be called. Neither
     * those attached on the same element, nor those attached on elements which
     * will be traversed later (in capture phase, for instance)
     */
    void stopImmediatePropagation();

    /**
     * Stops the propagation of events further along in the DOM.
     */
    void stopPropagation();

    @JsType(isNative = true)
    public interface Detail {}

}
