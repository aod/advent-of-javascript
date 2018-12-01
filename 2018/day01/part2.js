/**
 * @param {string} input
 */
module.exports = input => {
    input = input.split(/\r?\n/).map(line => parseInt(line))

    let i = 0
    let currentFrequency = 0
    const seenFrequencies = new Set()

    while (true) {
        if (seenFrequencies.has(currentFrequency)) {
            return currentFrequency
        } else {
            seenFrequencies.add(currentFrequency)
        }

        seenFrequencies.add(currentFrequency)
        currentFrequency += input[i]

        i = (i + 1) % input.length
    }
}
