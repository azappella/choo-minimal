const html = require('choo/html')

const notFound = (state, emitter) =>
  html`
    <section>
      <h1>Oops, this page does not exist</h1>
    </section>
  `

module.exports = notFound
