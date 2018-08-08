const parse = require('./lib/parse')

module.exports = input => {
    let highest = 0

    parse(input, (event, { value }) => {
        if (event === 'afterInstruction') {
            if (value > highest) {
                highest = value
            }
        }
    })

    return highest
}
