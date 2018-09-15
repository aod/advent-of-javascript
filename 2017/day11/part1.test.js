const part1 = require('./part1')

it('should pass the test input from day 11 part 1', () => {
    expect(part1('ne,ne,ne')).toBe(3)
    expect(part1('ne,ne,sw,sw')).toBe(0)
    expect(part1('ne,ne,s,s')).toBe(2)
    expect(part1('se,sw,se,sw,sw')).toBe(3)
})
