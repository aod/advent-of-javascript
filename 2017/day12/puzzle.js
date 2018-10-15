/**
 * @param {string} input
 * @returns {Map<number, number[]>}
 */
const parseInput = input => {
    const parsedInput = new Map()

    for (const row of input.split('\n')) {
        const parentProgram = parseInt(row.slice(0, row.indexOf('<') - 1), 10)
        const childPrograms = row
            .slice(row.indexOf('>') + 1, row.length)
            .split(',')
            .map(v => v.trim())
            .map(v => parseInt(v, 10))

        parsedInput.set(parentProgram, childPrograms)
    }

    return parsedInput
}

/**
 * @param {Map<number, number[]>} programs
 * @param {number} program
 * @returns {Set<number>}
 */
const groupFromProgram = (programs, program) => {
    const seen = new Set()
    let search = new Set(programs.get(program))

    while (search.size > 0) {
        const newSearch = new Set()

        for (const program of search.values()) {
            if (!seen.has(program)) {
                seen.add(program)

                for (const newProgram of programs.get(program)) {
                    newSearch.add(newProgram)
                }
            }

            search.delete(program)
        }

        search = newSearch
    }

    return seen
}

module.exports = {
    parseInput,
    groupFromProgram
}
