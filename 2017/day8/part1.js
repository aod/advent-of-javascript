const parse = require('./lib/parse')

module.exports = input => Math.max(...Object.values(parse(input).registers))
