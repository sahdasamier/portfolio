/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res+.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mdranju.xyz",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  poweredByHeader: false,
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;