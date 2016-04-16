'use strict';


console.log('****** starting protractor');
// Protractor configuration
var config = {
  specs: ['tests/e2e/*.js']
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
}

exports.config = config;