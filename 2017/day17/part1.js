/**
 * @param {string} input
 */
module.exports = input => {
    const stepCount = parseInt(input, 10)
    let position = 0
    let buffer = [0]

    for (let i = 1; i < 2018; i++) {
        const slicePosition = (stepCount + position) % buffer.length
        const bufferEnd = buffer.splice(slicePosition + 1)
        position = buffer.length
        buffer.push(i)
        buffer = buffer.concat(bufferEnd)
    }

    return buffer[(buffer.indexOf(2017) + 1) % buffer.length]
}
