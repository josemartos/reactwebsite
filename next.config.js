module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/cookies-policy': { page: '/cookies-policy' },
    };
  },
};
