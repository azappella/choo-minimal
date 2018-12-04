const app = require('../common/router')
const express = require('express')
const server = express()
const path = require('path')
const helpers = require('./helpers')
const runBundle = require('./helpers/run-bundle')
const hyperstream = require('hyperstream')
const render = require('./render')

if (helpers.isProd()) {
  server.use(require('compression')())
}

const bundle = runBundle()

server.use('/', express.static(path.join(__dirname, '../../build'), { index: false }))

server.get('/favicon.ico', (req, res) => {
  res.writeHead(200, {'Content-Type': 'image/x-icon'})
  res.end()
})


server.use((req, res) => {
    const hs = hyperstream({
        'body': app.toString(req.originalUrl, {})
    })

    bundle.then(b => {
        render(b).pipe(hs).pipe(res)
    })
})

const listener = server.listen(process.env.PORT, () => {
  console.log('Your server is listening on port ' + listener.address().port)
})

module.exports = listener
