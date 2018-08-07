module.exports = input => {
    input = input.split(/\r?\n/).map(Number)

    let index = 0
    let steps = 0

    while (index < input.length) {
        let tmp = index
        index += input[index]
        input[tmp] += 1
        steps++
    }

    return steps
}
