const app = require('../common/router')
const express = require('express')
const server = express()
const path = require('path')
const helpers = require('./helpers')
const runBundle = require('./helpers/run-bundle')
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
    // res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})

    bundle.then(b => {
        const data = render(b)(req, res)

        // data.on('end', () => {
        //     console.log(`End`);
        //     res.end();
        // });

        data.pipe(res)
    })
})

server.get('/test', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})

    bundle.then(b => {
        const data = render(b)(req, res)

        // data.on('end', () => {
        //     console.log(`End`);
        //     res.end();
        // });

        data.pipe(res)
    })
})



// server.use((req, res) => {
//   const initialState = {}
//   // const html = app.toString(request.originalUrl, initialState)

//   // bundle.then(b => res.pipe(render(b)))
//   res.send('')
//   // response.send(html);
// })


const listener = server.listen(process.env.PORT, () => {
  console.log('Your server is listening on port ' + listener.address().port)
})

module.exports = listener
