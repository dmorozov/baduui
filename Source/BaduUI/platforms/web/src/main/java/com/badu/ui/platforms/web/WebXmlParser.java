package com.badu.ui.platforms.web;

import com.badu.ui.core.exceptions.TemplateParsingException;
import com.badu.ui.core.xml.XmlNode;
import com.badu.ui.core.xml.XmlParser;
import elemental2.dom.Node;
import elemental2.xml.DOMParser;
import elemental2.xml.SupportedType;

public class WebXmlParser implements XmlParser {

   @Override public XmlNode parse(String xml) throws TemplateParsingException {
      DOMParser parser = new DOMParser();
      Node doc = parser.parseFromString(xml, SupportedType.APPLICATION_XML);
      if (doc.childNodes.length != 1) {
         throw new TemplateParsingException("Template must have single root node");
      }
      return new WebXmlNode(doc.childNodes.item(0));
   }
}
