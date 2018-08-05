#!/usr/bin/env bash
#
# Run Detox.
#
# Notes:
# 1) This script was originally designed to work with the wix Detox 
#    sample app located in the main repo here: http://www.github.com/wix/detox. 
#
# 2) Currently there are issues suppresing UI's when executing
#    `brew tap` commands so we chose to install applesimutils
#    from source instead.
#
# 3) Your Node version and Detox build command might be slightly different.
#
# 4) If you're using yarn, make sure to use it instead of npm, to avoid clashes in dependencies 


echo "Installing applesimutils..."
mkdir simutils
cd simutils
curl https://raw.githubusercontent.com/wix/homebrew-brew/master/AppleSimulatorUtils-0.5.22.tar.gz -o applesimutils.tar.gz
tar xzvf applesimutils.tar.gz
sh buildForBrew.sh .
cd ..
export PATH=$PATH:./simutils/build/Build/Products/Release

echo "Installing detox cli..."
yarn global add detox-cli

echo "Installing dependencies for detox tests..."
yarn

echo "Building the project..."
detox build

echo "Executing tests..."
yarn start &
yarn test