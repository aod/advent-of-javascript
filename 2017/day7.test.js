const part1 = require('./day/7/part1');

describe('day 7: Recursive Circus', () => {
    const testInput =
`pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

    test('part 1', () => {
        expect(part1(testInput)).toBe('tknk');
    });
});
