'use strict';

/* eslint-disable */

var color = require('cli-color');
var checkEngines = require('check-engines');

module.exports = function(exitCode, callback) {
  var exit = true;
  if (typeof exitCode === 'function') {
    callback = exitCode;
    exitCode = undefined;
  }
  if (exitCode === false) {
    exit = false;
  }
  if (typeof exitCode !== 'number') {
    exitCode = 1;
  }
  if (typeof callback !== 'function') {
    callback = function() {};
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
      callback(err);
      exit && process.exit(exitCode);
    }
  });
};
