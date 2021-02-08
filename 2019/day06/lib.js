module.exports.createOrbitersLL = map => {
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
