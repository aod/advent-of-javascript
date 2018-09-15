const part2 = require('./part2')

it('should pass the test input from day 6 part 2', () => {
    expect(part2([0, 2, 7, 0].join('\t'))).toBe(4)
})
