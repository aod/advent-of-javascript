const { readFileSync } = require('fs')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 6 - Advent of Code 2019', () => {
    describe('Part 1', () => {
        test('example input', () => {
            expect(
                part1(
                    [
                        'COM)B',
                        'B)C',
                        'C)D',
                        'D)E',
                        'E)F',
                        'B)G',
                        'G)H',
                        'D)I',
                        'E)J',
                        'J)K',
                        'K)L',
                    ].join('\n')
                )
            ).toBe(42)
        })

        test('answer', () => {
            expect(part1(readFileSync(__dirname + '/input', 'utf-8'))).toBe(
                140608
            )
        })
    })

    describe('Part 2', () => {
        test('example input', () => {
            expect(
                part2(
                    [
                        'COM)B',
                        'B)C',
                        'C)D',
                        'D)E',
                        'E)F',
                        'B)G',
                        'G)H',
                        'D)I',
                        'E)J',
                        'J)K',
                        'K)L',
                        'K)YOU',
                        'I)SAN',
                    ].join('\n')
                )
            ).toBe(4)
        })

        test('answer', () => {
            expect(part2(readFileSync(__dirname + '/input', 'utf-8'))).toBe(
                337
            )
        })
    })
})
