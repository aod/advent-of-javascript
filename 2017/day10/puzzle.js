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

module.exports = { knot, createArray }
