const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootConfig = {
  mode: 'development',
  optimization: {
    usedExports: true, // tells webpack to tree-shake
  },
  devServer: {
  static: './app/www/components',
 },
 devtool: 'eval-source-map'
};

const appConfig = {
  ...rootConfig,
  entry: './chunks/script/base.js',
  output: {
    filename: 'base.js',
    path: path.resolve(__dirname, 'app/www/components/script'),
  },
};

const serviceWorkerConfig = {
  ...rootConfig,
  entry: './chunks/script/base-messages.js',
  // TODO(jhuleatt): Remove this once https://github.com/firebase/firebase-js-sdk/issues/5314 is resolved
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  output: {
    filename: 'base-messages.js',
    path: path.resolve(__dirname, 'app/www/components'),
  },
};

const chunksConfig = {
  ...rootConfig,
  entry: {
  index: './chunks/script/index.js',
  print: './chunks/script/print.js',
 },
 plugins: [
  new HtmlWebpackPlugin({
    title: 'Blog | Allbitty',
  }),
],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app/www/components/Blog'),
    clean: true,
  },
};


module.exports = [appConfig, serviceWorkerConfig, chunksConfig];