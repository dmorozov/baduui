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

package com.badu.ui.jsinterop.webcomponents;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import com.badu.ui.jsinterop.core.dom.Element;

/**
 * A base class for WebComponenent elements.
 *
 */
@JsType(isNative = true, namespace= JsPackage.GLOBAL)
public interface WebComponentElement extends Element {

    /**
     * Returns the value of the &quot;is&quot; property of the element. Each webcomponent has this attribute
     * set as soon as it has been upgraded and can fully be used.
     *
     * @return The &quot;is&quot; property or null in case the element has not yet been upgraded
     */
    @JsProperty
    public String getIs();

}
