/** @type {import('next').NextConfig} */
const nextConfig = {
  // Re-enabling dynamic features for Specialist Swarm logic
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "rekh-platform.vercel.app", "rekh-platform.web.app"],
    },
  },
};
module.exports = nextConfig;
