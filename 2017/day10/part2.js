const { knot, createArray } = require('./puzzle')

module.exports = (input, length = 255) => {
    let list = createArray(length)
    let position = 0
    let skipSize = 0
    let lengths = input
        .split('')
        .map(_ => _.charCodeAt(0))
        .concat(17, 31, 73, 47, 23)

    for (let i = 0; i < 64; i++) {
        const output = knot({
            list,
            lengths,
            position,
            skipSize
        })
        list = output.list
        position = output.position
        skipSize = output.skipSize
    }

    let hashList = []
    const totalSections = list.length / 16
    while (hashList.length < totalSections) {
        const part = list.splice(0, 16)
        hashList.push(part)
    }

    return hashList
        .map(arr => arr.reduce((acc, val) => (acc = acc ^ val), 0).toString(16))
        .map(v => (v.length === 1 ? `0${v}` : v))
        .join('')
}
