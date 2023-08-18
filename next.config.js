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
      {
        protocol: 'https',
        hostname: 'assets-testnet.ratesprotocol.com',
        port: '443',
        pathname: '/**',
      },
    ],
    domains: ["assets-testnet.ratesprotocol.com", "assets.ratesprotocol.com"]
  },
}

module.exports = nextConfig
