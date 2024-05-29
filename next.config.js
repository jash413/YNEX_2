
/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
