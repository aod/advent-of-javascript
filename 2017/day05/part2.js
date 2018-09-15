module.exports = input => {
    input = input.split(/\r?\n/).map(Number)

    let index = 0
    let steps = 0

    while (index < input.length) {
        let tmp = index
        index += input[index]
        if (input[tmp] >= 3) {
            input[tmp] -= 1
        } else {
            input[tmp] += 1
        }
        steps++
    }

    return steps
}
