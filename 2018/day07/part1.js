const Instruction = require('./lib/Instruction')

module.exports = input => {
    const instruction = new Instruction(input)

    while (!instruction.complete) {
        instruction.processNextStep()
    }

    return instruction.order
}
