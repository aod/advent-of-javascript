const trampolines = require('./day/5/part1');
const trampolines2 = require('./day/5/part2');

describe('day 5: A Maze of Twisty Trampolines, All Alike', () => {
    const testInput = [0, 3, 0, 1, -3].join('\n');

    describe('part 1', () => {
        test('test input', () => {
            expect(trampolines(testInput)).toBe(5)
        });
    });

    describe('part 2', () => {
        test('test input', () => {
            expect(trampolines2(testInput)).toBe(10)
        });
    });
});
