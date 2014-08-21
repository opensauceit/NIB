#!/bin/bash

WORKSHOP="${WORKSHOP}"

learnyounode select ${WORKSHOP}

read INPUT

echo ${INPUT} > test.js

learnyounode verify test.js
