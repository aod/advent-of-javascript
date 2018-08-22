const part1 = require('./day9/part1')
const part2 = require('./day9/part2')

describe('day 9: Stream Processing', () => {
    test('part 1', () => {
        expect(part1('{}')).toBe(1)
        expect(part1('{{{}}}')).toBe(6)
        expect(part1('{{},{}}')).toBe(5)
        expect(part1('{{{},{},{{}}}}')).toBe(16)
        expect(part1('{<a>,<a>,<a>,<a>}')).toBe(1)
        expect(part1('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9)
        expect(part1('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9)
        expect(part1('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3)
    })

    test('part 2', () => {
        expect(part2('<>')).toBe(0)
        expect(part2('<random characters>')).toBe(17)
        expect(part2('<<<<>')).toBe(3)
        expect(part2('<{!>}>')).toBe(2)
        expect(part2('<!!>')).toBe(0)
        expect(part2('<!!!>>')).toBe(0)
        expect(part2('<{o"i!a,<{i<a>')).toBe(10)
    })
})
