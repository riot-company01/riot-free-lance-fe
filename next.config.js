/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/works",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/works",
        permanent: true,
      },
    ];
  },
};
