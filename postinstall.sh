#!/bin/bash
if [ ! -z ${HEROKU_APP+x} ]; then
  yarn --cwd ./server
fi