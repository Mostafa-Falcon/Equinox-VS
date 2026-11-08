/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/Equinox_VS.apk',
        destination: '/api/download',
        permanent: false,
      },
      {
        source: '/download',
        destination: '/api/download',
        permanent: false,
      },
      {
        source: '/download-apk',
        destination: '/api/download',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Equinox_VS.apk"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
