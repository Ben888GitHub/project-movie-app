/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	env: {
		API_KEY: process.env.API_KEY
	},
	images: {
		domains: ['image.tmdb.org']
	}
	// productionBrowserSourceMaps: true
};

module.exports = nextConfig;
