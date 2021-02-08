const part2 = require('./part2')

it('should pass the test input from day 2 part 2', () => {
    const testInput = [
        'abcde',
        'fghij',
        'klmno',
        'pqrst',
        'fguij',
        'axcye',
        'wvxyz',
    ].join('\n')

    expect(part2(testInput)).toBe('fgij')
})
