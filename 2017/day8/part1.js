const puzzle = require('./puzzle')

module.exports = input => {
    const output = puzzle()
        .on('done', function(registers) {
            this.highestValue = Math.max(...Object.values(registers))
        })
        .start(input)

    return output.highestValue
}
