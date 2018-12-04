
const fromString = require('from2-string')

module.exports = (bundle) => {
    const html = bundle.assets.values().next().value.generated.html
    return fromString(html)
}




