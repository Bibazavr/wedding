const path = require('path');
const webpack = require('webpack');
const babelConfig = require('./babel.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  type: 'javascript/auto',
  use: {
    loader: 'file-loader',
    options: {
      name: 'images/[name].[ext]',
      esModule: false,
    },
  },
};
module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname), path.resolve(__dirname, 'node_modules')],
    extensions: ['.web.tsx', '.tsx', '.web.ts', '.ts', '.web.js', '.js'],
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-native': path.resolve(
        __dirname,
        'node_modules',
        'react-native-web',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
      imageLoaderConfiguration,
      {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(
          __dirname,
          'node_modules/react-native-vector-icons',
        ),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
