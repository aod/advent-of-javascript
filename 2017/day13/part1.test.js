const part1 = require('./part1')

const input = `0: 3
1: 2
4: 4
6: 4`

it('should pass the test input from day 13 part 1', () => {
    expect(part1(input)).toBe(24)
})
