package com.badu.utils;

import javax.activation.MimetypesFileTypeMap;
import java.util.HashMap;
import java.util.Map;

public final class MimeUtils {

   public static final String DEFAULT_MIME_TYPE = "application/octet-stream";
   private static final char EXTENSION_SEPARATOR = '.';

   private static final Map<String, String> MIME_TYPES = new HashMap<String, String>() {{
      // web
      put("html",    "text/html");
      put("htm",     "text/html");
      put("css",     "text/css");
      put("js",      "text/javascript");
      put("json",    "application/json");
      put("xml",     "application/xml");
      // images
      put("ico",     "image/x-icon");
      put("png",     "image/png");
      put("gif",     "image/gif");
      put("jpeg",    "image/jpeg");
      put("jpg",     "image/jpeg");
      // fonts
      put("otf",     "font/otf");
      put("eot",     "application/vnd.ms-fontobject");
      put("svg",     "image/svg+xml");
      put("ttf",     "font/ttf");
      put("woff",    "font/woff");
      put("woff2",   "font/woff2");
      // documents
      put("csv",     "text/csv");
      put("pdf",     "application/pdf");
      put("zip",     "application/zip");
   }};

   public static String resolveMimeType(final String fileName) {
      final String ext = fileExtension(fileName);

      if (!MIME_TYPES.containsKey(ext)) {
         MimetypesFileTypeMap mimeTypesMap = new MimetypesFileTypeMap();
         return mimeTypesMap.getContentType(fileName);
      }

      return MIME_TYPES.getOrDefault(ext, DEFAULT_MIME_TYPE);
   }

   public static String fileExtension(String fileName) {
      final int pos = fileName.lastIndexOf(EXTENSION_SEPARATOR);
      return pos > 0 ? fileName.substring(pos + 1) : fileName;
   }
}
