/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.google.com',
      'avatars.githubusercontent.com',
      'source.unsplash.com',
      'images.unsplash.com',
      'images.unsplash.com',
      'i1.ytimg.com',
      'sarhfiles.blob.core.windows.net',
      'www.powerchangeslives.com',
      'ph-files.imgix.net',
    ],
    minimumCacheTTL: 86400,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
  },
}

module.exports = nextConfig
