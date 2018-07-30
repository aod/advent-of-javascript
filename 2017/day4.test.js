const passphrase = require('./day/4/part1');
const passphrase2 = require('./day/4/part2');

describe('day 4: High-Entropy Passphrases', () => {
    describe('part 1', () => {
        test('test input', () => {
            expect(passphrase('aa bb cc dd ee')).toBe(1);
            expect(passphrase('aa bb cc dd aa')).toBe(0);
            expect(passphrase('aa bb cc dd aaa')).toBe(1);
        });
    });

    describe('part 2', () => {
        test('test input', () => {
            expect(passphrase2('abcde fghij')).toBe(1);
            expect(passphrase2('abcde xyz ecdab')).toBe(0);
            expect(passphrase2('a ab abc abd abf abj')).toBe(1);
            expect(passphrase2('iiii oiii ooii oooi oooo')).toBe(1);
            expect(passphrase2('oiii ioii iioi iiio')).toBe(0);
        });
    });
});
