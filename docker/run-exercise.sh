#!/bin/sh

if [ -z "${WORKSHOP}" ]; then
  echo "Please specify a workshop!"
  exit 1
fi

learnyounode select ${WORKSHOP} > /dev/null

read INPUT

if [ -z "${INPUT}" ]; then
  echo "Please supply an input for the exercise!"
  exit 1
fi

echo ${INPUT} > test.js

learnyounode verify test.js
