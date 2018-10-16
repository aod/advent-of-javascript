const { hashBits } = require('.')

/**
 * @param {string} input
 */
module.exports = input => {
    /**
     * Max columns
     * 0-127 columns in the 128x128 grid
     *
     * @type {number}
     */
    const columns = 128

    /**
     * How many squares (ones) in the grid
     *
     * @type {number}
     */
    let answer = 0

    for (let i = 0; i < columns; i++) {
        const bits = hashBits(`${input}-${i}`)

        for (let j = 0; j < bits.length; j++) {
            answer += bits[j] & 1
        }
    }

    return answer
}
