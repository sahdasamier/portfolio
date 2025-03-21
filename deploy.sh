#!/bin/bash

# Clean and install dependencies
echo "Cleaning and installing dependencies..."
yarn run clean
yarn install

# Build the project
echo "Building the project..."
yarn run build

# Create necessary directories and copy files
echo "Setting up static files..."
cp out/index.html out/404.html
mkdir -p out/projects
cp out/index.html out/projects/index.html

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy --only hosting

echo "Deployment complete!" 