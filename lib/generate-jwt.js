'use strict'

const jwt = require('jsonwebtoken')

module.exports = options => {
  if (!options) {
    throw Error('Missing required input: options object')
  }
  if (!options.tokenKey) {
    throw Error('Missing required input: options.tokenKey')
  }
  if (!options.payload) {
    throw Error('Missing required input: options.payload')
  }
  const opts = options.options || {}
  return jwt.sign(options.payload, options.tokenKey, opts)
}
