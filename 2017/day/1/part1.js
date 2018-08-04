module.exports = input => {
    let result = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i >= input.length - 1 ? 0 : i + 1]) {
            result += Number(input[i])
        }
    }

    return result
}
