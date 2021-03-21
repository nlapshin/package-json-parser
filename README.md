# package-version

Return package.json version by root directory or by custom path.

# Install

```sh
npm i package-version
```

# Usage

## Simple example

Script:
```js
  const package = require('package-version');

  const version = packageVersion();
  console.log(version); // version from root directory package.json

  const pathToPackageJson = '/foo/bar/package.json'
  const fooBarVersion = packageVersion(pathToPackageJson);
  console.log(fooBarVersion); // version from /foo/bar directory package.json
```

# License

MIT © [nlapshin](https://www.npmjs.com/~nlapshin)