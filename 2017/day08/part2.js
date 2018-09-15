const Process = require('../../lib/Process')
const parse = require('./parse')

module.exports = input => {
    const output = new Process(parse, { highestDelta: 0 })
        .on('afterInstruction', function(value) {
            this.highestDelta = Math.max(value, this.highestDelta)
        })
        .start(input)

    return output.highestDelta
}
