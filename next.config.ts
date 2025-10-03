import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		// domains: ['localhost', '127.0.0.1', '0.0.0.0'],
		formats: ['image/webp'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'your-domain.com',
				pathname: '/**',
			},
		],
		qualities: [100],
	},
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
