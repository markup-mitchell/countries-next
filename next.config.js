/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
};
