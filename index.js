'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const readFileSync = require('fs').readFileSync
const marked = require('marked')
const axios = require('axios')
const config = require('./config')
const generateJwt = require('./lib/generate-jwt')

const payload = {
  name: 'maccyber',
  description: 'jibberjabber'
}
const options = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
module.exports = async (req, res) => {
  const jwt = generateJwt({tokenKey: config.tokenKey, payload: payload, options: options})
  axios.defaults.headers.common['Authorization'] = jwt

  let result = {}
  const {query} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query
  if (req.method === 'POST') {
    const scores = await axios.post(`${config.evaluatorUrl}`, data)
    console.log(scores.data)
    const save = await axios.post(`${config.saveUrl}`, scores.data)
    console.log(save.data)
    result = save.data
  } else if (req.method === 'GET' && data.id) {
    const answers = await axios.get(`${config.saveUrl}/?id=${data.id}`)
    const results = await axios.post(`${config.resultsUrl}`, answers.data[0])
    result = results.data
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    result = marked(readme)
  }
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  send(res, status, result)
}
