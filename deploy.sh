#!/bin/bash -e

set -x

ng build --prod --output-path docs --base-href /online/

cp docs/index.html docs/404.html

echo "cometpenguinstudio.com" > docs/CNAME

git add .

git commit -m "$1"

git push