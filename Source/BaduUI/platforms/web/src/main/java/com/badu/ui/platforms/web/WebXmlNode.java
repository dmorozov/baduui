package com.badu.ui.platforms.web;

import com.badu.ui.core.utils.AttributeUtils;
import com.badu.ui.core.xml.XmlNode;
import com.badu.ui.jsinterop.core.dom.Attr;
import com.badu.ui.jsinterop.core.dom.NamedNodeMap;
import com.badu.ui.jsinterop.core.dom.Node;
import com.badu.ui.jsinterop.core.dom.NodeList;
import com.badu.ui.jsinterop.core.util.DOMConstants;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebXmlNode implements XmlNode {

   private final Node node;

   public WebXmlNode(Node node) {
      this.node = node;
   }

   @Override public List<XmlNode> getChildren() {
      List<XmlNode> children = new ArrayList<>();
      NodeList nodes = this.node.getChildNodes();
      if (null != nodes) {
         for (int i = 0; i < nodes.getLength(); i++) {
            Node node = nodes.item(i);
            if (DOMConstants.NODE_TYPE_TEXT_NODE == node.getNodeType() && AttributeUtils.isEmpty(node.getNodeValue())) {
               continue;
            }
            children.add(new WebXmlNode(node));
         }
      }

      return children;
   }

   @Override public String getTagName() {
      String nodeName = this.node.getNodeName();
      return nodeName.indexOf('#') == 0 ? nodeName.substring(1) : nodeName;
   }

   @Override public Map<String, String> getAttributes() {
      Map<String, String> attributes = new HashMap<>();
      NamedNodeMap<Attr> attrs = this.node.getAttributes();
      if (null != attrs) {
         for (int i = 0; i < attrs.getLength(); i++) {
            Node attr = attrs.item(i);
            attributes.put(attr.getNodeName(), attr.getNodeValue());
         }
      }
      return attributes;
   }
}
