package(default_visibility = ["//visibility:public"])

licenses(["notice"])  # Apache 2.0

load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")

java_library(
    name = "badu_ui_web",
    srcs = glob([
        "src/main/java/**/*.java"
    ]),
    deps = [
        "@com_google_j2cl//:jsinterop-annotations",
        "@projectlibs//:elemental2",
        "//BaduUI/common/core:badu-ui-core",
        "//BaduUI/common/components:badu-ui-components"
    ],
)

j2cl_library(
    name = "badu_ui_web-j2cl",
    srcs = glob([
        "src/main/java/**/*.java",
        "src/main/java/**/*.js",
    ]),
    deps = [
        "@com_google_j2cl//:jsinterop-annotations-j2cl",
        "@projectlibs//:elemental2-j2cl",
        "//BaduUI/common/core:badu-ui-core-j2cl",
        "//BaduUI/common/components:badu-ui-components-j2cl"
    ],
)

alias(
    name = "badu_ui_web_css",
    actual = "//BaduUI/platforms/web/src/main/resources/public/css:badu_ui_web_css",
)
alias(
    name = "badu_ui_web_css_themes",
    actual = "//BaduUI/platforms/web/src/main/resources/public/css/themes:badu_ui_web_css_themes",
)
alias(
    name = "badu_ui_web_images",
    actual = "//BaduUI/platforms/web/src/main/resources/public/images:badu_ui_web_images",
)
alias(
    name = "index_html",
    actual = "//BaduUI/platforms/web/src/main/resources/public:index_html",
)
alias(
    name = "index_dev_html",
    actual = "//BaduUI/platforms/web/src/main/resources/public:index_dev_html",
)