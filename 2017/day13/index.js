/**
 * @typedef {number} Picosecond
 * @typedef {number} Range
 * @typedef {string} AOCInput
 */

/**
 * @param {AOCInput} input
 * @returns {number[]} First element is the depth, and the second one the range
 */
exports.parseInput = input => {
    const lines = input.split('\n')
    const firewall = []

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]

        const seperatorIndex = line.indexOf(':')
        const depth = parseInt(line.slice(0, seperatorIndex), 10)
        const range = parseInt(line.slice(seperatorIndex + 1, line.length), 10)

        firewall[i] = [depth, range]
    }

    return firewall
}
