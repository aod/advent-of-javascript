const part1 = require('./part1')

it('should pass the test input from day 1 part 1', () => {
    expect(part1('+1\n+1\n+1')).toBe(3)
    expect(part1('+1\n+1\n-2')).toBe(0)
    expect(part1('-1\n-2\n-3')).toBe(-6)
})
