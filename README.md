[![Npm Package](https://img.shields.io/npm/v/chrome-finder.svg?style=flat-square)](https://www.npmjs.com/package/@vlasky/chrome-finder)
[![Dependency Status](https://david-dm.org/gwuhaolin/chrome-finder.svg?style=flat-square)](https://npmjs.org/package/@vlasky/chrome-finder)
[![Npm Downloads](http://img.shields.io/npm/dm/chrome-finder.svg?style=flat-square)](https://www.npmjs.com/package/@vlasky/chrome-finder)

# chrome-finder

Search for any installed Google Chrome/Chromium executables and return the path to the first one. Fork of [chrome-finder](https://github.com/gwuhaolin/chrome-finder/) by gwuhaolin.

## Installation

* Add the package to your project:
  ```bash
  $ npm install @vlasky/chrome-finder
  ```

## Usage

```js
const findChrome = require('@vlasky/chrome-finder');
const chromePath = findChrome();
```

 - if the `chrome` executable *is not* found, an error `Error('no chrome installations found')` will be thrown
 - if the `chrome` executable *is*     found, but the platform *is not* one of `['win32', 'darwin', 'linux']`, an error `Error('platform not support')` will be thrown.

## Use Case

chrome-finder has been used in:
- [chrome-runner](https://github.com/gwuhaolin/chrome-runner) Run Chrome with ease from node.
