/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				hostname: 'yew.rs',
			},
			{
				hostname: 'upload.wikimedia.org'
			},
			{
				hostname: 'wakatime.com'
			},
			{
				hostname: 'img.shields.io'
			}
		],
	},
};

module.exports = nextConfig;
