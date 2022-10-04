/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	}
};

module.exports = nextConfig;
