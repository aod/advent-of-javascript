const createOrbitersLL = (map) => {
  const orbiters = {}

  for (const orbit of map.split('\n')) {
    const [a, b] = orbit.split(')')

    orbiters[a] = orbiters[a] || {
      planet: a,
      orbits: null,
    }

    if (!orbiters[b]) {
      orbiters[b] = {
        planet: b,
        orbits: orbiters[a],
      }
    } else {
      orbiters[b].orbits = orbiters[a]
    }
  }

  return orbiters
}

module.exports.part1 = (input) => {
  const planets = createOrbitersLL(input)
  let totalOrbits = 0

  for (let p of Object.values(planets)) {
    while ((p = p.orbits)) {
      totalOrbits++
    }
  }

  return totalOrbits
}

module.exports.part2 = (input, beginAt = 'SAN', find = 'YOU') => {
  const planets = createOrbitersLL(input)

  let beginPath = []
  let p = planets[beginAt]
  while ((p = p.orbits)) {
    beginPath.push(p.planet)
  }

  let findPathCount = 0
  p = planets[find]
  while ((p = p.orbits)) {
    const intersectionPlanet = beginPath.indexOf(p.planet)
    if (intersectionPlanet !== -1) {
      return intersectionPlanet + findPathCount
    }
    findPathCount++
  }

  throw new Error('Should be unreachable :)')
}
