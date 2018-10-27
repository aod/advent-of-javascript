const { createPrograms, dance } = require('./lib/programs')
const oneBillion = 1e9

/**
 * @param {string} input
 */
module.exports = (input, programsAmount = 16) => {
    const danceMoves = input.split(',')

    let programs = createPrograms(programsAmount)
    const dances = []

    while (true) {
        programs = dance(programs, danceMoves)
        const newProgram = programs.join('')

        if (newProgram === dances[0]) {
            break
        } else {
            dances.push(newProgram)
        }
    }

    return dances[(oneBillion - 1) % dances.length]
}
