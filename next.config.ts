import type { NextConfig } from 'next';
import withPWA from '@ducanh2912/next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const withPWAFunc = withPWA({
  dest: 'public',
  register: true,
  disable: isDev,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withPWAFunc(nextConfig);
