const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});