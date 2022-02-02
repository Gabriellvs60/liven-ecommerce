const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}