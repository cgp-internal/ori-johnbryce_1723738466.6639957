#!/bin/bash
set -e

# Installing Node.js
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Initializing a new Node.js project
npm init -y

# Installing Express.js
npm install express