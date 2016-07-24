var webpack = require('webpack');
var config  = require("./webpack.config.js");
var path = require('path');

module.exports = {

  entry: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/only-dev-server"
  ].concat(config.entry),

  output: config.output,

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ].concat(config.plugins),

  // ���������� �������
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.resolve("src")
    }].concat(config.module.loaders)
  },



  // ��������� source-map ��� ������
   devtool: "inline-source-map" // �������������� � ���� (������������ �� dev);
  // "source-map" - �������� ��������� ������ � ����� ����� (������������ �� prod)
  //devtool: 'eval'

};
