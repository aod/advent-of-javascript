module.exports = input => {
    let result = 0

    const parsed = input
        .split(/\r?\n/)
        .map(row => new Int32Array(row.split(/[ \t]+/).map(Number)))

    for (const row of parsed) {
        for (let i = 0; i < row.length; i++) {
            const found = row.filter(
                (value, index) => index !== i && row[i] % value === 0
            )

            if (!found.length) {
                continue
            }

            result += row[i] / found[0]
            break
        }
    }

    return Number(result)
}
