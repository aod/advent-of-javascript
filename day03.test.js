const spiralMemory = require('./day03-part1');
const spiralMemory2 = require('./day03-part2');

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

    describe('part 2', () => {
        test('test input', () => {
            expect(spiralMemory2(5)).toBe(10);
            expect(spiralMemory2(10)).toBe(11);
            expect(spiralMemory2(25)).toBe(26);
            expect(spiralMemory2(747)).toBe(806);
        });
    });
});
