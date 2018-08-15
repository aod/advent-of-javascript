const createArray = length => new Array(length + 1).fill(null).map((_, i) => i)

const reverseByLength = ({ list, start, length }) => {
    let listCopy = list.slice()

    let part = {
        ranges: [],
        values: []
    }

    let tmpLength = length
    while (tmpLength > 0) {
        const index = (start + length - tmpLength) % list.length
        part.ranges.push(index)
        part.values.unshift(listCopy[index])
        tmpLength--
    }

    part.values.forEach((v, i) => {
        listCopy[part.ranges[i]] = v
    })

    return listCopy
}

const knot = ({ list, lengths, position, skipSize }) => {
    let positionCopy = position
    let skipSizeCopy = skipSize
    let listCopy = list.slice()

    for (const length of lengths) {
        // Reverse the order of that length of elements in the list, starting
        // with the element at the current position.
        listCopy = reverseByLength({
            list: listCopy,
            start: positionCopy,
            length
        })

        // Move the current position forward by that length plus the skip size.
        positionCopy = (positionCopy + length + skipSizeCopy) % listCopy.length

        // Increase the skip size by one
        skipSizeCopy += 1
    }
    return { list: listCopy, position: positionCopy, skipSize: skipSizeCopy }
}

const part1 = (input, length = 255) => {
    const { list } = knot({
        list: createArray(length),
        lengths: input.split(',').map(Number),
        position: 0,
        skipSize: 0
    })

    return list[0] * list[1]
}

const part2 = (input, length = 255) => {
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

module.exports = (...args) => [part1(...args), part2(...args)]
