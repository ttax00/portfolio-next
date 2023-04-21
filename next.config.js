/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yew.rs',
      },
	  {
		hostname: 'upload.wikimedia.org'
	  }
    ],
  },
}

module.exports = nextConfig
