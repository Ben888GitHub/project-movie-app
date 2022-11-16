const headers = require('./headers');

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers
			}
		];
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	env: {
		API_KEY: process.env.API_KEY
	},
	images: {
		domains: ['image.tmdb.org'],
		minimumCacheTTL: 31536000,
		formats: ['image/webp']
	}
};

module.exports = nextConfig;
