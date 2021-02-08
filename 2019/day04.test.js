const  { readFileSync } = require('fs')
const  { part1, part2, isValidPassword } = require('./day04')

describe('Day 4 - Advent of Code 2019', () => {
  test.each([
    ['111111', false, true],
    ['223450', false, false],
    ['123789', false, false],
    ['112233', true, true],
    ['123444', true, false],
    ['111122', true, true],
  ])('isValidPassword(%p, %s) === %s', (a, b, c) => {
    expect(isValidPassword(a, b)).toBe(c)
  })

  describe('Part 1', () => {
    test('Answer', () => {
      expect(part1(readFileSync('2019/input/day04.txt', 'utf-8'))).toBe(1764)
    })
  })

  describe('Part 2', () => {
    test('Answer', () => {
      expect(part2(readFileSync('2019/input/day04.txt', 'utf-8'))).toBe(1196)
    })
  })
})
