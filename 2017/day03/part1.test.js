const part1 = require('./part1')

it('should pass the test input from day 3 part 1', () => {
    expect(part1(1)).toBe(0)
    expect(part1(12)).toBe(3)
    expect(part1(23)).toBe(2)
    expect(part1(1024)).toBe(31)
})
