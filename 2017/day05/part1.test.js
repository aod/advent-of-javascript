const part1 = require('./part1')

it('should pass the test input from day 5 part 1', () => {
    expect(part1([0, 3, 0, 1, -3].join('\n'))).toBe(5)
})
