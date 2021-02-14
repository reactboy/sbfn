// TODO(aida) tsにしたい。
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/strapi/:slug*',
        destination: `${process.env.NEXT_STRAPI_END_POINT}/:slug*`,
      },
    ];
  },
};
