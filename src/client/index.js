
const app = require('../common/router')

const store = require('./store')(app)

app.mount('#root')
