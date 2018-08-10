const Process = require('../../lib/Process')

const parse = function(input) {
    let level = 0
    let garbage = false

    for (let i = 0; i < input.length; i++) {
        const char = input[i]

        if (garbage && char !== '!' && char !== '>') {
            this.fire('garbage', char)
        }

        switch (char) {
            case '{':
                if (!garbage) {
                    level++
                }
                break
            case '}':
                if (!garbage) {
                    this.fire('groupClosed', level--)
                }
                break
            case '<':
                garbage = true
                break
            case '>':
                garbage = false
                break
            case '!':
                i += 1
                break
        }
    }
}

module.exports = input => {
    const { score, garbageCount } = new Process(parse, {
        score: 0,
        garbageCount: 0
    })
        .on('groupClosed', function(score) {
            this.score += score
        })
        .on('garbage', function(char) {
            this.garbageCount++
        })
        .start(input)

    return [score, garbageCount]
}
