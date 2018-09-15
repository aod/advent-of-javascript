const part2 = require('./part2')

test('should pass the test input from day 2 part 2', () => {
    expect(part2(['5 9 2 8', '9 4 7 3', '3 8 6 5'].join('\n'))).toBe(9)
})
