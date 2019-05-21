package elemental2.xml;

import java.util.Arrays;

public enum SupportedType{
   TEXT_HTML("text/html"),
   TEXT_XML("text/xml"),
   APPLICATION_XML("application/xml"),
   APPLICATION_XHTML_XML("application/xhtml+xml"),
   IMAGE_SVG_XML("image/svg+xml");

   private String internalValue;

   SupportedType(String internalValue){
      this.internalValue = internalValue;
   }

   public String getInternalValue(){
      return this.internalValue;
   }

   public static SupportedType of(String value){
      switch(value){
      case "text/html":
         return TEXT_HTML;
      case "text/xml":
         return TEXT_XML;
      case "application/xml":
         return APPLICATION_XML;
      case "application/xhtml+xml":
         return APPLICATION_XHTML_XML;
      case "image/svg+xml":
         return IMAGE_SVG_XML;
      default:
         return null;
      }
   }

   public static SupportedType[] ofArray(String[] values) {
      return Arrays.<String>stream(values)
              .map(SupportedType::of)
              .toArray(SupportedType[]::new);
   }

}
