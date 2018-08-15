const Process = require('../../lib/Process')

const parse = function(input, length) {
    let list = new Array(length + 1).fill(null).map((_, i) => i)
    let position = 0
    let skipSize = 0
    let lengths = input.split(',').map(Number)

    for (const length of lengths) {
        // Reverse the order of that length of elements in the list, starting
        // with the element at the current position.
        let tmpLength = length
        let part = {
            ranges: [],
            values: []
        }

        while (tmpLength > 0) {
            const index = (position + length - tmpLength) % list.length
            part.ranges.push(index)
            part.values.unshift(list[index])
            tmpLength--
        }

        part.values.forEach((v, i) => {
            list[part.ranges[i]] = v
        })

        // Move the current position forward by that length plus the skip size.
        position += (length + skipSize) % list.length

        // Increase the skip size by one
        skipSize += 1
    }

    this.fire('done', list)
}

module.exports = (input, length = 255) => {
    const output = new Process(parse)
        .on('done', function(list) {
            this.list = list
        })
        .start(input, length)

    return [output.list[0] * output.list[1], null]
}
