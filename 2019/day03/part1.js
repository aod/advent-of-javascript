const { makeWireIterator } = require('./lib')

module.exports = input => {
    const [wire1, wire2] = input.split('\n')
    const seen = new Set()
    const intersections = []

    for (const { key } of makeWireIterator(wire1)) {
        seen.add(key)
    }

    for (const { pos, key } of makeWireIterator(wire2)) {
        if (seen.has(key)) {
            intersections.push(Math.abs(pos.x) + Math.abs(pos.y))
        }
    }

    return Math.min(...intersections)
}
