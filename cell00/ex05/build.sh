#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

for name in "$@"; do
  
  dir="ex${name}"

  if [ -e "$dir" ]; then
    echo "Skipping: $dir (already exists)"
  else
    mkdir -p "$dir" && echo "Created: $dir"
fi
done