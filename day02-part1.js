module.exports = s => {
    let result = 0;

    const parsed = s.split(/\r?\n/)
        .map(row => row.split(/[ \t]+/)
            .map(Number)
            .sort((a, b) => a - b)
        );

    for (const row of parsed) {
        result += row[row.length - 1] - row[0];
    }

    return Number(result);
}
