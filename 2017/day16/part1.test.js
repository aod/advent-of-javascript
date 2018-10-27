const part1 = require('./part1')

it('should pass the test input from day 16 part 1', () => {
    const input = 's1,x3/4,pe/b'
    const programs = 5 // abcde

    expect(part1(input, programs)).toBe('baedc')
})
