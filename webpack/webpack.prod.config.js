var path = require('path');
var webpack = require('webpack');
var config  = require("./webpack.config.js");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    // �� ��������� ������, ���� ���� ������ (������ ��� ������ � �� � ���������� �������)
    new webpack.NoErrorsPlugin(),

    // �����������
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ].concat(config.plugins),

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.resolve("src")
    }].concat(config.module.loaders)
  }

};
