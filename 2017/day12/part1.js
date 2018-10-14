/**
 * @param {string} input
 */
module.exports = input => {
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

    const seen = new Set([0])
    let search = new Set(parsedInput.get(0))

    while (search.size > 0) {
        const newSearch = new Set()

        for (const program of search.values()) {
            if (!seen.has(program)) {
                seen.add(program)

                for (const newProgram of parsedInput.get(program)) {
                    newSearch.add(newProgram)
                }
            }

            search.delete(program)
        }

        search = newSearch
    }

    return seen.size
}
