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

	env: {
		API_KEY: process.env.API_KEY
	},
	images: {
		domains: ['image.tmdb.org'],
		minimumCacheTTL: 31536000,
		formats: ['image/webp']
	},
	experimental: {
		scrollRestoration: true
	}
	// todo, if i18n is enabled then security headers are not scanned online, why?
	// i18n: {
	// locales: ['en'],
	// defaultLocale: 'en'
	// }
};

module.exports = nextConfig;
