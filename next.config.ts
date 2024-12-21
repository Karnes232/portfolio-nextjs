/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
    reactStrictMode: true,
    images: {
      // unoptimized: true,
      loader: 'default',
      // domains: ['images.ctfassets.net', 'www.kayak.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;