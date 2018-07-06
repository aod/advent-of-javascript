module.exports = s => {
    let result = 0;

    const stepSize = s.length / 2;

    for (let i = 0; i < s.length; i++) {
        const nextValue = s[i + stepSize >= s.length
            ? (i + stepSize) - s.length
            : i + stepSize
        ];
        if (s[i] === nextValue) {
            result += Number(s[i]);
        }
    }

    return result;
}
