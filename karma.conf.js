// Karma configuration

var webpackConfig = require("./webpack/webpack.prod.config.js");


// ���������� ���� ������, ����� ��������� ������ �������� istanbul
webpackConfig.devtool = "inline-source-map";
webpackConfig.module.loaders = [
  { test: /\.js$/, exclude: [/node_modules/, /\.spec.js$/], loader: "babel-istanbul" }
].concat(webpackConfig.module.loaders);






module.exports = function(config) {
  config.set({


    // ������������ �������� � �������� ���� �������
    coverageReporter: {
      dir:'tmp/coverage/',
      reporters: [
        { type:'html', subdir: 'report-html' },
        { type:'lcov', subdir: 'report-lcov' }
      ],
      // ����� ���������� istanbul (�� ���������) - ������  �������������� ���
      instrumenterOptions: {
        istanbul: { noCompact:true }
      }
    },

    // spec �����, ��������� �������� �� ����� **_*.spec.js_**
    files: [
      'src/**/*.spec.js'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],


    // ��������� ���������� ���  ���������� ����������� ����������� � ���������� ������
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha",  "coverage"],
    




    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.spec.js": ["webpack", "sourcemap"]
    },


    plugins: [
      'karma-jasmine',
      'karma-mocha',
      'karma-chai',
      'karma-coverage',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-sourcemap-loader'
    ],

    // �������� ������������ webpack
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    }


  })
};
