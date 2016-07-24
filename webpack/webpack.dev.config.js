var webpack = require('webpack');
var config  = require("./webpack.config.js");
var path = require('path');

module.exports = {

  entry: config.entry,

  output: config.output,

  resolve: config.resolve,

  plugins: config.plugins,

  // ���������� �������
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.resolve("src")
    }].concat(config.module.loaders)
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },


  // ��������� source-map ��� ������
   devtool: "inline-source-map" // �������������� � ���� (������������ �� dev);
  // "source-map" - �������� ��������� ������ � ����� ����� (������������ �� prod)
  //devtool: 'eval'

};
