const part1 = require('./part1')

it('should pass the test input from day 2 part 1', () => {
    const testInput = [
        'abcdef',
        'bababc',
        'abbcde',
        'abcccd',
        'aabcdd',
        'abcdee',
        'ababab',
    ].join('\n')

    expect(part1(testInput)).toBe(12)
})
