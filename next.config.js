/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
    basePath: "https://github.com/LordsOwnAcc/portfolioWebsite2", // Change this to your GitHub repo name
    assetPrefix: "https://github.com/LordsOwnAcc/portfolioWebsite2",
  }
  
  module.exports = nextConfig