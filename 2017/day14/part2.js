/**
 * @typedef {{ x:number, y: number}} Coord
 */

const { hashBits } = require('.')

/**
 * @param {string} input
 */
module.exports = input => {
    /**
     * Max columns
     * 0-127 columns in the 128x128 grid
     *
     * @type {number}
     */
    const columns = 128
    /**
     * @type {Map<string, Coord>}
     */
    const squares = new Map()
    /**
     * @type {Coord[][]}
     */
    const grid = []

    /**
     * Region count
     *
     * @type {number}
     */
    let answer = 0

    // Fill the grid
    for (let y = 0; y < columns; y++) {
        const bits = hashBits(`${input}-${y}`)

        for (let x = 0; x < bits.length; x++) {
            if (bits[x] === 1) {
                squares.set(`${x}${y}`, { x, y })
            }

            grid.push(bits)
        }
    }

    /**
     * @param {Map<string, Coord>} squares
     * @param {Set<Coord>} surrounding
     */
    function squareRegion(squares, surrounding) {
        if (surrounding.size < 1) {
            return
        }

        /** @type {Set<Coord>} */
        const newSurrounding = new Set()

        for (const surroundingSquare of surrounding) {
            const surrounders = [
                [surroundingSquare.x - 1, surroundingSquare.y],
                [surroundingSquare.x + 1, surroundingSquare.y],
                [surroundingSquare.x, surroundingSquare.y + 1],
                [surroundingSquare.x, surroundingSquare.y - 1]
            ]

            for (const [x, y] of surrounders) {
                const outsideGridY = y < 0 || y > grid.length
                const outsideGridX = x < 0 || x > grid[0].length

                if (
                    outsideGridX ||
                    outsideGridY ||
                    grid[y][x] === 0 ||
                    !squares.has(`${x}${y}`)
                ) {
                    continue
                }

                // console.log('addes square to new surrounding')
                newSurrounding.add(squares.get(`${x}${y}`))
            }
        }

        for (const { x, y } of surrounding) {
            squares.delete(`${x}${y}`)
        }

        // console.log('newSurrounding size', newSurrounding.size)

        squareRegion(squares, newSurrounding)
    }

    while (squares.size > 0) {
        squareRegion(squares, new Set([squares.values().next().value]))
        // console.log(squares.size, answer)
        answer++
    }

    return answer
}
