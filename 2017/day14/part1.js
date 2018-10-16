const hash = require('../day10/part2')

/**
 * Converts a 32 hexadecimal knot-hash into 128 bit binary by converting
 * every hex value as 4 bits (high-bit first)
 *
 * @param {string} input
 * @returns {number[]}
 */
const hashBits = input =>
    hash(input)
        .split('')
        .map(c =>
            parseInt(c, 16)
                .toString(2)
                .padStart(4, '0')
        )
        .join('')
        .split('')
        .map(Number)

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
