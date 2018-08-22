const parser = require('./lib/parser')
const Process = require('../../lib/Process')

module.exports = function(input) {
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
