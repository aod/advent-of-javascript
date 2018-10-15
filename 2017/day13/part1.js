const { parseInput } = require('.')

/**
 * @param {string} input
 */
module.exports = input => {
    const firewall = parseInput(input)
    /**
     * @type {Object<number, Array<number>>}
     */

    let severity = 0

    for (let i = 0; i < firewall.length; i++) {
        const depth = firewall[i][0]
        const range = firewall[i][1]
        const caught = depth % (range * 2 - 2) === 0

        if (caught) {
            severity += depth * range
        }
    }

    return severity
}
