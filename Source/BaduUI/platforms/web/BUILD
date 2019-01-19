package(default_visibility = ["//visibility:public"])

licenses(["notice"])  # Apache 2.0

load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")


# This is the bazel target that compiles our J2CL library. Note that our BaduUI library
# include both Java and JavaScript sources. Usually you don't need to have any JavaScript
# code in your library but it can come in handy in some situations.
# Globing beyond a package is considered a bad practice and for legacy apps. Keeping libraries
# not too big will help with parallelization and performance of the build.

java_library(
    name = "badu_ui_web",
    srcs = glob([
        "src/main/java/**/*.java"
    ]),
    deps = [
        "@projectlibs//:jsinterop",
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
        "@projectlibs//:jsinterop-j2cl",
        "@projectlibs//:elemental2-j2cl",
        "//BaduUI/common/core:badu-ui-core-j2cl",
        "//BaduUI/common/components:badu-ui-components-j2cl"
    ],
)
