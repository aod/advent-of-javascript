/**
 * @param {string} input
 */
module.exports = input =>
    input
        .split(/\r?\n/)
        .map(line => parseInt(line))
        .reduce((prev, curr) => prev + curr)
