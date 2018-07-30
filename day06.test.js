const memoryReallocation = require('./day06-part1');

// https://adventofcode.com/2017/day/6
describe('day 6: Memory Reallocation', () => {
    const testInput = [0, 2, 7, 0].join('\t');
    describe('part 1', () => {
        test('test input', () => {
            expect(memoryReallocation(testInput)).toBe(5)
        });
    });
});
