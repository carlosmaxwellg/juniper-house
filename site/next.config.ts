import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Source images are already optimized WebP files; Pages serves them directly.
  images: {
    unoptimized: true,
    localPatterns: [{ pathname: "/images/**", search: "" }],
  },
};
export default nextConfig;
