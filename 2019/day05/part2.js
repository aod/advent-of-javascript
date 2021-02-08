const { exec } = require('../shared/intcode')

module.exports = input => {
    return exec({ intcode: input.split(',').map(Number), input: 5 }).output
}
