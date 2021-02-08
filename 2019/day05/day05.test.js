const { readFileSync } = require('fs')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 5 - Advent of Code 2019', () => {
    describe('Part 1', () => {
        test('Answer', () => {
            expect(part1(readFileSync(__dirname + '/input', 'utf-8'))).toBe(
                7286649
            )
        })
    })

    describe('Part 2', () => {
        test('Answer', () => {
            expect(part2(readFileSync(__dirname + '/input', 'utf-8'))).toBe(
                15724522
            )
        })
    })
})
