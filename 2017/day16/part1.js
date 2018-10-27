const { createPrograms, dance } = require('./lib/programs')

/**
 * @param {string} input
 */
module.exports = (input, programsAmount = 16) =>
    dance(createPrograms(programsAmount), input.split(',')).join('')
