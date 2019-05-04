package com.badu.ui.core;

import com.badu.ui.core.xml.XmlNode;

public interface ResourceManager {

   Resource<XmlNode> findTemplateById(String template);

   Resource<String> findById(String template);

}
