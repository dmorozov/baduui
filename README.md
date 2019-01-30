# BaduUI

First time:
- mkdir tools
- cd tools
- git clone https://github.com/google/j2cl.git j2cl

Build:
- cd Source
- bazel build //TheApp/web:theapp

Run & watch for changes:
- cd Source
- ibazel run //TheApp/web:theapp_dev_server

goto in browser:
http://localhost:6006/theapp_dev.html

TBD: 
