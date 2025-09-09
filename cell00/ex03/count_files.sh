#!/bin/bash
find . -type f -o -type d  -print
echo "----"
find . -type f -o -type d  | wc -l
