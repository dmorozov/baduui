package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_closure//closure:defs.bzl", "web_library")

web_library(
    name = "index_html",
    path = "/",
    srcs = [
        "index_j2cl.html"
    ],
    deps = [
        "//BaduUI/platforms/web:badu_ui_web_css",
        "//BaduUI/platforms/web:badu_ui_web_images",
        "//BaduUI/platforms/web:badu_ui_web_css_themes",
        "//BaduUI/platforms/web:badu_ui_app_icon"
    ],
    suppress = [
        "strictDependencies"
    ],
)

web_library(
    name = "index_dev_html",
    path = "/",
    srcs = [
        "index_j2cl_dev.html"
    ],
    suppress = [
        "strictDependencies"
    ],
    deps = [
        "//BaduUI/platforms/web:badu_ui_web_css",
        "//BaduUI/platforms/web:badu_ui_web_images",
        "//BaduUI/platforms/web:badu_ui_web_css_themes",
        "//BaduUI/platforms/web:badu_ui_app_icon"
    ],    
)
