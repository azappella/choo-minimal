const devtools = require('choo-devtools');
const menu = require('./menu');

module.exports = (app) => {
    app.use(devtools);
    app.use(menu);
};