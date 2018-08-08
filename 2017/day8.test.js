const part1 = require('./day8/part1')
const part2 = require('./day8/part2')

describe('day 8: I Heard You Like Registers', () => {
    const testInput = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

    test('part 1', () => {
        expect(part1(testInput)).toBe(1)
    })

    test('part 2', () => {
        expect(part2(testInput)).toBe(10)
    })
})
