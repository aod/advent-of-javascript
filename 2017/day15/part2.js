const { parse } = require('./lib/input')
const { createGenerator } = require('./lib/generator')
const { FACTOR_A, FACTOR_B, DIV_VALUE } = require('./lib/constants')

const MAX_PAIRS = 5e6

/**
 * @param {string} input
 */
module.exports = input => {
    const { a: startA, b: startB } = parse(input)
    const generatorA = createGenerator(FACTOR_A, DIV_VALUE, startA)
    const generatorB = createGenerator(FACTOR_B, DIV_VALUE, startB)

    let totalPairs = MAX_PAIRS
    let answer = 0

    while (totalPairs > 0) {
        totalPairs -= 1

        let a = generatorA.next().value
        let b = generatorB.next().value

        while (a % 4 !== 0) {
            a = generatorA.next().value
        }

        while (b % 8 !== 0) {
            b = generatorB.next().value
        }

        a &= 65535
        b &= 65535

        if (a === b) {
            answer++
        }
    }

    return answer
}
