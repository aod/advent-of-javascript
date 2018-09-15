const directions = {
    n: [0, 1],
    ne: [1, 0.5],
    se: [1, -0.5],
    s: [0, -1],
    sw: [-1, -0.5],
    nw: [-1, 0.5]
}

module.exports = input => {
    input = input.split(',')

    const coord = [0, 0]

    for (const dir of input) {
        coord[0] += directions[dir][0]
        coord[1] += directions[dir][1]
    }

    const [x, y] = coord.map(Math.abs)

    return x + Math.max(0, y - x / 2)
}
