/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'admin.skobarian.ru',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};


export default nextConfig;
