const { readFileSync } = require('fs')
const { makeWireIterator } = require('./lib')
const part1 = require('./part1')
const part2 = require('./part2')

describe('Day 3 - Advent of Code 2019', () => {
    test('makeWireIterator', () => {
        expect([...makeWireIterator('U2,R2,D2,L2')]).toHaveLength(8)
    })

    describe('Part 1', () => {
        test.each([
            ['R8,U5,L5,D3\nU7,R6,D4,L4', 6],
            [
                'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83',
                159,
            ],
            [
                'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
                135,
            ],
        ])('part1(%j) === %d', (a, b) => {
            expect(part1(a)).toBe(b)
        })

        test('Answer', () => {
            expect(part1(readFileSync(__dirname + '/input', 'utf-8'))).toBe(
                1337
            )
        })
    })

    describe('Part 2', () => {
        test.each([
            ['R8,U5,L5,D3\nU7,R6,D4,L4', 30],
            [
                'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83',
                610,
            ],
            [
                'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
                410,
            ],
        ])('part2(%j) === %d', (a, b) => {
            expect(part2(a)).toBe(b)
        })

        test('Answer', () => {
            expect(part2(readFileSync(__dirname + '/input', 'utf-8'))).toBe(
                65356
            )
        })
    })
})
