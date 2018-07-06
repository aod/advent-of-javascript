module.exports = s => {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i >= s.length - 1 ? 0 : i + 1]) {
            result += Number(s[i]);
        }
    }

    return result;
}
