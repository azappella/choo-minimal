const html = require('choo/html')

const navbar = require('../components/navbar')

const layout = component => (state, emitter) => html`
    <div class="container">
        ${component(state, emitter)}
    </div>
`

module.exports = layout
