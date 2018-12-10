const part1 = require('./part1')

it('should pass the test input from day 3 part 1', () => {
    const testInput = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'].join(
        '\n'
    )

    expect(part1(testInput)).toBe(4)
})
