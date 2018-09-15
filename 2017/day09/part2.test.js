const part2 = require('./part2')

it('should pass the test input from day 9 part 2', () => {
    expect(part2('<>')).toBe(0)
    expect(part2('<random characters>')).toBe(17)
    expect(part2('<<<<>')).toBe(3)
    expect(part2('<{!>}>')).toBe(2)
    expect(part2('<!!>')).toBe(0)
    expect(part2('<!!!>>')).toBe(0)
    expect(part2('<{o"i!a,<{i<a>')).toBe(10)
})
