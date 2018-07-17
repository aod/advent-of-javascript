const spiralMemory = require('./day03-part1');

// http://adventofcode.com/2017/day/3
describe('day 3: Spiral Memory', () => {
    describe('part 1', () => {
        test('test input', () => {
            expect(spiralMemory(1)).toBe(0);
            expect(spiralMemory(12)).toBe(3);
            expect(spiralMemory(23)).toBe(2);
            expect(spiralMemory(1024)).toBe(31);
        });
    });
});
