// Karma configuration
// Generated on Mon May 28 2018 18:59:27 GMT+0800 (CST)



module.exports = function(config) {
  var configuration = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha"],

    // list of files / patterns to load in the browser
    files: [
      "https://cdn.bootcss.com/jquery/2.2.4/jquery.js",
      "node_modules/should/should.js",
      "test/**.js"
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["ChromeHeadless"],

    // travis cli 使用 chrome 测试
    customLaunchers: {
      Chrome_travis_ci: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: process.env.TRAVIS,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  }
  // https://swizec.com/blog/how-to-run-javascript-tests-in-chrome-on-travis/swizec/6647
  if (process.env.TRAVIS) {
    configuration.browsers = ["Chrome_travis_ci"];
  }
  config.set(configuration);
};

