load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

licenses(["notice"])  # Apache 2.0

load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_application")
load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")


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
        "src/main/java/**/*.java",
        "src/main/resources/**/*.*"
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
#   $ bazel run third_party/java_src/j2cl/samples/helloworld/java/com/google/j2cl/samples/helloworld:helloworld_dev_server
#
# If you like to just save a file and see the results, you can just replace bazel w/ ibazel:
#   $ ibazel run third_party/java_src/j2cl/samples/helloworld/java/com/google/j2cl/samples/helloworld:helloworld_dev_server
#
# See the installation instructions for ibazel here:
# https://github.com/bazelbuild/bazel-watcher#installation
j2cl_application(
    name = "theapp",
    entry_points = ["badu.web.theapp"],
    deps = [":app"],
)
