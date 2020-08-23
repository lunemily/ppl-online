#!/bin/bash -e

set -x

ng build --prod --output-path docs --base-href /ppl-online/
echo ""

cp docs/index.html docs/404.html
echo ""

git add .
echo ""

git commit -m "$1"
echo ""

git push