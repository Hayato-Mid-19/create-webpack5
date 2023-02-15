const path = require("path");
const outputPath = path.resolve(__dirname, 'public');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              // "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  },
  mode: 'production',
  devServer: {
    static: {
      directory: outputPath,
    },
    compress: false,
    port: 9000,
    hot: true,
    watchFiles: ["src/","public/"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new ESLintPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          }
        }
      }),
      new CssMinimizerPlugin(),
    ],
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
  devtool: 'eval-source-map',
};
