// TODO(aida) tsにしたい。
module.exports = {
  async rewrites() {
    return [
      {
        source: '/strapi/:slug*',
        destination: `${process.env.NEXT_STRAPI_END_POINT}/:slug*`,
      },
    ];
  },
};
