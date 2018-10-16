/**
 * @typedef {{ x:number, y: number}} Coord
 */

const { hashBits } = require('.')

/**
 * Grid size (128x128 grid)
 *
 * @type {number}
 */
const size = 128

/**
 *
 * @param {Coord} square
 */
function squareIndex({ x, y }) {
    return x + y * size
}

/**
 * @param {Map<string, Coord>} squares
 * @param {Coord[][]} grid
 * @param {Set<Coord>} surrounding
 * @returns {void}
 */
function squareRegion(squares, grid, surrounding) {
    if (!surrounding.size) {
        return
    }

    /** @type {Set<Coord>} */
    const newSurrounding = new Set()

    for (const surroundingSquare of surrounding) {
        squares.delete(squareIndex(surroundingSquare))

        const surrounders = [
            [surroundingSquare.x - 1, surroundingSquare.y],
            [surroundingSquare.x + 1, surroundingSquare.y],
            [surroundingSquare.x, surroundingSquare.y + 1],
            [surroundingSquare.x, surroundingSquare.y - 1]
        ]

        for (const [x, y] of surrounders) {
            const outsideGridY = y < 0 || y >= size
            const outsideGridX = x < 0 || x >= size

            if (
                outsideGridX ||
                outsideGridY ||
                grid[y][x] === 0 ||
                !squares.has(squareIndex({ x, y }))
            ) {
                continue
            }

            newSurrounding.add(squares.get(squareIndex({ x, y })))
        }
    }

    squareRegion(squares, grid, newSurrounding)
}

/**
 * @param {string} input
 */
module.exports = input => {
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

    for (let y = 0; y < size; y++) {
        const bits = hashBits(`${input}-${y}`)
        grid.push(bits)

        for (let x = 0; x < bits.length; x++) {
            if (bits[x] === 1) {
                const square = { x, y }
                squares.set(squareIndex(square), square)
            }
        }
    }

    while (squares.size > 0) {
        const square = squares.values().next().value
        squareRegion(squares, grid, new Set([square]))
        answer++
    }

    return answer
}
