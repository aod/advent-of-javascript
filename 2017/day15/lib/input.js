/**
 * @typedef {{ a: number, b: number }} Generators
 */

const lineRegExp = /\d+$/gm

/**
 * Returns the parsed input for 2017.15
 *
 * @param {string} input
 * @returns {Generators}
 */
function parse(input) {
    const [a, b] = input.match(lineRegExp).map(num => parseInt(num, 10))
    return { a, b }
}

exports.parse = parse
