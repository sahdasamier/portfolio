const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));
    
    // Define all required sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' }
    ];

    // Generate all PNG files
    await Promise.all(
      sizes.map(({ size, name }) =>
        sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toFile(path.join(__dirname, `../public/${name}`))
      )
    );

    // Create favicon.ico (16x16 and 32x32 combined)
    const favicon16 = await sharp(svgBuffer)
      .resize(16, 16)
      .toBuffer();
    const favicon32 = await sharp(svgBuffer)
      .resize(32, 32)
      .toBuffer();

    // Save as favicon.ico
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), favicon32);

    // Create site.webmanifest
    const manifest = {
      name: "Sahda Samier Portfolio",
      short_name: "Sahda Samier",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone"
    };

    fs.writeFileSync(
      path.join(__dirname, '../public/site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 