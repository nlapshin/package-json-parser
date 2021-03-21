# package-version

package.json parser.

# Install

```sh
npm i package-json-parser
```

# Usage

## Version

Script:
```js
  const packageJson = require('package-json-parser');

  const version = packageJson.version();
  console.log(version); // version from root directory package.json

  const pathToPackageJson = '/foo/bar/package.json'
  const fooBarVersion = packageJson.version(pathToPackageJson);
  console.log(fooBarVersion); // version from /foo/bar directory package.json
```

# License

MIT © [nlapshin](https://www.npmjs.com/~nlapshin)