const hash = require('../day10/part2')

/**
 * Converts a 32 hexadecimal knot-hash into 128 bit binary by converting
 * every hex value as 4 bits (high-bit first)
 *
 * @param {string} input
 * @returns {number[]}
 */
exports.hashBits = input =>
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
