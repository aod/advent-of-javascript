module.exports.calcPathLength = function(coord) {
    const [x, y] = coord.map(Math.abs)
    return x + Math.max(0, y - x / 2)
}

module.exports.directions = {
    n: [0, 1],
    ne: [1, 0.5],
    se: [1, -0.5],
    s: [0, -1],
    sw: [-1, -0.5],
    nw: [-1, 0.5]
}
