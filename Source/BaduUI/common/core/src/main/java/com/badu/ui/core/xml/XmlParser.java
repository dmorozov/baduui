package com.badu.ui.core.xml;

import com.badu.ui.core.exceptions.TemplateParsingException;

public interface XmlParser {
   XmlNode parse(final String xml) throws TemplateParsingException;
}
