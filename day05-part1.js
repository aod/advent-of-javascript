module.exports = s => {
    s = s.split(/\r?\n/).map(Number);

    let index = 0;
    let steps = 0;

    while (index < s.length) {
        let tmp = index;
        index += s[index];
        s[tmp] += 1;
        steps++;
    }

    return steps;
}
