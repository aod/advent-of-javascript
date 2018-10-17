const { parse } = require('./input')

it('should correctly parse the input', () => {
    const testInput = [
        'Generator A starts with 400',
        'Generator B starts with 900'
    ].join('\n')

    expect(parse(testInput)).toEqual({ a: 400, b: 900 })
})
