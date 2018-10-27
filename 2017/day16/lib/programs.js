const { swap } = require('./swap')

function createPrograms(programsAmount) {
    let programs = []

    for (let i = 0; i < programsAmount; i++) {
        programs[i] = String.fromCharCode(97 + i)
    }

    return programs
}

function dance(programs, danceMoves) {
    for (let i = 0; i < danceMoves.length; i++) {
        const danceMove = danceMoves[i].slice(1)
        const action = danceMoves[i][0]

        if (action === 's') {
            const moveAmount = parseInt(danceMove, 10)
            if (moveAmount < programs.length) {
                const sliced = programs.splice(programs.length - moveAmount)
                programs = sliced.concat(programs)
            }
        } else if (action === 'x') {
            swap(programs, danceMove.split('/').map(Number))
        } else if (action === 'p') {
            swap(programs, danceMove.split('/').map(p => programs.indexOf(p)))
        }
    }

    return programs
}

exports.createPrograms = createPrograms
exports.dance = dance
