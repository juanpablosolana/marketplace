/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.promodescuentos.com'],
  },
}

module.exports = nextConfig
