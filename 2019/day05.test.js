const  { readFileSync } = require('fs')
const  { part1, part2 } = require('./day05')

describe('Day 5 - Advent of Code 2019', () => {
  describe('Part 1', () => {
    test('Answer', () => {
      expect(part1(readFileSync('2019/input/day05.txt', 'utf-8'))).toBe(7286649)
    })
  })

  describe('Part 2', () => {
    test('Answer', () => {
      expect(part2(readFileSync('2019/input/day05.txt', 'utf-8'))).toBe(
        15724522
      )
    })
  })
})
