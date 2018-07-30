const memoryReallocation = require('./day/6/part1');

describe('day 6: Memory Reallocation', () => {
    const testInput = [0, 2, 7, 0].join('\t');

    describe('part 1', () => {
        test('test input', () => {
            expect(memoryReallocation(testInput)).toBe(5)
        });
    });
});
