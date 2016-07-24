var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');





config = {

  entry: [
    path.resolve("src/index.js")],

  output: {
    path: path.resolve("build"),
    filename: "app.js"
  },

  // ��������� �������� �������
  resolve: {
    extensions: ["", ".js", ".jsx"], // � ������ ������������ ������ ������
    alias: {
      "app": path.resolve("src")
    }
  },

  module: {
    loaders: [

      // ����� ���������� ��������� �������� �� ���� ������� ������������ css (���� ��� ������) � ���� �����
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },




  plugins: [
    // ��������� index.html � ����.
    // ������ ��� ���������� app.css (������� �������� � ExtractTextPlugin) � app.js
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true } // ����������� HTML (������� ������ �������)
    }),
    // �������� ���� ����� CSS � ����
    new ExtractTextPlugin('app.css')
  ]


};

module.exports = config;