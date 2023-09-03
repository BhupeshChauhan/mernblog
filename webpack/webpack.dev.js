/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'source-map', // Generate source maps for better debugging
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Bhupesh'),
    }),
  ],
};
