/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["roar.media"], // Add more domains if needed
  },
  headers: [
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
  ],
  distDir: "build",
};

module.exports = nextConfig;
