const fs = require('fs');

module.exports = {
  version(packagePath = 'package.json') {
    const pjson = packageJson(packagePath);

    return pjson.version;
  },

  json(packagePath = 'package.json') {
    const pjson = packageJson(packagePath);

    return pjson;
  }
}

function packageJson(packagePath = 'package.json') {
  return JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
}