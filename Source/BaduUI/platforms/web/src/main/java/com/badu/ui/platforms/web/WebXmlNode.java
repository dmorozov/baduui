package com.badu.ui.platforms.web;

import com.badu.ui.core.utils.AttributeUtils;
import com.badu.ui.core.xml.XmlNode;
import elemental2.dom.Attr;
import elemental2.dom.NamedNodeMap;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

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
      NodeList<Node> nodes = this.node.childNodes;
      if (null != nodes) {
         for (int i = 0; i < nodes.length; i++) {
            Node node = nodes.item(i);
            if (Node.TEXT_NODE == node.nodeType && AttributeUtils.isEmpty(node.nodeValue)) {
               continue;
            }
            children.add(new WebXmlNode(node));
         }
      }

      return children;
   }

   @Override public String getTagName() {
      String nodeName = this.node.nodeName;
      return nodeName.indexOf('#') == 0 ? nodeName.substring(1) : nodeName;
   }

   @Override public Map<String, String> getAttributes() {
      Map<String, String> attributes = new HashMap<>();
      NamedNodeMap<Attr> attrs = this.node.attributes;
      if (null != attrs) {
         for (int i = 0; i < attrs.length; i++) {
            Node attr = attrs.item(i);
            attributes.put(attr.nodeName, attr.nodeValue);
         }
      }
      return attributes;
   }
}
