var webpack = require('webpack');
var config  = require("./webpack.config.js");
var path = require('path');

module.exports = {

  entry: config.entry,

  output: config.output,

  resolve: config.resolve,

  plugins: config.plugins,

  // Подключаем лоадеры
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


  // Подключаю source-map для дебага
   devtool: "inline-source-map" // вкомпиливается в билд (использовать на dev);
  // "source-map" - создаётся отдельным файлом в папке билда (использовать на prod)
  //devtool: 'eval'

};
