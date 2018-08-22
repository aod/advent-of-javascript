const Process = require('../../lib/Process')
const parse = require('./parse')

module.exports = input => {
    const { score } = new Process(parse, {
        score: 0
    })
        .on('groupClosed', function(score) {
            this.score += score
        })
        .start(input)

    return score
}
