module.exports = function(config) {
  config.set({

    basePath: '',
    autoWatch: false,
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],

    files: [
      '*.coffee'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-coffee-preprocessor'
    ],

    preprocessors: {
      '*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: false
      },
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },

    // comment out this `client` property to make console log messages to show
    // up in the terminal again.
    client: {
      mocha: {
        bail: true
      }
    }
  });
};
