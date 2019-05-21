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

package com.badu.ui.jsinterop.core.dom;

import com.badu.ui.jsinterop.core.events.Event;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import com.badu.ui.jsinterop.core.css.CssStyleDeclaration;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface Element extends Node, NodeSelector {

    @JsProperty
    void setOnmousedown(Element.OnmousedownFn callback);
    @JsProperty
    Element.OnmousedownFn getOnmousedown();

    @JsProperty
    void setOnmousemove(Element.OnmousemoveFn callback);
    @JsProperty
    Element.OnmousemoveFn getOnmousemove();

    @JsProperty
    void setOnmouseout(Element.OnmouseoutFn callback);
    @JsProperty
    Element.OnmouseoutFn getOnmouseout();

    @JsProperty
    void setOnmouseover(Element.OnmouseoverFn callback);
    @JsProperty
    Element.OnmouseoverFn getOnmouseover();

    @JsProperty
    void setOnmouseup(Element.OnmouseupFn callback);
    @JsProperty
    Element.OnmouseupFn getOnmouseup();

    @JsProperty
    void setOnmousewheel(Element.OnmousewheelFn callback);
    @JsProperty
    Element.OnmousewheelFn getOnmousewheel();

    @JsProperty
    void setOnclick(Element.OnclickFn callback);
    @JsProperty
    Element.OnclickFn getOnclick();

    /**
     * Getter for innerHTML attribute
     *
     * @return The markup of the element's content.
     */
    @JsProperty
    public String getInnerHTML();

    /**
     * Setter for innerHTML attribute
     *
     * @param s The markup of the element's content.
     */
    @JsProperty
    public void setInnerHTML(String s);

    /**
     * Getter for classList attribute
     *
     * @return The list of class attributes.
     */
    @JsProperty
    public DomTokenList getClassList();

    @JsProperty
    public CssStyleDeclaration getStyle();

    /**
     * Adds a new attribute or changes the value of an existing attribute on the specified element.
     *
     * @param name The name of the attribute as a string.
     * @param value The desired new value of the attribute.
     */
    public void setAttribute(String name, Object value);

    /**
     * Returns the value of a specified attribute on the element. If the given attribute does not exist, the
     * value returned will either be null or ""
     *
     * @param name The name of the attribute whose value you want to get.
     * @return The value of a specified attribute on the element or null
     */
    public String getAttribute(String name);

    /**
     * Method returns whether the current element has the specified attribute
     *
     * @param name A string representing the name of the attribute.
     * @return Indicates whether the current element has the specified attribute
     */
    public boolean hasAttribute(String name);

    /**
     * Removes an attribute from the specified element.
     *
     * @param name The name of the attribute to be removed from element.
     */
    public void removeAttribute(String name);

    public void remove();

    @JsFunction
    public interface OnmousedownFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmousemoveFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmouseoutFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmouseoverFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmouseupFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnmousewheelFn {
        Object onInvoke(Event p0);
    }

    @JsFunction
    public interface OnclickFn {
        Object onInvoke(Event p0);
    }
}
