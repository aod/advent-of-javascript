const { exec, readAt } = require('../shared/intcode')

module.exports = input => {
    let program = exec({
        intcode: input.split(',').map(Number),
        input: 1,
    })

    while (readAt(program, 0, 1) !== 99) {
        program = exec(program)
    }

    return program.output
}
