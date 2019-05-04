package com.badu.ui.core.components;

import com.badu.ui.core.PlatformComponent;

import java.util.Map;

public abstract class StatefulWidget<T extends StatelessWidget, N extends PlatformComponent> extends BUIWidget<T, N> {

   protected StatefulWidget(Map<String, String> attributes) { super(attributes); }
}
