const part2 = require('./part2')

it('should pass the test input from day 5 part 2', () => {
    expect(part2([0, 3, 0, 1, -3].join('\n'))).toBe(10)
})
