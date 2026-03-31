import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.mvne.co.za" },
      { protocol: "https", hostname: "www.dsg.co.za" },
    ],
  },
};

export default nextConfig;
