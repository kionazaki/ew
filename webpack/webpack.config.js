var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');





config = {

  entry: [
    path.resolve("src/index.js")],

  output: {
    path: path.resolve("build"),
    filename: "hints.js"
  },

  // ��������� �������� �������
  resolve: {
    extensions: ["", ".js", ".jsx"], // � ������ ������������ ������ ������
    alias: {
      "app": path.resolve("src")
    }
  },

  module: {
    loaders: []
  },

  plugins: []
};

module.exports = config;