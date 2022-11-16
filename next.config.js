// const headers = require('./headers');
const ContentSecurityPolicy = `
  frame-src 'none';
  frame-ancestors 'none';
`;

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'X-Frame-Options',
						value: 'sameorigin'
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					},
					{
						key: 'Referrer-Policy',
						value: 'same-origin'
					},
					{
						key: 'Permissions-Policy',
						value: 'geolocation=*' // allow specified policies here
					},
					{
						key: 'Content-Security-Policy',
						value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
					}
				]
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
