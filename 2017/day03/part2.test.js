const part2 = require('./part2')

it('should pass the test input from day 3 part 2', () => {
    expect(part2(5)).toBe(10)
    expect(part2(10)).toBe(11)
    expect(part2(25)).toBe(26)
    expect(part2(747)).toBe(806)
})
