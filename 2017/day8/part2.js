const { parse } = require('./lib')

module.exports = input => {
    return parse(input).highest
}
