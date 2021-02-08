const { createOrbitersLL } = require('./lib')

module.exports = (input, beginAt = 'SAN', find = 'YOU') => {
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
