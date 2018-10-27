const part2 = require('./part2')
const fs = require('fs')

it('should pass the test input from day 16 part 2', () => {
    const input = 's1,x3/4,pe/b'
    const programs = 5 // abcde
    expect(part2(input, programs)).toBe('abcde')

    expect(
        part2(fs.readFileSync(__dirname + '/input', { encoding: 'UTF-8' }))
    ).toBe('ejkflpgnamhdcboi')
})
