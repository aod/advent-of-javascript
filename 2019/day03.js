const wireDirections = {
  U: pos => pos.y++,
  R: pos => pos.x++,
  D: pos => pos.y--,
  L: pos => pos.x--,
}

module.exports.makeWireIterator = makeWireIterator;
function* makeWireIterator(coords, directionsMap = wireDirections) {
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

module.exports.part1 = (input) => {
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

module.exports.part2 = (input) => {
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
