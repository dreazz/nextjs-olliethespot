const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  target: 'serverless',
  publicRuntimeConfig: { // Will only be available on the server side
    mapboxApiAccessToken:'pk.eyJ1IjoiZHJlYXp6IiwiYSI6ImNqcnNkMjhxMTBqMXo0NG52cW1pMGd0NnQifQ.Pd6wO6XvwiskVEt38xXG5A'
  },
}