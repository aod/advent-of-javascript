const part2 = require('./part2')

it('should pass the test input from day 8 part 2', () => {
    const input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

    expect(part2(input)).toBe(10)
})
