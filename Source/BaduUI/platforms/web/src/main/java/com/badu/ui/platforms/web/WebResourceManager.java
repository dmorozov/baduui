package com.badu.ui.platforms.web;

import com.badu.ui.core.Resource;
import com.badu.ui.core.ResourceManager;
import com.badu.ui.core.xml.XmlNode;
import com.badu.ui.platforms.web.resources.WebResource;
import com.badu.ui.platforms.web.resources.WebTemplateResource;

public class WebResourceManager implements ResourceManager {

   @Override public Resource<XmlNode> findTemplateById(String template) {
      return new WebTemplateResource(template);
   }

   @Override public Resource<String> findById(String template) {
      return new WebResource(template);
   }
}
