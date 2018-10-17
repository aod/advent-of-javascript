/**
 *
 * @generator
 * @yields {number}
 * @param {number} factor
 * @param {number} divideValue
 * @param {number} startValue
 */
function* createGenerator(factor, divideValue, startValue) {
    let previousValue = startValue

    while (true) {
        yield (previousValue = (previousValue * factor) % divideValue)
    }
}

exports.createGenerator = createGenerator
