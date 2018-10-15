/**
 * @param {string} input
 */
module.exports = input => {
    /**
     * @type {Object<number, number|undefined>}
     */
    const firewall = {}

    for (let i = 0, lines = input.split('\n'); i < lines.length; i++) {
        const line = lines[i]

        const seperatorIndex = line.indexOf(':')
        const depth = parseInt(line.slice(0, seperatorIndex))
        const range = parseInt(line.slice(seperatorIndex + 1, line.length))

        firewall[depth] = range
    }

    /**
     * @type {Object<number, Array<number>>}
     */
    const computedFirewall = {}

    const firewallKeys = Object.keys(firewall)
    for (let i = 0; i < firewallKeys.length; i++) {
        const depth = parseInt(firewallKeys[i])
        const range = parseInt(firewall[depth])

        const everyPicosecondPos = [1]

        for (
            let picosecond = 1, scannerDelta = 1;
            picosecond < depth + 2;
            picosecond++
        ) {
            const pos = everyPicosecondPos[picosecond - 1] + scannerDelta

            if (pos >= range) {
                scannerDelta = -1
            } else if (pos <= 1) {
                scannerDelta = 1
            }

            everyPicosecondPos[picosecond] = pos
        }

        computedFirewall[depth] = everyPicosecondPos
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
