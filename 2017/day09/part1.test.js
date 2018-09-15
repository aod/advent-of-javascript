const part1 = require('./part1')

it('should pass the test input from day 9 part 1', () => {
    expect(part1('{}')).toBe(1)
    expect(part1('{{{}}}')).toBe(6)
    expect(part1('{{},{}}')).toBe(5)
    expect(part1('{{{},{},{{}}}}')).toBe(16)
    expect(part1('{<a>,<a>,<a>,<a>}')).toBe(1)
    expect(part1('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9)
    expect(part1('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9)
    expect(part1('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3)
})
