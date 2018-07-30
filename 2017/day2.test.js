const part1 = require('./day/2/part1');
const part2 = require('./day/2/part2');

const prepData = (...values) => values.join('\n');

describe('day 2: Corruption Checksum', () => {
    test('part 1', () => {
        const testData = prepData(
            '5 1 9 5',
            '7 5 3',
            '2 4 6 8'
        );

        expect(part1(testData)).toBe(18);
    });

    test('part 2', () => {
        const testData = prepData(
            '5 9 2 8',
            '9 4 7 3',
            '3 8 6 5'
        );

        expect(part2(testData)).toBe(9);
    });
});
