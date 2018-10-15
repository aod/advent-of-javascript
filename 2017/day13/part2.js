const { parseInput } = require('.')

/**
 * @param {string} input
 */
module.exports = input => {
    const firewall = parseInput(input)

    let delay = 0
    let packetHidden = true
    do {
        packetHidden = true

        for (let i = 0; i < firewall.length; i++) {
            const [depth, range] = firewall[i]
            const caught = (delay + depth) % (range * 2 - 2) === 0

            if (caught) {
                delay++
                packetHidden = false
                break
            }
        }
    } while (!packetHidden)

    return delay
}
