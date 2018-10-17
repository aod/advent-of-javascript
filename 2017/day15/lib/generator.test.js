const { createGenerator } = require('./generator')
const { FACTOR_A, FACTOR_B, DIV_VALUE } = require('./constants')

it('should generate the correct values', () => {
    const generatorA = createGenerator(FACTOR_A, DIV_VALUE, 65)

    expect(generatorA.next().value).toBe(1092455)
    expect(generatorA.next().value).toBe(1181022009)
    expect(generatorA.next().value).toBe(245556042)
    expect(generatorA.next().value).toBe(1744312007)
    expect(generatorA.next().value).toBe(1352636452)

    const generatorB = createGenerator(FACTOR_B, DIV_VALUE, 8921)

    expect(generatorB.next().value).toBe(430625591)
    expect(generatorB.next().value).toBe(1233683848)
    expect(generatorB.next().value).toBe(1431495498)
    expect(generatorB.next().value).toBe(137874439)
    expect(generatorB.next().value).toBe(285222916)
})
