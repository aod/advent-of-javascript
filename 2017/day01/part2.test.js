const part2 = require('./part2')

it('should pass the test input from day 1 part 2', () => {
    expect(part2('1212')).toBe(6)
    expect(part2('1221')).toBe(0)
    expect(part2('123425')).toBe(4)
    expect(part2('123123')).toBe(12)
    expect(part2('12131415')).toBe(4)
})
