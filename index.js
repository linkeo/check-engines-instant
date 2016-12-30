'use strict';

/* eslint-disable */

var color = require('cli-color');
var checkEngines = require('check-engines');

module.exports = function(exitCode, callback) {
  if (typeof exitCode === 'function') {
    callback = exitCode;
    exitCode = undefined;
  }
  if (typeof exitCode !== 'number') {
    exitCode = -1;
  }
  checkEngines(function(err) {
    if (err) {
      var message = err.message || '';
      message.split('\n').forEach(line => {
        if ((line = line.trim())) {
          console.error(
            color.white.bgMagenta(' Fatal ') + ' ' + color.magenta(line)
          );
        }
      });
      if (typeof callback !== 'function') {
        process.exit(exitCode);
      }
    }
    if (typeof callback === 'function') {
      callback(err);
    }
  });
};
