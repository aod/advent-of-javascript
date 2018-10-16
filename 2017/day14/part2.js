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
     * @param {Array<Coord>} surrounding
     */
    function squareRegion(squares, surrounding) {
        if (!surrounding.length) {
            return
        }

        /** @type {Array<Coord>} */
        const newSurrounding = []

        for (let i = 0; i < surrounding.length; i++) {
            const surroundingSquare = surrounding[i]

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

                newSurrounding.push(squares.get(`${x}${y}`))
            }
        }

        console.log(newSurrounding)

        for (let i = 0; i < surrounding.length; i++) {
            const { x, y } = surrounding[i]
            squares.delete(`${x}${y}`)
        }

        squareRegion(squares, newSurrounding)
    }

    while (squares.size > 0) {
        const square = squares.values().next().value
        squareRegion(squares, [square])
        console.log(squares.size, answer)
        answer++
    }

    return answer
}
