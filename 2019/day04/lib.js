module.exports.isValidPassword = (password, strict = false) => {
    let groups = { [password[0]]: 1 }

    for (let i = 1; i < password.length; i++) {
        const current = password[i]

        if (current < password[i - 1]) {
            return false
        }

        groups[current] = groups[current] + 1 || 1
    }

    if (strict && !Object.values(groups).find(x => x === 2)) {
        return false
    }

    return Object.values(groups).some(x => x >= 2)
}
