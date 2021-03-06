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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * The Document interface represent any web page loaded in the browser and serves as an entry point into the
 * web page's content, the DOM tree including elements such as &lt;body&gt; or &lt;table&gt;, and provides
 * functionality which is global to the document (such as obtaining the page's URL and creating new elements
 * in the document).
 *
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface Document extends Node, NodeSelector {

    @JsProperty
    String getReadyState();

    /**
     * @return Returns the &lt;head&gt; element of the current document.
     */
    @JsProperty
    Element getHead();

    /**
     * @return Returns the &lt;body&gt; element of the current document.
     */
    @JsProperty
    HTMLElement getBody();

    /**
     * Returns an object reference to the identified element.
     *
     * @param id A case-sensitive string representing the unique ID of the element
     * @return A reference to an Element object, or null if an element with the specified ID is not in the
     *         document.
     */
    Element getElementById(String id);

    /**
     * Returns an array-like object of all child elements which have all of the given class names. When called
     * on the document object, the complete document is searched, including the root node. You may also call
     * getElementsByClassName() on any element; it will return only elements which are descendants of the
     * specified root element with the given class names.
     *
     * @param tagname A string representing the list of class names to match; class names are separated by
     *            whitespace
     * @return
     */
    NodeList getElementsByClassName(String tagname);

    /**
     * Returns a NodeList collection with a given name in the (X)HTML document.
     *
     * @param elementName The value of the name attribute of the element.
     * @return A live NodeList Collection
     */
    NodeList getElementsByName(String elementName);

    /**
     * Returns an NodeList of elements with the given tag name. The complete document is searched,
     * including the root node. The returned NodeList is live, meaning that it updates itself
     * automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName()
     * again.
     *
     * @param tagname A string representing the name of the elements. The special string "*" represents all
     *            elements
     * @return A live NodeList of found elements in the order they appear in the tree.
     */
    NodeList getElementsByTagName(String tagname);

    /**
     * Creates the specified HTML element or an HTMLUnknownElement if the given element name isn't a known
     * one.
     *
     * @param tag Is a string that specifies the type of element to be created. The nodeName of the created
     *            element is initialized with the value of tagName. Don't use qualified names (like "html:a")
     *            with this method.
     * @return The created Element object.
     */
    <T> T createElement(String tag);

    Text createTextNode(String text);
}
