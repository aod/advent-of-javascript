module.exports = s => {
    s = s.split(/\r?\n/).map(Number);

    let index = 0;
    let steps = 0;

    while (index < s.length) {
        let tmp = index;
        index += s[index];
        if (s[tmp] >= 3) {
            s[tmp] -= 1;
        } else {
            s[tmp] += 1;
        }
        steps++;
    }

    return steps;
}
