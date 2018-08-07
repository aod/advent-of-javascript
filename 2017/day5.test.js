const part1 = require('./day5/part1')
const part2 = require('./day5/part2')

describe('day 5: A Maze of Twisty Trampolines, All Alike', () => {
    const testInput = [0, 3, 0, 1, -3].join('\n')

    test('part 1', () => {
        expect(part1(testInput)).toBe(5)
    })

    test('part 2', () => {
        expect(part2(testInput)).toBe(10)
    })
})
