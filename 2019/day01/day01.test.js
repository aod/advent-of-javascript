const { readFileSync } = require('fs')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 1 - Advent of Code 2019', () => {
    test('Part 1', () => {
        expect(part1('12')).toBe(2)
        expect(part1('14')).toBe(2)
        expect(part1('1969')).toBe(654)
        expect(part1('100756')).toBe(33583)
        expect(part1(readFileSync(__dirname + '/input', 'utf-8'))).toBe(3269199)
    })

    test('Part 2', () => {
        expect(part2('14')).toBe(2)
        expect(part2('1969')).toBe(966)
        expect(part2('100756')).toBe(50346)
        expect(part2(readFileSync(__dirname + '/input', 'utf-8'))).toBe(4900909)
    })
})
