'use strict'

module.exports = {
  saveUrl: process.env.BIGFIVE_GENERATOR_SAVE_URL || 'https://save.bigfive.maccyber.io',
  evaluatorUrl: process.env.BIGFIVE_GENERATOR_EVALUATOR_URL || 'https://evaluator.bigfive.maccyber.io',
  resultsUrl: process.env.BIGFIVE_GENERATOR_RESULTS_URL || 'https://results.bigfive.maccyber.io',
  tokenKey: process.env.BIGFIVE_GENERATOR_TOKEN_KEY || 'Gibberish, jibberish, jibber-jabber and gobbledygook'
}
