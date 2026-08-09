import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "jow.fr",
      },
      {
        protocol: "https",
        hostname: "static.jow.fr",
      },
    ],
  },
};

export default nextConfig;