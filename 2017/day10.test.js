const day10 = require('./day10')

describe('day 10: Knot Hash', () => {
    const testInput = '3,4,1,5'

    test('part 1', () => {
        expect(day10(testInput, 4)[0]).toBe(12)
    })

    test('part 2', () => {
        expect(day10('')[1]).toBe('a2582a3a0e66e6e86e3812dcb672a272')
        expect(day10('AoC 2017')[1]).toBe('33efeb34ea91902bb2f59c9920caa6cd')
        expect(day10('1,2,3')[1]).toBe('3efbe78a8d82f29979031a4aa0b16a9d')
        expect(day10('1,2,4')[1]).toBe('63960835bcdc130f0b66d7ff4f6a5a8e')
    })
})
