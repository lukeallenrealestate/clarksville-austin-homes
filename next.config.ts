import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server mode (not static export) so listing and market pages refresh via ISR.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
