const html = require('choo/html')
const header = require('../../../components/header')
const footer = require('../../../components/footer')

const home = (state, emitter) => html`
    <div class="home">
        ${header(state, emitter)}
        <main>
          <section>The main section ${state.topic}</section>
        </main>
        ${footer(state, emitter)}
    </div>
`




module.exports = home
