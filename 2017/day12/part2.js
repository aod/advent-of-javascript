const { parseInput, groupFromProgram } = require('./puzzle')

/**
 * @param {string} input
 */
module.exports = input => {
    const parsedInput = parseInput(input)

    let totalGroups = 0

    while (parsedInput.size > 0) {
        const seen = groupFromProgram(
            parsedInput,
            parsedInput.keys().next().value
        )

        for (const program of seen.values()) {
            parsedInput.delete(program)
        }

        totalGroups++
    }

    return totalGroups
}
