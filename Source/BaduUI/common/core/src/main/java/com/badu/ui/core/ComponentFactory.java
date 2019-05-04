package com.badu.ui.core;

import com.badu.ui.core.components.BUIWidget;

import java.util.Map;

public interface ComponentFactory {

   BUIWidget<?,?> createComponent(String tagName, Map<String, String> attributes);
}
