const puzzle = require('./puzzle')

module.exports = input => {
    const output = puzzle()
        .on('afterInstruction', function(value) {
            this.highestDelta = Math.max(value, this.highestDelta || 0)
        })
        .start(input)

    return output.highestDelta
}
