const { parse } = require('./lib/input')
const { createGenerator } = require('./lib/generator')
const { FACTOR_A, FACTOR_B, DIV_VALUE } = require('./lib/constants')

const MAX_PAIRS = 4e7

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

        const a = generatorA.next().value.toString(2).slice(-16)
        const b = generatorB.next().value.toString(2).slice(-16)

        if (a === b) {
            answer++
        }
    }

    return answer
}
