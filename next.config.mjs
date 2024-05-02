const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["placehold.co", "www.tally.xyz", "raw.githubusercontent.com"],
  },
  assetPrefix: isProd ? "https://tally-zero-preview.vercel.app" : undefined,
};

export default nextConfig;
