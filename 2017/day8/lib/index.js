const parser = require('../parser')

const parse = input => {
    const parsed = parser.parse(input)
    const registers = {}
    let highest = 0

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

        if (registers[register] > highest) {
            highest = registers[register]
        }
    }

    return { registers, highest }
}

module.exports = { parse }
