const part2 = require('./part2')

it('should pass the test input from day 4 part 2', () => {
    expect(part2('abcde fghij')).toBe(1)
    expect(part2('abcde xyz ecdab')).toBe(0)
    expect(part2('a ab abc abd abf abj')).toBe(1)
    expect(part2('iiii oiii ooii oooi oooo')).toBe(1)
    expect(part2('oiii ioii iioi iiio')).toBe(0)
})
