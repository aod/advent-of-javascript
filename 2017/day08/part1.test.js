const part1 = require('./part1')

it('should pass the test input from day 8 part 1', () => {
    const input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

    expect(part1(input)).toBe(1)
})
