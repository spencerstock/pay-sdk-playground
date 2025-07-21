/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: ['@base-org/account'],
  output: 'export',
  basePath: '/pay-sdk-playground',
  assetPrefix: '/pay-sdk-playground',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
