import * as path from 'path';
import * as webpack from "webpack";

import * as HTMLWebpackPlugin from "html-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  mode: "development",

  context: path.resolve(__dirname, "./src"),

  entry: "./index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },

  devServer: {
    historyApiFallback: true,
    port: 8081,
    open: false,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],

  devtool: "inline-source-map",
};

module.exports = config;
