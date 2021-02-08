const { makeWireIterator } = require('./lib')

module.exports = input => {
    const [wire1, wire2] = input.split('\n')
    const seen = {}
    const intersections = []

    for (const { key, steps } of makeWireIterator(wire1)) {
        seen[key] = steps
    }

    for (const { key, steps } of makeWireIterator(wire2)) {
        if (seen[key]) {
            intersections.push(seen[key] + steps)
        }
    }

    return Math.min(...intersections)
}
