const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = require('./webpack.plugins');

const commonConfig = merge([
  {
    entry: './src/app.js',
    output: {
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        }
      ]
    }
  },
  plugins.generateHTML({
    template: './index.html',
    filename: 'index.html'
  }),
  plugins.extractCSS({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css'
  }),
  plugins.copyAssets({
    from: path.join(__dirname, 'assets'),
    to: 'assets'
  }),
  plugins.copyAssets({
    from: path.join(__dirname, '.htaccess'),
    to: ''
  })
]);

const productionConfig = merge([plugins.cleanBuild(), plugins.optimizeCSS()]);
const developmentConfig = merge([{ devtool: 'cheap-module-source-map' }]);

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
