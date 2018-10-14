const { parseInput, groupFromProgram } = require('./puzzle')

/**
 * @param {string} input
 */
module.exports = input => groupFromProgram(parseInput(input), 0).size
