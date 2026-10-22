/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [{ source: '/cladistique/:path*', destination: '/branche/:path*', permanent: true }]
  },
  swcMinify: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig
