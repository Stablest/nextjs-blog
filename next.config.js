// next.config.js;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = {
  images: {
    domains: ["drive.google.com"],
  },
};
