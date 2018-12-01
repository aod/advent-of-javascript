const part2 = require('./part2')

it('should pass the test input from day 1 part 2', () => {
    expect(part2('+1\n-1')).toBe(0)
    expect(part2('+3\n+3\n+4\n-2\n-4')).toBe(10)
    expect(part2('-6\n+3\n+8\n+5\n-6')).toBe(5)
    expect(part2('+7\n+7\n-2\n-7\n-4')).toBe(14)
})
