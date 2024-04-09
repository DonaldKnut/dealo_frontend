/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   SERVER_URL: process.env.SERVER_URL || "http://localhost:4040",
  // },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withVideos(nextConfig);
module.exports = nextConfig;

module.exports = {
  // AUTH_SECRET: "kdYRWpqyGbS7rgj/Kg5jVgLr7cdjgkB4uZxAiShT088=",
  // secret: "kdYRWpqyGbS7rgj/Kg5jVgLr7cdjgkB4uZxAiShT088=",
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
};
