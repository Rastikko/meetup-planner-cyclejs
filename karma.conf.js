const path = require('path');

// Configure webpack - add test loaders
const webpackConfig = {
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel' }
    ]
  }
}

module.exports = function(config) {
  config.set({
    'frameworks': ['mocha'],
    'browsers': ['Chrome'],
    'logLevel': 'INFO',
    'reporters': ['progress', 'coverage'],

    'autoWatch': true,

    'files': [
      {'pattern': 'src/**/*.js', 'watched': true, 'included': false, 'served': false},
      {'pattern': 'test/**/*.js', 'watched': true, 'included': true,  'served': true}
    ],

    'urlRoot': '/karma-runner/',

    'preprocessors': {
      'test/**/*.js': ['webpack']
    },

    'webpackMiddleware': {
      'noInfo': true // Squash over-sharing of module build progress
    },

    'webpack': webpackConfig,

    'coverageReporter': {
      reporters:[
        {'type' : 'cobertura', 'dir' : 'report/coverage/', 'subdir': './'},
        {'type': 'text-summary'}
      ]
    }

  });
};
