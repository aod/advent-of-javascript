const { readFileSync } = require('fs')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 09 - Advent of Code 2019', () => {
    describe('Part 1', () => {
        describe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part1(readFileSync(__dirname + '/input', 'utf-8'))
                ).toBe(2789104029)
            })
        })
    })

    describe('Part 2', () => {
        describe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part2(readFileSync(__dirname + '/input', 'utf-8'))
                ).toBe(32869)
            })
        })
    })
})
