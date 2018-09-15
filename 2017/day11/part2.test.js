const part2 = require('./part2')

it('should pass the test input from day 11 part 2', () => {
    expect(part2('n,n,s')).toBe(2)
    expect(part2('n,n,ne,se,se,sw,sw')).toBe(3)
})
