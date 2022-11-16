const ContentSecurityPolicy = `
  frame-src 'none';
  frame-ancestors 'none';
`;

module.exports = [
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
];
