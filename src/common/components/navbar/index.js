const html = require('choo/html')

const navbar = (state, emit) => {
    console.log(state);

    function handleMenuClick (e) {
        e.preventDefault()
        emit('menuToggle')
    }

    function handleNavigate (e) {
        emit('menuClose')
    }

    return html`
        <nav class="nav ml-auto-ns ${state.menuOpened ? '' : 'nav--closed'}">
            <a class="dn-l absolute z-1 pa3" href="#" onclick=${handleMenuClick} style="top: 0; ${state.menuOpened ? 'display: none;': 'right: 0;'}">
                <svg height="32px" width="32px" style="fill: white;"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </a>
            <ul class="flex-l z-0 pt5 pt0-ns list f4 f5-ns tc tl-ns ${state.menuOpened ? 'db pa0': 'dn db-l'}">
                <li><a onclick=${handleNavigate} href="#item1" class="dib white no-underline pa3 dim">Item 1</a></li>
                <li><a onclick=${handleNavigate} href="#item2" class="dib white no-underline pa3 dim">Item 2</a></li>
                <li><a onclick=${handleNavigate} href="#item3" class="dib white no-underline pa3 dim">Item 3</a></li>
                </ul>
            <a class="dn-l absolute pa3 z-1 ${state.menuOpened ? 'db': 'dn'} " href="#" onclick=${handleMenuClick} style="top: 0; ${state.menuOpened ? 'right: 0;': 'right: -100%;'}">
                <svg width="30px" viewBox="0 0 455.992 455.992">
                    <g>
                        <path style="fill:#fff;" d="M227.996,0C102.081,0,0,102.081,0,227.996c0,125.945,102.081,227.996,227.996,227.996
                            c125.945,0,227.996-102.051,227.996-227.996C455.992,102.081,353.941,0,227.996,0z M227.996,425.593
                            c-108.952,0-197.597-88.645-197.597-197.597S119.044,30.399,227.996,30.399s197.597,88.645,197.597,197.597
                            S336.948,425.593,227.996,425.593z"/>
                        <path style="fill:#fff;" d="M312.142,122.358l-83.538,83.568l-74.965-83.568c-5.928-5.928-15.565-5.928-21.492,0
                            c-5.928,5.928-5.928,15.565,0,21.492l74.965,83.568l-84.723,84.723c-5.928,5.928-5.928,15.595,0,21.492
                            c5.928,5.928,15.565,5.928,21.492,0l83.568-83.538l74.965,83.538c5.897,5.928,15.565,5.928,21.462,0
                            c5.928-5.898,5.928-15.565,0-21.492l-74.995-83.538l84.723-84.754c5.928-5.928,5.928-15.565,0-21.492
                            C327.676,116.43,318.07,116.43,312.142,122.358z"/>
                    </g>
                </svg>
            </a>
        </nav>
    `
}

module.exports = navbar
