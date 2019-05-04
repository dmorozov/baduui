package com.badu.ui.core.components;

import com.badu.ui.core.PlatformComponent;

import java.util.Map;

public abstract class StatelessWidget<T extends StatelessWidget, N extends PlatformComponent> extends BUIWidget<T, N> {

   protected StatelessWidget(Map<String, String> attributes) { super(attributes); }

}
