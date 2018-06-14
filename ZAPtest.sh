#!/bin/bash

# Abort script on error
set -e
#bash /Applications/OWASP\ ZAP.app/Contents/Java/zap.sh -daemon
#zap.sh -daemon
zap-cli --zap-url http://zap status -t 60
zap-cli --zap-url http://zap open-url http://127.0.0.1

# exclude urls you want to ignore here
zap-cli --zap-url http://zap exclude ".*bower_components.*"

npm test
#zap-cli --zap-url http://zap report -o /usr/src/wrk/report.html -f html

zap-cli --zap-url http://zap alerts --alert-level Low
