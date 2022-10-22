/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	env: {
		API_KEY: process.env.API_KEY,
		nextImageExportOptimizer_quality: 75,
		nextImageExportOptimizer_storePicturesInWEBP: true
	},
	images: {
		domains: ['image.tmdb.org'],
		minimumCacheTTL: 31536000
	}
};

module.exports = nextConfig;
