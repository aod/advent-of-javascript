const { directions, calcPathLength } = require('./utils')

module.exports = input => {
    input = input.split(',')

    const coord = [0, 0]

    let highestPathLength = 0

    for (const dir of input) {
        coord[0] += directions[dir][0]
        coord[1] += directions[dir][1]

        const currentPathLength = calcPathLength(coord)

        if (currentPathLength > highestPathLength) {
            highestPathLength = currentPathLength
        }
    }

    return highestPathLength
}
