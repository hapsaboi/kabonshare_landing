/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed 'output: export' to support proper routing
  // If you need static export, add trailingSlash: true instead
  trailingSlash: true,
}

module.exports = nextConfig