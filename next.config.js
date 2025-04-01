/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://www.bskilling.com/"],
    loader: "akamai",
    path: "/",
  },
  env: {
    PUBLIC_URL: "/",
  },
};

module.exports = nextConfig;
