const { computeLayerRangePositions, parseInput } = require('.')

/**
 * @param {string} input
 */
module.exports = input => {
    const firewall = parseInput(input)
    /**
     * @type {Object<number, Array<number>>}
     */
    const computedFirewall = {}

    const firewallKeys = Object.keys(firewall)
    for (let i = 0; i < firewallKeys.length; i++) {
        const depth = parseInt(firewallKeys[i])
        const range = parseInt(firewall[depth])

        computedFirewall[depth] = computeLayerRangePositions(range, depth + 1)
    }

    let severity = 0
    const maxDepth = parseInt(Object.keys(firewall).slice(-1)[0])

    for (let depth = 0; depth <= maxDepth; depth++) {
        const layer = computedFirewall[depth]

        if (!layer) {
            continue
        }

        const range = firewall[depth]

        if (layer[depth] === 1) {
            severity += depth * range
        }
    }

    return severity
}
