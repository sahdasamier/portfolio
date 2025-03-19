#!/bin/bash

# Clean up previous builds
rm -rf .next out node_modules/.cache

# Install dependencies
npm install

# Build the project
npm run build

# Ensure 200.html exists (for client-side routing)
cp out/index.html out/200.html

# Create .nojekyll file
touch out/.nojekyll

# Deploy to Firebase
firebase deploy --only hosting 