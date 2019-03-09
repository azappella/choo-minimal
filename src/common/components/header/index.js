const html = require('choo/html')
const navbar = require('../navbar')

const logo = (logoSrc) => html`
    <div class="logo">
        <a href="/">
            <img src="${logoSrc}" alt="Logo" />
        </a>
    </div>
`

const header = (state, emitter) => html`
    <header class="header">
        ${navbar(state, emitter)}
    </header>
`

module.exports = header
