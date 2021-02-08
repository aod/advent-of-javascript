const { isValidPassword } = require('./lib')

module.exports = input => {
    const [min, max] = input.split('-')
    let count = 0

    for (let i = min; i <= max; i++) {
        if (isValidPassword(i.toString())) {
            count++
        }
    }

    return count
}
