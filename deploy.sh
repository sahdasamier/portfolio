#!/bin/bash

# Clean up previous builds
rm -rf .next out node_modules/.cache

# Install dependencies
npm install

# Build the project
npm run build

# Copy the custom index.html to the out directory
cp public/index.html out/index.html

# Create 200.html for client-side routing
cp out/index.html out/200.html

# Create .nojekyll file
touch out/.nojekyll

# Deploy to Firebase
firebase deploy --only hosting 