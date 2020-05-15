/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    plugins: [PnpWebpackPlugin],
  },
  mode: 'production',
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true },
          },
          { loader: require.resolve('css-loader'), options: { esModule: true } },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff2?)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 2017,
          },
          compress: {
            ecma: 5,
            warnings: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            ascii_only: true,
            comments: false,
          },
        },
        parallel: true,
        cache: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: './index.html', // target html
      template: './public/index.html', // source html
    }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
    new FaviconsWebpackPlugin('./public/logo.svg'),
  ],
};
