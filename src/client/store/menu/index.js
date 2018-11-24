function menuStore (state, emitter) {
    state.menuOpened = false

    emitter.on('menuToggle', () => {
        state.menuOpened = !state.menuOpened
        emitter.emit('render')
    })

    emitter.on('menuOpen', () => {
        state.menuOpened = true
        emitter.emit('render')
    })

    emitter.on('menuClose', () => {
        state.menuOpened = false
        emitter.emit('render')
    })

}

module.exports = menuStore