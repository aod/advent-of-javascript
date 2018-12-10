/**
 * @param {string} input
 */
module.exports = input => {
    const claims = (matched =>
        new Array(matched.length / 5).fill().map(_ => matched.splice(0, 5)))(
        input.match(/\d+/g).map(Number)
    )
    const spots = new Set()
    const overlaps = new Set()

    for (const [, xOffset, yOffset, width, height] of claims) {
        const maxX = xOffset + 1 + width
        const maxY = yOffset + 1 + height

        for (let y = yOffset + 1; y < maxY; y++) {
            for (let x = xOffset + 1; x < maxX; x++) {
                const key = `${x},${y}`

                if (spots.has(key) && !overlaps.has(key)) {
                    overlaps.add(key)
                    continue
                }

                spots.add(key)
            }
        }
    }

    return overlaps.size
}
