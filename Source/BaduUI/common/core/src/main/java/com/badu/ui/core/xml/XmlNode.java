package com.badu.ui.core.xml;

import java.util.List;
import java.util.Map;

public interface XmlNode {

   List<XmlNode> getChildren();

   String getTagName();

   Map<String, String> getAttributes();

}
