const html = require('choo/html')
const Component = require('choo/component')

module.exports = class Button extends Component {
	constructor (id, state, emit) {
		super(id)
		this.local = state.components[id] = {}
	}

	load (element) {
		this.map = new mapboxgl.Map({
			container: element,
			center: this.local.center
		})
	}

	update (center) {
		if (center.join() !== this.local.center.join()) {
			this.map.setCenter(center)
		}
		return false
	}

	createElement (center) {
		this.local.center = center
		return html`<div></div>`
	}
}