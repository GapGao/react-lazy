"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.join(__dirname, "./src/main/index.js"),
  },
  output: {
    path: path.join(__dirname, "/public/javascripts/"),
    filename: "[name].js",
    publicPath: "/javascripts/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "/public"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "/public/index.html"),
      template: "./src/main/template.html",
      thunks: ["main"],
    }),
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000,
    open: true,
    compress: true,
  },
};
