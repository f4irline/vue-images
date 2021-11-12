#!/bin/bash
if [ ! -z ${HEROKU_APP+x} ]; then
  yarn build:prod && yarn --cwd ./server
fi