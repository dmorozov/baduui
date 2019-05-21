#!/bin/sh

export GWT_HOME=/opt/gwt-sdk

# ======================================
#       Compiler options
# ======================================
# 1 - to cleanup output before build
GWT_CLEAN_BUILD=1
# ERROR|WARN|INFO|TRACE|DEBUG|SPAM|ALL
GWT_LOG_LEVEL=INFO
# 0=none 9=maximum
GWT_OPTIMIZATION=9
# DETAILED, OBFUSCATED or PRETTY
GWT_SCRIPT_STYLE=OBFUSCATED
# The number of local workers to use when compiling permutations
GWT_WORKERS_COUNT=4
# extra compiler options
GWT_COMPILATION_ARGS_PROD="-generateJsInteropExports"
GWT_COMPILATION_ARGS_DEV="-generateJsInteropExports -setProperty user.agent=safari -strict"
GWT_COMPILATION_ARGS=$GWT_COMPILATION_ARGS_PROD

GWT_JVM_MEMORY=1024
GWT_JVM_OPTIONS="-Xms${GWT_JVM_MEMORY}M -Xmx${GWT_JVM_MEMORY}M -XX:+UseG1GC"
# ======================================

workingDir=target
outputDir=$workingDir/war
baseFolder=$(pwd)

classPathEntries=(
  $GWT_HOME/gwt-dev.jar
  $GWT_HOME/gwt-user.jar
  $GWT_HOME/validation-api-1.0.0.GA.jar
  $GWT_HOME/validation-api-1.0.0.GA-sources.jar
  $baseFolder/../../../libs/jsinterop/base-1.0.0-RC1.jar
  $baseFolder/../../../libs/jsinterop/jsinterop-annotations-1.0.2.jar
  $baseFolder/../../../libs/jsinterop/jsr305-3.0.2.jar
  $baseFolder/../../../libs/elemental2/elemental2-core-1.0.0-RC1.jar
  $baseFolder/../../../libs/elemental2/elemental2-dom-1.0.0-RC1.jar
  $baseFolder/../../../libs/elemental2/elemental2-promise-1.0.0-RC1.jar
  $baseFolder/../../../libs/elemental2/elemental2-webstorage-1.0.0-RC1.jar
  $baseFolder/../../../libs/jboss-elemento/elemento-core-0.7.0.jar
  $baseFolder/src/main/java
  $baseFolder/src/generated/java
  $baseFolder/src/main/resources
  $baseFolder/../../../common/core/src/main/java
  $baseFolder/../../../common/components/src/main/java
  $baseFolder/../../common/AppDrawerApp/src/main/java
)
classPath=$(IFS=: ; echo "${classPathEntries[*]}")

if [[ ! -e $workingDir ]]; then
    mkdir $workingDir
elif [[ ! -d $workingDir ]]; then
    echo "$workingDir already exists but is not a directory" 1>&2
fi

compileGWT () {
  start=`date +%s`

  if [[ ! -e $outputDir ]]; then
    mkdir $outputDir
  elif [[ ! -d $outputDir ]]; then
    if [ "$GWT_CLEAN_BUILD" -eq "1" ]; then
      rm -rf $outputDir
      mkdir $outputDir
    fi
  fi

  echo "Compiling: java $GWT_JVM_OPTIONS -cp $classPath com.google.gwt.dev.Compiler -workDir $workingDir -sourceLevel 1.8 -logLevel $GWT_LOG_LEVEL -optimize $GWT_OPTIMIZATION -style $GWT_SCRIPT_STYLE -localWorkers $GWT_WORKERS_COUNT -war $outputDir $GWT_COMPILATION_ARGS com.badu.PixelFlik"
  java $GWT_JVM_OPTIONS -cp $classPath com.google.gwt.dev.Compiler -workDir $workingDir -sourceLevel 1.8 -logLevel $GWT_LOG_LEVEL -optimize $GWT_OPTIMIZATION -style $GWT_SCRIPT_STYLE -localWorkers $GWT_WORKERS_COUNT -war $outputDir $GWT_COMPILATION_ARGS com.badu.PixelFlik
  # -processor org.jboss.gwt.elemento.processor.TemplatedProcessor

  COMPILE_STATUS=$?

  if [ "$COMPILE_STATUS" -eq "0" ]; then
     cp -r $baseFolder/src/main/resources/com/badu/ui/public/* $outputDir
     end=`date +%s`
     runtime=$((end-start))
     echo "Compilation complete successfully in $runtime seconds."
  fi
}

compileGWTDev () {
  echo "Compiling for DEV ..."
  export GWT_OPTIMIZATION=0
  export GWT_SCRIPT_STYLE=PRETTY

  # handle incremental build
  if [[ ! -e $outputDir ]]; then
    export GWT_COMPILATION_ARGS="$GWT_COMPILATION_ARGS_DEV"
  else
    echo "Enabling incremental build ..."
    export GWT_CLEAN_BUILD=0
    export GWT_COMPILATION_ARGS="$GWT_COMPILATION_ARGS_DEV -incremental" # -strict
  fi

  compileGWT
}

startDevServer () {
  echo "Starting GWT Dev server ..."

  compileGWTDev

  if [ "$COMPILE_STATUS" -eq "0" ]; then
    DEV_SERVER_CLASSPATH="$classPath:$GWT_HOME/gwt-servercode.jar"

    java -cp $DEV_SERVER_CLASSPATH com.google.gwt.dev.DevMode -superDevMode -startupUrl index.html -sourceLevel 1.8 -logLevel INFO -style $GWT_SCRIPT_STYLE -codeServerPort 9997 -port 8888 -workDir $workingDir -war $outputDir $GWT_COMPILATION_ARGS com.badu.PixelFlikDev

  fi

}


# See how we were called.
case "$1" in
compile)
 compileGWT
 ;;
compileDev)
 compileGWTDev
 ;;
dev)
 startDevServer
 ;;
*)
 echo $"Usage: $0 {compile|compileDev|dev}"
 exit 1
esac

exit 0
