/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    i18n: {
        locales: ['en', 'es', 'ru'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
