const { readFileSync } = require('fs')
const { part1, part2 } = require('./day09')

describe('Day 09 - Advent of Code 2019', () => {
    describe('Part 1', () => {
        describe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part1(readFileSync('2019/input/day09.txt', 'utf-8'))
                ).toBe(2789104029)
            })
        })
    })

    describe('Part 2', () => {
        describe('Puzzle answer', () => {
            it('Should return the correct answer when given the actual input', () => {
                expect(
                    part2(readFileSync('2019/input/day09.txt', 'utf-8'))
                ).toBe(32869)
            })
        })
    })
})
