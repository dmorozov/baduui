package com.badu.ui.core.utils;

import com.badu.ui.core.components.common.Slot;
import com.badu.ui.core.components.common.SlotTarget;
import com.badu.ui.core.AbstractResource;
import com.badu.ui.core.BUIPlatform;
import com.badu.ui.core.RenderContext;
import com.badu.ui.core.Resource;
import com.badu.ui.core.ResourceManager;
import com.badu.ui.core.components.BUIWidget;
import com.badu.ui.core.ComponentFactory;
import com.badu.ui.core.ComponentRegistry;
import com.badu.ui.core.exceptions.ResourceException;
import com.badu.ui.core.exceptions.TemplateParsingException;
import com.badu.ui.core.xml.XmlNode;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TemplateParser {

   public static <T extends BUIWidget<T, ?>> Resource<T> loadFromTemplate(T widget, String template, final RenderContext context) {

      return new AbstractResource<T>() {
         @Override public void loadResource() {
            final ResourceManager resourceManager = BUIPlatform.PLATFORM.getResourceManager();
            final Resource.OnReady<T> successHandler = this.successListener;
            final Resource.OnError errorHandler = this.errorListener;

            final Resource<XmlNode> resource = resourceManager.findTemplateById(template);
            resource
                    .whenReady(t -> {
                       try {
                          traverseTreeNode(widget, t, context);

                          Map<String, XmlNode> slots = context.getProperty("unresolved-slots");
                          if (null != slots) {
                             for (Map.Entry<String, XmlNode> entry : slots.entrySet()) {
                                final String slotName = entry.getKey();
                                final SlotTarget slot = context.getProperty(slotName);
                                if (null != slot) {
                                   updateSlot(slot, entry.getValue(), context);
                                }
                                else {
                                   BUIPlatform.PLATFORM.log().error("Unknown Slot tag with target name '" + slotName + "'");
                                }
                             }
                          }

                          successHandler.OnReady(widget);
                       }
                       catch (TemplateParsingException e) {
                          errorHandler.OnError(new ResourceException("Unable to parse template: " + template, e));
                       }
                    })
                    .whenError(error -> {
                       errorHandler.OnError(error);
                    })
                    .loadResource();
         }
      };
   }

   private static void updateSlot(final SlotTarget slot, XmlNode rootNode, final RenderContext context)
           throws TemplateParsingException {

      final List<XmlNode> children = rootNode.getChildren();
      for (XmlNode childNode : children) {
         traverseTreeNode(slot, childNode, context);
      }
   }

   private static void traverseTreeNode(BUIWidget<?,?> widget, XmlNode rootNode, final RenderContext context) throws TemplateParsingException {
      if (Slot.TAG.equalsIgnoreCase(rootNode.getTagName())) {
         // slot should be dummy widget which just carry it's children but never render itself
         final String slotName = rootNode.getAttributes().get("name");
         if (null != slotName && slotName.length() > 0) {
            final SlotTarget slot = context.getProperty(slotName);
            if (null != slot) {
               updateSlot(slot, rootNode, context);
            }
            else {
               Map<String, XmlNode> slots = context.getProperty("unresolved-slots");
               if (null == slots) {
                  slots = new HashMap<>();
               }
               slots.put(slotName, rootNode);
               context.setProperty("unresolved-slots", slots);
            }
         }
         else {
            BUIPlatform.PLATFORM.log().error("Slot tag require target name");
         }
      }
      else {
         final ComponentFactory factory = ComponentRegistry.resolveFactory(rootNode.getTagName());
         if (null == factory)
            throw new TemplateParsingException("Unknown element with name '" + rootNode.getTagName() + "'");
         final BUIWidget<?,?> rootWidget = factory.createComponent(rootNode.getTagName(), rootNode.getAttributes());

         final List<XmlNode> children = rootNode.getChildren();
         for (XmlNode childNode : children) {
            traverseTreeNode(rootWidget, childNode, context);
         }

         widget.addChild(rootWidget);

         if (SlotTarget.TAG.equalsIgnoreCase(rootNode.getTagName())) {
            // slot target need to be created because we need placeholder widget to insert child content
            final SlotTarget slot = (SlotTarget) rootWidget;
            context.setProperty(slot.getName(), slot);
         }
      }
   }
}
