const { readFileSync } = require('fs')
const { part1, part2 } = require('./day00')

describe('Day 00 - Advent of Code 2019', () => {
    describe('Part 1', () => {
        xdescribe('Provided test cases', () => {
            it.each([])(
                'Should return %p when given input %p',
                (want, have) => {
                    expect(part1(have)).toBe(want)
                }
            )
        })

        xdescribe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part1(readFileSync(__dirname + '/input', 'utf-8'))
                ).toBe(undefined)
            })
        })
    })

    describe('Part 2', () => {
        xdescribe('Provided test cases', () => {
            it.each([])(
                'Should return %p when given input %p',
                (want, have) => {
                    expect(part2(have)).toBe(want)
                }
            )
        })

        xdescribe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part2(readFileSync(__dirname + '/input', 'utf-8'))
                ).toBe(undefined)
            })
        })
    })
})
