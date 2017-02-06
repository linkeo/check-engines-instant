# check-engines-instant
Run check-engines instantly, print errors and exit process if test failed.

**Installation**

```bash
npm install check-engines-instant
```

## Usage

Just require and call this package at the very beginning of your program.

```js
// The very beginning, e.g. The beginning of index.js

// Basic usage, program will exit with code -1 if run with an wrong node version.
require('check-engines-instant')();

// Customize program exit code
require('check-engines-instant')(-2);

// Call a callback function instead of terminating program.
require('check-engines-instant')(function(err) {
  // Do someting after check
  // `err` argument is the same as the one in callback of check-engines
});

// Print errors only.
require('check-engines-instant')(function(err) {});

// Start your program now.
// ...
```

For more informations about check-engines, see [krupple/check-engines](https://github.com/kruppel/check-engines)

For more informations about npm engines, see [npm docs about package.json](https://docs.npmjs.com/files/package.json#engines)
