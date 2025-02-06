/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
    basePath: "/your-repo-name", // Change this to your GitHub repo name
    assetPrefix: "/your-repo-name",
  }
  
  module.exports = nextConfig