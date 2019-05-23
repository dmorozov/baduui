package com.badu.ui.platforms.web.resources;

import com.badu.ui.core.AbstractResource;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.exceptions.ResourceException;
import com.badu.ui.core.xml.XmlNode;
import com.badu.ui.core.xml.XmlParser;
import com.badu.ui.platforms.web.utils.AjaxUtils;

public class WebTemplateResource extends AbstractResource<XmlNode> {

   private final String templatePath;

   private final XmlParser xmlParser;

   public WebTemplateResource(final String templatePath) {
      this.templatePath = templatePath;
      this.xmlParser = BUIPlatform.PLATFORM.getXmlParser();
   }

   @Override public void loadResource() {
      AjaxUtils.get(templatePath)
              .then(response -> {
                 try {
                    successListener.OnReady(xmlParser.parse(response.asString()));
                 }
                 catch (Exception e) {
                    errorListener.OnError(new ResourceException("Unable to parse remote resource: " + templatePath, e));
                 }
                 return null;
              })
              .catch_(error -> {
                 errorListener.OnError(new ResourceException("Unable to fetch remote resource: " + templatePath + ". Error: " + error));
                 return null;
              });
   }
}
