const part1 = require('./part1')

it('should pass the test input from day 6 part 1', () => {
    expect(part1([0, 2, 7, 0].join('\t'))).toBe(5)
})
