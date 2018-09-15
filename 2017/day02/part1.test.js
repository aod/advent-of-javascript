const part1 = require('./part1')

it('should pass the test input from day 2 part 1', () => {
    expect(part1(['5 1 9 5', '7 5 3', '2 4 6 8'].join('\n'))).toBe(18)
})
