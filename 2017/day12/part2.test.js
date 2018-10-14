const part2 = require('./part2')

const input = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

it('should pass the test input from day 12 part 2', () => {
    expect(part2(input)).toBe(2)
})
