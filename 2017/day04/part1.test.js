const part1 = require('./part1')

it('should pass the test input from day 4 part 1', () => {
    expect(part1('aa bb cc dd ee')).toBe(1)
    expect(part1('aa bb cc dd aa')).toBe(0)
    expect(part1('aa bb cc dd aaa')).toBe(1)
})
