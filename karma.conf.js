module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-mocks.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-resource.js',
      'src/angular-resourcelist.js',
      'test/*.js'
    ],

    reporters: ['mocha'],

    port: 9876,

    runnerPort: 9100,

    colors: true,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};

