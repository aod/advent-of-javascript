const part1 = require('./day/6/part1');

describe('day 6: Memory Reallocation', () => {
    const testInput = [0, 2, 7, 0].join('\t');

    test('part 1', () => {
        expect(part1(testInput)).toBe(5)
    });
});
