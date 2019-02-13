load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

licenses(["notice"])  # Apache 2.0

load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary", "closure_js_library", "web_library")
load("@badu_ui//build_defs:rules.bzl", "web_app")

java_library(
    name = "main_app",
    srcs = glob([
        "src/main/java/**/*.java"
    ]),
    deps = [
        "//TheApp/app:the_app",
        "//BaduUI/platforms/web:badu_ui_web",
        "@projectlibs//:jsinterop",
        "@com_google_jsinterop_annotations_head//jar",
        "@projectlibs//:elemental2",
    ],
)
j2cl_library(
    name = "main_app-j2cl",
    srcs = glob([
        "src/main/java/**/*.java"
    ]),
    deps = [
        "@projectlibs//:jsinterop-j2cl",
        "//TheApp/app:the_app-j2cl",
        "//BaduUI/platforms/web:badu_ui_web-j2cl",
    ],
)

closure_js_library(
    name = "app",
    srcs = ["src/main/java/com/badu/theapp/web/app.js"],
    deps = [
        ":main_app-j2cl",
        "//BaduUI/platforms/web:badu_ui_web-j2cl",
    ],
)

# This is the bazel target that compiles and optimizes whole JavaScript / J2CL app.
# It provides couple of convenient targets:
#  :helloworld produces the helloworld.js that could be used for production.
#  :helloworld_dev produces the helloworld_dev.js that could be used for development.
#  :helloworld_dev_server serves helloworld_dev.js with couple of extras which you can
#    use as a simple development server.
#
# Give it a try:
#   $ bazel run web:theapp_dev_server
#
# If you like to just save a file and see the results, you can just replace bazel w/ ibazel:
#   $ ibazel run web:theapp_dev_server
#
# Navigate to 'http://localhost:6006/theapp_dev.html" in your browser
#
# See the installation instructions for ibazel here:
# https://github.com/bazelbuild/bazel-watcher#installation
web_app(
    name = "theapp",
    entry_points = ["badu.web.theapp"],
    extra_dev_resources = [
        "//BaduUI/platforms/web:index_dev_html"
    ],
    deps = [
        ":app",
    ],
    assets = [
        "//BaduUI/platforms/web:badu_ui_web_css",
        "//BaduUI/platforms/web:badu_ui_web_images"
    ]
)
