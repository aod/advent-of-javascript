const { exec, readAt } = require('../shared/intcode')

module.exports = input => {
    let boostProgram = exec({ intcode: input.split(',').map(Number), input: 2 })

    while (readAt(boostProgram, 0, 1) !== 99) {
        boostProgram = exec(boostProgram)
    }

    return boostProgram.output
}
