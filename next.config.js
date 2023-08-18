/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.ratesprotocol.com',
        port: '443',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
