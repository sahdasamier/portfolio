#!/bin/bash

# Exit on error
set -e

# Clean the project
echo "Cleaning project..."
yarn clean

# Install dependencies
echo "Installing dependencies..."
yarn install

# Build the project
echo "Building the project..."
yarn build

# Verify the out directory exists
if [ ! -d "out" ]; then
    echo "Error: 'out' directory was not created during build"
    exit 1
fi

# Create necessary directories and copy files
echo "Setting up static files..."

# Create projects directory if it doesn't exist
mkdir -p out/projects

# Copy index.html to error pages
cp out/index.html out/404.html
cp out/index.html out/500.html

# Copy index.html to projects directory for client-side routing
cp out/index.html out/projects/index.html

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy --only hosting

echo "Deployment complete!" 