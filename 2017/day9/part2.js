const Process = require('../../lib/Process')
const parse = require('./parse')

module.exports = input => {
    const { garbageCount } = new Process(parse, {
        garbageCount: 0
    })
        .on('garbage', function(char) {
            this.garbageCount++
        })
        .start(input)

    return garbageCount
}
