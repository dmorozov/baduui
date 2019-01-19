load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")

java_library(
    name = "the_app",
    visibility = ["//visibility:public"],
    srcs = glob(["src/main/java/**/*.java"]),
    resources = glob(["src/main/resources/**/*.*"]),
    deps = [
        "//BaduUI/common/core:badu-ui-core",
        "//BaduUI/common/components:badu-ui-components",
    ]
)

j2cl_library(
    name = "the_app-j2cl",
    visibility = ["//visibility:public"],
    srcs = glob([
        "src/main/java/**/*.java",
        "src/main/resources/**/*.*"
    ]),
    deps = [
        "//BaduUI/common/core:badu-ui-core-j2cl",
        "//BaduUI/common/components:badu-ui-components-j2cl",
    ],
)
