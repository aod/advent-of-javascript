const { readFileSync } = require('fs')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 2 - Advent of Code 2019', () => {
    test('Part 1', () => {
        expect(part1(readFileSync(__dirname + '/input', 'utf-8'))).toBe(5290681)
    })

    test('Part 2', () => {
        expect(part2(readFileSync(__dirname + '/input', 'utf-8'))).toBe(5741)
    })
})
