const { createOrbitersLL } = require('./lib')

module.exports = input => {
    const planets = createOrbitersLL(input)
    let totalOrbits = 0

    for (let p of Object.values(planets)) {
        while ((p = p.orbits)) {
            totalOrbits++
        }
    }

    return totalOrbits
}
