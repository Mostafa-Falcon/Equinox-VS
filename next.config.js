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
        destination: 'https://github.com/Mostafa-Falcon/Equinox-VS/releases/download/v1.0.6/Equinox_VS.apk',
        permanent: false,
      },
      {
        source: '/download',
        destination: 'https://github.com/Mostafa-Falcon/Equinox-VS/releases/download/v1.0.6/Equinox_VS.apk',
        permanent: false,
      },
      {
        source: '/download-apk',
        destination: 'https://github.com/Mostafa-Falcon/Equinox-VS/releases/download/v1.0.6/Equinox_VS.apk',
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
