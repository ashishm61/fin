// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs-extra')
const path = require('path')
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  //Browser launch
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      // args.push('--start-fullscreen')
      // args.push('--incognito')
      return args
    }
    if (browser.name === 'electron') {
      args['fullscreen'] = false
      return args
    }
  })


function processConfigName(on, config) {

  const file = config.env.name || "local"
  return getConfigFile(file).then(function (file) {
    //return file object
    return file;
  })
}

function getConfigFile(file) {
      const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
      return fs.readJson(pathToConfigFile)
    }

//Return the configuration file details
return processConfigName(on, config);

}