package com.badu.ui.core.components;

import com.badu.ui.core.PlatformComponent;

public abstract class StatelessWidget<T extends StatelessWidget> extends BUIWidget<T> {

   protected abstract PlatformComponent build();

}
