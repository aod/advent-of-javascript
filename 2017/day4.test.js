const part1 = require('./day4/part1')
const part2 = require('./day4/part2')

describe('day 4: High-Entropy Passphrases', () => {
    test('part 1', () => {
        expect(part1('aa bb cc dd ee')).toBe(1)
        expect(part1('aa bb cc dd aa')).toBe(0)
        expect(part1('aa bb cc dd aaa')).toBe(1)
    })

    test('part 2', () => {
        expect(part2('abcde fghij')).toBe(1)
        expect(part2('abcde xyz ecdab')).toBe(0)
        expect(part2('a ab abc abd abf abj')).toBe(1)
        expect(part2('iiii oiii ooii oooi oooo')).toBe(1)
        expect(part2('oiii ioii iioi iiio')).toBe(0)
    })
})
