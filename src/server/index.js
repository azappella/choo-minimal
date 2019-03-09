const app = require('../common/router')
const express = require('express')
const server = express()
const path = require('path')
const isProd = require('./helpers/is-prod')
const createBundle = require('./helpers/run-bundle')
const hyperstream = require('hyperstream')
const streamRender = require('./helpers/stream-render')

if (isProd()) {
    server.use(require('compression')())
}

const bundle = createBundle()

server.use('/', express.static(path.join(process.env.ASSET_DIR), { index: false }))

server.get('/favicon.ico', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' })
    res.end()
})

server.use((req, res) => {
    const initialState = { topic: 'Hello World' }

    const hs = hyperstream({
        body: app.toString(req.originalUrl, initialState)
    })

    bundle.then(b => streamRender(b).pipe(hs).pipe(res))
})

const listener = server.listen(process.env.PORT, () => {
    console.log(`Your server is listening on port ${listener.address().port}`)
})

module.exports = listener
