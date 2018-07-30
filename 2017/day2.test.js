const checksum = require('./day/2/part1');
const checksum2 = require('./day/2/part2');

const prepData = (...values) => values.join('\n');

describe('day 2: Corruption Checksum', () => {
    describe('part 1', () => {
        test('test input', () => {
            const testData = prepData(
                '5 1 9 5',
                '7 5 3',
                '2 4 6 8'
            );

            expect(checksum(testData)).toBe(18);
        });
    });

    describe('part 2', () => {
        test('test input', () => {
            const testData = prepData(
                '5 9 2 8',
                '9 4 7 3',
                '3 8 6 5'
            );

            expect(checksum2(testData)).toBe(9);
        });
    });
});
