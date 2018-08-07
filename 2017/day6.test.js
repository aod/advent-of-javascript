const part1 = require('./day6/part1')
const part2 = require('./day6/part2')

describe('day 6: Memory Reallocation', () => {
    const testInput = [0, 2, 7, 0].join('\t')

    test('part 1', () => {
        expect(part1(testInput)).toBe(5)
    })

    test('part 2', () => {
        expect(part2(testInput)).toBe(4)
    })
})
