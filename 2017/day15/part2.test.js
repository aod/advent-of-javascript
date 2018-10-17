const part2 = require('./part2')

const input = `Generator A starts with 65
Generator B starts with 8921`

it('should pass the test input from day 15 part 2', () => {
    expect(part2(input)).toBe(309)
})
