/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: "/portfolioWebsite2",  // Must match your repo name exactly
    assetPrefix: "/portfolioWebsite2",
    trailingSlash: true, // Important for GitHub Pages
  };
  
  module.exports = nextConfig;
  