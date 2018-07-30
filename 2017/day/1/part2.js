module.exports = input => {
    let result = 0;

    const stepSize = input.length / 2;

    for (let i = 0; i < input.length; i++) {
        const nextValue = input[i + stepSize >= input.length
            ? (i + stepSize) - input.length
            : i + stepSize
        ];
        if (input[i] === nextValue) {
            result += Number(input[i]);
        }
    }

    return result;
}
