/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig
