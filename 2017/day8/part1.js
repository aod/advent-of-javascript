const { parse } = require('./lib')

module.exports = input => {
    const { registers } = parse(input)
    return Object.keys(registers)
        .map(register => registers[register])
        .sort()
        .reverse()[0]
}
