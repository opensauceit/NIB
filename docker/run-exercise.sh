#!/bin/sh

if [ -z "${WORKSHOP}" ]; then
  echo "Please specify a workshop!"
  exit 1
fi

learnyounode select ${WORKSHOP} > /dev/null

read INPUT

echo ${INPUT} > test.js

learnyounode verify test.js
