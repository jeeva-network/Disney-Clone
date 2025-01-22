import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["links.papareact.com"],
    remotePatterns: [{ protocol: "https", hostname: "links.papareact.com" }, { protocol: "http", hostname: "image.tmdb.org" }],
  },
};

export default nextConfig;
