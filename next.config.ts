import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  
})
module.exports = {
  images: {
    domains: ['fastly.picsum.photos','via.placeholder.com', 'jsonplaceholder.typicode.com'],
  },
}