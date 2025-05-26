import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Set to false for production if you have a separate CI step for type checking
    ignoreBuildErrors: process.env.NODE_ENV === 'development', 
  },
  eslint: {
    // Set to false for production if you have a separate CI step for linting
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
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
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb', // Or your preferred limit
    },
  },
};

export default nextConfig;
