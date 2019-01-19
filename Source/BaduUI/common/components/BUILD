load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")

java_library(
    name = "badu-ui-components",
    visibility = ["//visibility:public"],
    srcs = glob(["src/main/java/**/*.java"]),
    resources = glob(["src/main/resources/**/*.*"]),
    deps = [
        "//BaduUI/common/core:badu-ui-core"
    ]
)

j2cl_library(
    name = "badu-ui-components-j2cl",
    visibility = ["//visibility:public"],
    srcs = glob([
        "src/main/java/**/*.java",
        "src/main/resources/**/*.*"
    ]),
    deps = [
        "//BaduUI/common/core:badu-ui-core-j2cl"
    ],
)
