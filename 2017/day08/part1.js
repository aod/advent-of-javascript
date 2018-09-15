const Process = require('../../lib/Process')
const parse = require('./parse')

module.exports = input => {
    const output = new Process(parse)
        .on('done', function(registers) {
            this.highestValue = Math.max(...Object.values(registers))
        })
        .start(input)

    return output.highestValue
}
