#!/usr/bin/env bash

files=$(ls **/*.png **/*.jpeg **/*.jpg)

for file in $files ; do
   webpfile=$(echo $file | sed 's/\..*/.webp/')
   echo $file $webpfile
   cwebp -quiet $file -o $webpfile
done