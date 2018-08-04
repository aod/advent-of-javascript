const part1 = require('./day/3/part1')
const part2 = require('./day/3/part2')

describe('day 3: Spiral Memory', () => {
    test('part 1', () => {
        expect(part1(1)).toBe(0)
        expect(part1(12)).toBe(3)
        expect(part1(23)).toBe(2)
        expect(part1(1024)).toBe(31)
    })

    test('part 2', () => {
        expect(part2(5)).toBe(10)
        expect(part2(10)).toBe(11)
        expect(part2(25)).toBe(26)
        expect(part2(747)).toBe(806)
    })
})
