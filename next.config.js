const { withSentryConfig } = require("@sentry/nextjs");
const moduleExports = {
  sentry: {
    hideSourceMaps: true,
  },
  images: {
    domains: ["static.promodescuentos.com", "lh3.googleusercontent.com", "flowbite.com"],
  },
};

module.exports = withSentryConfig(moduleExports);
