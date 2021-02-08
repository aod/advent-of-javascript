const WireDirections = {
    U: pos => pos.y++,
    R: pos => pos.x++,
    D: pos => pos.y--,
    L: pos => pos.x--,
}

module.exports.makeWireIterator = function* (coords, directionsMap = WireDirections) {
    const pos = { x: 0, y: 0 }
    let steps = 0

    for (const part of coords.split(',')) {
        const d = part[0]
        let v = parseInt(part.substring(1), 10)

        while (v--) {
            directionsMap[d](pos)
            steps++
            yield { pos, key: `${pos.x}-${pos.y}`, steps }
        }
    }
}
