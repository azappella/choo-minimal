const html = require('choo/html')

const navbar = require('../components/navbar')

const layout = component => (state, emitter) => html`
    <body>
        <div class="container">
            ${component(state, emitter)}
        </div>
    </body>
`

module.exports = layout
