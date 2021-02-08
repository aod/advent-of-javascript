const { exec } = require('../shared/intcode')

module.exports = input => {
    const intcode = input.split(',').map(Number)

    intcode[1] = 12
    intcode[2] = 2

    return exec({ intcode }).intcode[0]
}
