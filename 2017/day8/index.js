const Process = require('../../lib/Process')

const parser = require('./lib/parser')

const parse = function(input) {
    const parsed = parser.parse(input)
    const registers = {}

    for (const { register } of parsed) {
        if (!registers[register]) {
            registers[register] = 0
        }
    }

    for (const {
        register,
        instruction,
        value,
        eval: [eRegister, eOperator, eValue]
    } of parsed) {
        let passed = false

        switch (eOperator) {
            case '==':
                passed = registers[eRegister] == eValue
                break
            case '!=':
                passed = registers[eRegister] != eValue
                break
            case '>':
                passed = registers[eRegister] > eValue
                break
            case '>=':
                passed = registers[eRegister] >= eValue
                break
            case '<':
                passed = registers[eRegister] < eValue
                break
            case '<=':
                passed = registers[eRegister] <= eValue
                break
        }

        if (!passed) {
            continue
        }

        switch (instruction) {
            case 'inc':
                registers[register] += value
                break
            case 'dec':
                registers[register] -= value
                break
        }

        this.fire('afterInstruction', registers[register])
    }

    this.fire('done', registers)
}

module.exports = input => {
    const output = new Process(parse)
        .on('done', function(registers) {
            this.highestValue = Math.max(...Object.values(registers))
        })
        .on('afterInstruction', function(value) {
            this.highestDelta = Math.max(value, this.highestDelta || 0)
        })
        .start(input)

    return [output.highestValue, output.highestDelta]
}
