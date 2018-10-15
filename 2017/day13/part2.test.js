const part2 = require('./part2')

const input = `0: 3
1: 2
4: 4
6: 4`

it('should pass the test input from day 13 part 2', () => {
    expect(part2(input)).toBe(10)
})
