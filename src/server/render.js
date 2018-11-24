const hyperstream = require('hyperstream')
const createHtml = require('create-html')
const stream = require('stream')
const app = require('../common/router')
const runBundle = require('./helpers/run-bundle')
const fromString = require('from2-string')

var Readable = require('stream').Readable

module.exports = (bundle) => (req, res) => {
    const hs = hyperstream({
        body: {
            _prependHtml: app.toString(req.originalUrl, {})
        }
    })

    // const s = new stream.Readable
    // s.push(bundle.assets.values().next().value.generated.html)

    const html = bundle.assets.values().next().value.generated.html

    // s.push(createHtml({
    //   title: 'choo • TodoMVC',
    //   script: 'bundle.js',
    //   css: 'bundle.css',
    //   head: '<meta name="viewport" content="width=device-width, initial-scale=1">'
    // }))

    // s.push(null)

    // return s.pipe(hs).pipe()
    return fromString(html).pipe(hs)
}

// runBundle().then(bundle => {
//     // console.log(Object.keys(bundle), bundle.assets.values().next().value.generated.html)

//     const hs = hyperstream({
//         body: {
//             _prependHtml: app.toString('/')
//         }
//     })

//     const pass = new stream.PassThrough()

//     pass.end(bundle.assets.values().next().value.generated.html)

//     // // pass.end(createHtml({
//     // //     title: 'choo • minimal',
//     // //     script: 'bundle.js',
//     // //     css: 'bundle.css',
//     // //     head: '<meta name="viewport" content="width=device-width, initial-scale=1">'
//     // // }))

//     pass.pipe(hs).pipe(process.stdout)

//     pass.on('end', () => process.exit())
// })



