# BaduUI

First time:
- mkdir tools
- cd tools
- git clone https://github.com/google/j2cl.git j2cl
- git clone https://github.com/bazelbuild/rules_closure rules_closure 
- git clone https://github.com/bazelbuild/tulsi tulsi
- git clone https://github.com/google/j2objc j2objc

Note: Some repos under heavy development and can be broken. So they can cloned from fork repos:
git clone https://github.com/dmorozov/j2cl j2cl
git clone https://github.com/dmorozov/rules_closure rules_closure

Build:
- cd Source
- bazel build //TheApp/web:theapp

Run & watch for changes:
- cd Source
- ibazel run //TheApp/web:theapp_dev_server

goto in browser:
http://localhost:6006/theapp_dev.html

TBD: 
