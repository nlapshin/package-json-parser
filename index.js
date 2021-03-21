module.exports = (packagePath = 'package.json') {
  const pjson = JSON.parse(packageJson(packagePath))

  return pjson.version;
}

function packageJson(packagePath = 'package.json') {
  return JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
}