module.exports = s => {
    s = Number(s);

    if (s === 1) {
        return 0;
    }

    let a = 1;
    do {
        a += 2;
    } while (a ** 2 < s)
    let b = Math.floor(a / 2);

    let num = a ** 2;
    let pos = [b, -b];

    const diff = num - s;

    if (diff < a) {
        pos[0] -= diff;
    } else if (diff < a * 2 - 2) {
        pos[0] = -b;
        pos[1] += (a + 1) - diff;
    } else if (diff < a * 3 - 2) {
        pos[0] += (a * 2 - 2) - diff;
        pos[1] = b;
    } else {
        pos[0] = b;
        pos[1] -= (a * 3 - 3) - diff;
    }

    return pos.reduce((acc, val) => acc + Math.abs(val), 0);
}
