module.exports = input => {
    return input
        .split('\n')
        .map(v => Math.floor(v / 3) - 2)
        .reduce((acc, cur) => acc + cur, 0)
}
