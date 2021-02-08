const  { readFileSync } = require('fs')
const  { part1, part2, perm } = require('./day07')

describe('Day 7 - Advent of Code 2019', () => {
  describe('Permutations', () => {
    it('Should have a length of 120 when n=5', () => {
      expect(perm(0, 4).length).toBe(120)
    })

    it('Should contain only 5..9 when l=5 and h=9', () => {
      expect(perm(5, 9)[0].sort()).toStrictEqual([5, 6, 7, 8, 9])
    })
  })

  describe('Part 1', () => {
    describe('Provided test cases', () => {
      it.each([
        [43210, '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0'],
        [
          54321,
          '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0',
        ],
        [
          65210,
          '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0',
        ],
      ])('Should return %d when given input %s', (want, have) => {
        expect(part1(have)).toBe(want)
      })
    })

    describe('Puzzle answer', () => {
      it('Should return the correct answer when given the actual input', () => {
        expect(part1(readFileSync('2019/input/day07.txt', 'utf-8'))).toBe(
          277328
        )
      })
    })
  })

  describe('Part 2', () => {
    describe('Provided test cases', () => {
      it.each([
        [
          139629729,
          '3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5',
        ],
        [
          18216,
          '3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10',
        ],
      ])('Should return %d when given input %s', (want, have) => {
        expect(part2(have)).toBe(want)
      })
    })

    describe('Puzzle answer', () => {
      it('Should return the correct answer when given the actual input', () => {
        expect(part2(readFileSync('2019/input/day07.txt', 'utf-8'))).toBe(
          11304734
        )
      })
    })
  })
})
