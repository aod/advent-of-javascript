const { readFileSync } = require('fs')
const { part1, part2 } = require('./day02')

describe('Day 2 - Advent of Code 2019', () => {
    test('Part 1', () => {
        expect(part1(readFileSync('2019/input/day02.txt', 'utf-8'))).toBe(
            5290681
        )
    })

    test('Part 2', () => {
        expect(part2(readFileSync('2019/input/day02.txt', 'utf-8'))).toBe(5741)
    })
})
