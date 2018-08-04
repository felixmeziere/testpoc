set -ex

brew uninstall node@6

echo "Installing NVM..."
brew install nvm
source $(brew --prefix nvm)/nvm.sh

echo "Installing node 10..."
nvm install v10.7.0
nvm use --delete-prefix v10.7.0
nvm alias default v10.7.0

echo "Identifying selected node version..."
node --version
