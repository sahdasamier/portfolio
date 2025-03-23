const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateLogo() {
  try {
    // Create a new SVG with a white background
    const svgBuffer = Buffer.from(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
        <rect width="300" height="150" fill="white"/>
        <!-- Code brackets -->
        <path d="M60 30 L30 75 L60 120" stroke="#4F46E5" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M240 30 L270 75 L240 120" stroke="#4F46E5" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- Text "sia" -->
        <text x="150" y="95" font-family="monospace" font-size="90" font-weight="bold" text-anchor="middle" fill="#4F46E5">sia</text>
        
        <!-- Cursor animation -->
        <rect x="205" y="50" width="5" height="45" fill="#4F46E5">
          <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
        </rect>
        
        <!-- Binary data -->
        <text x="100" y="30" font-family="monospace" font-size="14" fill="#4F46E5">01110011</text>
        <text x="190" y="30" font-family="monospace" font-size="14" fill="#4F46E5">01101001</text>
        <text x="145" y="130" font-family="monospace" font-size="14" fill="#4F46E5">01100001</text>
      </svg>
    `);

    // Generate different sizes
    const sizes = [32, 64, 128, 256, 512];
    
    await Promise.all(
      sizes.map(size =>
        sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toFile(path.join(__dirname, `../public/logo-${size}.png`))
      )
    );

    // Create favicon.ico (32x32)
    const favicon32 = await sharp(svgBuffer)
      .resize(32, 32)
      .toBuffer();
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), favicon32);

    console.log('Logo files generated successfully!');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo(); 