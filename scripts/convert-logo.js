const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertLogo() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));
    
    // Convert to PNG with a white background
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(__dirname, '../public/logo.png'));

    console.log('Logo converted successfully!');
  } catch (error) {
    console.error('Error converting logo:', error);
  }
}

convertLogo(); 