const { readFileSync } = require('fs')
const { part1, part2 } = require('./day08')

describe('Day 8 - Advent of Code 2019', () => {
    describe('Part 1', () => {
        describe('Provided test cases', () => {
            it.each([[1, [3, 2], '123456789012']])(
                'Should return %d when given input %s',
                (want, [w, h], have) => {
                    expect(part1(have, w, h)).toBe(want)
                }
            )
        })

        describe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part1(readFileSync('2019/input/day08.txt', 'utf-8'))
                ).toBe(1905)
            })
        })
    })

    describe('Part 2', () => {
        describe('Provided test cases', () => {
            it.each([[' █\n█ ', [2, 2], '0222112222120000']])(
                'Should return \n%s\n when given dimensions %p and input %s',
                (want, [w, h], have) => {
                    expect(part2(have, w, h)).toBe(want)
                }
            )
        })

        describe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part2(readFileSync('2019/input/day08.txt', 'utf-8'))
                ).toBe(
                    [
                        ' ██   ██  █  █ ███  ████ ',
                        '█  █ █  █ █ █  █  █    █ ',
                        '█  █ █    ██   █  █   █  ',
                        '████ █    █ █  ███   █   ',
                        '█  █ █  █ █ █  █    █    ',
                        '█  █  ██  █  █ █    ████ ',
                    ].join('\n')
                )
            })
        })
    })
})
