#! /bin/sh

set -eux

version="1.27.0"

rm -rf ./janet
curl -L https://github.com/janet-lang/janet/archive/refs/tags/v$version.tar.gz > janet.tar.gz
tar xf janet.tar.gz
mv janet-$version janet

cd ./janet
make
mkdir -p ../csrc
cp build/c/janet.c ../csrc/
cp build/janet.h ../csrc/
# cp src/conf/janetconf.h ../csrc/
