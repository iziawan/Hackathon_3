/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    esmExternals: false, // Fixes potential ESM issues in .mjs
  },
};

export default nextConfig;
