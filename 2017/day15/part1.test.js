const part1 = require('./part1')

const input = `Generator A starts with 65
Generator B starts with 8921`

it('should pass the test input from day 15 part 1', () => {
    expect(part1(input)).toBe(588)
})
