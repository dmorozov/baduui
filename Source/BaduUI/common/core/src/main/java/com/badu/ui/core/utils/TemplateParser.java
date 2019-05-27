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

   private static final String TAG_TEMPLATE = "template";

   private final RenderContext context;

   public TemplateParser(final RenderContext context) {
      this.context = context;
   }

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
                          final TemplateParser parser = new TemplateParser(context);
                          parser.parse(widget, t);

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

   public void parse(BUIWidget<?,?> widget, XmlNode rootNode) throws TemplateParsingException {
      parseTreeNode(widget, rootNode);
      postProcess();
   }

   private void postProcess() throws TemplateParsingException {
      postProcessSlots();
   }

   protected void postProcessSlots() throws TemplateParsingException {
      final Map<String, SlotTarget> slotTargets = getNodeMap(context, RenderContext.PROP_SLOT_TARGETS);
      final Map<String, XmlNode> slots = getNodeMap(context, RenderContext.PROP_SLOT_CONTENTS);
      if (null != slots) {
         for (Map.Entry<String, XmlNode> entry : slots.entrySet()) {
            final String slotName = entry.getKey();
            final SlotTarget slot = slotTargets.get(slotName);
            if (null != slot) {
               updateSlot(slot, entry.getValue());
               // remove slot content from the map because we've it already feed it to the slot target
               slots.remove(slotName);
            }
            // else {
            //    BUIPlatform.PLATFORM.log().error("Unknown Slot tag with target name '" + slotName + "'");
            // }
         }
      }
   }

   protected void updateSlot(final SlotTarget slot, XmlNode rootNode)
           throws TemplateParsingException {

      final List<XmlNode> children = rootNode.getChildren();
      for (XmlNode childNode : children) {
         parseTreeNode(slot, childNode);
      }
   }

   private void parseTreeNode(BUIWidget<?,?> widget, XmlNode rootNode) throws TemplateParsingException {
      final String tagName = rootNode.getTagName();

      if (TAG_TEMPLATE.equalsIgnoreCase(tagName)) {
         final List<XmlNode> children = rootNode.getChildren();
         for (XmlNode childNode : children) {
            parseTreeNode(widget, childNode);
         }
      }
      else if (Slot.TAG.equalsIgnoreCase(tagName)) {
         // slot should be dummy widget which just carry it's children but never render itself
         final String slotName = rootNode.getAttributes().get("name");
         if (null != slotName && slotName.length() > 0) {
            final Map<String, SlotTarget> slotTargets = getNodeMap(context, RenderContext.PROP_SLOT_TARGETS);
            final SlotTarget slot = slotTargets.get(slotName);
            if (null != slot) {
               updateSlot(slot, rootNode);
            }
            else {
               final Map<String, XmlNode> slots = getNodeMap(context, RenderContext.PROP_SLOT_CONTENTS);
               slots.put(slotName, rootNode);
            }
         }
         else {
            BUIPlatform.PLATFORM.log().error("Slot tag require target name");
         }
      }
      else {
         final ComponentFactory factory = ComponentRegistry.resolveFactory(tagName);
         if (null == factory)
            throw new TemplateParsingException("Unknown element with name '" + tagName + "'");
         final BUIWidget<?,?> rootWidget = factory.createComponent(tagName, rootNode.getAttributes());

         if (SlotTarget.TAG.equalsIgnoreCase(tagName)) {
            // slot target need to be created because we need placeholder widget to insert child content
            final SlotTarget slotTarget = (SlotTarget) rootWidget;
            final String slotName = slotTarget.getName();
            Map<String, SlotTarget> slotTargets = getNodeMap(context, RenderContext.PROP_SLOT_TARGETS);
            slotTargets.put(slotName, slotTarget);

            final Map<String, XmlNode> slots = getNodeMap(context, RenderContext.PROP_SLOT_CONTENTS);
            final XmlNode slot = slots.get(slotName);
            if (null != slot) {
               updateSlot(slotTarget, slot);
               // remove slot content from the map because we've it already feed it to the slot target
               slots.remove(slotName);
            }
         }
         else {
            final List<XmlNode> children = rootNode.getChildren();
            for (XmlNode childNode : children) {
               parseTreeNode(rootWidget, childNode);
            }
         }

         widget.addChild(rootWidget);
         rootWidget.build(context);
      }
   }

   protected <V, T extends Map<String, V>> T getNodeMap(final RenderContext context, final String mapName) {
      Map<String, Object> slots = context.getProperty(mapName);
      if (null == slots) {
         slots = new HashMap<>();
         context.setProperty(mapName, slots);
      }

      return (T) slots;
   }
}
