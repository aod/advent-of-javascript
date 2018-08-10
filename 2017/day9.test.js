const day9 = require('./day9')

describe('day 9: Stream Processing', () => {
    test('part 1', () => {
        expect(day9('{}')[0]).toBe(1)
        expect(day9('{{{}}}')[0]).toBe(6)
        expect(day9('{{},{}}')[0]).toBe(5)
        expect(day9('{{{},{},{{}}}}')[0]).toBe(16)
        expect(day9('{<a>,<a>,<a>,<a>}')[0]).toBe(1)
        expect(day9('{{<ab>},{<ab>},{<ab>},{<ab>}}')[0]).toBe(9)
        expect(day9('{{<!!>},{<!!>},{<!!>},{<!!>}}')[0]).toBe(9)
        expect(day9('{{<a!>},{<a!>},{<a!>},{<ab>}}')[0]).toBe(3)
    })

    test('part 2', () => {
        expect(day9('<>')[1]).toBe(0)
        expect(day9('<random characters>')[1]).toBe(17)
        expect(day9('<<<<>')[1]).toBe(3)
        expect(day9('<{!>}>')[1]).toBe(2)
        expect(day9('<!!>')[1]).toBe(0)
        expect(day9('<!!!>>')[1]).toBe(0)
        expect(day9('<{o"i!a,<{i<a>')[1]).toBe(10)
    })
})
