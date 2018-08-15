const day10 = require('./day10')

describe('day 10: Knot Hash', () => {
    const testInput = '3,4,1,5'

    test('part 1', () => {
        expect(day10(testInput, 4)[0]).toBe(12)
    })

    test('part 2', () => {})
})
