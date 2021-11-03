const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  context: path.resolve(__dirname, "./src"),

  entry: "./index.js",

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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],

  devtool: "source-map",
};
