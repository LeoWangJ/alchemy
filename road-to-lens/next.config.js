/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'lens.infura-ipfs.io',
      "",
      "statics-polygon-lens.s3.eu-west-1.amazonaws.com"
    ]
  }
}

module.exports = nextConfig
