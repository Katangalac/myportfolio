import type { NextConfig } from "next";

const hostnames = [
  "25c6qxk9jx.ucarecd.net"
]
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
