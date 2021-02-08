const { knot, createArray } = require('./puzzle')

module.exports = (input, length = 255) => {
    const { list } = knot({
        list: createArray(length),
        lengths: input.split(',').map(Number),
        position: 0,
        skipSize: 0,
    })

    return list[0] * list[1]
}
