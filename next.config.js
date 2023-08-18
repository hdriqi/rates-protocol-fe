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
        protocol: 'http',
        hostname: 'api.testnet.ratesprotocol.com',
        port: '80',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
