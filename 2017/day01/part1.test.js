const part1 = require('./part1')

it('should pass the test input from day 1 part 1', () => {
    expect(part1('1122')).toBe(3)
    expect(part1('1111')).toBe(4)
    expect(part1('1234')).toBe(0)
    expect(part1('91212129')).toBe(9)
})
