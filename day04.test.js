const passphrase = require('./day04-part1');

// https://adventofcode.com/2017/day/4
describe('day 4: High-Entropy Passphrases', () => {
    describe('part 1', () => {
        test('test input', () => {
            expect(passphrase('aa bb cc dd ee')).toBe(1);
            expect(passphrase('aa bb cc dd aa')).toBe(0);
            expect(passphrase('aa bb cc dd aaa')).toBe(1);
        });
    });
});
