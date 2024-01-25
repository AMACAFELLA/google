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
      'i1.ytimg.com',
      'scontent-cpt1-1.xx.fbcdn.net',
      'www.powerchangeslives.com',
      'ph-files.imgix.net',
    ],
    minimumCacheTTL: 86400,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
