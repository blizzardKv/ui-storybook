const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../src/assets/less'),
    });
  },
}
