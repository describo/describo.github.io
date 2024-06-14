#!/usr/bin/env bash

FOLDER=${1:-"."}

function createWebPImages() {
    file=$1
    extension=$2
    webpfile=$(echo $file | sed "s/$extension/.webp/")
    echo "$file -> $webpfile"
    cwebp -quiet $file -o $webpfile
}
export -f createWebPImages


# Create webp images
find $FOLDER -type f -name *.png -exec bash -c 'createWebPImages "$0" .png' {} \;
find $FOLDER -type f -name *.jpeg -exec bash -c 'createWebPImages "$0" .jpeg' {} \;
find $FOLDER -type f -name *.jpg -exec bash -c 'createWebPImages "$0" .jpg' {} \;

# create mp4 and webm videos